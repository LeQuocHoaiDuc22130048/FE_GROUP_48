import { conversations } from '@/types/type';
import ConversationItem from './ConversationItem';
import { useChatStore } from '@/types/store';

const ListConversation = () => {
    const { activeConversation, setActiveConversation } = useChatStore();

    return (
        <div className='flex flex-col gap-1'>
            {conversations.map((c) => (
                <ConversationItem
                    key={c.id}
                    data={c}
                    active={c.id === activeConversation?.id}
                    onClick={() => setActiveConversation(c)}
                />
            ))}
        </div>
    );
};

export default ListConversation;
