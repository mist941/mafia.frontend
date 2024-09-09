import {GET_GAME_DATA} from '../graphql/game';
import {CurrentGame, GameResponse} from '../types/game';
import {useEffect} from 'react';
import {client} from '../graphql/apolo';
import {clearGameData, updateCurrentGameData} from '../utils/game';

export const useGetGameData = () => {
  const gameFromStorage = sessionStorage.getItem('currentGame');
  let currentGame: CurrentGame | undefined;
  if (gameFromStorage) {
    currentGame = JSON.parse(gameFromStorage) as CurrentGame;
  }

  const loadGameData = async () => {
    try {
      const {data} = await client.query<{ getGameData: GameResponse }>({
        query: GET_GAME_DATA,
        variables: {
          getGameDataInput: {
            gameId: currentGame?.game.id,
            playerId: currentGame?.player.id,
          }
        },
      });

      updateCurrentGameData(data.getGameData);
    } catch (error) {
      clearGameData();
    }
  }

  useEffect(() => {
    if (currentGame?.game.id) {
      loadGameData();
    }
  }, []);
}