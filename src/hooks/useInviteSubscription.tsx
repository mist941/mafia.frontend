import {useSelector} from 'react-redux';
import {RootState} from '../store/store';
import {User} from '../types/user';
import {INVITE_PLAYERS_SUBSCRIPTION} from '../graphql/game';
import {useSubscription} from '@apollo/client';
import {useEffect, useState} from 'react';
import {InvitePlayersResponse} from '../types/game';
import {Id} from '../types/common';
import ModalWindow from '../components/molecules/ModalWindow/ModalWindow';
import InvitePopUp from '../components/organisms/InvitePopUp/InvitePopUp';

export type CurrentInviteGame = {
  id: Id;
  name: string;
}

export const useInviteSubscription = () => {
  const [currentInviteGame, setCurrentInviteGame] =
    useState<CurrentInviteGame | null>(null);
  const currentUser = useSelector<RootState>(state => state.user.currentUser) as User;
  const {data} = useSubscription<{ invitePlayersSubscription: InvitePlayersResponse }>
  (INVITE_PLAYERS_SUBSCRIPTION, {
    variables: {
      userId: currentUser?.id,
    },
    skip: !currentUser?.id
  });

  useEffect(() => {
    const game = data?.invitePlayersSubscription;

    if (game) {
      setCurrentInviteGame({id: game.gameId, name: game.gameName});
    }
  }, [data]);

  const clearInvite = () => {
    setCurrentInviteGame(null);
  }

  if (!currentInviteGame) return;

  return (
    <ModalWindow close={clearInvite}>
      <InvitePopUp close={clearInvite} game={currentInviteGame}/>
    </ModalWindow>
  );
}