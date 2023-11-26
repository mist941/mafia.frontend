import React, {FC, ReactNode} from 'react';
import styles from './MainTemplate.module.scss';
import Header from '../../organisms/Header/Header';

interface MainTableProps {
  children: ReactNode;
}

const MainTemplate: FC<MainTableProps> = ({children}) => {
  return (
    <main className={styles.container}>
      <div className={styles.header}><Header/></div>
      <div className={styles.sidebar}>Menu</div>
      <div className={styles.content}>{children}</div>
    </main>
  );
};

export default MainTemplate;