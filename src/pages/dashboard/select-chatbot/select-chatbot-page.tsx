import ChatbotTelegramButton from '@/components/button/chatbot-telegram-button';
import ChatbotWebButton from '@/components/button/chatbot-web-button';
import React from 'react';

const SelectChatbotPage: React.FC = () => {
  return (
    <div className='h-[90vh] flex items-center justify-center'>
      <div className='max-w-96 flex flex-col justify-center items-center gap-4'>
        <h1 className='text-2xl font-semibold text-center mb-4'>Anda Bisa Menggunakan Layanan Chatbot pada Link Di Bawah Ini</h1>
        <ChatbotTelegramButton />
        <p className='text-muted-foreground'>Atau</p>
        <ChatbotWebButton />
      </div>
    </div>
  );
};

export default SelectChatbotPage;
