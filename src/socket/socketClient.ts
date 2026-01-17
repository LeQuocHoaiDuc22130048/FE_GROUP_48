type SocketEventHandler = (data: any) => void;

class SocketClient {
    private socket: WebSocket | null = null;
    private url: string;
    private messageHandlers: SocketEventHandler[] = [];
    private errorHandlers: SocketEventHandler[] = [];
    public isConnected: boolean = false;

    constructor(url: string) {
        this.url = url;
    }

    connect() {
        if (this.socket && (this.socket.readyState === WebSocket.OPEN || this.socket.readyState === WebSocket.CONNECTING)) {
            console.log("Socket already connected or connecting");
            return;
        }

        console.log("Connecting to WebSocket:", this.url);
        this.socket = new WebSocket(this.url);

        this.socket.onopen = () => {
            console.log("WebSocket Connected");
            this.isConnected = true;

            // Auto Re-Login
            const savedUser = localStorage.getItem('savedUser');
            const reLoginCode = localStorage.getItem('reLoginCode');

            if (savedUser && reLoginCode) {
                console.log("Attempting Re-Login...");
                this.send("RE_LOGIN", { user: savedUser, code: reLoginCode });
            }
        };

        this.socket.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data);
                // console.log("Raw Socket Message:", data); // Optional: log all raw messages for debugging
                this.messageHandlers.forEach(handler => handler(data));
            } catch (error) {
                console.error("Error parsing message:", error);
            }
        };

        this.socket.onerror = (error) => {
            console.error("WebSocket Error:", error);
            this.errorHandlers.forEach(handler => handler(error));
        };

        this.socket.onclose = () => {
            console.log("WebSocket Disconnected");
            this.isConnected = false;
            this.socket = null;
        };
    }

    send(eventName: string, data: any) {
        if (!this.socket || this.socket.readyState !== WebSocket.OPEN) {
            console.warn("Socket not connected. Message not sent:", eventName);
            return;
        }

        const payload = {
            action: "onchat",
            data: {
                event: eventName,
                data: data
            }
        };

        console.log("Sending:", JSON.stringify(payload, null, 2));
        this.socket.send(JSON.stringify(payload));
    }

    reLogin(user: string, code: string) {
        this.send("RE_LOGIN", { user, code });
    }

    logout() {
        this.send("LOGOUT", {});
    }

    onMessage(callback: SocketEventHandler) {
        this.messageHandlers.push(callback);
    }

    onError(callback: SocketEventHandler) {
        this.errorHandlers.push(callback);
    }

    offMessage(callback: SocketEventHandler) {
        this.messageHandlers = this.messageHandlers.filter(h => h !== callback);
    }
}

// Singleton instance
const socketClient = new SocketClient(import.meta.env.VITE_SOCKET_URL);

// Initialize connection immediately
socketClient.connect();

export const register = (user: string, pass: string) => {
    socketClient.send("REGISTER", { user, pass });
};

export const login = (user: string, pass: string) => {
    socketClient.send("LOGIN", { user, pass });
};

export const reLogin = (user: string, code: string) => {
    socketClient.send("RE_LOGIN", { user, code });
};

export const logout = () => {
    socketClient.send("LOGOUT", {});
};

export default socketClient;
