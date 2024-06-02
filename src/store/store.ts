import { configureStore } from '@reduxjs/toolkit';
import user from './user/user.reducer';
import game from './game/game.reducer';
import chat from './chat/chat.reducer';

const store = configureStore({
  reducer: {
    user,
    game,
    chat
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;