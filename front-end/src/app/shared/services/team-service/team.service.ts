import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { CreateTeamDto } from '../../models/dto/team/create-team-dto';
import { TeamDto } from '../../models/dto/team/team-dto';
import { UpdateTeamDto } from '../../models/dto/team/update-team-dto';
import { CreateInvitationDto } from '../../models/dto/team/create-invitation-dto';
@Injectable({
  providedIn: 'root',
})
export class TeamService {
  constructor(private httpClient: HttpClient) {}

  createInvitation(createInvitationDto: CreateInvitationDto): Observable<void> {
    return this.httpClient.post<void>(
      `${environment.apiUrl}team/invite`,
      createInvitationDto
    );
  }

  getTeamById(id: string): Observable<TeamDto> {
    return this.httpClient.get<TeamDto>(
      `${environment.apiUrl}team/get-team?id=${id}`
    );
  }

  getAllUserTeams(userId: string): Observable<TeamDto[]> {
    return this.httpClient.get<TeamDto[]>(
      `${environment.apiUrl}team/get-user-teams?userId=${userId}`
    );
  }

  createTeam(createTeamDto: CreateTeamDto): Observable<TeamDto> {
    return this.httpClient.post<TeamDto>(
      `${environment.apiUrl}team/create`,
      createTeamDto
    );
  }

  updateTeam(updateTeamDto: UpdateTeamDto): Observable<void> {
    return this.httpClient.put<void>(
      `${environment.apiUrl}team/update`,
      updateTeamDto
    );
  }

  deleteTeam(id: string): Observable<void> {
    return this.httpClient.delete<void>(
      `${environment.apiUrl}team/delete?id=${id}`
    );
  }

  acceptInvite(
    teamId: string,
    inviteId: string,
    userId: string
  ): Observable<void> {
    return this.httpClient.put<void>(
      `${environment.apiUrl}team/accept-invite?teamId=${teamId}&inviteId=${inviteId}&userId=${userId}`,
      {}
    );
  }
}
