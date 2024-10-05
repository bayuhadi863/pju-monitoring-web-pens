import React from 'react';
import SidebarLink from './sidebar-link';
import { userSidebarLinks, adminSidebarLinks } from '@/lib/data/links';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <aside className='fixed top-0 left-0 z-40 w-64 h-screen border-r border-border shadow bg-background p-4 transition-transform -translate-x-full lg:translate-x-0'>
      <div className='mb-4 flex justify-center'>
        <Link
          to='/'
          className='text-xl font-semibold'
        >
          Smart PJU Monitoring
        </Link>
      </div>
      <ul>
        {userSidebarLinks.map((link) => (
          <li key={link.to}>
            <SidebarLink
              to={link.to}
              icon={link.icon}
              className='mb-1'
            >
              {link.label}
            </SidebarLink>
          </li>
        ))}
      </ul>

      <hr className='my-4 border-t border-border' />

      <ul>
        {adminSidebarLinks.map((link) => (
          <li key={link.to}>
            <SidebarLink
              to={link.to}
              icon={link.icon}
              className='mb-1'
            >
              {link.label}
            </SidebarLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
