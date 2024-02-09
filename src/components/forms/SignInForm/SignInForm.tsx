import React, {FC} from 'react';
import EssentialBlock from '../../atoms/EssentialBlock/EssentialBlock';
import Button from '../../atoms/Button/Button';
import Typography from '../../atoms/Typography/Typography';
import styles from './SignInForm.module.scss';
import {useNavigate} from 'react-router-dom';
import paths from '../../../routing/paths';
import Logo from '../../atoms/Logo/Logo';
import InputField from '../../molecules/InputField/InputField';
import {SignResponseI} from '../../../types/auth';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {handleFormikErrors} from '../../../utils/common';
import {FetchResult, useMutation} from '@apollo/client';
import {SIGN_IN} from '../../../graphql/mutations';
import {updateCurrentSessionData} from '../../../utils/auth';

const SignInForm: FC = () => {
  const [signIn] = useMutation(SIGN_IN);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: async (values): Promise<void> => {
      const signInResponse: FetchResult<SignResponseI> = await signIn({
        variables: {signinInput: values},
      });

      if (signInResponse.data) {
        updateCurrentSessionData(signInResponse.data);
        navigate(paths.main);
      }
    },
  });

  const {handleSubmit, values, handleChange, errors, touched} = formik;

  const redirectToSignUpPage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate(paths.signUp);
  }

  return (
    <>
      <div className={styles.logoWrap}><Logo/></div>
      <EssentialBlock padding='25px'>
        <form className='formContainer' onSubmit={handleSubmit}>
          <Typography.Heading3>
            Sign In
          </Typography.Heading3>
          <div className='fieldsWrap'>
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