import React from 'react';
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
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
        <AiOutlineMenuUnfold className='flex lg:hidden text-xl' />
      </SheetTrigger>
      <SheetContent
        side='left'
        className='w-72 flex flex-col'
      >
        <SheetHeader>
          <SheetTitle>{headerContent}</SheetTitle>
        </SheetHeader>
        <div className='flex-1 overflow-auto'>{content}</div>
        <SheetFooter>{footerContent}</SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
