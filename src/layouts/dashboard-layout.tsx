import Sidebar from '@/components/dashboard/sidebar';
import React from 'react';
import { Outlet } from 'react-router';
import DashboardHeader from '@/components/dashboard/dashboard-header';
import MobileSidebar from '@/components/dashboard/mobile-sidebar';
import DashboardFooter from '@/components/dashboard/dashboard-footer';
import SidebarLinks from '@/components/dashboard/sidebar-links';
import { Link } from 'react-router-dom';
import { userSidebarLinks, adminSidebarLinks } from '@/lib/data/links';
import MobileSidebarLinks from '@/components/dashboard/mobile-sidebar-links';

const SidebarHeader = () => {
  return (
    <Link
      to='/'
      className='text-xl font-semibold'
    >
      Smart PJU Monitoring
    </Link>
  );
};

const SidebarContent = () => {
  return (
    <div>
      <SidebarLinks links={userSidebarLinks} />
      <hr className='my-4 border-t border-border' />
      <SidebarLinks links={adminSidebarLinks} />
    </div>
  );
};

const MobileSidebarContent = () => {
  return (
    <div>
      <MobileSidebarLinks links={userSidebarLinks} />
      <hr className='my-4 border-t border-border' />
      <MobileSidebarLinks links={adminSidebarLinks} />
    </div>
  );
};

const DashboardLayout: React.FC = () => {
  return (
    <div>
      <Sidebar
        headerContent={<SidebarHeader />}
        content={<SidebarContent />}
      />
      <div className='p-4 lg:ml-64 bg-muted dark:bg-muted/40 min-h-screen'>
        <div className='flex items-center gap-3'>
          <MobileSidebar
            headerContent={<SidebarHeader />}
            content={<MobileSidebarContent />}
          />
          <DashboardHeader />
        </div>
        <main className='min-h-screen'>
          <Outlet />
        </main>
        <DashboardFooter className='mt-4' />
      </div>
    </div>
  );
};

export default DashboardLayout;
