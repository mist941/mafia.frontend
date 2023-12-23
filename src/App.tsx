import React, {Suspense, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from './store/store';
import {routes} from './routing/routes';
import ProtectedRoute from './routing/ProtectedRoute';
import {Route, Routes} from 'react-router-dom';
import {UserI} from './types/user';

function App() {
  const currentUser = useSelector<RootState>(state => state.user.currentUser) as UserI;

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light');
  }, []);

  return (
    <Suspense>
      <Routes>
        {routes.map(route => (
          <Route element={<ProtectedRoute currentUser={currentUser}/>}>
            <Route path={route.path} element={<route.element/>}/>
          </Route>
        ))}
        <Route path='*' element={<p>There's nothing here: 404!</p>}/>
      </Routes>
    </Suspense>
  );
}

export default App;
