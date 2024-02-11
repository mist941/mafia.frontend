import {ArbitraryObject, SystemPresetColors} from '../types/common';
import {PlayerRoles, PlayerStatuses} from '../types/player';

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

