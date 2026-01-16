import { create } from 'zustand';
import type { Conversation, User } from './type';
import { conversations, currentUser } from './type';

type MessageType = 'text' | 'image' | 'sticker' | 'gif';

type Message = {
    id: string;
    conversationId: string;
    sender: 'me' | 'other';
    type: MessageType;

    text?: string;
    imageUrl?: string;
    stickerUrl?: string;
    gifUrl?: string;

    time: string;
    status: 'sending' | 'sent' | 'failed';
};

type ChatState = {
    socket: WebSocket | null;
    setSocket: (s: WebSocket | null) => void;
    currentUser: User;

    users: User[];

    setUsers: (users: User[]) => void;

    conversations: Conversation[];
    setConversations: (conversations: Conversation[]) => void;
    updateConversation: (id: string, data: Partial<Conversation>) => void;

    activeConversation: Conversation | null;
    setActiveConversation: (c: Conversation) => void;

    /* ================= MESSAGES ================= */
    messages: Record<string, Message[]>;
    sendMessage: (
        conversationId: string,
        payload:
            | { type: 'text'; text: string }
            | { type: 'image'; file: File }
            | { type: 'sticker'; url: string }
            | { type: 'gif'; url: string }
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
    socket: null,
    setSocket: (socket) => set({ socket }),
    currentUser,
    users: [],
    setUsers: (users) => set({ users }),

    conversations,
    setConversations: (conversations) => set({ conversations }),

    updateConversation: (id, data) =>
        set((state) => ({
            conversations: state.conversations.map((c) =>
                c.id === id ? { ...c, ...data } : c
            )
        })),

    activeConversation: null,

    setActiveConversation: (c) =>
        set({
            activeConversation: c,
            isInfoOpen: false
        }),

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
            } else if (payload.type === 'image') {
                newMessage = {
                    ...baseMessage,
                    type: 'image',
                    imageUrl: URL.createObjectURL(payload.file)
                };
            } else if (payload.type === 'sticker') {
                newMessage = {
                    ...baseMessage,
                    type: 'sticker',
                    stickerUrl: payload.url
                };
            } else {
                newMessage = {
                    ...baseMessage,
                    type: 'gif',
                    gifUrl: payload.url
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

    isInfoOpen: false,
    isUserInfoOpen: false,

    openInfo: () => set({ isInfoOpen: true }),
    closeInfo: () => set({ isInfoOpen: false }),
    toggleInfo: () => set((state) => ({ isInfoOpen: !state.isInfoOpen })),

    openUserInfo: () => set({ isUserInfoOpen: true }),
    closeUserInfo: () => set({ isUserInfoOpen: false })
}));
