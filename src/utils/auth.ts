import {SignResponseI} from '../types/auth';
import {updateCurrentUser} from '../store/user';
import store from '../store/store';

export const updateCurrentSessionData = (data: SignResponseI) => {
  localStorage.setItem('currentUser', JSON.stringify(data.user));
  localStorage.setItem('accessToken', JSON.stringify(data.accessToken));
  store.dispatch(updateCurrentUser(data.user));
}