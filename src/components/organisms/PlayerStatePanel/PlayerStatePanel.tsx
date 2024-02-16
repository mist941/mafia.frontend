import React from 'react';
import EssentialBlock from '../../atoms/EssentialBlock/EssentialBlock';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/store';
import {CurrentPlayer} from '../../../types/player';
import Badge from '../../atoms/Badge/Badge';
import {
  playerFullRoleNameTable,
  playerFullStatusNameTable,
  playerRoleColorsTable,
  playerStatusColorsTable
} from '../../../utils/player';
import styles from './PlayerStatePanel.module.scss';
import Tooltip from '../../atoms/Tooltip/Tooltip';
import Button from '../../atoms/Button/Button';

const PlayerStatePanel = () => {
  const currentPlayer = useSelector<RootState>
  (state => state.game.currentGame?.player) as CurrentPlayer;

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
      <Button styled='secondary'>
        Invite people
      </Button>
    </EssentialBlock>
  );
};

export default PlayerStatePanel;