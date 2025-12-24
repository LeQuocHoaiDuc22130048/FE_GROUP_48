import { create } from 'zustand';
import type { Conversation, User } from './type';

type Message = {
    id: string;
    conversationId: string;
    sender: 'me' | 'other';
    text: string;
    time: string;
};

type ChatState = {
    /* ================= AUTH / USER ================= */
    currentUser: User | null;

    /* ================= CONVERSATION ================= */
    activeConversation: Conversation | null;
    setActiveConversation: (c: Conversation) => void;

    /* ================= MESSAGES ================= */
    messages: Record<string, Message[]>;
    sendMessage: (conversationId: string, text: string) => void;

    /* ================= UI ================= */
    isInfoOpen: boolean;
    isUserInfoOpen: boolean;

    openInfo: () => void;
    closeInfo: () => void;
    toggleInfo: () => void;

    openUserInfo: () => void;
    closeUserInfo: () => void;
};

export const useChatStore = create<ChatState>((set) => ({
    /* ================= USER ================= */
    currentUser: {
        id: 'u1',
        username: 'Nguyễn Văn A',
        email: 'nguyenvana@gmail.com',
        avatar: 'https://i.pravatar.cc/150',
        status: 'online',
        createdAt: '2024-01-10T08:30:00Z'
    },

    /* ================= CONVERSATION ================= */
    activeConversation: null,

    setActiveConversation: (c) =>
        set({
            activeConversation: c,
            isInfoOpen: false
        }),

    /* ================= MESSAGES ================= */
    messages: {
        '1': [
            {
                id: 'm1',
                conversationId: '1',
                sender: 'other',
                text: 'How are you doing?',
                time: '16:40'
            },
            {
                id: 'm2',
                conversationId: '1',
                sender: 'me',
                text: "I'm fine, thanks!",
                time: '16:41'
            }
        ],
        '2': [
            {
                id: 'm3',
                conversationId: '2',
                sender: 'other',
                text: 'Anna: UI xong rồi nhé',
                time: '16:45'
            }
        ]
    },

    sendMessage: (conversationId, text) =>
        set((state) => ({
            messages: {
                ...state.messages,
                [conversationId]: [
                    ...(state.messages[conversationId] || []),
                    {
                        id: Date.now().toString(),
                        conversationId,
                        sender: 'me',
                        text,
                        time: new Date().toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit'
                        })
                    }
                ]
            }
        })),

    /* ================= UI ================= */
    isInfoOpen: false,
    isUserInfoOpen: false,

    openInfo: () => set({ isInfoOpen: true }),
    closeInfo: () => set({ isInfoOpen: false }),
    toggleInfo: () => set((state) => ({ isInfoOpen: !state.isInfoOpen })),

    openUserInfo: () => set({ isUserInfoOpen: true }),
    closeUserInfo: () => set({ isUserInfoOpen: false })
}));
