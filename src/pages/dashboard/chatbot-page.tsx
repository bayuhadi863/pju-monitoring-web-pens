import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import axios from 'axios';
import qs from 'qs';

const Chatbot: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const [messages, setMessages] = useState<{ text: string, sender: string }[]>([]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSend = async (event: any) => {
    if ((event.type === 'click' || event.key === 'Enter') && inputValue.trim() !== '') {

      const newMessages = [
        ...messages,
        { text: inputValue, sender: 'user' }
      ];
      setMessages(newMessages);

      const formData = new FormData();
      formData.append('input_user', inputValue);

      const data = qs.stringify({
        user_input: inputValue
      });
      // Send the message to the server
      axios.post('http://localhost:5000/api/chat', data, {
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(response => {
          const data = response.data;

          // Add bot's response
          const strippedResponse = data.response.replace(/<\/?[^>]+(>|$)/g, "");
          setMessages([
            ...newMessages,
            { text: strippedResponse, sender: 'bot' }
          ]);
        })
        .catch(error => {
          console.error('Error:', error);
          setMessages([
            ...newMessages,
            { text: 'Mohon maaf terjadi kesalahan, Silahkan coba lagi nanti.', sender: 'bot' }
          ]);
        });

      setInputValue('');
    }
  };

  return (
    <div className=' w-full h-[80vh] mt-6 relative border rounded-lg shadow-md bg-background'>
      <div className='flex flex-col overflow-y-auto space-y-4 h-full p-4'>
        {messages.length === 0 ? (
          <div className='flex items-center justify-center text-center w-full h-[80%]'>
            <div className='font-semibold text-lg'>
              Selamat Datang!<br />Apa yang bisa Saya bantu Hari ini?
            </div>
          </div>
        ) : (messages.map((message, index) => (
          <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`${message.sender === 'user' ? 'bg-primary text-white' : 'bg-muted-foreground/20'} p-2 rounded-lg`}
              key={index}
            >
              {message.text}
            </div>
          </div>
        )))}
      </div>
      <div className='bg-background p-4 absolute bottom-0 left-0 right-0 rounded-lg'>
        <div className='relative'>
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleSend}
            className='h-12 rounded-lg'
            placeholder='Tulis Pertanyaan'
            required
          />
          <Button
            onClick={handleSend}
            className='absolute end-1 bottom-0 top-1 rounded-md'
          >
            Kirim
          </Button>

        </div>
      </div>
    </div>
  );
};

export default Chatbot;
