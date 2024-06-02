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
import moment from 'moment';
import stringToColor from 'string-to-color';

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
      <Typography.Paragraph
        size='xs'
        weight='bold'
        color='light-blue'
        style={{
          color: currentUser.id !== data.user.id ? stringToColor(data.user.id) : undefined
        }}
      >
        {currentUser.id === data.user.id ? 'You' : data.user.username}
      </Typography.Paragraph>
      <Typography.Paragraph
        size='m'
        color='light'
      >
        {data.text}
      </Typography.Paragraph>
      <Typography.Paragraph
        color='light-grey'
        size='xs'
        className={styles.date}
      >
        {moment(data.createdAt).format('HH:mm')}
      </Typography.Paragraph>
    </EssentialBlock>
  );
};

export default ChatMessage;