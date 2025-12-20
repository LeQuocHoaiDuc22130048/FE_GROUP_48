import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './chat.css';

interface User {
    id: number;
    name: string;
    avatar: string;
    status: 'online' | 'offline';
    lastMessage: string;
    time: string;
    unread?: boolean;
}

interface Message {
    id: number;
    text: string;
    sender: 'me' | 'other';
    image?: string;
}

const AppChat: React.FC = () => {
    const [activeUser, setActiveUser] = useState<number>(2);
    const [messageInput, setMessageInput] = useState('');
    const [darkMode, setDarkMode] = useState(false);
    const [showSortMenu, setShowSortMenu] = useState(false);
    const [sortOption, setSortOption] = useState('Mới nhất');
    const [showAddFriendModal, setShowAddFriendModal] = useState(false);
    const [showCreateGroupModal, setShowCreateGroupModal] = useState(false);
    const [selectedUsers, setSelectedUsers] = useState<number[]>([]);
    const [showRightSidebar, setShowRightSidebar] = useState(false);
    const navigate = useNavigate();

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const toggleAddFriendModal = () => {
        setShowAddFriendModal(!showAddFriendModal);
    };

    const toggleCreateGroupModal = () => {
        setShowCreateGroupModal(!showCreateGroupModal);
        setSelectedUsers([]);
    };

    const toggleRightSidebar = () => {
        setShowRightSidebar(!showRightSidebar);
    };

    const handleUserSelect = (userId: number) => {
        if (selectedUsers.includes(userId)) {
            setSelectedUsers(selectedUsers.filter(id => id !== userId));
        } else {
            setSelectedUsers([...selectedUsers, userId]);
        }
    };

    const handleLogout = () => {
        navigate('/login');
    };

    const handleSortOptionClick = (option: string) => {
        setSortOption(option);
        setShowSortMenu(false);
    };

    const users: User[] = [
        { id: 1, name: 'Group_48_FE', avatar: 'https://i.pravatar.cc/150?img=1', status: 'online', lastMessage: 'How are you doing?', time: '16:23' },
        { id: 2, name: 'LapTrinhFrontEnd', avatar: 'https://i.pravatar.cc/150?img=2', status: 'online', lastMessage: '... is typing', time: '18:45', unread: true },
        { id: 3, name: 'Le Quoc Hoai Duc', avatar: 'https://i.pravatar.cc/150?img=3', status: 'offline', lastMessage: 'you: See you tomorrow!', time: '20:13' },
        { id: 4, name: 'Nguyen Quoc Bao', avatar: 'https://i.pravatar.cc/150?img=4', status: 'online', lastMessage: 'Awesome!', time: '2:41', unread: true },
        { id: 5, name: 'Chu Toan Duc', avatar: 'https://i.pravatar.cc/150?img=5', status: 'offline', lastMessage: 'Good idea 🤩', time: '3:59' },
    ];

    const messages: Message[] = [
        { id: 1, text: 'https://dribbble.com/shots/17742253-ui-kit-designjam', sender: 'me', image: 'https://cdn.dribbble.com/users/1615584/screenshots/17742253/media/b5045c737527633285523e35266d6298.jpg?resize=400x300&vertical=center' },
        { id: 2, text: 'See you at office tomorrow!', sender: 'me' },
        { id: 3, text: 'Thank you for work, see you!', sender: 'other' },
        { id: 4, text: 'Hello! Have you seen my backpack anywhere in office?', sender: 'other' },
        { id: 5, text: 'Hi, yes, David have found it, ask our concierge 👀', sender: 'me' },
    ];

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (messageInput.trim()) {
            console.log('Sending message:', messageInput);
            setMessageInput('');
        }
    };

    const activeUserData = users.find(u => u.id === activeUser) || users[0];


};

export default AppChat;
