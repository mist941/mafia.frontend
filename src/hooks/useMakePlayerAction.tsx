import {FetchResult, useMutation} from '@apollo/client';
import {CREATE_ACTION} from '../graphql/game';
import {CurrentGame, GameResponse} from '../types/game';
import {ActionTypes} from '../types/action';
import {updateCurrentGameData} from '../utils/game';
import {useSelector} from 'react-redux';
import {selectCurrentGame} from '../store/game/game.selector';

export const useMakePlayerAction = (action: ActionTypes) => {
  const {player: currentPlayer, game} = useSelector(selectCurrentGame) as CurrentGame;
  const [createAction] = useMutation(CREATE_ACTION);

  return async () => {
    const skipActionResponse: FetchResult<{ readyToPlay: GameResponse }> = await createAction({
      variables: {
        createActionInput: {
          gameId: game.id,
          playerId: currentPlayer.id,
          actionType: action,
          step: game.step,
          period: game.currentPeriod
        }
      },
    });

    if (skipActionResponse.data?.readyToPlay) {
      updateCurrentGameData(skipActionResponse.data?.readyToPlay);
    }
  };
}