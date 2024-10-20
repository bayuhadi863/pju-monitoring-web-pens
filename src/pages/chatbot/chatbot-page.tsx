import React, { RefObject, useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import axios from 'axios';
import { useParams } from 'react-router';
import './styles.css';
import ChatMessages from '@/components/chatbot/chatMessages';
import { getUserId } from '@/lib/utils/storage';

type Message = {
  text: string;
  sender: 'user' | 'bot';
};

const Chatbot: React.FC = () => {
  const apiBaseUrl = import.meta.env.VITE_CHATBOT_API_BASE_URL || 'http://localhost:5000';
  const { conversationId } = useParams();
  const [text, setText] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const userId = getUserId();
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef: RefObject<HTMLDivElement> = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    axios.get(`https://bambubot.up.railway.app/api/conversations/${conversationId}`, {
      headers: {
        Accept: 'application/json',
        Authorization: userId,
      }
    }
    )
      .then((response) => {
        console.log("response", response);
        const data = response.data;
        const formattedMessages = data.map((item: { message: string }, index: number) => ({
          text: item.message,
          sender: index % 2 === 0 ? 'user' : 'bot',
        }));
        setMessages(formattedMessages);
      })
      .catch((error) => {
        console.error('Error fetching messages:', error);
      }).finally(() => {
        scrollToBottom();
      });
  }, [conversationId]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSend = async (event: any) => {
    if ((event.type === 'click' || event.key === 'Enter') && text.trim() !== '') {
      const newMessage: Message = { text, sender: 'user' };
      setMessages(prevMessages => [...prevMessages, newMessage]);

      setText('');
      setIsLoading(true);
      scrollToBottom();

      // Send the message to the server
      axios
        .post(`https://bambubot.up.railway.app/api/conversations/${conversationId}`,
          { "user_input": text },
          {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: userId
            },
          })
        .then((response) => {
          const data = response.data;

          // Add bot's response
          const strippedResponse = data.response.replace(/<\/?[^>]+(>|$)/g, '');
          const newMessage: Message = { text: strippedResponse, sender: 'bot' };
          setMessages(prevMessages => [...prevMessages, newMessage]);
        })
        .catch((error) => {
          console.error('Error:', error);
          const newMessage: Message = { text: 'Mohon maaf terjadi kesalahan, Silahkan coba lagi nanti.', sender: 'bot' };
          setMessages(prevMessages => [...prevMessages, newMessage]);
        }).finally(() => {
          setIsLoading(false);
          scrollToBottom();
        });
    }
  };

  return (
    <div className='w-full h-full flex flex-col'>
      {messages.length === 0 ? (
        <div className='flex items-center justify-center text-center w-full h-[80%]'>
          <div className='font-semibold text-lg'>
            Selamat Datang!
            <br />
            Apa yang bisa Saya bantu Hari ini?
          </div>
        </div>
      ) : (
        <ChatMessages messages={messages} isLoading={isLoading}
          messagesEndRef={messagesEndRef} />
      )}
      <div className='p-4 mb-2'>
        <div className='relative'>
          <Input
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyPress={handleSend}
            className='h-14 px-6 rounded-full shadow-md border '
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