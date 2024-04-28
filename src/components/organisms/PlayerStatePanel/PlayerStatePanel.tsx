import React from 'react';
import EssentialBlock from '../../atoms/EssentialBlock/EssentialBlock';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/store';
import Badge from '../../atoms/Badge/Badge';
import {
  playerFullRoleNameTable,
  playerFullStatusNameTable,
  playerRoleColorsTable,
  playerStatusColorsTable
} from '../../../utils/player';
import styles from './PlayerStatePanel.module.scss';
import Tooltip from '../../atoms/Tooltip/Tooltip';
import InviteUserToGame from '../InviteUserToGame/InviteUserToGame';
import {CurrentGame} from '../../../types/game';
import Button from '../../atoms/Button/Button';

const PlayerStatePanel = () => {
  const {player: currentPlayer, game, players} = useSelector<RootState>
  (state => state.game.currentGame) as CurrentGame;

  const maxUsersToInvite: number = game.numberOfPlayers - players.length;

  const readyToPlay = () => {

  }

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
      {maxUsersToInvite > 0 && <InviteUserToGame maxUsersToInvite={maxUsersToInvite}/>}
      {Number(game.numberOfPlayers) === players.length && (
        <Button styled='secondary' onClick={readyToPlay}>
          Ready to play
        </Button>
      )}
    </EssentialBlock>
  );
};

export default PlayerStatePanel;