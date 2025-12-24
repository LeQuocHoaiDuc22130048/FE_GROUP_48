import { cn } from '@/lib/utils';
import { useChatStore } from '@/types/store';
import { useEffect, useRef } from 'react';

const ChatMessages = () => {
    const { activeConversation, messages } = useChatStore();
    const bottomRef = useRef<HTMLDivElement>(null);
    if (!activeConversation) return null;

    const list = messages[activeConversation.id] || [];

    // Auto scroll xuống cuối
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [list.length]);
    return (
        <div className='flex-1 overflow-y-auto px-4 py-3 space-y-2 bg-muted/30'>
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
                                : 'bg-background border rounded-bl-none'
                        )}
                    >
                        {msg.text}
                    </div>
                </div>
            ))}

            <div ref={bottomRef} />
        </div>
    );
};

export default ChatMessages;
