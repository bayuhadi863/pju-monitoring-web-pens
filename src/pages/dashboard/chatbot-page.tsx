import React from 'react';
import { Button } from '@/components/ui/button';

const Chatbot: React.FC = () => {
  const messages = [
    { text: 'Good Morning', sender: 'user' },
    { text: 'Good Morning, How can I assist you today?', sender: 'bot' },
    { text: 'Good Morning, How can I assist you today?', sender: 'bot' },
    { text: 'Good Morning, How can I assist you today?', sender: 'bot' },
    // { text: "Good Morning, How can I assist you today?", sender: 'bot' },
    // { text: "Good Morning, How can I assist you today?", sender: 'bot' },
    // { text: "Good Morning, How can I assist you today?", sender: 'bot' },
    // { text: "Good Morning, How can I assist you today?", sender: 'bot' },
    // { text: "Good Morning, How can I assist you today?", sender: 'bot' },
    // { text: "Good Morning, How can I assist you today?", sender: 'bot' },
    // { text: "Good Morning, How can I assist you today?", sender: 'bot' },
    // { text: "Good Morning, How can I assist you today?", sender: 'bot' },
    // { text: "Good Morning, How can I assist you today?", sender: 'bot' },
    // { text: "Good Morning, How can I assist you today?", sender: 'bot' },
    // { text: "Good Morning, How can I assist you today?", sender: 'bot' },
    // { text: "Good Morning, How can I assist you today?", sender: 'bot' },
    // { text: "Good Morning, How can I assist you today?", sender: 'bot' },
    // { text: "Good Morning, How can I assist you today?", sender: 'bot' },
    // { text: "Good Morning, How can I assist you today?", sender: 'bot' },
    // { text: "Good Morning, How can I assist you today?", sender: 'bot' },
    // { text: "Good Morning, How can I assist you today?", sender: 'bot' },
  ];

  return (
    <div className=' w-full h-[84vh] mt-6 relative border rounded-lg shadow-md bg-background'>
      <div className='overflow-y-auto space-y-4 h-full p-4'>
        {messages.map((message, index) => (
          <div className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`${message.sender === 'user' ? 'bg-primary text-white' : 'bg-muted-foreground/20'} p-2 rounded-lg`}
              key={index}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className='bg-background p-4 absolute bottom-0 left-0 right-0 rounded-lg'>
        <div className='relative'>
          <input
            className='block w-full p-4 text-sm bg-background rounded-lg border border-muted-foreground'
            placeholder='Tulis Pertanyaan'
            required
          />
          <Button className='absolute end-2.5 bottom-2.5 top-1.5 rounded-md'>Kirim</Button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
