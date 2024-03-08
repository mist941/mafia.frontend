import React, {FC} from 'react';
import Typography from '../../atoms/Typography/Typography';
import {CurrentInviteGame} from '../../../hooks/useInviteSubscription';
import Button from '../../atoms/Button/Button';

type AcceptInviteForm = {
  game: CurrentInviteGame;
  close: () => void;
}

const AcceptInviteForm: FC<AcceptInviteForm> = ({game, close}) => {

  const accept = () => {
    close();
  }

  return (
    <div className='formContainer'>
      <Typography.Heading4>Invite</Typography.Heading4>
      <Typography.Paragraph color='light'>
        You have been invited to join the game "{game.name}". Do you want to accept the invitation?
      </Typography.Paragraph>
      <div className='formButtonsContainer'>
        <Button styled='secondary' onClick={close}>Cancel</Button>
        <Button type='submit' onClick={accept}>Accept</Button>
      </div>
    </div>
  );
};

export default AcceptInviteForm;