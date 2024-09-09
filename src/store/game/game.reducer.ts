import {CurrentGame} from '../../types/game';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const gameFromStorage = sessionStorage.getItem('currentGame');
let currentGame: CurrentGame | undefined;

if (gameFromStorage) {
  currentGame = JSON.parse(gameFromStorage)
}

interface GameState {
  currentGame?: CurrentGame;
}

const initialState: GameState = {
  currentGame
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    updateCurrentGame: (state, action: PayloadAction<CurrentGame>) => {
      state.currentGame = action.payload;
    },
    clearGame: (state) => {
      state.currentGame = undefined;
    },
  },
});

export const {updateCurrentGame, clearGame} = gameSlice.actions;

export default gameSlice.reducer;