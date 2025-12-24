import ChatWindowLayOut from '@/components/chat/ChatWindowLayOut';
import { AppSidebar } from '@/components/sidebar/app-sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';

const AppChat = () => {
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
