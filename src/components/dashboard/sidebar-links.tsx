import { SidebarLinkDataType } from '@/lib/types/sidebar-types';
import React from 'react';
import SidebarLink from './sidebar-link';
import '../styles.css';

type SidebarLinksProps = {
  links: SidebarLinkDataType[];
  fontWeight?: string;
};

const SidebarLinks: React.FC<SidebarLinksProps> = ({ links, fontWeight }) => {
  return (
    <ul>
      {links.map((link) => (
        <li
          key={link.to}
          className='sidebar-item flex justify-between'
        >
          <SidebarLink
            to={link.to}
            icon={link.icon}
            className='mb-1'
            fontWeight={fontWeight}
            rightSection={
              link.removeIcon &&
              link.onRemove && (
                <button
                  onClick={link.onRemove}
                  className='text-red-600 hover:text-red-500 dark:text-red-700 text-lg dark:hover:text-red-600 transition-colors'
                >
                  {link.removeIcon}
                </button>
              )
            }
          >
            <div>{link.label}</div>
          </SidebarLink>
        </li>
      ))}
    </ul>
  );
};

export default SidebarLinks;
