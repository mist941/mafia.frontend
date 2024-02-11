import {CurrentGameI} from '../types/game';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const gameFromStorage = localStorage.getItem('currentGame');
let currentGame: CurrentGameI | undefined;

if (gameFromStorage) {
  currentGame = JSON.parse(gameFromStorage)
}

interface GameState {
  currentGame?: CurrentGameI;
}

const initialState: GameState = {
  currentGame
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    updateCurrentGame: (state, action: PayloadAction<CurrentGameI>) => {
      state.currentGame = action.payload;
    },
  },
});

export const {updateCurrentGame} = gameSlice.actions;

export default gameSlice.reducer;