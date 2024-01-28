import React, {useState} from 'react';
import styles from './HandleNewGame.module.scss';
import InputField from '../../molecules/InputField/InputField';
import Button from '../../atoms/Button/Button';
import Typography from '../../atoms/Typography/Typography';
import ModalWindow from '../../molecules/ModalWindow/ModalWindow';
import CreateGameForm from '../../forms/CreateGameForm/CreateGameForm';
import {CreateGameRequestI} from '../../../types/game';
import {FetchResult, useMutation} from '@apollo/client';
import {CREATE_GAME} from '../../../graphql/mutations';
import {SignResponseI} from '../../../types/auth';

const HandleNewGame = () => {
  const [isOpenCreationGamePopUp, setOpenCreationGamePopUp] = useState<boolean>(false);
  const [createGame] = useMutation(CREATE_GAME);

  const toggleCreationRoomPopup = () => {
    setOpenCreationGamePopUp(prevState => !prevState);
  }

  const createGameRoom = (values: CreateGameRequestI) => {
    createGame({
      variables: {createGameInput: values},
    }).then((response: FetchResult<{ signin: SignResponseI }>) => {
      if (response.data) {
        //in progress
      }
    }).catch((error) => {
      alert(error.message);
    });
    toggleCreationRoomPopup();
  }

  return (
    <div className={styles.handleGameWrap}>
      <InputField placeholder='Start typing to find a game'/>
      <Typography.Paragraph size='s' color='disable'>
        Or
      </Typography.Paragraph>
      <Button onClick={toggleCreationRoomPopup}>
        Create
      </Button>
      {isOpenCreationGamePopUp && (
        <ModalWindow close={toggleCreationRoomPopup}>
          <CreateGameForm
            cancel={toggleCreationRoomPopup}
            send={createGameRoom}
          />
        </ModalWindow>
      )}
    </div>
  );
};

export default HandleNewGame;