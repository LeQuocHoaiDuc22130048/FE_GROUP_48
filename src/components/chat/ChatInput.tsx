import { useChatStore } from '@/types/store';
import { Send, Smile } from 'lucide-react';
import { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';

const ChatInput = () => {
    const [text, setText] = useState('');
    const [openEmoji, setOpenEmoji] = useState(false);

    const { activeConversation, sendMessage } = useChatStore();
    if (!activeConversation) return null;
    const handleSend = () => {
        if (!text.trim()) return;
        sendMessage(activeConversation.id, text);
        setText('');
    };

    return (
        <div className='relative h-14 border-t px-3 flex items-center gap-2'>
            <button
                onClick={() => setOpenEmoji(!openEmoji)}
                className='h-9 w-9 flex items-center justify-center rounded-md hover:bg-muted'
            >
                <Smile className='h-5 w-5 text-muted-foreground' />
            </button>

            {openEmoji && (
                <div className='absolute bottom-16 left-3 z-50'>
                    <EmojiPicker
                        onEmojiClick={(emojiData) =>
                            setText((prev) => prev + emojiData.emoji)
                        }
                        theme='light'
                        height={350}
                        width={300}
                    />
                </div>
            )}

            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder='Nhập tin nhắn...'
                className='flex-1 h-9 rounded-md border px-3 text-sm'
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />

            <button
                onClick={handleSend}
                className='h-9 w-9 rounded-md bg-primary text-primary-foreground flex items-center justify-center'
            >
                <Send className='h-4 w-4' />
            </button>
        </div>
    );
};

export default ChatInput;
