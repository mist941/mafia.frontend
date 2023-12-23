import React, {Suspense, useEffect} from 'react';
import {authRoutes, routes} from './routing/routes';
import ProtectedRoute from './routing/ProtectedRoute';
import {Route, Routes} from 'react-router-dom';

function App() {


  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light');
  }, []);

  return (
    <Suspense>
      <Routes>
        {routes.map(route => (
          <Route key={route.path} element={<ProtectedRoute/>}>
            <Route path={route.path} element={<route.element/>}/>
          </Route>
        ))}
        {authRoutes.map(route => (
          <Route key={route.path} path={route.path} element={<route.element/>}/>
        ))}
      </Routes>
    </Suspense>
  );
}

export default App;
