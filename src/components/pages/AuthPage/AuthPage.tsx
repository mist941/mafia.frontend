import React from 'react';
import AuthTemplate from '../../templates/AuthTemplate/AuthTemplate';
import EssentialBlock from '../../atoms/EssentialBlock/EssentialBlock';
import styles from './AuthPage.module.scss';
import Button from '../../atoms/Button/Button';
import InputField from '../../molecules/InputField/InputField';
import Logo from '../../atoms/Logo/Logo';

const AuthPage = () => {
  return (
    <AuthTemplate>
      <div className={styles.formWrap}>
        <EssentialBlock padding='25px'>
          <Logo/>
          <InputField label='Username' type='text'/>
          <InputField label='Email' type='email'/>
          <InputField label='Password' type='password'/>
          <Button>
            Save
          </Button>
        </EssentialBlock>
      </div>
    </AuthTemplate>
  );
};

export default AuthPage;