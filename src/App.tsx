import React, {lazy, useLayoutEffect} from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import routes from './routing/routes';
import {useSelector} from 'react-redux';
import {RootState} from './store/store';

const AuthPage = lazy(() => import('./components/pages/AuthPage/AuthPage'));

function App() {
  const user = useSelector<RootState>(state => state.user.user);

  const router = createBrowserRouter(
    routes.map(route => ({...route, element: <route.element/>}))
  );

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light');
  }, []);

  if (!user) return <AuthPage/>;

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
