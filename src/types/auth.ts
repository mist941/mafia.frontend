import {UserI} from './user';

type Token = string;

export interface SignResponseI {
  accessToken: Token;
  refreshToken: Token;
  user: UserI;
}