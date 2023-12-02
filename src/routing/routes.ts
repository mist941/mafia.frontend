import paths from './paths';
import {lazy} from 'react';

const MainPage = lazy(() => import('../components/pages/MainPage/MainPage'));

export default [
  {
    path: paths.main,
    element: MainPage,
  }
];