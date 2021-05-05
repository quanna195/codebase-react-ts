import React, { useEffect } from 'react';
import { Router, Redirect } from '@reach/router';
import { useDispatch } from 'react-redux';

import { uiActions } from '@/redux/actions';
import { Paths, Pages, ProtectedRoute, PublicRoute } from '@/pages/routers';
import DashboardLayout from '@/layouts/DashboardLayout';
import AuthLayout from '@/layouts/AuthLayout';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const updateSize = () => {
      dispatch(uiActions.setDevice(window.innerWidth));
    };
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [dispatch]);

  return (
    <Router primary={false}>
      <DashboardLayout path={Paths.Dashboard}>
        <ProtectedRoute path={Paths.Home} component={Pages.Home} />
        <Redirect noThrow from={Paths.Rest} to={`${Paths.Dashboard}${Paths.Home}`} />
      </DashboardLayout>

      <AuthLayout path={Paths.Auth}>
        <PublicRoute path={Paths.Login} component={Pages.Login} />
        <Redirect noThrow from={Paths.Rest} to={`${Paths.Auth}${Paths.Login}`} />
      </AuthLayout>

      <Redirect noThrow from={Paths.Rest} to={`${Paths.Dashboard}${Paths.Home}`} />
    </Router>
  );
};

export default App;
