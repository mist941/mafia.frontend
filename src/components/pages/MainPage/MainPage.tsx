import React from 'react';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import styles from './MainPage.module.scss';
import EssentialBlock from '../../atoms/EssentialBlock/EssentialBlock';
import Typography from '../../atoms/Typography/Typography';

const MainPage = () => {
  return (
    <MainTemplate>
      <div className={styles.container}>
        <div className={styles.players}>
          <EssentialBlock padding='16px'>
            <Typography.Paragraph size='m'>Players</Typography.Paragraph>
          </EssentialBlock>
        </div>
        <div className={styles.chat}>
          <EssentialBlock padding='16px'>
            <Typography.Paragraph size='m'>Chat</Typography.Paragraph>
          </EssentialBlock>
        </div>
        <div className={styles.role}>
          <EssentialBlock padding='16px'>
            <Typography.Paragraph size='m'>Role</Typography.Paragraph>
          </EssentialBlock>
        </div>
        <div className={styles.period}>
          <EssentialBlock padding='16px'>
            <Typography.Paragraph size='m'>Period</Typography.Paragraph>
          </EssentialBlock>
        </div>
      </div>
    </MainTemplate>
  );
};

export default MainPage;