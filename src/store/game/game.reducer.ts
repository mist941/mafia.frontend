import {CurrentGame} from '../../types/game';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {StoreAction} from '../../types/action';

const gameFromStorage = sessionStorage.getItem('currentGame');
let currentGame: CurrentGame | undefined;

if (gameFromStorage) {
  currentGame = JSON.parse(gameFromStorage)
}

interface GameState {
  currentGame?: CurrentGame;
  currentAction?: StoreAction;
}

const initialState: GameState = {
  currentGame,
  currentAction: undefined,
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
    setAction: (state, action: PayloadAction<StoreAction>) => {
      state.currentAction = action.payload;
    },
    clearAction: (state) => {
      state.currentAction = undefined;
    },
  },
});

export const {updateCurrentGame, clearGame, setAction, clearAction} = gameSlice.actions;

export default gameSlice.reducer;