import { conversations } from '@/types/type';
import ConversationItem from './ConversationItem';

const ListConversation = () => {
    return (
        <div className='flex flex-col gap-1'>
            {conversations.map((c) => (
                <ConversationItem key={c.id} data={c} />
            ))}
        </div>
    );
};

export default ListConversation;
