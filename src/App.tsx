import React, {Suspense, useEffect} from 'react';
import {authRoutes, routes} from './routing/routes';
import {Navigate, Outlet, Route, Routes} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {RootState} from './store/store';
import {User} from './types/user';
import paths from './routing/paths';
import {useInviteSubscription} from './hooks/useInviteSubscription';
import useSyncGameSubscription from './hooks/useSyncGameSubscription';
import useSyncChatSubscription from './hooks/useSyncChatSubscription';

function App() {
  useSyncGameSubscription();
  useSyncChatSubscription();
  const invitePopUp = useInviteSubscription();
  const currentUser = useSelector<RootState>(state => state.user.currentUser) as User;

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light');
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
      {invitePopUp}
    </Suspense>
  );
}

export default App;
