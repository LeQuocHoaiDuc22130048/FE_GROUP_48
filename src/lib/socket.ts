import { useSocketStore } from '@/store/socket.store';

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL as string;

export const socket = new WebSocket(SOCKET_URL);

socket.onopen = () => {
    console.log('Đã kết nối socket');
    useSocketStore.getState().setConnected(true);
};

socket.onclose = () => {
    console.log('Socket đã đóng kết nối');
    useSocketStore.getState().setConnected(false);
};

socket.onerror = (error) => {
    console.error('Lỗi kết nối socket:', error);
    useSocketStore.getState().setConnected(false);
};
