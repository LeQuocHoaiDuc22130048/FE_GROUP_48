import { useChatStore } from '@/types/store';
import ChatHeader from './ChatHeader';
import ChatInput from './ChatInput';
import ChatMessages from './ChatMessages';
import ChatInfoSidebar from './ChatInfoSidebar';

const ChatWindowLayOut = () => {
    const { activeConversation, isInfoOpen } = useChatStore();
    if (!activeConversation) {
        return (
            <div className='flex h-full w-full items-center justify-center text-muted-foreground'>
                Chọn một cuộc trò chuyện
            </div>
        );
    }
    return (
        <div className='flex h-full w-full bg-background overflow-hidden'>
            <div
                className={`flex flex-col h-full transition-all duration-300
                ${isInfoOpen ? 'flex-[0.99]' : 'flex-1'}`}
            >
                <ChatHeader />
                <ChatMessages />
                <ChatInput />
            </div>

            <div
                className={`transition-all duration-300 border-l
                ${isInfoOpen ? 'w-80' : 'w-0 overflow-hidden'}`}
            >
                <ChatInfoSidebar />
            </div>
        </div>
    );
};

export default ChatWindowLayOut;
