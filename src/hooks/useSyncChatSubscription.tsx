import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../store/store';
import {CurrentGame} from '../types/game';
import {useSubscription} from '@apollo/client';
import {SYNC_MESSAGES_SUBSCRIPTION} from '../graphql/chat';
import {Message} from '../types/chat';
import {updateMessages} from '../utils/chat';

const useSyncChatSubscription = () => {
  const currentGame = useSelector<RootState>(state => state.game.currentGame) as CurrentGame;

  const {data} = useSubscription<{ syncMessagesSubscription: Message }>(SYNC_MESSAGES_SUBSCRIPTION, {
    variables: {
      gameId: currentGame?.game?.id,
    },
    skip: !currentGame?.game?.id
  });

  useEffect(() => {
    const message = data?.syncMessagesSubscription;

    if (message) {
      updateMessages(message);
    }
  }, [data]);
};

export default useSyncChatSubscription;