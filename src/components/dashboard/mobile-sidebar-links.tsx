import { SidebarLinkDataType } from '@/lib/types/sidebar-types';
import React from 'react';
import MobileSidebarLink from './mobile-sidebar-link';
import { SheetClose } from '../ui/sheet';

type MobileSidebarLinksProps = {
  links: SidebarLinkDataType[];
  fontWeight?: string;
};

const MobileSidebarLinks: React.FC<MobileSidebarLinksProps> = ({ links, fontWeight }) => {
  return (
    <ul>
      {links.map((link, i) => (
        <li key={i}>
          <SheetClose className='w-full'>
            <MobileSidebarLink
              to={link.to}
              icon={link.icon}
              className='w-full mb-1'
              fontWeight={fontWeight}
            >
              {link.label}
            </MobileSidebarLink>
          </SheetClose>
        </li>
      ))}
    </ul>
  );
};

export default MobileSidebarLinks;
