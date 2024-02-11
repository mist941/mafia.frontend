import {Id} from './common';

export enum PlayerRoles {
  PEACEFUL_RESIDENT = 'peaceful_resident',
  MAFIA = 'mafia',
  DOCTOR = 'doctor',
}

export enum PlayerStatuses {
  ACTIVE = 'active',
  KILLED = 'killed'
}

export interface PlayerI {
  id: Id;
  role: PlayerRoles;
  status: PlayerStatuses;
  userId: Id;
  username: string;
}

export type CurrentPlayer = Omit<PlayerI, 'userId' | 'username'>;