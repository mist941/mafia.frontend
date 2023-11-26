import React, {useLayoutEffect} from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import routes from './routing/routes';

function App() {
  const router = createBrowserRouter(
    routes.map(route => ({...route, element: <route.element/>}))
  );

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
