import React from 'react';
import AuthTemplate from '../../templates/AuthTemplate/AuthTemplate';
import Input from '../../atoms/Input/Input';
import EssentialBlock from '../../atoms/EssentialBlock/EssentialBlock';
import styles from './AuthPage.module.scss';
import Button from '../../atoms/Button/Button';

const AuthPage = () => {
  return (
    <AuthTemplate>
      <div className={styles.formWrap}>
        <EssentialBlock padding='15px'>
          <Input/>
          <Button>
            Save
          </Button>
        </EssentialBlock>
      </div>
    </AuthTemplate>
  );
};

export default AuthPage;