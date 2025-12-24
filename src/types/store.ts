import { create } from 'zustand';
import type { Conversation } from './type';

type Message = {
    id: string;
    conversationId: string;
    sender: 'me' | 'other';
    text: string;
    time: string;
};

type ChatState = {
    // Conversation
    activeConversation: Conversation | null;
    setActiveConversation: (c: Conversation) => void;

    // Messages
    messages: Record<string, Message[]>;
    sendMessage: (conversationId: string, text: string) => void;

    // UI - Sidebar info
    isInfoOpen: boolean;
    openInfo: () => void;
    closeInfo: () => void;
    toggleInfo: () => void;
};

export const useChatStore = create<ChatState>((set) => ({
    /* ================= CONVERSATION ================= */
    activeConversation: null,

    setActiveConversation: (c) =>
        set({
            activeConversation: c,
            isInfoOpen: false // đổi chat thì đóng sidebar
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

    /* ================= UI SIDEBAR ================= */
    isInfoOpen: false,

    openInfo: () => set({ isInfoOpen: true }),
    closeInfo: () => set({ isInfoOpen: false }),
    toggleInfo: () => set((state) => ({ isInfoOpen: !state.isInfoOpen }))
}));
