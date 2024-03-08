import {useSelector} from 'react-redux';
import {RootState} from '../store/store';
import {User} from '../types/user';
import {INVITE_PLAYERS_SUBSCRIPTION} from '../graphql/game';
import {useSubscription} from '@apollo/client';
import {useState} from 'react';
import {InvitePlayersResponse} from '../types/game';
import {Id} from '../types/common';

type CurrentInviteGame = {
  id: Id;
  name: string;
}

export const useInviteSubscription = () => {
  const [currentInviteGame, setCurrentInviteGame] =
    useState<CurrentInviteGame | null>(null);
  const currentUser = useSelector<RootState>(state => state.user.currentUser) as User;
  const {data} = useSubscription<InvitePlayersResponse>(INVITE_PLAYERS_SUBSCRIPTION, {
    variables: {
      userId: currentUser.id,
    },
    onData: (data) => {
      console.log(data);
    }
  });

  if (!currentInviteGame) return;

  return (
    <div>
      {data?.gameId}
    </div>
  );
}