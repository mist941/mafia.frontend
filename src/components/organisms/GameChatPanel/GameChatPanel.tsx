import React from 'react';
import styles from './GameChatPanel.module.scss';

import EssentialBlock from '../../atoms/EssentialBlock/EssentialBlock';
import MassageInput from '../../molecules/MassageInput/MassageInput';
import {useMutation} from '@apollo/client';
import {CREATE_MESSAGE} from '../../../graphql/chat';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/store';
import {Game} from '../../../types/game';

const GameChatPanel = () => {
  const [createMessage] = useMutation(CREATE_MESSAGE);
  const currentGame = useSelector<RootState>
  (state => state.game.currentGame?.game) as Game;

  const sendMessage = (text: string): void => {
    createMessage({
      variables: {
        createMessageInput: {
          gameId: currentGame.id,
          text
        }
      },
    });
  }

  return (
    <EssentialBlock className={styles.chatPanel}>
      <div className={styles.messages}>
        Chat
      </div>
      <div className={styles.inputArea}>
        <MassageInput sendMessage={sendMessage}/>
      </div>
    </EssentialBlock>
  );
};

export default GameChatPanel;