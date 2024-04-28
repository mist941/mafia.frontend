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

export interface Player {
  id: Id;
  role: PlayerRoles;
  status: PlayerStatuses;
  ready: boolean;
  userId: Id;
  username: string;
}

export type CurrentPlayer = Omit<Player, 'userId' | 'username'>;