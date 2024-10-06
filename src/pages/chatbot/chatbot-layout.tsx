import React from 'react';
import Sidebar from '@/components/dashboard/sidebar';
import MobileSidebar from '@/components/dashboard/mobile-sidebar';
import { SidebarLinkDataType } from '@/lib/types/sidebar-types';
import { Outlet } from 'react-router';
import ChatbotHeader from '@/components/chatbot/chatbot-header';
import SidebarLinks from '@/components/dashboard/sidebar-links';
import MobileSidebarLinks from '@/components/dashboard/mobile-sidebar-links';

const SidebarHeader = () => {
  return <h1 className='text-xl font-semibold'>Chatbot</h1>;
};

const ChatbotLayout: React.FC = () => {
  const sidebarLinks: SidebarLinkDataType[] = [
    {
      to: '/chatbot',
      label: 'Welcome',
    },
    {
      to: '/chatbot/1',
      label: 'Obrolan 1',
    },
    {
      to: '/chatbot/2',
      label: 'Obrolan 2',
    },
    {
      to: '/chatbot/3',
      label: 'Obrolan 3',
    },
    {
      to: '/chatbot/4',
      label: 'Obrolan 4',
    },
    {
      to: '/chatbot/5',
      label: 'Obrolan 5',
    },
    {
      to: '/chatbot/6',
      label: 'Obrolan 6',
    },
    {
      to: '/chatbot/7',
      label: 'Obrolan 7',
    },
    {
      to: '/chatbot/8',
      label: 'Obrolan 8',
    },
    {
      to: '/chatbot/9',
      label: 'Obrolan 9',
    },
    {
      to: '/chatbot/10',
      label: 'Obrolan 10',
    },
    {
      to: '/chatbot/11',
      label: 'Obrolan 11',
    },
    {
      to: '/chatbot/12',
      label: 'Obrolan 12',
    },
  ];

  return (
    <div>
      <Sidebar
        headerContent={<SidebarHeader />}
        content={
          <SidebarLinks
            links={sidebarLinks}
            fontWeight='font-normal'
          />
        }
      />
      <div className='px-4 lg:ml-64 bg-muted dark:bg-muted/40 h-screen flex flex-col relative'>
        <div className='flex items-center gap-3 absolute inset-x-0 px-4'>
          <MobileSidebar
            headerContent={<SidebarHeader />}
            content={
              <MobileSidebarLinks
                links={sidebarLinks}
                fontWeight='font-normal'
              />
            }
          />
          <ChatbotHeader />
        </div>
        <main className='h-full'>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default ChatbotLayout;
