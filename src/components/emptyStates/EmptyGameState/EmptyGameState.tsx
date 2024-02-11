import React from 'react';
import * as animationData from '../../../assets/animations/empty-game.json'
import EssentialBlock from '../../atoms/EssentialBlock/EssentialBlock';
import Lottie from 'react-lottie';
import Typography from '../../atoms/Typography/Typography';
import styles from './EmptyGameState.module.scss';

const EmptyGameState = () => {
  return (
    <EssentialBlock className={styles.emptyGameState} padding='50px'>
      <div className={styles.message}>
        <Typography.Heading1 color='secondary' weight='bold'>No game found</Typography.Heading1>
        <Typography.Paragraph color='light' weight='regular'>Create or find a game</Typography.Paragraph>
      </div>
      <Lottie
        options={{
          animationData: animationData,
          loop: true,
          autoplay: true,
        }}
        height='85%'
        width='100%'
      />
    </EssentialBlock>
  );
};

export default EmptyGameState;