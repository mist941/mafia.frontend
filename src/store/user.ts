import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {User} from '../types/user';

const userFromStorage = localStorage.getItem('currentUser');
let currentUser: User | undefined;

if (userFromStorage) {
  currentUser = JSON.parse(userFromStorage)
}

interface UserState {
  currentUser?: User;
}

const initialState: UserState = {
  currentUser,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateCurrentUser: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
    },
  },
});

export const {updateCurrentUser} = userSlice.actions;

export default userSlice.reducer;