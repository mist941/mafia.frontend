import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UserI} from '../types/user';

const userFromStorage = localStorage.getItem('user');
let currentUser: UserI | null = null;

if (userFromStorage) {
  currentUser = JSON.parse(userFromStorage)
}

interface UserState {
  user: UserI | null;
}

const initialState: UserState = {
  user: currentUser,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateCurrentUser: (state, action: PayloadAction<UserI>) => {
      console.log(action);
      state.user = action.payload;
    },
  },
});

export const {updateCurrentUser} = userSlice.actions;

export default userSlice.reducer;