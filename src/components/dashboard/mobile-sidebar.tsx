import React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetFooter } from '@/components/ui/sheet';
import { AiOutlineMenuUnfold } from 'react-icons/ai';

type MobileSidebarProps = {
  headerContent?: React.ReactNode;
  footerContent?: React.ReactNode;
  content?: React.ReactNode;
};

const MobileSidebar: React.FC<MobileSidebarProps> = ({ headerContent, footerContent, content }) => {
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
          <SheetTitle>{headerContent}</SheetTitle>
        </SheetHeader>
        <div className='mt-4'>{content}</div>
      </SheetContent>
      <SheetFooter>{footerContent}</SheetFooter>
    </Sheet>
  );
};

export default MobileSidebar;
