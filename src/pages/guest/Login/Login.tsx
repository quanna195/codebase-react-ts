import React from 'react';
import { RouteComponentProps } from '@reach/router';

interface ILoginProps extends RouteComponentProps {}

const Login: React.FC<ILoginProps> = () => {
  const text = 'Login...';
  return (
    <div>
      <span>{text}</span>
    </div>
  );
};

export default Login;
