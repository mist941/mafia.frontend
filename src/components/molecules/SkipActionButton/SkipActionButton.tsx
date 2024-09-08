import React from 'react';
import Button from '../../atoms/Button/Button';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/store';
import {selectCurrentGame} from '../../../store/game/game.selector';
import {CurrentGame, GameResponse} from '../../../types/game';
import {FetchResult, useMutation} from '@apollo/client';
import {CREATE_ACTION} from '../../../graphql/game';
import {updateCurrentGameData} from '../../../utils/game';
import {ActionTypes} from '../../../types/action';

const SkipActionButton = () => {
  const {player: currentPlayer, game} = useSelector<RootState>(selectCurrentGame) as CurrentGame;
  const [createAction] = useMutation(CREATE_ACTION);

  const skip = async () => {
    const skipActionResponse: FetchResult<{ readyToPlay: GameResponse }> = await createAction({
      variables: {
        createActionInput: {
          gameId: game.id,
          playerId: currentPlayer.id,
          actionType: ActionTypes.SKIP,
          step: game.step,
          period: game.currentPeriod
        }
      },
    });

    if (skipActionResponse.data?.readyToPlay) {
      updateCurrentGameData(skipActionResponse.data?.readyToPlay);
    }
  }

  return (
    <Button styled='secondary' onClick={skip}>
      Skip
    </Button>
  );
};

export default SkipActionButton;