import React from 'react';
import EssentialBlock from '../../atoms/EssentialBlock/EssentialBlock';
import Badge from '../../atoms/Badge/Badge';
import {gameFullPeriodNameTable, gamePeriodColorsTable} from '../../../utils/game';
import Tooltip from '../../atoms/Tooltip/Tooltip';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/store';
import {Game} from '../../../types/game';
import Typography from '../../atoms/Typography/Typography';
import styles from './GameStatePanel.module.scss';
import {selectCurrentGame} from '../../../store/game/game.selector';

const GameStatePanel = () => {
  const currentGame = useSelector<RootState>(selectCurrentGame) as Game;

  return (
    <EssentialBlock className={styles.gameState}>
      <div className={styles.leftSide}>
        <Tooltip text='Name of the game'>
          <Typography.Paragraph color='light'>{currentGame.name}</Typography.Paragraph>
        </Tooltip>
        <Tooltip text='Current game period'>
          <Badge
            text={gameFullPeriodNameTable[currentGame.currentPeriod]}
            color={gamePeriodColorsTable[currentGame.currentPeriod]}
          />
        </Tooltip>
      </div>
    </EssentialBlock>
  );
};

export default GameStatePanel;