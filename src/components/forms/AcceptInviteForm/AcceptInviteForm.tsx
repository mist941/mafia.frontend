import React, {FC} from 'react';
import Typography from '../../atoms/Typography/Typography';
import {CurrentInviteGame} from '../../../hooks/useInviteSubscription';
import Button from '../../atoms/Button/Button';
import {FetchResult, useMutation} from '@apollo/client';
import {ADD_NEW_PLAYER} from '../../../graphql/game';
import {GameResponse} from '../../../types/game';
import {updateCurrentGameData} from '../../../utils/game';

type AcceptInviteForm = {
  game: CurrentInviteGame;
  close: () => void;
}

const AcceptInviteForm: FC<AcceptInviteForm> = ({game, close}) => {
  const [addNewPlayer] = useMutation(ADD_NEW_PLAYER);

  const accept = async () => {
    const addNewPlayerResponse: FetchResult<{ addNewPlayer: GameResponse }> = await addNewPlayer({
      variables: {
        addNewPlayerInput: {
          gameId: game.id
        }
      },
    });

    if (addNewPlayerResponse.data?.addNewPlayer) {
      updateCurrentGameData(addNewPlayerResponse.data?.addNewPlayer);
      close();
    }

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