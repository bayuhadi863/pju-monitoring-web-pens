import React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { sidebarLinks } from '@/lib/data/links';
import MobileSidebarLink from './mobile-sidebar-link';
import { Link } from 'react-router-dom';

const MobileSidebar: React.FC = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <button className='lg:hidden focus:border border-gray-800 rounded p-1 '>
          <AiOutlineMenuUnfold className='text-xl' />
        </button>
      </SheetTrigger>
      <SheetContent
        side='left'
        className='w-72'
      >
        <SheetHeader>
          <SheetTitle>
            <Link to='/'>Smart PJU Monitoring</Link>
          </SheetTitle>
        </SheetHeader>
        <div className='mt-4'>
          <ul>
            {sidebarLinks.map((link, i) => (
              <li key={i}>
                <SheetClose className='w-full'>
                  <MobileSidebarLink
                    to={link.to}
                    icon={link.icon}
                    className='w-full mb-1'
                  >
                    {link.label}
                  </MobileSidebarLink>
                </SheetClose>
              </li>
            ))}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
