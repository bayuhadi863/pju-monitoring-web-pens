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
import { toast } from '@/components/hooks/use-toast';
import { getUserId } from '@/lib/utils/storage';

const SidebarHeader = () => {
  return <h1 className='text-xl font-semibold'>Chatbot</h1>;
};

const ChatbotLayout: React.FC = () => {
  const apiBaseUrl = import.meta.env.VITE_CHATBOT_API_BASE_URL || 'http://localhost:5000';
  console.log(apiBaseUrl);
  const { conversationId } = useParams();
  const navigate = useNavigate();
  const userId = getUserId();
  const [triggerFetch, setTriggerFetch] = useState(false);
  const [sidebarLinks, setSidebarLinks] = useState<SidebarLinkDataType[]>([
    {
      to: '/chatbot',
      label: 'Welcome',
    },
  ]);

  const handleDeleteConversation = (conversationIdDelete: string) => {
    axios
      .delete(`https://bambubot.up.railway.app/conversations/${conversationIdDelete}`, {
        headers: {
          Accept: 'application/json',
          Authorization: userId,
        },
      })
      .then(() => {
        setTriggerFetch((prev) => !prev);
        toast({
          variant: 'success',
          duration: 3000,
          title: 'Chat telah dihapus!',
          description: 'Anda berhasil menghapus chat ini.',
        });
        if (conversationId === conversationIdDelete) {
          navigate('/chatbot');
        }
      })
      .catch((error) => {
        console.error('Error deleting conversation:', error);
        toast({
          variant: 'destructive',
          duration: 3000,
          title: 'Gagal menghapus chat!',
          description: 'Silahkan coba lagi nanti.',
        });
      });
  };

  useEffect(() => {
    axios
      .get(`https://bambubot.up.railway.app/api/conversations`, {
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
          const filteredLinks = prevLinks.slice(1).filter((link) => data.some((conversation: { id: any }) => `/chatbot/${conversation.id}` === link.to));
          const uniqueNewLinks = newLinks.filter((newLink: { to: string }) => !filteredLinks.some((prevLink) => prevLink.to === newLink.to));
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
      <div className='lg:ml-64 bg-muted dark:bg-slate-900 h-screen flex flex-col relative'>
        <div className='flex items-center gap-3 absolute inset-x-0 px-4 bg-muted dark:bg-slate-900 border-b-2 border-dashed'>
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
