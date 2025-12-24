import { useChatStore } from '@/types/store';
import { X } from 'lucide-react';

const UserInfo = () => {
    const { isUserInfoOpen, closeUserInfo, currentUser } = useChatStore();

    if (!isUserInfoOpen || !currentUser) return null;
    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center'>
            {/* Overlay */}
            <div
                onClick={closeUserInfo}
                className='absolute inset-0 bg-black/30'
            />

            {/* Dialog */}
            <div className='relative w-[380px] rounded-xl bg-background shadow-lg'>
                {/* Header */}
                <div className='flex items-center justify-between px-4 h-12 border-b'>
                    <p className='font-medium'>Thông tin tài khoản</p>
                    <button
                        onClick={closeUserInfo}
                        className='h-8 w-8 rounded-md hover:bg-muted flex items-center justify-center'
                    >
                        <X className='h-4 w-4' />
                    </button>
                </div>

                {/* Content */}
                <div className='p-4 flex flex-col items-center gap-3'>
                    <img
                        src={currentUser.avatar}
                        className='h-20 w-20 rounded-full'
                    />

                    <p className='font-medium text-lg'>
                        {currentUser.username}
                    </p>
                    <p className='text-sm text-muted-foreground'>
                        {currentUser.email}
                    </p>

                    <div className='w-full border-t pt-3 space-y-2 text-sm'>
                        <div className='flex justify-between'>
                            <span className='text-muted-foreground'>
                                Trạng thái
                            </span>
                            <span className='text-green-500'>
                                {currentUser.status === 'online'
                                    ? 'Online'
                                    : 'Offline'}
                            </span>
                        </div>

                        <div className='flex justify-between'>
                            <span className='text-muted-foreground'>
                                Số cuộc chat
                            </span>
                            <span>12</span>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className='px-4 py-3 border-t flex justify-end'>
                    <button
                        onClick={closeUserInfo}
                        className='px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm'
                    >
                        Đóng
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;
