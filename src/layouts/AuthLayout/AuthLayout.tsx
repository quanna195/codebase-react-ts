import React from 'react';
import { RouteComponentProps } from '@reach/router';

interface IAuthLayoutProps extends RouteComponentProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<IAuthLayoutProps> = ({ children }) => {
  const text = 'AuthLayout';
  return (
    <div>
      <span>{text}</span>
      {children}
    </div>
  );
};

export default AuthLayout;
