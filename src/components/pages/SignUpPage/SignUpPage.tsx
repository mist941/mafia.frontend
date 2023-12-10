import React from 'react';
import AuthTemplate from '../../templates/AuthTemplate/AuthTemplate';
import styles from './SignUpPage.module.scss';
import SignUpForm from '../../forms/SignUpForm/SignUpForm';
import {FetchResult, useMutation} from '@apollo/client';
import {SIGN_UP} from '../../../graphql/mutations';
import {SignResponseI, SignUpRequestI} from '../../../types/auth';

const SignUpPage = () => {
  const [signUp] = useMutation(SIGN_UP);

  const handleSignUp = async (values: SignUpRequestI) => {
    const response: FetchResult<SignResponseI> = await signUp({
      variables: {signupInput: values},
    });
    localStorage.setItem('currentUser', JSON.stringify(response.data?.user));
  }

  return (
    <AuthTemplate>
      <div className={styles.formWrap}>
        <SignUpForm send={handleSignUp}/>
      </div>
    </AuthTemplate>
  );
};

export default SignUpPage;