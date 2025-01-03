import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { BusyService } from '../../../shared/services/busy-service/busy.service';
import { ToastrService } from 'ngx-toastr';
import { TeamService } from '../../../shared/services/team-service/team.service';
import { TeamDto } from '../../../shared/models/dto/team/team-dto';
import { CreateTeamDto } from '../../../shared/models/dto/team/create-team-dto';
import { PreferencesService } from '../../../shared/services/preferences-service/preferences.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileDto } from '../../../shared/models/dto/user-auth/profile-dto';
import { ProfileService } from '../../../shared/services/profile-service/profile.service';
import { CreateInvitationDto } from '../../../shared/models/dto/team/create-invitation-dto';
import { UpdateTeamDto } from '../../../shared/models/dto/team/update-team-dto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team',
  standalone: false,
  templateUrl: './team.component.html',
  styleUrl: './team.component.css',
})
export class TeamComponent implements OnInit {
  teams: TeamDto[] = [];
  selectedTeam: TeamDto;
  prefs;

  teamForm: FormGroup;
  memberForm: FormGroup;
  editMemberForm: FormGroup;

  constructor(
    private teamService: TeamService,
    private route: ActivatedRoute,
    private busyService: BusyService,
    private toastService: ToastrService,
    private preferencesService: PreferencesService,
    private profileService: ProfileService,
    private fb: FormBuilder
  ) {
    this.prefs = this.preferencesService.getPreferences();

    this.route.queryParams.subscribe((params) => {
      let teamId = params['teamId'];
      let inviteId = params['inviteId'];

      if (teamId && inviteId) {
        this.busyService.busy();
        this.teamService
          .acceptInvite(teamId, inviteId, this.prefs.user.id)
          .subscribe(
            (response) => {
              this.toastService.success('Invitation accepted');
              this.busyService.idle();
              //reload page without query params
              window.location.href =
                window.location.origin + window.location.pathname;
            },
            (error) => {
              this.toastService.error('Failed to accept invitation');
              this.busyService.idle();
            }
          );
      }
    });

    this.teamForm = this.fb.group({
      teamPhotoUrl: [''],
      name: ['', Validators.required],
    });

    this.memberForm = this.fb.group({
      emails: ['', Validators.required],
      role: ['', Validators.required],
    });

    this.editMemberForm = this.fb.group({
      role: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.busyService.busy();
    this.teamService.getAllUserTeams(this.prefs.user.id).subscribe((teams) => {
      this.teams = teams;
      this.viewTeam(this.teams[0]);
      this.busyService.idle();
    });
  }

  visibleNewTeam: boolean = false;

  showDialogNewTeam() {
    this.visibleNewTeam = true;
  }

  visibleNewMember: boolean = false;

  showDialogNewMember() {
    this.visibleNewMember = true;
  }

  visibleEditMember: boolean = false;
  selectedUserId: string;
  showDialogEditMember(userId: string) {
    this.visibleEditMember = true;
    this.selectedUserId = userId;

    this.editMemberForm.get('role').setValue(this.getRole(userId));
  }

  removePhoto() {
    this.teamForm.get('teamPhotoUrl').setValue('');
  }

  updatePhoto(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.teamForm.get('teamPhotoUrl').setValue(e.target.result);
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  createTeam() {
    let createTeamDto: CreateTeamDto = {
      teamPhotoUrl: this.teamForm.get('teamPhotoUrl').value,
      name: this.teamForm.get('name').value,
      members: [
        {
          userId: this.prefs.user.id,
          role: 'Owner',
        },
      ],
      invites: [],
    };

    this.busyService.busy();

    this.teamService.createTeam(createTeamDto).subscribe(
      (response) => {
        this.toastService.success('Team created successfully');
        this.visibleNewTeam = false;
        this.teams.push(response);
        this.viewTeam(this.teams[0]);
        this.busyService.idle();
      },
      (error) => {
        this.toastService.error('Failed to create team');
        this.busyService.idle();
      }
    );
  }

  teamMembers: ProfileDto[] = [];

  viewTeam(team: TeamDto) {
    if (!team) {
      return;
    }

    this.selectedTeam = team;
    this.teamMembers = [];

    //get team members
    team.members.forEach((member) => {
      this.profileService.getProfile(member.userId).subscribe((profile) => {
        if (this.teamMembers.find((m) => m.userId === profile.userId)) {
          return;
        }
        this.teamMembers.push(profile);
      });
    });
  }

  getRole(userId: string) {
    if (!this.selectedTeam) {
      return '';
    }

    return this.selectedTeam.members.find((m) => m.userId === userId).role;
  }

  isOwner(): boolean {
    return this.getRole(this.prefs.user.id) === 'Owner';
  }

  addMembers() {
    let emails = this.memberForm.get('emails').value.split(',');
    let role = this.memberForm.get('role').value;

    emails.forEach((email) => {
      let createInvitationDto: CreateInvitationDto = {
        teamId: this.selectedTeam.id,
        email: email,
        role: role,
      };

      this.teamService.createInvitation(createInvitationDto).subscribe(
        (response) => {
          this.toastService.success('Invitation sent to ' + email);
          this.visibleNewMember = false;
        },
        (error) => {
          this.toastService.error('Failed to send invitation to ' + email);
        }
      );
    });
  }

  removeFromTeam(userId) {
    let updateTeamDto: UpdateTeamDto = {
      id: this.selectedTeam.id,
      name: this.selectedTeam.name,
      members: this.selectedTeam.members.filter((m) => m.userId !== userId),
      invites: this.selectedTeam.invites,
    };

    this.busyService.busy();
    this.teamService.updateTeam(updateTeamDto).subscribe(
      (response) => {
        this.toastService.success('Member removed from team');
        this.busyService.idle();
        window.location.reload();
      },
      (error) => {
        this.toastService.error('Failed to remove member from team');
        this.busyService.idle();
      }
    );
  }

  editTeamMember() {
    let updateTeamDto: UpdateTeamDto = {
      id: this.selectedTeam.id,
      name: this.selectedTeam.name,
      members: this.selectedTeam.members,
      invites: this.selectedTeam.invites,
    };

    let role = this.editMemberForm.get('role').value;

    updateTeamDto.members.forEach((m) => {
      if (m.userId === this.selectedUserId) {
        m.role = role;
      }
    });

    this.busyService.busy();
    this.teamService.updateTeam(updateTeamDto).subscribe(
      (response) => {
        this.toastService.success('Member updated');
        this.busyService.idle();
        window.location.reload();
      },
      (error) => {
        this.toastService.error('Failed to update member');
        this.busyService.idle();
      }
    );
  }
}
