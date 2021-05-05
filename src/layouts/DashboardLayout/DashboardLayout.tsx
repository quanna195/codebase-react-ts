import React from 'react';
import { RouteComponentProps } from '@reach/router';

interface IDashboardLayoutProps extends RouteComponentProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<IDashboardLayoutProps> = ({ children }) => {
  const text = 'DashboardLayout';
  return (
    <div>
      <span>{text}</span>
      {children}
    </div>
  );
};

export default DashboardLayout;
