import React from 'react';
import AuthTemplate from '../../templates/AuthTemplate/AuthTemplate';
import styles from './SignUpPage.module.scss';
import SignUpForm from '../../forms/SignUpForm/SignUpForm';

const SignUpPage = () => {
  return (
    <AuthTemplate>
      <div className={styles.formWrap}>
        <SignUpForm/>
      </div>
    </AuthTemplate>
  );
};

export default SignUpPage;