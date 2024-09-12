import {combineReducers, configureStore} from '@reduxjs/toolkit';
import user from './user/user.reducer';
import game from './game/game.reducer';
import chat from './chat/chat.reducer';

const rootReducer = combineReducers({
  user,
  game,
  chat
})

const store = configureStore({
  reducer: rootReducer,
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export default store;