import React from 'react';
import EssentialBlock from '../../atoms/EssentialBlock/EssentialBlock';
import Logo from '../../atoms/Logo/Logo';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <EssentialBlock padding='12px 24px' className={styles.header}>
        <Logo size='medium'/>
    </EssentialBlock>
  );
};

export default Header;