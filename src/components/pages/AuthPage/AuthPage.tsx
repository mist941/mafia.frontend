import React from 'react';
import AuthTemplate from '../../templates/AuthTemplate/AuthTemplate';
import Input from '../../atoms/Input/Input';
import EssentialBlock from '../../atoms/EssentialBlock/EssentialBlock';
import styles from './AuthPage.module.scss';

const AuthPage = () => {
  return (
    <AuthTemplate>
      <div className={styles.formWrap}>
        <EssentialBlock padding='15px'>
          <Input/>
        </EssentialBlock>
      </div>
    </AuthTemplate>
  );
};

export default AuthPage;