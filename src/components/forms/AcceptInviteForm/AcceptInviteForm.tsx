import React, {FC} from 'react';
import Typography from '../../atoms/Typography/Typography';
import {CurrentInviteGame} from '../../../hooks/useInviteSubscription';
import Button from '../../atoms/Button/Button';
import {FetchResult, useMutation} from '@apollo/client';
import {ADD_NEW_PLAYER} from '../../../graphql/game';
import {GameResponse} from '../../../types/game';
import {updateCurrentGame} from '../../../store/game';
import {useDispatch} from 'react-redux';

type AcceptInviteForm = {
  game: CurrentInviteGame;
  close: () => void;
}

const AcceptInviteForm: FC<AcceptInviteForm> = ({game, close}) => {
  const dispatch = useDispatch();
  const [addNewPlayer] = useMutation(ADD_NEW_PLAYER);

  const accept = async () => {
    const addNewPlayerResponse: FetchResult<{ addNewPlayer: GameResponse }> = await addNewPlayer({
      variables: {gameId: game.id},
    });

    if (addNewPlayerResponse.data?.addNewPlayer) {
      dispatch(updateCurrentGame(addNewPlayerResponse.data?.addNewPlayer));
      localStorage.setItem('currentGame', JSON.stringify(addNewPlayerResponse.data?.addNewPlayer));
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