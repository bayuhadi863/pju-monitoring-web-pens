import Sidebar from '@/components/dashboard/sidebar';
import React from 'react';
import { Outlet } from 'react-router';
import DashboardHeader from '@/components/dashboard/dashboard-header';
import MobileSidebar from '@/components/dashboard/mobile-sidebar';
import DashboardFooter from '@/components/dashboard/dashboard-footer';

const DashboardLayout: React.FC = () => {
  return (
    <div>
      <Sidebar />
      <div className='p-4 lg:ml-64 bg-muted dark:bg-muted/40 min-h-screen'>
        <div className='flex items-center gap-3'>
          <MobileSidebar />
          <DashboardHeader />
        </div>
        <main className=''>
          <Outlet />
        </main>
        <DashboardFooter className='mt-4' />
      </div>
    </div>
  );
};

export default DashboardLayout;
