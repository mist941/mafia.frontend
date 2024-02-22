import React, {useState} from 'react';
import Button from '../../atoms/Button/Button';
import ModalWindow from '../../molecules/ModalWindow/ModalWindow';

const InviteUserToGame = () => {
  const [isOpenInvitePopUp, setOpenInvitePopUp] = useState<boolean>(false);

  const toggleInvitePopup = () => {
    setOpenInvitePopUp(prevState => !prevState);
  }

  return (
    <>
      <Button styled='secondary' onClick={toggleInvitePopup}>
        Invite people
      </Button>
      {isOpenInvitePopUp && (
        <ModalWindow close={toggleInvitePopup}>
          <Button styled='secondary'>Cancel</Button>
          <Button>Invite</Button>
        </ModalWindow>
      )}
    </>
  );
};

export default InviteUserToGame;