import React from 'react';
import SidebarLink from './sidebar-link';
import { sidebarLinks } from '@/lib/data/links';

const Sidebar: React.FC = () => {
  return (
    <aside className='fixed top-0 left-0 z-40 w-64 h-screen border-r border-border shadow bg-background p-4 transition-transform -translate-x-full lg:translate-x-0'>
      <h1 className='text-xl font-semibold mb-4 text-center'>Smart PJU Monitoring</h1>
      <ul>
        {sidebarLinks.map((link) => (
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
