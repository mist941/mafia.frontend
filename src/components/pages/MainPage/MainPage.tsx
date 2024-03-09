import React, {useEffect} from 'react';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import styles from './MainPage.module.scss';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/store';
import {CurrentGame} from '../../../types/game';
import EmptyGameState from '../../emptyStates/EmptyGameState/EmptyGameState';
import PlayerStatePanel from '../../organisms/PlayerStatePanel/PlayerStatePanel';
import GameStatePanel from '../../organisms/GameStatePanel/GameStatePanel';
import GamePlayersPanel from '../../organisms/GamePlayersPanel/GamePlayersPanel';
import GameChatPanel from '../../organisms/GameChatPanel/GameChatPanel';
import {useSubscription} from '@apollo/client';
import {SYNC_GAME_SUBSCRIPTION} from '../../../graphql/game';
import {updateCurrentGameData} from '../../../utils/game';

const MainPage = () => {
  const currentGame = useSelector<RootState>(state => state.game.currentGame) as CurrentGame;

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

  return (
    <MainTemplate>
      {currentGame ? (
        <div className={styles.container}>
          <div className={styles.playerStatePanel}>
            <PlayerStatePanel/>
          </div>
          <div className={styles.gameStatePanel}>
            <GameStatePanel/>
          </div>
          <div className={styles.playersPanel}>
            <GamePlayersPanel/>
          </div>
          <div className={styles.chatPanel}>
            <GameChatPanel/>
          </div>
        </div>
      ) : (
        <EmptyGameState/>
      )}
    </MainTemplate>
  );
};

export default MainPage;