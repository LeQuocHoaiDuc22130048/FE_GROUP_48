import { create } from 'zustand';
import type { Conversation, User } from './type';

type MessageType = 'text' | 'image';

type Message = {
    id: string;
    conversationId: string;
    sender: 'me' | 'other';
    type: MessageType;

    text?: string;
    imageUrl?: string;

    time: string;
    status: 'sending' | 'sent' | 'failed';
};

type ChatState = {
    /* ================= AUTH / USER ================= */
    currentUser: User | null;

    /* ================= CONVERSATION ================= */
    activeConversation: Conversation | null;
    setActiveConversation: (c: Conversation) => void;

    /* ================= MESSAGES ================= */
    messages: Record<string, Message[]>;
    sendMessage: (
        conversationId: string,
        payload: { type: 'text'; text: string } | { type: 'image'; file: File }
    ) => void;

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
    messages: {},

    sendMessage: (conversationId, payload) =>
        set((state) => {
            const baseMessage = {
                id: crypto.randomUUID(),
                conversationId,
                sender: 'me' as const,
                time: new Date().toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit'
                }),
                status: 'sending' as const
            };

            let newMessage: Message;

            if (payload.type === 'text') {
                newMessage = {
                    ...baseMessage,
                    type: 'text',
                    text: payload.text
                };
            } else {
                newMessage = {
                    ...baseMessage,
                    type: 'image',
                    imageUrl: URL.createObjectURL(payload.file)
                };
            }

            return {
                messages: {
                    ...state.messages,
                    [conversationId]: [
                        ...(state.messages[conversationId] || []),
                        newMessage
                    ]
                }
            };
        }),

    /* ================= UI ================= */
    isInfoOpen: false,
    isUserInfoOpen: false,

    openInfo: () => set({ isInfoOpen: true }),
    closeInfo: () => set({ isInfoOpen: false }),
    toggleInfo: () => set((state) => ({ isInfoOpen: !state.isInfoOpen })),

    openUserInfo: () => set({ isUserInfoOpen: true }),
    closeUserInfo: () => set({ isUserInfoOpen: false })
}));
