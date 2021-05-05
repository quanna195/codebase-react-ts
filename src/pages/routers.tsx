import React, { lazy, Suspense } from 'react';
import { Redirect, RouteComponentProps } from '@reach/router';

import authHelpers from '@/services/helpers';
import Loading from '@/components/Loading';

const retryLoadComponent = (fn: () => Promise<unknown>, retriesLeft = 5, interval = 1000): any =>
  new Promise((resolve, reject) => {
    fn()
      .then(resolve)
      .catch((error) => {
        setTimeout(() => {
          if (retriesLeft === 1) {
            reject(error);
            return;
          }

          retryLoadComponent(fn, retriesLeft - 1, interval).then(resolve, reject);
        }, interval);
      });
  });

const Login = lazy(() => retryLoadComponent(() => import('@/pages/guest/Login')));
const Home = lazy(() => retryLoadComponent(() => import('@/pages/auth/Home')));

export const Paths = {
  Auth: '/auth',
  Login: '/login',

  Dashboard: '/dashboard',
  Home: '/',

  Rest: '*',
};

export const Pages = {
  Home,
  Login,
};

interface IRouteProps extends RouteComponentProps {
  component: React.FC;
}

export const ProtectedRoute: React.FC<IRouteProps> = ({ component: Component, ...rest }) => {
  const loggedIn = authHelpers.getAccessToken();
  return loggedIn ? (
    <Suspense fallback={<Loading />}>
      <Component {...rest} />
    </Suspense>
  ) : (
    <Redirect from="" to={`${Paths.Auth}${Paths.Login}`} noThrow />
  );
};

export const PublicRoute: React.FC<IRouteProps> = ({ component: Component, ...rest }) => (
  <Suspense fallback={<Loading />}>
    <Component {...rest} />
  </Suspense>
);
