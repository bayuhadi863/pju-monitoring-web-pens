import React, { useEffect, useState } from 'react';
import Sidebar from '@/components/dashboard/sidebar';
import MobileSidebar from '@/components/dashboard/mobile-sidebar';
import { SidebarLinkDataType } from '@/lib/types/sidebar-types';
import { Outlet } from 'react-router';
import ChatbotHeader from '@/components/chatbot/chatbot-header';
import SidebarLinks from '@/components/dashboard/sidebar-links';
import MobileSidebarLinks from '@/components/dashboard/mobile-sidebar-links';
import axios from 'axios';
import { GoTrash } from 'react-icons/go';

const SidebarHeader = () => {
  return <h1 className='text-xl font-semibold'>Chatbot</h1>;
};

const ChatbotLayout: React.FC = () => {
  const userId = localStorage.getItem('userId');
  const [sidebarLinks, setSidebarLinks] = useState<SidebarLinkDataType[]>([
    {
      to: '/chatbot',
      label: 'Welcome',
      removeIcon: <GoTrash />,
      onRemove: () => handleDeleteConversation('tes'),
    },
  ]);

  const handleDeleteConversation = (conversationId: string) => {
    axios
      .delete(`http://localhost:5000/api/conversations/${conversationId}`, {
        headers: {
          accept: 'application/json',
          Authorization: userId,
        },
      })
      .then((response) => {
        console.log('Conversation deleted:', response);
      })
      .catch((error) => {
        console.error('Error deleting conversation:', error);
      });
  };

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/conversations', {
        headers: {
          accept: 'application/json',
          Authorization: userId,
        },
      })
      .then((response) => {
        console.log(response);
        const data = response.data;
        const links = data.map((conversation: { id: string; title: string }) => ({
          to: `/chatbot/${conversation.id}`,
          label: conversation.title,
          removeIcon: <GoTrash />,
          onRemove: () => handleDeleteConversation(conversation.id),
        }));
        setSidebarLinks((prevLinks) => [...prevLinks, ...links]);
      })
      .catch((error) => {
        console.error('Error fetching conversations:', error);
      });
  }, []);

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
