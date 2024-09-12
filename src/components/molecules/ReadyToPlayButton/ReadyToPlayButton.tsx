import React from 'react';
import Button from '../../atoms/Button/Button';
import {FetchResult, useMutation} from '@apollo/client';
import {CurrentGame, GameResponse} from '../../../types/game';
import {updateCurrentGameData} from '../../../utils/game';
import {useSelector} from 'react-redux';
import {selectCurrentGame} from '../../../store/game/game.selector';
import {READY_TO_PLAY} from '../../../graphql/game';

const ReadyToPlayButton = () => {
  const {player: currentPlayer, game} = useSelector(selectCurrentGame) as CurrentGame;
  const [readyToPlay] = useMutation(READY_TO_PLAY);

  const ready = async () => {
    const readyToPlayResponse: FetchResult<{ readyToPlay: GameResponse }> = await readyToPlay({
      variables: {
        readyToPlayInput: {
          gameId: game.id,
          playerId: currentPlayer.id
        }
      },
    });

    if (readyToPlayResponse.data?.readyToPlay) {
      updateCurrentGameData(readyToPlayResponse.data?.readyToPlay);
    }
  }

  return (
    <Button styled='secondary' onClick={ready}>
      Ready to play
    </Button>
  );
};

export default ReadyToPlayButton;