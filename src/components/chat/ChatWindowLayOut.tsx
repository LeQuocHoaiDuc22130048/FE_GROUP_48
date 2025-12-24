const ChatWindowLayOut = () => {
    return (
        <div className='flex flex-col h-full w-full bg-background'>
            <ChatHeader />
            <ChatMessages />
            <ChatInput />
        </div>
    );
};

export default ChatWindowLayOut;
