import React, {useLayoutEffect} from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import routes from './routing/routes';
import {useSelector} from 'react-redux';
import {RootState} from './store/store';
import NotLoggedPage from './components/pages/NotLoggedPage/NotLoggedPage';

function App() {
  const currentUser = useSelector((state: RootState) => state.user.user);

  const router = createBrowserRouter(
    routes.map(route => ({...route, element: <route.element/>}))
  );

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light');
  }, []);

  if (!currentUser) return <NotLoggedPage/>;

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
