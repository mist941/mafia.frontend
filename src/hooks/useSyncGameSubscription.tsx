import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../store/store';
import {CurrentGame} from '../types/game';
import {useSubscription} from '@apollo/client';
import {SYNC_GAME_SUBSCRIPTION} from '../graphql/game';
import {updateCurrentGameData} from '../utils/game';
import {selectCurrentGame} from '../store/game/game.selector';

const useSyncGameSubscription = () => {
  const currentGame = useSelector<RootState>(selectCurrentGame) as CurrentGame;

  const {data} = useSubscription<{ syncGameSubscription: CurrentGame }>(SYNC_GAME_SUBSCRIPTION, {
    variables: {
      gameId: currentGame?.game?.id,
      playerId: currentGame?.player?.id,
    },
    skip: !currentGame?.game?.id
  });

  useEffect(() => {
    const game = data?.syncGameSubscription;

    if (game) {
      updateCurrentGameData(game);
    }
  }, [data]);
};

export default useSyncGameSubscription;