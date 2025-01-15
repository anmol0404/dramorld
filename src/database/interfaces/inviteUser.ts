export interface Invite {
  username: string;
  userId: string;
}

export interface InviteUserDocument {
  userId: string;
  invites: Invite[];
  lastRequestDate: Date;
  dailyRequests: number;
}
