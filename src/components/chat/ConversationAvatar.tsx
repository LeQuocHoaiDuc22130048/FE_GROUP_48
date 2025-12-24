import type { Conversation } from '@/types/type';
import { Users } from 'lucide-react';

const ConversationAvatar = ({ data }: { data: Conversation }) => {
    if (data.type === 'group') {
        return (
            <div className='relative h-10 w-10'>
                {data.groupAvatar ? (
                    <img
                        src={data.groupAvatar}
                        className='h-10 w-10 rounded-full object-cover'
                    />
                ) : (
                    <div className='h-10 w-10 rounded-full bg-muted flex items-center justify-center'>
                        <Users className='h-5 w-5 text-muted-foreground' />
                    </div>
                )}
            </div>
        );
    }
    return (
        <div className='relative h-10 w-10'>
            <img
                src={data.avatar}
                className='h-10 w-10 rounded-full object-cover'
            />
            {data.isOnline && (
                <span className='absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-background' />
            )}
        </div>
    );
};

export default ConversationAvatar;
