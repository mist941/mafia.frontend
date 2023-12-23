import {SignResponseI} from '../types/auth';
import {updateCurrentUser} from '../store/user';

export const updateCurrentSessionData = (data: SignResponseI) => {
  localStorage.setItem('currentUser', JSON.stringify(data.user));
  localStorage.setItem('accessToken', JSON.stringify(data.accessToken));
  updateCurrentUser(data.user);
}