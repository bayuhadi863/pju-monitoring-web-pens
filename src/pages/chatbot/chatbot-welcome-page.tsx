import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import axios from 'axios';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { getUserId } from '@/lib/utils/storage';

const ChatbotWelcomePage: React.FC = () => {
    // const apiBaseUrl = import.meta.env.VITE_CHATBOT_API_BASE_URL || 'http://localhost:5000';
    const navigate = useNavigate();
    const { setTriggerFetch } = useOutletContext() as any;
    const [chatStarted, setChatStarted] = useState(false);
    const [title, setTitle] = useState('');
    const [welcomeMessage, setWelcomeMessage] = useState('Selamat Datang!\nApa yang bisa Saya bantu Hari ini?');

    const handleStartChat = () => {
        setChatStarted(true);
    };

    const handleSend = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && title) {
            const userId = getUserId();

            //buat conversation
            axios
                .post(
                    `https://bambubot.up.railway.app/api/conversations`,
                    { title: title },
                    {
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                            Authorization: userId,
                        },
                    }
                )
                .then((response) => {
                    const data = response.data.id;

                    //kirim pesan user
                    axios
                        .post(
                            `https://bambubot.up.railway.app/api/conversations/${data}`,
                            { user_input: title },
                            {
                                headers: {
                                    Accept: 'application/json',
                                    'Content-Type': 'application/json',
                                    Authorization: userId,
                                },
                            }
                        )
                        .catch((error) => {
                            console.error('Error in second POST request:', error);
                        })
                        .finally(() => {
                            setTriggerFetch((prev: any) => !prev);
                            navigate(`/chatbot/${data}`);
                        });
                })
                .catch((error) => {
                    console.error('Error in first POST request:', error);
                    setWelcomeMessage('Mohon maaf terjadi kesalahan\nSilahkan coba lagi nanti.');
                })
                .finally(() => {
                    setTitle('');
                });
        }
    };

    return (
        <div className='h-full w-full flex flex-col justify-center items-center font-semibold text-lg'>
            {!chatStarted ? (
                <>
                    <h1 className='text-center'>Selamat Datang Di Chatbot</h1>
                    <p className='text-center'>Buat obrolan baru untuk mulai menggunakan chatbot</p>
                    <Button
                        onClick={handleStartChat}
                        className='mt-2'
                    >
                        Start New Chat
                    </Button>
                </>
            ) : (
                <>
                    <div className='overflow-auto space-y-4 pt-20'>
                        <div className='flex items-center justify-center text-center w-full'>
                            <div className='font-semibold text-lg'>
                                {welcomeMessage.split('\n').map((line, index) => (
                                    <React.Fragment key={index}>
                                        {line}
                                        <br />
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='w-[80%] p-4 mb-2'>
                        <div className='relative'>
                            <Input
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                onKeyDown={handleSend}
                                className='h-14 px-6 rounded-full'
                                placeholder='Tulis Pertanyaan'
                                required
                            />
                            <Button
                                onClick={() => handleSend({ key: 'Enter' } as React.KeyboardEvent<HTMLInputElement>)}
                                className='absolute end-2 bottom-0 top-2 rounded-full'
                            >
                                Kirim
                            </Button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default ChatbotWelcomePage;
