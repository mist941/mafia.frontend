import React from 'react';
import EssentialBlock from '../../atoms/EssentialBlock/EssentialBlock';
import {useSelector} from 'react-redux';
import Badge from '../../atoms/Badge/Badge';
import {
  isAllowedToPushReady,
  isAllowedToSkip,
  playerFullRoleNameTable,
  playerFullStatusNameTable,
  playerRoleColorsTable,
  playerStatusColorsTable
} from '../../../utils/player';
import styles from './PlayerStatePanel.module.scss';
import Tooltip from '../../atoms/Tooltip/Tooltip';
import InviteUserToGame from '../InviteUserToGame/InviteUserToGame';
import {selectCurrentAction, selectCurrentGame} from '../../../store/game/game.selector';
import ReadyToPlayButton from '../../molecules/ReadyToPlayButton/ReadyToPlayButton';
import SkipActionButton from '../../molecules/SkipActionButton/SkipActionButton';
import {CurrentGame} from '../../../types/game';
import ExecuteActionButton from '../../molecules/ExecuteActionButton/ExecuteActionButton';

const PlayerStatePanel = () => {
  const {player: currentPlayer, game, players} = useSelector(selectCurrentGame) as CurrentGame;
  const currentAction = useSelector(selectCurrentAction);

  const maxUsersToInvite: number = game.numberOfPlayers - players.length;

  return (
    <EssentialBlock className={styles.playerState}>
      <div className={styles.playerStatuses}>
        <Tooltip text='Your role'>
          <Badge
            text={playerFullRoleNameTable[currentPlayer.role]}
            color={playerRoleColorsTable[currentPlayer.role]}
          />
        </Tooltip>
        <Tooltip text='Your curent status'>
          <Badge
            text={playerFullStatusNameTable[currentPlayer.status]}
            color={playerStatusColorsTable[currentPlayer.status]}
            type='full-colored'
          />
        </Tooltip>
      </div>
      <div className={styles.buttonsGroup}>
        {maxUsersToInvite > 0 && <InviteUserToGame maxUsersToInvite={maxUsersToInvite}/>}
        {isAllowedToPushReady(game, players, currentPlayer) && <ReadyToPlayButton/>}
        {isAllowedToSkip(game, currentPlayer) && <SkipActionButton/>}
        {currentAction && <ExecuteActionButton/>}
      </div>
    </EssentialBlock>
  );
};

export default PlayerStatePanel;