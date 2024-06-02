import React, {FC} from 'react';
import {Message} from '../../../types/chat';
import EssentialBlock from '../../atoms/EssentialBlock/EssentialBlock';
import styles from './ChatMessage.module.scss';
import Typography from '../../atoms/Typography/Typography';
import classNames from 'classnames';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/store';
import {selectCurrentUser} from '../../../store/user/user.selector';
import {User} from '../../../types/user';

type MessageProps = {
  data: Message;
}

const ChatMessage: FC<MessageProps> = ({data}) => {
  const currentUser = useSelector<RootState>(selectCurrentUser) as User;

  return (
    <EssentialBlock
      className={classNames(
        styles.message,
        {
          [styles.ownMessage]: currentUser.id === data.user.id
        }
      )}
      padding='8px'
    >
      <Typography.Paragraph size='l'>{data.text}</Typography.Paragraph>
    </EssentialBlock>
  );
};

export default ChatMessage;