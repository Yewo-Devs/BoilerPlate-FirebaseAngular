import { TeamMember, TeamInvite } from './team-dto';

export interface UpdateTeamDto {
  id: string;
  name: string;
  members: TeamMember[];
  invites: TeamInvite[];
}
