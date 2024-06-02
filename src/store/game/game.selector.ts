import {RootState} from '../store';

export const selectCurrentGame = (state: RootState) => state.game.currentGame;