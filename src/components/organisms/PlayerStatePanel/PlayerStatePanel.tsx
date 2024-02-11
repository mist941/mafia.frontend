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

const PlayerStatePanel = () => {
  const currentPlayer = useSelector<RootState>
  (state => state.game.currentGame?.player) as CurrentPlayer;

  return (
    <EssentialBlock>
      <div className={styles.playerStatuses}>
        <Badge
          text={playerFullRoleNameTable[currentPlayer.role]}
          color={playerRoleColorsTable[currentPlayer.role]}
        />
        <Badge
          text={playerFullStatusNameTable[currentPlayer.status]}
          color={playerStatusColorsTable[currentPlayer.status]}
          type='full-colored'
        />
      </div>
    </EssentialBlock>
  );
};

export default PlayerStatePanel;