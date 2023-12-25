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
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {handleFormikErrors} from '../../../utils/common';
import {FormDefaultProps} from '../../../types/common';

const SignInForm: FC<FormDefaultProps<SignInRequestI>> = ({send}) => {
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
    onSubmit: (values) => {
      send(values);
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
        <form className={styles.signInForm} onSubmit={handleSubmit}>
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