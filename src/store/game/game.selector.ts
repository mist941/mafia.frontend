import {RootState} from '../store';

export const selectCurrentGame = (state: RootState) => state.game.currentGame;
export const selectCurrentAction = (state: RootState) => state.game.currentAction;