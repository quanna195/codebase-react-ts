import React from 'react';
import { RouteComponentProps } from '@reach/router';

interface IHomeProps extends RouteComponentProps {}

const Home: React.FC<IHomeProps> = () => {
  const text = 'Home...';
  return (
    <div>
      <span>{text}</span>
    </div>
  );
};

export default Home;
