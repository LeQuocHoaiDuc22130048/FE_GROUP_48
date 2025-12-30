import { useChatStore } from '@/types/store';
import { File, SearchIcon, UserLock, Users, X } from 'lucide-react';
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput
} from '../ui/input-group';

const ChatInfoSidebar = () => {
    const { closeInfo, activeConversation } = useChatStore();

    if (!activeConversation) return null;
    return (
        <div className={`h-full w-full flex flex-col`}>
            {/* Header */}
            <div className='h-14 flex items-center justify-between px-4 border-b'>
                <p className='font-medium'>Thông tin</p>
                <button
                    onClick={closeInfo}
                    className='h-8 w-8 flex items-center justify-center rounded-md hover:bg-muted'
                >
                    <X className='h-4 w-4' />
                </button>
            </div>

            {/* Content */}
            <div className='p-4 flex flex-col gap-4 overflow-y-auto'>
                <div className='flex flex-col items-center gap-2'>
                    {activeConversation.type === 'group' ? (
                        <div className='h-16 w-16 rounded-full bg-muted flex items-center justify-center'>
                            <Users className='h-6 w-6' />
                        </div>
                    ) : (
                        <img
                            src={activeConversation.avatar}
                            className='h-16 w-16 rounded-full'
                        />
                    )}

                    <p className='font-medium'>{activeConversation.name}</p>
                    <p className='text-sm text-muted-foreground'>
                        {activeConversation.type === 'group'
                            ? 'Nhóm chat'
                            : 'Cuộc trò chuyện riêng'}
                    </p>
                </div>

                <div className='border-t pt-3 space-y-2'>
                    <InputGroup className='bg-gray-100 py-5'>
                        <InputGroupInput placeholder='Tìm kiếm tin nhắn' />
                        <InputGroupAddon>
                            <SearchIcon />
                        </InputGroupAddon>
                        <InputGroupAddon align='inline-end'></InputGroupAddon>
                    </InputGroup>
                    <button className='w-full text-left text-sm hover:text-primary flex items-center'>
                        <UserLock />{' '}
                        <span className='ml-2'>Chặn người dùng</span>
                    </button>
                    <button className='w-full text-left text-sm hover:text-primary flex items-center'>
                        <File /> <span className='ml-2'>Media & file</span>
                    </button>
                    <button className='w-full text-left text-sm text-red-500'>
                        🚫 Xóa cuộc trò chuyện
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatInfoSidebar;
