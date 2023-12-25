import React, {useState} from 'react';
import styles from './HandleNewGame.module.scss';
import InputField from '../../molecules/InputField/InputField';
import Button from '../../atoms/Button/Button';
import Typography from '../../atoms/Typography/Typography';
import ModalWindow from '../../molecules/ModalWindow/ModalWindow';
import CreateRoomForm from '../../forms/CreateRoomForm/CreateRoomForm';
import {CreateGameRoomRequestI} from '../../../types/gameroom';

const HandleNewGame = () => {
  const [isOpenCreationRoomPopUp, setOpenCreationRoomPopUp] = useState<boolean>(false);

  const handleOpenCreationRoomPopUp = () => {
    setOpenCreationRoomPopUp(prevState => !prevState);
  }

  const createGameRoom = (values: CreateGameRoomRequestI) => {
    console.log(values);
  }

  return (
    <div className={styles.handleGameWrap}>
      <InputField placeholder='Start typing to find a game'/>
      <Typography.Paragraph size='s' color='disable'>
        Or
      </Typography.Paragraph>
      <Button onClick={handleOpenCreationRoomPopUp}>
        Create
      </Button>
      {isOpenCreationRoomPopUp && (
        <ModalWindow close={handleOpenCreationRoomPopUp}>
          <CreateRoomForm
            cancel={handleOpenCreationRoomPopUp}
            send={createGameRoom}
          />
        </ModalWindow>
      )}
    </div>
  );
};

export default HandleNewGame;