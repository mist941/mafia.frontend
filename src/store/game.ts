import {CurrentGame} from '../types/game';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const gameFromStorage = localStorage.getItem('currentGame');
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
  },
});

export const {updateCurrentGame} = gameSlice.actions;

export default gameSlice.reducer;