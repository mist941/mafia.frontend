import React from 'react';
import EssentialBlock from '../../atoms/EssentialBlock/EssentialBlock';
import Typography from '../../atoms/Typography/Typography';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/store';
import {CurrentPlayer} from '../../../types/player';

const PlayerStatePanel = () => {
  const currentPlayer = useSelector<RootState>
  (state => state.game.currentGame?.player) as CurrentPlayer;

  return (
    <EssentialBlock>
      <Typography.Paragraph size='m'>{currentPlayer.role}</Typography.Paragraph>
    </EssentialBlock>
  );
};

export default PlayerStatePanel;