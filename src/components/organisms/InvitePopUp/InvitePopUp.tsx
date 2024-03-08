import React, {FC} from 'react';
import Typography from '../../atoms/Typography/Typography';
import {CurrentInviteGame} from '../../../hooks/useInviteSubscription';
import Button from '../../atoms/Button/Button';

type InvitePopUp = {
  game: CurrentInviteGame;
  close: () => void;
}

const InvitePopUp:FC<InvitePopUp> = ({game, close}) => {
  
  const accept = () => {
    close();
  }

  return (
    <div>
      <Typography.Heading3>
        Invite
        You have been invited to the game "{game?.name}"
      </Typography.Heading3>
      <div className='formButtonsContainer'>
        <Button styled='secondary' onClick={close}>Cancel</Button>
        <Button type='submit' onClick={accept}>Accept</Button>
      </div>
    </div>
  );
};

export default InvitePopUp;