import Sidebar from '@/components/dashboard/sidebar';
import React from 'react';
import { Outlet } from 'react-router';
import DashboardHeader from '@/components/dashboard/dashboard-header';

const DashboardLayout: React.FC = () => {
  return (
    <>
      <Sidebar />
      <div className='p-4 sm:ml-64 bg-muted/40 min-h-screen'>
        <DashboardHeader />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default DashboardLayout;
