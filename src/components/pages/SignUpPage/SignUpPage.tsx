import React from 'react';
import AuthTemplate from '../../templates/AuthTemplate/AuthTemplate';
import styles from './SignUpPage.module.scss';
import SignUpForm from '../../forms/SignUpForm/SignUpForm';
import {FetchResult, useMutation} from '@apollo/client';
import {SIGN_UP} from '../../../graphql/mutations';
import {SignResponseI, SignUpRequestI} from '../../../types/auth';
import {updateCurrentSessionData} from '../../../utils/auth';
import paths from '../../../routing/paths';
import {useNavigate} from 'react-router-dom';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [signUp] = useMutation(SIGN_UP);
  //move to form
  const handleSignUp = (values: SignUpRequestI) => {
    signUp({
      variables: {signupInput: values},
    }).then((response: FetchResult<{ signup: SignResponseI }>) => {
      if (response.data) {
        updateCurrentSessionData(response.data.signup);
        navigate(paths.main);
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