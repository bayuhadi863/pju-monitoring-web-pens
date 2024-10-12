import React, { useEffect, useState } from 'react';
import Sidebar from '@/components/dashboard/sidebar';
import MobileSidebar from '@/components/dashboard/mobile-sidebar';
import { SidebarLinkDataType } from '@/lib/types/sidebar-types';
import { Outlet, useParams } from 'react-router';
import ChatbotHeader from '@/components/chatbot/chatbot-header';
import SidebarLinks from '@/components/dashboard/sidebar-links';
import MobileSidebarLinks from '@/components/dashboard/mobile-sidebar-links';
import axios from 'axios';
import { GoTrash } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';

const SidebarHeader = () => {
  return <h1 className='text-xl font-semibold'>Chatbot</h1>;
};

const ChatbotLayout: React.FC = () => {
  const { conversationId } = useParams();
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');
  const [triggerFetch, setTriggerFetch] = useState(false);
  const [sidebarLinks, setSidebarLinks] = useState<SidebarLinkDataType[]>([
    {
      to: '/chatbot',
      label: 'Welcome'
    },
  ]);

  const handleDeleteConversation = (conversationIdDelete: string) => {    
    axios
      .delete(`http://localhost:5000/api/conversations/${conversationIdDelete}`, {
        headers: {
          Accept: 'application/json',
          Authorization: userId,
        },
      })
      .then((response) => {
        console.log('Conversation deleted:', response);
        setTriggerFetch(prev => !prev);
        if (conversationId === conversationIdDelete) {
          navigate('/chatbot');
        }
      })
      .catch((error) => {
        console.error('Error deleting conversation:', error);
      });
  };

  useEffect(() => {  
    axios
      .get('http://localhost:5000/api/conversations', {
        headers: {
          Accept: 'application/json',
          Authorization: userId,
        },
      })
      .then((response) => {
        const data = response.data;
        const newLinks = data.map((conversation: { id: string; title: string }) => ({
          to: `/chatbot/${conversation.id}`,
          label: conversation.title,
          removeIcon: <GoTrash />,
          onRemove: () => handleDeleteConversation(conversation.id),
        }));

        setSidebarLinks((prevLinks) => {
          const firstLink = prevLinks[0];
          const filteredLinks = prevLinks.slice(1).filter(link => 
            data.some((conversation: { id: any; }) => `/chatbot/${conversation.id}` === link.to)
          );
          const uniqueNewLinks = newLinks.filter((newLink: { to: string; }) => 
            !filteredLinks.some(prevLink => prevLink.to === newLink.to)
          );
          return [firstLink, ...filteredLinks, ...uniqueNewLinks];
        });
      })
      .catch((error) => {
        console.error('Error fetching conversations:', error);
      });
  }, [triggerFetch]);

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
          {/* <Outlet /> */}
          <Outlet context={{ setTriggerFetch }} />
        </main>
      </div>
    </div>
  );
};

export default ChatbotLayout;
