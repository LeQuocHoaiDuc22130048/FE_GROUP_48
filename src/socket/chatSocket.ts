let socket: WebSocket | null = null;

export const connectChatSocket = (url: string) => {
    socket = new WebSocket(url);

    socket.onopen = () => {
        console.log('Chat socket connected');

        // Gửi request lấy user list
        socket?.send(
            JSON.stringify({
                action: 'onchat',
                data: {
                    event: 'GET_USER_LIST'
                }
            })
        );
    };

    socket.onerror = (err) => {
        console.error('Socket error', err);
    };

    return socket;
};

export const sendSocketMessage = (data: unknown) => {
    if (socket?.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify(data));
    }
};
