import {Message} from '../types/chat';

export const updateMessages = (message: Message) => {
  const messages = JSON.parse(sessionStorage.getItem('messages') ?? '[]');
  sessionStorage.setItem('messages', JSON.stringify([...messages, message]));
}