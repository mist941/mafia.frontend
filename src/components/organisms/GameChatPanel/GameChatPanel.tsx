import React from 'react';
import styles from './GameChatPanel.module.scss';

import EssentialBlock from '../../atoms/EssentialBlock/EssentialBlock';
import MassageInput from '../../molecules/MassageInput/MassageInput';

const GameChatPanel = () => {
  const sendMessage = (text: string): void => {
    console.log(text)
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