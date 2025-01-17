import {ArbitraryObject, SystemPresetColors} from '../types/common';
import {GamePeriods, GameResponse} from '../types/game';
import store from '../store/store';
import {clearGame, updateCurrentGame} from '../store/game/game.reducer';

export const updateCurrentGameData = (data: GameResponse) => {
  sessionStorage.setItem('currentGame', JSON.stringify(data));
  store.dispatch(updateCurrentGame(data));
}

export const clearGameData = () => {
  sessionStorage.removeItem('currentGame');
  store.dispatch(clearGame());
}

export const gamePeriodColorsTable: ArbitraryObject<SystemPresetColors> = {
  [GamePeriods.START]: 'gray',
  [GamePeriods.DAY]: 'yellow',
  [GamePeriods.NIGHT]: 'purple',
  [GamePeriods.END]: 'brown',
}

export const gameFullPeriodNameTable: ArbitraryObject<string> = {
  [GamePeriods.START]: 'The beginning',
  [GamePeriods.DAY]: 'Day',
  [GamePeriods.NIGHT]: 'Night',
  [GamePeriods.END]: 'The end',
}