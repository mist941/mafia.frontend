import React, {FC, ReactNode} from 'react';
import styles from './AuthTemplate.module.scss';

interface AuthTemplateProps {
  children: ReactNode;
}

const AuthTemplate: FC<AuthTemplateProps> = ({children}) => {
  return (
    <main className={styles.container}>
      {children}
    </main>
  );
};

export default AuthTemplate;