import React from 'react';
import EssentialBlock from '../../atoms/EssentialBlock/EssentialBlock';
import Button from '../../atoms/Button/Button';
import Typography from '../../atoms/Typography/Typography';
import styles from './SignUpForm.module.scss';
import {useNavigate} from 'react-router-dom';
import paths from '../../../routing/paths';
import Logo from '../../atoms/Logo/Logo';
import InputField from '../../molecules/InputField/InputField';

const SignUpForm = () => {
  const navigate = useNavigate();

  const redirectToSignInPage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate(paths.signIn);
  }

  return (
    <>
      <div className={styles.logoWrap}><Logo/></div>
      <EssentialBlock padding='25px'>
        <form className={styles.signUpForm}>
          <Typography.Heading3>
            Sign Up
          </Typography.Heading3>
          <div className={styles.fieldsWrap}>
            <InputField type='text' placeholder='Enter username'/>
            <InputField type='email' placeholder='Enter email'/>
            <InputField type='password' placeholder='Enter password'/>
          </div>
          <div className={styles.controls}>
            <Button type='submit'>
              Create account
            </Button>
            <Typography.Paragraph size='s' color='disable'>
              Or
            </Typography.Paragraph>
            <Button
              styled='secondary-transparent'
              onClick={redirectToSignInPage}
            >
              Sign in
            </Button>
          </div>
        </form>
      </EssentialBlock>
    </>
  );
};

export default SignUpForm;