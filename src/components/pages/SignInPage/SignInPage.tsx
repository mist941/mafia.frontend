import React from 'react';
import AuthTemplate from '../../templates/AuthTemplate/AuthTemplate';
import styles from './SignInPage.module.scss';
import SignInForm from '../../forms/SignInForm/SignInForm';

const SignInPage = () => {
  return (
    <AuthTemplate>
      <div className={styles.formWrap}>
        <SignInForm/>
      </div>
    </AuthTemplate>
  );
};

export default SignInPage;