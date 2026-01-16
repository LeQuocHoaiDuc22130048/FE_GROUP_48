import ChatWindowLayOut from '@/components/chat/ChatWindowLayOut';
import { AppSidebar } from '@/components/sidebar/app-sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { connectChatSocket } from '@/socket/chatSocket';
import { handleChatSocketMessage } from '@/socket/chatSocketHandler';
import { useChatStore } from '@/types/store';
import { useEffect } from 'react';

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL as string;
const AppChat = () => {
    const setSocket = useChatStore((s) => s.setSocket);

    useEffect(() => {
        const socket = connectChatSocket(SOCKET_URL);

        socket.onmessage = handleChatSocketMessage;
        setSocket(socket);
        return () => {
            socket.close();
            setSocket(null);
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
