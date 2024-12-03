import React from 'react';
import { Button } from '../ui/button';
import { FaTelegram } from 'react-icons/fa';

const ChatbotTelegramButton: React.FC = () => {
  return (
    <Button
      asChild
      className='bg-[#0088cc] hover:bg-[#0077b3] text-white text-lg font-medium py-6 px-6 w-80 rounded-md transition-colors'
    >
      <a
        href='https://t.me/KeputihBambuBot'
        target='_blank'
        className='flex items-center space-x-2'
      >
        <FaTelegram className='w-7 h-7' />
        <span>Gunakan Chatbot di Telegram</span>
      </a>
    </Button>
  );
};

export default ChatbotTelegramButton;
