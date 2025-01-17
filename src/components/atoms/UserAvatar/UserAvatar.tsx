import React, {FC} from 'react';
import styles from './UserAvatar.module.scss';
import classNames from 'classnames';
import {Id} from '../../../types/common';
import stringToColor from 'string-to-color';

type UserAvatarSizes = 'large' | 'medium';

export type UserAvatarProps = {
  userId: Id;
  size?: UserAvatarSizes;
}

/**
 * UserAvatar component renders a user's avatar based on the provided user ID and size.
 *
 * @component
 * @param {object} props - The component props.
 * @param {string} props.userId - The user ID used to generate the avatar image URL.
 * @param {string} [props.size='large'] - The size of the avatar. Can be 'small', 'medium', or 'large'.
 * @returns {JSX.Element} The rendered UserAvatar component.
 */
const UserAvatar: FC<UserAvatarProps> = ({userId, size = 'large'}) => {

  return (
    <div 
      className={classNames(styles.avatar, styles[size])} 
      style={{backgroundColor: stringToColor(userId) + 25}}
    >
      <img src={`https://robohash.org/${userId}?set=set4`} alt='User avatar'/>
    </div>
  );
};

export default UserAvatar;