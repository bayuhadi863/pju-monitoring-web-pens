import Sidebar from '@/components/dashboard/sidebar';
import React from 'react';
import { Outlet } from 'react-router';
import DashboardHeader from '@/components/dashboard/dashboard-header';
import MobileSidebar from '@/components/dashboard/mobile-sidebar';
import DashboardFooter from '@/components/dashboard/dashboard-footer';
import SidebarLinks from '@/components/dashboard/sidebar-links';
import { Link } from 'react-router-dom';
import { userSidebarLinks, operatorSidebarLinks, adminSidebarLinks } from '@/lib/data/links';
import MobileSidebarLinks from '@/components/dashboard/mobile-sidebar-links';
import appLogo from '@/assets/app-logo-light-blue.png';
import { useAuth } from '@/context/auth-context';
import { checkIsAdmin } from '@/lib/utils/check-role';

const SidebarHeader = () => {
    return (
        <Link
            to='/'
            className='flex items-center gap-2'
        >
            <img
                src={appLogo}
                alt='App Logo'
                className='w-8 h-8'
            />
            <span className='text-lg font-semibold text-primary uppercase'>Smart PJU Monitor</span>
        </Link>
    );
};

const SidebarContent = () => {
    const { user, loading } = useAuth();
    const isAdmin = checkIsAdmin(user?.role_code || '');

    return (
        <div>
            <SidebarLinks links={userSidebarLinks} />
            <hr className='my-4 border-t border-border' />
            <SidebarLinks links={operatorSidebarLinks} />
            {!loading && isAdmin && (
                <>
                    <hr className='my-4 border-t border-border' />
                    <SidebarLinks links={adminSidebarLinks} />
                </>
            )}
        </div>
    );
};

const MobileSidebarContent = () => {
    const { user, loading } = useAuth();
    const isAdmin = checkIsAdmin(user?.role_code || '');

    return (
        <div>
            <MobileSidebarLinks links={userSidebarLinks} />
            <hr className='my-4 border-t border-border' />
            <MobileSidebarLinks links={operatorSidebarLinks} />

            {!loading && isAdmin && (
                <>
                    <hr className='my-4 border-t border-border' />
                    <MobileSidebarLinks links={adminSidebarLinks} />
                </>
            )}
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
            <div className='lg:ml-64 bg-muted dark:bg-muted/40 min-h-screen'>
                <div className='flex items-center gap-3 px-4 py-3 border-b-2 border-dashed'>
                    <MobileSidebar
                        headerContent={<SidebarHeader />}
                        content={<MobileSidebarContent />}
                    />
                    <DashboardHeader />
                </div>
                <main className='min-h-[85vh] p-4'>
                    <Outlet />
                </main>
                <DashboardFooter />
            </div>
        </div>
    );
};

export default DashboardLayout;
