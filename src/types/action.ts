import {Id} from './common';

export enum ActionTypes {
  KILL = 'kill',
  HILL = 'hill',
  VOTE = 'vote',
  SKIP = 'skip',
  COMMISSAR_CHECK = 'commissar_check',
}

export interface StoreAction {
  actionType: ActionTypes;
  targetPlayerId: Id;
}