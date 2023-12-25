import React from 'react';
import AuthTemplate from '../../templates/AuthTemplate/AuthTemplate';
import styles from './SignInPage.module.scss';
import SignInForm from '../../forms/SignInForm/SignInForm';
import {FetchResult, useMutation} from '@apollo/client';
import {SIGN_IN} from '../../../graphql/mutations';
import {SignInRequestI, SignResponseI} from '../../../types/auth';
import {updateCurrentSessionData} from '../../../utils/auth';

const SignInPage = () => {
  const [signIn] = useMutation(SIGN_IN);

  const handleSignIn = async (params: SignInRequestI) => {
    signIn({
      variables: {signinInput: params},
    }).then((response: FetchResult<{ signin: SignResponseI }>) => {
      if (response.data) {
        updateCurrentSessionData(response.data.signin);
      }
    }).catch((error) => {
      alert(error.message);
    });
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