import {Id} from './common';
import {PlayerI} from './player';

export interface GameI {
  id: Id;
  name: string;
  numberOfPlayers: number;
  ownerId: Id;
  currentPeriod: string;
  currentRole: string;
  private: boolean;
  createdAt: Date;
}

export interface CurrentGameI {
  game: GameI;
  player: Omit<PlayerI, 'userId' | 'username'>;
  players: Omit<PlayerI, 'role'>[];
}

export interface CreateGameRequestI {
  gameName: string;
  numberOfPlayers: number;
  private: boolean;
}

export interface CreateGameResponseI extends CurrentGameI {
}