import React from 'react';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import styles from './Main.module.scss';
import EssentialBlock from '../../atoms/EssentialBlock/EssentialBlock';

const Main = () => {
  return (
    <MainTemplate>
      <div className={styles.container}>
        <div className={styles.players}>
          <EssentialBlock padding='16px'>
            Players
          </EssentialBlock>
        </div>
        <div className={styles.chat}>
          <EssentialBlock padding='16px'>
            Chat
          </EssentialBlock>
        </div>
        <div className={styles.role}>
          <EssentialBlock padding='16px'>
            Role
          </EssentialBlock>
        </div>
        <div className={styles.period}>
          <EssentialBlock padding='16px'>
            Period
          </EssentialBlock>
        </div>
      </div>
    </MainTemplate>
  );
};

export default Main;