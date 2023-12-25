import React, {FC} from 'react';
import styles from './UserAvatar.module.scss';
import classNames from 'classnames';

type UserAvatarSizes = 'large' | 'medium';

type UserAvatarProps = {
  userId: number;
  size?: UserAvatarSizes;
}

const UserAvatar: FC<UserAvatarProps> = ({userId, size = 'large'}) => {
  return (
    <div className={classNames(styles.avatar, styles[size])}>
      <img src={`https://robohash.org/${userId}?set=set4`} alt='User avatar'/>
    </div>
  );
};

export default UserAvatar;