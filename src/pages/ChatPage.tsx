import ChatWindowLayOut from '@/components/chat/ChatWindowLayOut';
import { AppSidebar } from '@/components/sidebar/app-sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import socketClient, { getUserList } from '@/socket/socketClient';
import { handleChatSocketMessage } from '@/socket/chatSocketHandler';
import { useEffect } from 'react';

const AppChat = () => {
    useEffect(() => {
        socketClient.onMessage(handleChatSocketMessage);
        getUserList();

        return () => {
            socketClient.offMessage(handleChatSocketMessage);
        }
    }, []);
    return (
        <SidebarProvider>
            <AppSidebar />
            <div className='flex h-screen w-full'>
                <ChatWindowLayOut />
            </div>
        </SidebarProvider>
    );
};

export default AppChat;
