import React, { RefObject } from 'react';

interface Message {
    text: string;
    sender: 'user' | 'bot';
}

interface ChatMessagesProps {
    messages: Message[];
    isLoading: boolean;
    messagesEndRef: RefObject<HTMLDivElement>;
}

const ChatMessages: React.FC<ChatMessagesProps> = ({ messages, isLoading, messagesEndRef }) => {
    return (
        <div className="flex-1 overflow-y-auto px-6 space-y-4 pt-20">
            {messages.map((message, index) => (
                <div
                    key={index}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                    <div
                        className={`max-w-[70%] break-words ${message.sender === 'user' ? 'bg-primary text-white' : 'bg-background'} py-3 px-4 rounded-xl`}
                    >
                        {message.text}
                    </div>
                </div>
            ))}
            {isLoading && (
                <div className="flex justify-start">
                    <div className="flex items-center space-x-2 bg-background p-6 rounded-lg max-w-[100px]">
                        <div className="w-3 h-3 bg-foreground rounded-full animate-bounce"></div>
                        <div className="w-3 h-3 bg-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-3 h-3 bg-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                </div>
            )}
            <div ref={messagesEndRef} />
        </div>
    );
};

export default ChatMessages;