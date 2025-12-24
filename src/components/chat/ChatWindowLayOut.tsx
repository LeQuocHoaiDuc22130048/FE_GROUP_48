import { useChatStore } from '@/types/store';
import ChatHeader from './ChatHeader';
import ChatInput from './ChatInput';
import ChatMessages from './ChatMessages';
import ChatInfoSidebar from './ChatInfoSidebar';

const ChatWindowLayOut = () => {
    const { activeConversation } = useChatStore();
    if (!activeConversation) {
        return (
            <div className='flex h-full w-full items-center justify-center text-muted-foreground'>
                Chọn một cuộc trò chuyện
            </div>
        );
    }
    return (
        <div className='relative flex h-full w-full bg-background'>
            <div className='flex flex-col h-full w-full bg-background'>
                <ChatHeader />
                <ChatMessages />
                <ChatInput />
            </div>
            <ChatInfoSidebar />
        </div>
    );
};

export default ChatWindowLayOut;
