import type { User } from '@/types/type';
import { useChatStore } from '@/types/store';

export const handleChatSocketMessage = (event: MessageEvent) => {
    try {
        const message = JSON.parse(event.data);

        switch (message.event) {
            case 'USER_LIST': {
                const users: User[] = message.data;
                useChatStore.getState().setUsers(users);
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
