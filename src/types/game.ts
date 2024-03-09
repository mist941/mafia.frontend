import {Id} from './common';
import {CurrentPlayer, Player} from './player';

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
  players: Player[];
}

export interface CreateGameRequest {
  gameName: string;
  numberOfPlayers: number;
  private: boolean;
}

export type GameResponse = CurrentGame;

export interface InvitePlayersResponse {
  gameId: Id;
  gameName: string;
}