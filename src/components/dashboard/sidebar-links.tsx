import { SidebarLinkDataType } from '@/lib/types/sidebar-types';
import React from 'react';
import SidebarLink from './sidebar-link';

type SidebarLinksProps = {
  links: SidebarLinkDataType[];
  fontWeight?: string;
};

const SidebarLinks: React.FC<SidebarLinksProps> = ({ links, fontWeight }) => {
  return (
    <ul>
      {links.map((link) => (
        <li key={link.to}>
          <SidebarLink
            to={link.to}
            icon={link.icon}
            className='mb-1'
            fontWeight={fontWeight}
          >
            {link.label}
          </SidebarLink>
        </li>
      ))}
    </ul>
  );
};

export default SidebarLinks;
