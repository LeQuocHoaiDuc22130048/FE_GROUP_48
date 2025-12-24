import { cn } from '@/lib/utils';
import type { Conversation } from '@/types/type';
import ConversationAvatar from './ConversationAvatar';

const ConversationItem = ({
    data,
    active
}: {
    data: Conversation;
    active?: boolean;
}) => {
    return (
        <div
            className={cn(
                'flex items-center gap-3 px-3 py-2 cursor-pointer rounded-md',
                'hover:bg-muted',
                active && 'bg-muted'
            )}
        >
            <ConversationAvatar data={data} />

            <div className='flex-1 min-w-0'>
                <div className='flex justify-between items-center'>
                    <p className='font-medium truncate'>{data.name}</p>
                    <span className='text-xs text-muted-foreground'>
                        {data.time}
                    </span>
                </div>

                <div className='flex justify-between items-center'>
                    <p
                        className={cn(
                            'text-sm truncate',
                            data.isTyping
                                ? 'text-green-500 italic'
                                : 'text-muted-foreground'
                        )}
                    >
                        {data.isMe && 'you: '}
                        {data.lastMessage}
                    </p>

                    {data.unread && (
                        <span className='ml-2 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-green-500 text-xs text-white'>
                            {data.unread}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ConversationItem;
