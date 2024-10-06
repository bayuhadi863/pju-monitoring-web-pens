import React from 'react';

type SidebarProps = {
  headerContent?: React.ReactNode;
  footerContent?: React.ReactNode;
  content?: React.ReactNode;
};

const Sidebar: React.FC<SidebarProps> = ({ headerContent, footerContent, content }) => {
  return (
    <aside className='fixed top-0 left-0 z-40 w-64 h-screen border-r border-border shadow bg-background flex flex-col transition-transform -translate-x-full lg:translate-x-0'>
      <div className='p-4 '>{headerContent}</div>
      <div className='flex-1 overflow-auto p-4'>{content}</div>
      <div className='p-4'>{footerContent}</div>
    </aside>
  );
};

export default Sidebar;
