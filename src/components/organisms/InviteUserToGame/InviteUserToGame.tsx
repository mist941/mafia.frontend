import React, {useState} from 'react';
import Button from '../../atoms/Button/Button';
import ModalWindow from '../../molecules/ModalWindow/ModalWindow';
import SearchDropDown from '../../molecules/SearchDropDown/SearchDropDown';

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
          <SearchDropDown search={(query: string) => {
            console.log(query)
            return [];
          }}/>
          <Button styled='secondary'>Cancel</Button>
          <Button>Invite</Button>
        </ModalWindow>
      )}
    </>
  );
};

export default InviteUserToGame;