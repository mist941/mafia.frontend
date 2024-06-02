import {Message} from '../types/chat';
import store from '../store/store';
import {addMessage} from '../store/chat/chat.reducer';

export const updateMessages = (message: Message) => {
  const messages = JSON.parse(sessionStorage.getItem('messages') ?? '[]');
  sessionStorage.setItem('messages', JSON.stringify([...messages, message]));
  store.dispatch(addMessage(message));
}