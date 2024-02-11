import React, {useState} from 'react';
import styles from './HandleNewGame.module.scss';
import InputField from '../../molecules/InputField/InputField';
import Button from '../../atoms/Button/Button';
import Typography from '../../atoms/Typography/Typography';
import ModalWindow from '../../molecules/ModalWindow/ModalWindow';
import CreateGameForm from '../../forms/CreateGameForm/CreateGameForm';

const HandleNewGame = () => {
  const [isOpenCreationGamePopUp, setOpenCreationGamePopUp] = useState<boolean>(false);

  const toggleCreationRoomPopup = () => {
    setOpenCreationGamePopUp(prevState => !prevState);
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
          <CreateGameForm close={toggleCreationRoomPopup}/>
        </ModalWindow>
      )}
    </div>
  );
};

export default HandleNewGame;