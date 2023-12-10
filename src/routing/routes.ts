import paths from './paths';
import {lazy} from 'react';

const MainPage = lazy(() => import('../components/pages/MainPage/MainPage'));
const SignUpPage = lazy(() => import('../components/pages/SignUpPage/SignUpPage'));

export const routes= [
  {
    path: paths.main,
    element: MainPage,
  }
];

export const authRoutes= [
  {
    path: paths.signUp,
    element: SignUpPage,
  },
  {
    path: paths.signIn,
    element: SignUpPage,
  }
];