import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import axios from 'axios';
import qs from 'qs';
import { useParams } from 'react-router';

const Chatbot: React.FC = () => {
  const { conversationId } = useParams();

  const [inputValue, setInputValue] = useState<string>('');

  const [messages, setMessages] = useState<{ text: string; sender: string }[]>([]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSend = async (event: any) => {
    if ((event.type === 'click' || event.key === 'Enter') && inputValue.trim() !== '') {
      const newMessages = [...messages, { text: inputValue, sender: 'user' }];
      setMessages(newMessages);

      const formData = new FormData();
      formData.append('input_user', inputValue);

      const data = qs.stringify({
        user_input: inputValue,
      });
      // Send the message to the server
      axios
        .post('http://localhost:5000/api/chat', data, {
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        })
        .then((response) => {
          const data = response.data;

          // Add bot's response
          const strippedResponse = data.response.replace(/<\/?[^>]+(>|$)/g, '');
          setMessages([...newMessages, { text: strippedResponse, sender: 'bot' }]);
        })
        .catch((error) => {
          console.error('Error:', error);
          setMessages([...newMessages, { text: 'Mohon maaf terjadi kesalahan, Silahkan coba lagi nanti.', sender: 'bot' }]);
        });

      setInputValue('');
    }
  };

  return (
    <div className='w-full h-full flex flex-col'>
      <div className='flex-1 overflow-auto space-y-4 p-4 pt-20'>
        <div>Ini obrolan dengan conversationId: {conversationId}</div>
        {messages.length === 0 ? (
          <div className='flex items-center justify-center text-center w-full h-[80%]'>
            <div className='font-semibold text-lg'>
              Selamat Datang!
              <br />
              Apa yang bisa Saya bantu Hari ini?
            </div>
          </div>
        ) : (
          messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`${message.sender === 'user' ? 'bg-primary text-white' : 'bg-background'} py-3 px-4 rounded-xl`}
                key={index}
              >
                {message.text}
              </div>
            </div>
          ))
        )}
      </div>
      <div className='p-4 mb-2'>
        <div className='relative'>
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleSend}
            className='h-14 px-6 rounded-full'
            placeholder='Tulis Pertanyaan'
            required
          />
          <Button
            onClick={handleSend}
            className='absolute end-2 bottom-0 top-2 rounded-full'
          >
            Kirim
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
