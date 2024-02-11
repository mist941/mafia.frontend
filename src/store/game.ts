import {CurrentGameI} from '../types/game';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface GameState {
  currentGame?: CurrentGameI;
}

const initialState: GameState = {
  currentGame: undefined,
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