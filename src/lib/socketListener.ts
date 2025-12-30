import { socket } from './socket';
import { useAuthStore } from '@/store/auth.store';

socket.onmessage = (event) => {
    const res = JSON.parse(event.data);

    useAuthStore.getState().handleRegisterResponse(res);
};
