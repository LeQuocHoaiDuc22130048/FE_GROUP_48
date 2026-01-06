import { useChatStore } from '@/types/store';
import { Image, Smile, Sticker } from 'lucide-react';
import { useRef, useState } from 'react';
import EmojiPicker from 'emoji-picker-react';

const ChatInput = () => {
    const { activeConversation, sendMessage } = useChatStore();
    const [text, setText] = useState('');
    const [openEmoji, setOpenEmoji] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    if (!activeConversation) return null;

    const handleSendText = () => {
        if (!text.trim()) return;

        sendMessage(activeConversation.id, {
            type: 'text',
            text
        });

        setText('');
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSendText();
        }
    };

    const openFilePicker = () => {
        fileInputRef.current?.click();
    };

    const handleSelectImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;

        Array.from(e.target.files).forEach((file) => {
            sendMessage(activeConversation.id, {
                type: 'image',
                file
            });
        });

        e.target.value = '';
    };

    return (
        <div className='items-center gap-2 rounded-2xl py-2'>
            <div className='flex px-4 gap-4 border-t py-1.5'>
                <button
                    className='h-9 w-9 flex items-center justify-center rounded-md hover:bg-muted'
                    onClick={openFilePicker}
                >
                    <Image />
                </button>

                <button className='h-9 w-9 flex items-center justify-center rounded-md hover:bg-muted'>
                    <Sticker />
                </button>

                <button className='h-9 w-9 flex items-center justify-center rounded-md hover:bg-muted'>
                    <img
                        src='/src/assets/svg/gif-svgrepo-com.svg'
                        alt='gif'
                        width={30}
                    />
                </button>
            </div>
            <div className='flex-1 flex items-center px-4 py-1.5 relative border-t'>
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder='Nhập tin nhắn...'
                    className='w-full border-none outline-none text-[15px] bg-transparent focus:ring-0'
                    onKeyDown={handleKeyDown}
                />

                <button
                    onClick={() => setOpenEmoji(!openEmoji)}
                    className='p-1 hover:bg-white/10 rounded-full cursor-pointer'
                >
                    <Smile className='h-6 w-6 text-muted-foreground' />
                </button>

                {openEmoji && (
                    <div className='absolute bottom-9 right-6 z-50'>
                        <EmojiPicker
                            onEmojiClick={(emojiData) =>
                                setText((prev) => prev + emojiData.emoji)
                            }
                            height={350}
                            width={300}
                        />
                    </div>
                )}
            </div>
            <input
                ref={fileInputRef}
                type='file'
                accept='image/*'
                multiple
                hidden
                onChange={handleSelectImage}
            />
        </div>
    );
};

export default ChatInput;
