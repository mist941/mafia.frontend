import React, {FC} from 'react';
import EssentialBlock from '../../atoms/EssentialBlock/EssentialBlock';
import Button from '../../atoms/Button/Button';
import Typography from '../../atoms/Typography/Typography';
import styles from './SignUpForm.module.scss';
import {useNavigate} from 'react-router-dom';
import paths from '../../../routing/paths';
import Logo from '../../atoms/Logo/Logo';
import InputField from '../../molecules/InputField/InputField';
import {SignUpRequestI} from '../../../types/auth';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {handleFormikErrors} from '../../../utils/common';

type SignUpFormProps = {
  send: (values: SignUpRequestI) => void;
}

const SignUpForm: FC<SignUpFormProps> = ({send}) => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      username: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Required'),
      username: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      send(values);
    },
  });

  const {handleSubmit, values, handleChange, errors, touched} = formik;

  const redirectToSignInPage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate(paths.signIn);
  }

  return (
    <>
      <div className={styles.logoWrap}><Logo/></div>
      <EssentialBlock padding='25px'>
        <form className={styles.signUpForm} onSubmit={handleSubmit}>
          <Typography.Heading3 weight='medium'>
            Sign Up
          </Typography.Heading3>
          <div className={styles.fieldsWrap}>
            <InputField
              label='Username'
              type='text'
              id='username'
              name='username'
              placeholder='Enter username'
              value={values.username}
              onChange={handleChange}
              error={handleFormikErrors(touched, errors, 'username')}
            />
            <InputField
              label='Email'
              type='email'
              id='email'
              name='email'
              placeholder='Enter email'
              value={values.email}
              onChange={handleChange}
              error={handleFormikErrors(touched, errors, 'email')}
            />
            <InputField
              label='Password'
              type='password'
              id='password'
              name='password'
              placeholder='Enter password'
              value={values.password}
              onChange={handleChange}
              error={handleFormikErrors(touched, errors, 'password')}
            />
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