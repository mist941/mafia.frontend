import {createSlice} from '@reduxjs/toolkit';
import {UserI} from '../types/user';

const userFromStorage = localStorage.getItem('user');
let currentUser: UserI | null = null;

if (userFromStorage) {
  currentUser = JSON.parse(userFromStorage)
}

interface UserState {
  user:UserI | null;
}

const initialState: UserState = {
  user: currentUser,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    increment: () => {

    },
  },
});

export default userSlice.reducer;