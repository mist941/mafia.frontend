import React from 'react';
import AuthTemplate from '../../templates/AuthTemplate/AuthTemplate';
import styles from './SignInPage.module.scss';
import SignInForm from '../../forms/SignInForm/SignInForm';
import {FetchResult, useMutation} from '@apollo/client';
import {SIGN_IN} from '../../../graphql/mutations';
import {SignInRequestI, SignResponseI} from '../../../types/auth';

const SignInPage = () => {
  const [signUp] = useMutation(SIGN_IN);

  const handleSignIn = async (params: SignInRequestI) => {
    const response: FetchResult<SignResponseI> = await signUp({
      variables: {signupInput: params},
    });
    localStorage.setItem('currentUser', JSON.stringify(response.data?.user));
  }

  return (
    <AuthTemplate>
      <div className={styles.formWrap}>
        <SignInForm send={handleSignIn}/>
      </div>
    </AuthTemplate>
  );
};

export default SignInPage;