import React, {useState} from 'react';
import styles from './HandleNewGame.module.scss';
import InputField from '../../molecules/InputField/InputField';
import Button from '../../atoms/Button/Button';
import Typography from '../../atoms/Typography/Typography';
import ModalWindow from '../../molecules/ModalWindow/ModalWindow';
import CreateGameForm from '../../forms/CreateGameForm/CreateGameForm';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/store';
import {CurrentGame} from '../../../types/game';

const HandleNewGame = () => {
  const currentGame = useSelector<RootState>
  (state => state.game.currentGame) as CurrentGame;
  const [isOpenCreationGamePopUp, setOpenCreationGamePopUp] = useState<boolean>(false);

  const toggleCreationRoomPopup = () => {
    setOpenCreationGamePopUp(prevState => !prevState);
  }

  return (
    <div className={styles.handleGameWrap}>
      <InputField placeholder='Start typing to find a game' disabled={!!currentGame}/>
      <Typography.Paragraph size='s' color='disable'>
        Or
      </Typography.Paragraph>
      <Button onClick={toggleCreationRoomPopup} disabled={!!currentGame}>
        Create
      </Button>
      {isOpenCreationGamePopUp && (
        <ModalWindow close={toggleCreationRoomPopup}>
          <CreateGameForm close={toggleCreationRoomPopup}/>
        </ModalWindow>
      )}
    </div>
  );
};

export default HandleNewGame;