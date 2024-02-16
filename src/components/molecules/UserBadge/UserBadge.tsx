import React, {FC} from 'react';
import UserAvatar, {UserAvatarProps} from '../../atoms/UserAvatar/UserAvatar';
import Typography from '../../atoms/Typography/Typography';
import styles from './UserBadge.module.scss';

type UserBadgeProps = {
  username: string
} & UserAvatarProps;

const UserBadge: FC<UserBadgeProps> = ({userId, username, size}) => {
  return (
    <div className={styles.userBadge}>
      <UserAvatar userId={userId} size={size}/>
      <Typography.Paragraph size='s'>
        {username}
      </Typography.Paragraph>
    </div>
  );
};

export default UserBadge;