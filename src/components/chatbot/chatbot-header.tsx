import React from 'react';
import ThemeSwitch from '../theme/theme-switch';

const ChatbotHeader: React.FC = () => {
  return (
    <div className='w-full py-4 flex justify-between items-center'>
      <p>Chatbot Header</p>
      <ThemeSwitch />
    </div>
  );
};

export default ChatbotHeader;
