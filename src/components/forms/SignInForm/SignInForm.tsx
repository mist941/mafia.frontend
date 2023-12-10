import React, {FC} from 'react';
import EssentialBlock from '../../atoms/EssentialBlock/EssentialBlock';
import Button from '../../atoms/Button/Button';
import Typography from '../../atoms/Typography/Typography';
import styles from './SignInForm.module.scss';
import {useNavigate} from 'react-router-dom';
import paths from '../../../routing/paths';
import Logo from '../../atoms/Logo/Logo';
import InputField from '../../molecules/InputField/InputField';
import {SignInRequestI} from '../../../types/auth';

type SignInFormProps = {
  send: (params: SignInRequestI) => void;
}

const SignInForm: FC<SignInFormProps> = ({send}) => {
  const navigate = useNavigate();

  const redirectToSignUpPage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate(paths.signUp);
  }

  return (
    <>
      <div className={styles.logoWrap}><Logo/></div>
      <EssentialBlock padding='25px'>
        <form className={styles.signInForm}>
          <Typography.Heading3>
            Sign In
          </Typography.Heading3>
          <div className={styles.fieldsWrap}>
            <InputField type='email' placeholder='Enter email'/>
            <InputField type='password' placeholder='Enter password'/>
          </div>
          <div className={styles.controls}>
            <Button type='submit'>
              Sign In
            </Button>
            <Typography.Paragraph size='s' color='disable'>
              Or
            </Typography.Paragraph>
            <Button
              styled='secondary-transparent'
              onClick={redirectToSignUpPage}
            >
              Sign Up
            </Button>
          </div>
        </form>
      </EssentialBlock>
    </>
  );
};

export default SignInForm;