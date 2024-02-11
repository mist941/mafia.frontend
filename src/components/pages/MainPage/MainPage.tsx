import React from 'react';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import styles from './MainPage.module.scss';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/store';
import {CurrentGameI} from '../../../types/game';
import EmptyGameState from '../../emptyStates/EmptyGameState/EmptyGameState';
import PlayerStatePanel from '../../organisms/PlayerStatePanel/PlayerStatePanel';
import GameStatePanel from '../../organisms/GameStatePanel/GameStatePanel';
import GamePlayersPanel from '../../organisms/GamePlayersPanel/GamePlayersPanel';
import GameChatPanel from '../../organisms/GameChatPanel/GameChatPanel';

const MainPage = () => {
  const currentGame = useSelector<RootState>(state => state.game.currentGame) as CurrentGameI;

  return (
    <MainTemplate>
      {currentGame ? (
        <div className={styles.container}>
          <div className={styles.role}>
            <PlayerStatePanel/>
          </div>
          <div className={styles.period}>
            <GameStatePanel/>
          </div>
          <div className={styles.players}>
            <GamePlayersPanel/>
          </div>
          <div className={styles.chat}>
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