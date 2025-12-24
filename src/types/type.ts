export type ConversationType = 'private' | 'group';

export type User = {
    id: string;
    username: string;
    email: string;
    avatar: string;
    phone?: string;
    bio?: string;
    status: 'online' | 'offline' | 'busy';
    createdAt: string;
};
export type Conversation = {
    id: string;
    type: ConversationType;
    name: string;
    avatar?: string; // private
    groupAvatar?: string; // group
    lastMessage: string;
    time: string;
    unread?: number;
    isTyping?: boolean;
    isOnline?: boolean;
    isMe?: boolean;
};

export const currentUser: User = {
    id: 'u_001',
    username: 'Nguyễn Văn A',
    email: 'nguyenvana@gmail.com',
    avatar: 'https://i.pravatar.cc/150?img=3',
    phone: '0909 123 456',
    bio: 'Frontend Developer | React & Tailwind',
    status: 'online',
    createdAt: '2024-01-10T08:30:00Z'
};
export const conversations: Conversation[] = [
    {
        id: '1',
        type: 'private',
        name: 'Nguyễn Quốc Bảo',
        avatar: 'https://picsum.photos/id/237/200/300',
        lastMessage: 'How are you doing?',
        time: '16:45',
        isOnline: true
    },
    {
        id: '2',
        type: 'group',
        name: 'Lập trình FE',
        groupAvatar: 'https://picsum.photos/id/238/200/300',
        lastMessage: 'Anna: UI xong rồi nhé',
        time: '16:45',
        unread: 3
    },
    {
        id: '3',
        type: 'private',
        name: 'Lê Quốc Hoài Đức',
        avatar: 'https://picsum.photos/id/239/200/300',
        lastMessage: '… is typing',
        time: '16:45',
        isTyping: true,
        isOnline: true
    },
    {
        id: '4',
        type: 'group',
        name: 'GROUP 48',
        groupAvatar: 'https://picsum.photos/id/240/200/300',
        lastMessage: 'You: push code chưa?',
        time: '16:45',
        isMe: true
    },
    {
        id: '5',
        type: 'private',
        name: 'Chu Toàn Đức',
        avatar: 'https://picsum.photos/id/241/200/300',
        lastMessage: 'You: Fetch API xong chưa?',
        time: '16:45',
        isOnline: true
    }
];
