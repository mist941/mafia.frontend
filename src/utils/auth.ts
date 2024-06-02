import {SignResponseI} from '../types/auth';
import {updateCurrentUser} from '../store/user/user.reducer';
import store from '../store/store';

export const updateCurrentSessionData = (data: SignResponseI) => {
  sessionStorage.setItem('currentUser', JSON.stringify(data.user));
  sessionStorage.setItem('accessToken', JSON.stringify(data.accessToken));
  store.dispatch(updateCurrentUser(data.user));
}