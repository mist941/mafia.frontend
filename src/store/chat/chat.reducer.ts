import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Message} from '../../types/chat';

const messagesFromStorage = sessionStorage.getItem('messages');
let messages: Message[] = [];

if (messagesFromStorage) {
  messages = JSON.parse(messagesFromStorage ?? '[]');
}

interface ChatState {
  messages?: Message[];
}

const initialState: ChatState = {
  messages
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<Message>) => {
      state.messages?.push(action.payload);
    },
  },
});

export const {addMessage} = chatSlice.actions;

export default chatSlice.reducer;