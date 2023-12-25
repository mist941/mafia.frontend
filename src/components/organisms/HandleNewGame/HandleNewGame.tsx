import React, {useState} from 'react';
import styles from './HandleNewGame.module.scss';
import InputField from '../../molecules/InputField/InputField';
import Button from '../../atoms/Button/Button';
import Typography from '../../atoms/Typography/Typography';
import ModalWindow from '../ModalWindow/ModalWindow';

const HandleNewGame = () => {
  const [isOpenCreationRoomPopUp, setOpenCreationRoomPopUp] = useState<boolean>(false);

  const handleOpenCreationRoomPopUp = ()=>{
    setOpenCreationRoomPopUp(prevState => !prevState);
  }

  return (
    <div className={styles.handleGameWrap}>
      <InputField/>
      <Typography.Paragraph size='s' color='disable'>
        Or
      </Typography.Paragraph>
      <Button onClick={handleOpenCreationRoomPopUp}>
        Create
      </Button>
      {isOpenCreationRoomPopUp && (
        <ModalWindow close={handleOpenCreationRoomPopUp}>
          Hello
        </ModalWindow>
      )}
    </div>
  );
};

export default HandleNewGame;