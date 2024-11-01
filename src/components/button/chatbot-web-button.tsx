import React from 'react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { MdOutlineWebAsset } from 'react-icons/md';

const ChatbotWebButton: React.FC = () => {
  return (
    <Button
      variant='secondary'
      asChild
      className='py-6 px-6 w-80 text-white text-lg font-medium rounded-md transition-colors'
    >
      <Link
        to='/chatbot'
        className='flex items-center space-x-2'
      >
        <MdOutlineWebAsset className='w-6 h-6' />
        <span>Gunakan Chatbot di Website</span>
      </Link>
    </Button>
  );
};

export default ChatbotWebButton;
