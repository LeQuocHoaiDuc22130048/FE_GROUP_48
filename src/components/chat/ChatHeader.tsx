import { useChatStore } from '@/types/store';
import { MoreVertical, Users } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

const ChatHeader = () => {
    const { activeConversation, toggleInfo } = useChatStore();
    if (!activeConversation) return null;

    const isGroup = activeConversation.type === 'group';
    return (
        <div className='flex items-center justify-between px-4 h-14 border-b'>
            {/* Left */}
            <div
                className='flex items-center gap-3 cursor-pointer'
                onClick={toggleInfo}
            >
                {isGroup ? (
                    <div className='h-9 w-9 rounded-full bg-muted flex items-center justify-center'>
                        <Users className='h-4 w-4 text-muted-foreground' />
                    </div>
                ) : (
                    <img
                        src={activeConversation.avatar}
                        className='h-9 w-9 rounded-full'
                    />
                )}

                <div>
                    <p className='font-medium leading-none'>
                        {activeConversation.name}
                    </p>

                    {!isGroup && (
                        <p className='text-xs text-green-500'>
                            {activeConversation.isOnline ? 'Online' : 'Offline'}
                        </p>
                    )}

                    {isGroup && (
                        <p className='text-xs text-muted-foreground'>
                            Nhóm chat
                        </p>
                    )}
                </div>
            </div>

            {/* Right actions */}
            <div className='flex items-center gap-1'>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <button
                            className='h-9 w-9 flex items-center justify-center rounded-md hover:bg-muted'
                            onClick={toggleInfo}
                        >
                            <MoreVertical className='h-4 w-4' />
                        </button>
                    </TooltipTrigger>
                    <TooltipContent>Info</TooltipContent>
                </Tooltip>
            </div>
        </div>
    );
};

export default ChatHeader;
