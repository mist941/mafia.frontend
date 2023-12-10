import React, {Suspense, useEffect} from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {RootState} from './store/store';
import {authRoutes, routes} from './routing/routes';

function App() {
  const user = useSelector<RootState>(state => state.user.user);

  const router = createBrowserRouter(
    (!user ? authRoutes : routes).map(route => ({...route, element: <route.element/>}))
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light');
  }, []);

  return (
    <Suspense>
      <RouterProvider router={router}/>
    </Suspense>
  );
}

export default App;
