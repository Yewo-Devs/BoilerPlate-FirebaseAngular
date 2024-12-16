import { TeamInvite, TeamMember } from './team-dto';

export interface CreateTeamDto {
  /**
   * The team's photo url
   */
  teamPhotoUrl: string;
  name: string;
  /**
   * The members of the team
   */
  members: TeamMember[];
  /**
   * The invites to the team
   */
  invites: TeamInvite[];
}
