import React from 'react';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import styles from './Main.module.scss';

const Main = () => {
  return (
    <MainTemplate>
      <div className={styles.container}>
        <div className={styles.players}>Players</div>
        <div className={styles.chat}>Chat</div>
        <div className={styles.role}>Role</div>
        <div className={styles.period}>Period</div>
      </div>
    </MainTemplate>
  );
};

export default Main;