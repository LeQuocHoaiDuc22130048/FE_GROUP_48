import { create } from 'zustand';
import { toast } from 'sonner';
import { socket } from '@/lib/socket';

interface AuthState {
    loading: boolean;
    error: string | null;
    registered: boolean;

    register: (user: string, pass: string) => void;
    handleRegisterResponse: (res: any) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    loading: false,
    error: null,
    registered: false,

    register: (user, pass) => {
        set({ loading: true, error: null, registered: false });

        socket.send(
            JSON.stringify({
                action: 'onchat',
                data: {
                    event: 'REGISTER',
                    data: { user, pass }
                }
            })
        );
    },

    handleRegisterResponse: (res) => {
        if (res?.event !== 'REGISTER') return;

        toast.dismiss('register');

        if (res.error) {
            toast.error(res.error || 'Đăng ký thất bại');
            set({
                loading: false,
                error: res.error,
                registered: false
            });
        } else {
            toast.success('Đăng ký thành công 🎉');
            set({
                loading: false,
                error: null,
                registered: true
            });
        }
    }
}));
