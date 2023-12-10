import {UserI} from './user';

type Token = string;

export interface SignUpRequestI {
  username: string;
  email: string;
  password: string;
}

export interface SignInRequestI {
  email: string;
  password: string;
}

export interface SignResponseI {
  accessToken: Token;
  refreshToken: Token;
  user: UserI;
}