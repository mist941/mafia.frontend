import {Id} from './common';
import {User} from './user';

export interface Message {
  id: Id;
  text: string;
  createdAt: Date;
  user: Pick<User, 'id' | 'username'>;
}