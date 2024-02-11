import {Id} from './common';
import {CurrentPlayer, PlayerI} from './player';

export enum GamePeriods {
  START = 'start',
  DAY = 'day',
  NIGHT = 'night',
  END = 'end'
}

export interface Game {
  id: Id;
  name: string;
  numberOfPlayers: number;
  ownerId: Id;
  currentPeriod: string;
  currentRole: string;
  private: boolean;
  createdAt: Date;
}

export interface CurrentGame {
  game: Game;
  player: CurrentPlayer;
  players: Omit<PlayerI, 'role'>[];
}

export interface CreateGameRequest {
  gameName: string;
  numberOfPlayers: number;
  private: boolean;
}

export type CreateGameResponse = CurrentGame;