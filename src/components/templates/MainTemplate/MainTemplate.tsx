import React, {FC, ReactNode} from 'react';
import styles from './MainTemplate.module.scss';
import Header from '../../organisms/Header/Header';
import Sidebar from '../../organisms/Sidebar/Sidebar';

interface MainTableProps {
  children: ReactNode;
}

const MainTemplate: FC<MainTableProps> = ({children}) => {
  return (
    <main className={styles.container}>
      <div className={styles.header}><Header/></div>
      <div className={styles.sidebar}><Sidebar/></div>
      <div className={styles.content}>{children}</div>
    </main>
  );
};

export default MainTemplate;