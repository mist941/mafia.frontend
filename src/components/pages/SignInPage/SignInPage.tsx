import React from 'react';
import AuthTemplate from '../../templates/AuthTemplate/AuthTemplate';
import styles from './SignInPage.module.scss';
import SignInForm from '../../forms/SignInForm/SignInForm';
import {FetchResult, useMutation} from '@apollo/client';
import {SIGN_IN} from '../../../graphql/mutations';
import {SignInRequestI, SignResponseI} from '../../../types/auth';
import {updateCurrentSessionData} from '../../../utils/auth';
import {useNavigate} from 'react-router-dom';
import paths from '../../../routing/paths';

const SignInPage = () => {
  const navigate = useNavigate();
  const [signIn] = useMutation(SIGN_IN);
  //move to form
  const handleSignIn = (params: SignInRequestI) => {
    signIn({
      variables: {signinInput: params},
    }).then((response: FetchResult<{ signin: SignResponseI }>) => {
      if (response.data) {
        updateCurrentSessionData(response.data.signin);
        navigate(paths.main);
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