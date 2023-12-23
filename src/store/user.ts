import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UserI} from '../types/user';

const userFromStorage = localStorage.getItem('user');
let currentUser: UserI | undefined;

if (userFromStorage) {
  currentUser = JSON.parse(userFromStorage)
}

interface UserState {
  currentUser?: UserI;
}

const initialState: UserState = {
  currentUser,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateCurrentUser: (state, action: PayloadAction<UserI>) => {
      state.currentUser = action.payload;
    },
  },
});

export const {updateCurrentUser} = userSlice.actions;

export default userSlice.reducer;