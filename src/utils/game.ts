import {ArbitraryObject, SystemPresetColors} from '../types/common';
import {GamePeriods} from '../types/game';

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