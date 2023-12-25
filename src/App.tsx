import React, {Suspense, useEffect} from 'react';
import {authRoutes, routes} from './routing/routes';
import {Navigate, Outlet, Route, Routes} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {RootState} from './store/store';
import {UserI} from './types/user';
import paths from './routing/paths';

function App() {
  const currentUser = useSelector<RootState>(state => state.user.currentUser) as UserI;

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  return (
    <Suspense>
      <Routes>
        {routes.map(route => (
          <Route
            key={route.path}
            element={currentUser ? <Outlet/> : <Navigate to={paths.signIn} replace/>}
          >
            <Route path={route.path} element={<route.element/>}/>
          </Route>
        ))}
        {authRoutes.map(route => (
          <Route
            key={route.path}
            element={!currentUser ? <Outlet/> : <Navigate to={paths.main} replace/>}
          >
            <Route path={route.path} element={<route.element/>}/>
          </Route>
        ))}
      </Routes>
    </Suspense>
  );
}

export default App;
