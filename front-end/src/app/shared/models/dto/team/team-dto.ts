export interface TeamDto {
  id: string;
  name: string;
  teamPhotoUrl: string;
  members: TeamMember[];
  invites: TeamInvite[];
}

export interface TeamInvite {
  id: string;
  email: string;
  accepted: boolean;
  revoked: boolean;
  createdAt: Date;
  updatedAt: Date;
  role: string;
}

export interface TeamMember {
  userId: string;
  role: string;
}
