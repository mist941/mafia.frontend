import React from 'react';
import EssentialBlock from '../../atoms/EssentialBlock/EssentialBlock';
import Logo from '../../atoms/Logo/Logo';
import styles from './Header.module.scss';
import UserAvatar from '../../atoms/UserAvatar/UserAvatar';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/store';
import {User} from '../../../types/user';
import HandleNewGame from '../HandleNewGame/HandleNewGame';
import {selectCurrentUser} from '../../../store/user/user.selector';

const Header = () => {
  const currentUser = useSelector<RootState>(selectCurrentUser) as User;

  return (
    <EssentialBlock padding='12px 24px'>
      <header className={styles.header}>
        <Logo size='medium'/>
        <HandleNewGame/>
        <UserAvatar userId={currentUser.id}/>
      </header>
    </EssentialBlock>
  );
};

export default Header;