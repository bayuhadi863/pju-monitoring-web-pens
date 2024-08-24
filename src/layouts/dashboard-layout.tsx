import Sidebar from '@/components/dashboard/sidebar';
import React from 'react';
import { Outlet } from 'react-router';
import DashboardHeader from '@/components/dashboard/dashboard-header';
import MobileSidebar from '@/components/dashboard/mobile-sidebar';

const DashboardLayout: React.FC = () => {
  return (
    <>
      <Sidebar />
      <div className='p-4 lg:ml-64 bg-muted/40 min-h-screen'>
        <div className='flex items-center gap-3'>
          <MobileSidebar />
          <DashboardHeader />
        </div>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default DashboardLayout;
