import {ArbitraryObject, SystemPresetColors} from '../types/common';
import {CurrentPlayer, Player, PlayerRoles, PlayerStatuses} from '../types/player';
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

export const isAllowedToPushReady = (game: Game, players: Player[], player: CurrentPlayer) => {
  if (player.ready) return false;
  if ((game.currentPeriod === GamePeriods.DAY || game.currentPeriod === GamePeriods.NIGHT) && !player.ready) return true;
  return Number(game.numberOfPlayers) === players.length && game.currentPeriod === GamePeriods.START;
}

export const isAllowedToSkip = (game: Game, player: CurrentPlayer): boolean => {
  if (player.status !== PlayerStatuses.ACTIVE) return false;
  if (game.currentPeriod === GamePeriods.START || game.currentPeriod === GamePeriods.START) return false;
  if (game.currentPeriod === GamePeriods.DAY && !player.madeAction) return true;
  if (game.currentPeriod === GamePeriods.NIGHT && game.currentRole !== player.role) return false;
  if (game.currentPeriod === GamePeriods.NIGHT) {
    return allowedToSkipInTheNight.includes(player.role);
  }

  return !player.madeAction;
}

export const isAllowedToKill = (game: Game, player: CurrentPlayer, targetPlayer: Player): boolean => {
  if (targetPlayer.id === player.id) return false;
  return (
    game.currentPeriod === GamePeriods.NIGHT &&
    game.currentRole === player.role &&
    player.role === PlayerRoles.MAFIA &&
    targetPlayer.status === PlayerStatuses.ACTIVE &&
    player.status === PlayerStatuses.ACTIVE
  );
}

export const isAllowedToHill = (game: Game, player: CurrentPlayer, targetPlayer: Player): boolean => {
  return (
    game.currentPeriod === GamePeriods.NIGHT &&
    game.currentRole === player.role &&
    player.role === PlayerRoles.DOCTOR &&
    targetPlayer.status === PlayerStatuses.ACTIVE &&
    player.status === PlayerStatuses.ACTIVE
  );
}

export const isAllowedToVote = (game: Game, player: CurrentPlayer, targetPlayer: Player): boolean => {
  return (
    game.currentPeriod === GamePeriods.DAY &&
    !player.madeAction &&
    targetPlayer.status === PlayerStatuses.ACTIVE &&
    player.status === PlayerStatuses.ACTIVE
  );
}