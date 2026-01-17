import type { User } from '@/types/type';
import { useChatStore } from '@/types/store';

export const handleChatSocketMessage = (message: any) => {
    try {
        // const message = JSON.parse(event.data); // Already parsed in socketClient

        switch (message.event) {
            case 'USER_LIST': {
                const users: User[] = message.data;
                useChatStore.getState().setUsers(users);
                break;
            }

            case 'GET_ROOM_CHAT_MES': {
                const { name, messages } = message.data;
                if (name && messages) {
                    useChatStore.getState().setMessages(name, messages);
                }
                break;
            }

            // Sau này:
            // case 'NEW_MESSAGE':
            // case 'USER_ONLINE':
            // case 'USER_OFFLINE':
        }
    } catch (err) {
        console.error('❌ Invalid socket message', err);
    }
};
