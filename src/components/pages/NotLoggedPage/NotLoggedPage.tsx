import React from 'react';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import styles from '../MainPage/MainPage.module.scss';
import EssentialBlock from '../../atoms/EssentialBlock/EssentialBlock';

const NotLoggedPage = () => {
  return (
    <MainTemplate>
      <div className={styles.container}>
        <div className={styles.block}>
          <EssentialBlock padding='16px'/>
        </div>
        <div className={styles.block}>
          <EssentialBlock padding='16px'/>
        </div>
        <div className={styles.block}>
          <EssentialBlock padding='16px'/>
        </div>
        <div className={styles.block}>
          <EssentialBlock padding='16px'/>
        </div>
      </div>
    </MainTemplate>
  );
};

export default NotLoggedPage;