import React from 'react';
import styles from './GameChatPanel.module.scss';
import EssentialBlock from '../../atoms/EssentialBlock/EssentialBlock';
import MassageInput from '../../molecules/MassageInput/MassageInput';
import {useMutation} from '@apollo/client';
import {CREATE_MESSAGE} from '../../../graphql/chat';
import {useSelector} from 'react-redux';
import {selectCurrentGame} from '../../../store/game/game.selector';
import {selectMessages} from '../../../store/chat/chat.selector';
import ChatMessage from '../../molecules/ChatMessage/ChatMessage';
import {CurrentGame} from '../../../types/game';

const GameChatPanel = () => {
  const [createMessage] = useMutation(CREATE_MESSAGE);
  const currentGame = useSelector(selectCurrentGame) as CurrentGame;
  const messages = useSelector(selectMessages);

  const sendMessage = (text: string): void => {
    createMessage({
      variables: {
        createMessageInput: {
          gameId: currentGame.game.id,
          text
        }
      },
    });
  }

  return (
    <EssentialBlock className={styles.chatPanel}>
      <div className={styles.messages}>
        {messages.map(message => <ChatMessage key={message.id} data={message}/>)}
      </div>
      <div className={styles.messageInput}>
        <MassageInput sendMessage={sendMessage}/>
      </div>
    </EssentialBlock>
  );
};

export default GameChatPanel;