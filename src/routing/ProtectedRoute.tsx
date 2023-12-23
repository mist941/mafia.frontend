import React, {FC} from 'react';
import {UserI} from '../types/user';
import {Navigate, Outlet} from 'react-router-dom';
import paths from './paths';

type ProtectedRouteProps = {
  currentUser?: UserI;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({currentUser}) => {

  if (!currentUser) {
    return <Navigate to={paths.signIn}/>;
  }

  return <Outlet/>;
};

export default ProtectedRoute;