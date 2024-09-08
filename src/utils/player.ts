import {ArbitraryObject, SystemPresetColors} from '../types/common';
import {CurrentPlayer, PlayerRoles, PlayerStatuses} from '../types/player';
import {Game, GamePeriods} from '../types/game';

export const playerRoleColorsTable: ArbitraryObject<SystemPresetColors> = {
  [PlayerRoles.PEACEFUL_RESIDENT]: 'blue',
  [PlayerRoles.DOCTOR]: 'teal',
  [PlayerRoles.MAFIA]: 'red',
}

export const playerFullRoleNameTable: ArbitraryObject<string> = {
  [PlayerRoles.PEACEFUL_RESIDENT]: 'Peaceful resident',
  [PlayerRoles.DOCTOR]: 'Doctor',
  [PlayerRoles.MAFIA]: 'Mafia',
}

export const playerStatusColorsTable: ArbitraryObject<SystemPresetColors> = {
  [PlayerStatuses.ACTIVE]: 'green',
  [PlayerStatuses.KILLED]: 'red',
}

export const playerFullStatusNameTable: ArbitraryObject<string> = {
  [PlayerStatuses.ACTIVE]: 'Active',
  [PlayerStatuses.KILLED]: 'Killed',
}

export const allowedToSkipInTheNight: PlayerRoles[] = [
  PlayerRoles.MAFIA,
  PlayerRoles.DOCTOR
]

export const isAllowedToSkip = (game: Game, player: CurrentPlayer): boolean => {
  if (game.currentRole !== player.role) return false;
  if (player.madeAction) return false;

  if (game.currentPeriod === GamePeriods.NIGHT) {
    return allowedToSkipInTheNight.includes(player.role);
  }

  return game.currentPeriod === GamePeriods.DAY;
}