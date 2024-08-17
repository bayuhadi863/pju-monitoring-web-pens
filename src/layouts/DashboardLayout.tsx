import React from 'react';
import { Outlet } from 'react-router';

const DashboardLayout: React.FC = () => {
  return (
    <div>
      <p>Dashboard Layout</p>
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
