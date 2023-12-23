import React from 'react';
import {UserI} from '../types/user';
import {Navigate, Outlet} from 'react-router-dom';
import paths from './paths';
import {useSelector} from 'react-redux';
import {RootState} from '../store/store';


const ProtectedRoute = () => {
  const currentUser = useSelector<RootState>(state => state.user.currentUser) as UserI;

  if (!currentUser) {
    return <Navigate to={paths.signIn} replace/>;
  }

  return <Outlet/>;
};

export default ProtectedRoute;