import { cn } from '@/lib/utils';
import { useChatStore } from '@/types/store';
import { useEffect, useRef } from 'react';
import { getRoomChatMes } from '@/socket/socketClient';

const ChatMessages = () => {
    const { activeConversation, messages } = useChatStore();
    const bottomRef = useRef<HTMLDivElement>(null);
    if (!activeConversation) return null;

    const list = messages[activeConversation.id] || [];

    // Auto scroll xuống cuối
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [list.length]);

    useEffect(() => {
        if (activeConversation) {
            getRoomChatMes(activeConversation.name);
        }
    }, [activeConversation]);
    return (
        <div className='flex-1 overflow-y-auto px-4 py-3 space-y-2 bg-muted/10'>
            {list.map((msg) => (
                <div
                    key={msg.id}
                    className={cn(
                        'flex',
                        msg.sender === 'me' ? 'justify-end' : 'justify-start'
                    )}
                >
                    <div
                        className={cn(
                            'max-w-[70%] px-3 py-2 text-sm rounded-2xl',
                            msg.sender === 'me'
                                ? 'bg-primary text-primary-foreground rounded-br-none'
                                : 'bg-background border rounded-bl-none',
                            msg.type === 'sticker' && 'bg-transparent p-0 border-none',
                            msg.type === 'gif' && 'bg-transparent p-0 border-none'
                        )}
                    >
                        {msg.type === 'text' && msg.text}
                        {msg.type === 'image' && msg.imageUrl && (
                            <img
                                src={msg.imageUrl}
                                alt='Sent image'
                                className='rounded-lg max-w-full'
                            />
                        )}
                        {msg.type === 'sticker' && msg.stickerUrl && (
                            <img
                                src={msg.stickerUrl}
                                alt='Sticker'
                                className='w-32 h-32 object-contain'
                            />
                        )}
                        {msg.type === 'gif' && msg.gifUrl && (
                            <img
                                src={msg.gifUrl}
                                alt='GIF'
                                className='w-48 h-auto rounded-lg'
                            />
                        )}
                    </div>
                </div>
            ))}

            <div ref={bottomRef} />
        </div>
    );
};

export default ChatMessages;
