import React from 'react';
import AuthTemplate from '../../templates/AuthTemplate/AuthTemplate';
import styles from './SignUpPage.module.scss';
import SignUpForm from '../../forms/SignUpForm/SignUpForm';
import {FetchResult, useMutation} from '@apollo/client';
import {SIGN_UP} from '../../../graphql/mutations';
import {SignResponseI, SignUpRequestI} from '../../../types/auth';
import {updateCurrentSessionData} from '../../../utils/auth';

const SignUpPage = () => {
  const [signUp] = useMutation(SIGN_UP);

  const handleSignUp = async (values: SignUpRequestI) => {
    signUp({
      variables: {signupInput: values},
    }).then((response: FetchResult<{ signup: SignResponseI }>) => {
      if (response.data) {
        updateCurrentSessionData(response.data.signup);
      }
    }).catch((error) => {
      alert(error.message);
    });
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