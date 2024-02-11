import React from 'react';
import EssentialBlock from '../../atoms/EssentialBlock/EssentialBlock';
import Badge from '../../atoms/Badge/Badge';
import {gameFullPeriodNameTable, gamePeriodColorsTable} from '../../../utils/game';
import Tooltip from '../../atoms/Tooltip/Tooltip';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/store';
import {Game} from '../../../types/game';

const GameStatePanel = () => {
  const currentGame = useSelector<RootState>
  (state => state.game.currentGame?.game) as Game;

  return (
    <EssentialBlock>
      <Tooltip text='Current game period'>
        <Badge
          text={gameFullPeriodNameTable[currentGame.currentPeriod]}
          color={gamePeriodColorsTable[currentGame.currentPeriod]}
        />
      </Tooltip>
    </EssentialBlock>
  );
};

export default GameStatePanel;