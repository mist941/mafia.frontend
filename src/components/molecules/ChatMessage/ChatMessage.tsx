import React, {FC} from 'react';
import Typography from '../../atoms/Typography/Typography';
import {Message} from '../../../types/chat';

type MessageProps = {
  data: Message;
}

const ChatMessage: FC<MessageProps> = ({data}) => {
  return (
    <Typography.Paragraph>
      {data.text}
    </Typography.Paragraph>
  );
};

export default ChatMessage;