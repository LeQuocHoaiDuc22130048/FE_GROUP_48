type SocketEventHandler = (data: any) => void;

class SocketClient {
    private socket: WebSocket | null = null;
    private url: string;
    private messageHandlers: SocketEventHandler[] = [];
    private errorHandlers: SocketEventHandler[] = [];
    private isConnected: boolean = false;

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
        };

        this.socket.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data);
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
            console.error("Socket not connected");
            return;
        }

        const payload = {
            action: "onchat",
            data: {
                event: eventName,
                data: data
            }
        };

        console.log("Sending:", payload);
        this.socket.send(JSON.stringify(payload));
    }

    onMessage(callback: SocketEventHandler) {
        this.messageHandlers.push(callback);
    }

    onError(callback: SocketEventHandler) {
        this.errorHandlers.push(callback);
    }

    // Helper to remove listeners if needed, though not strictly required by prompt
    offMessage(callback: SocketEventHandler) {
        this.messageHandlers = this.messageHandlers.filter(h => h !== callback);
    }
}

// Singleton instance
const socketClient = new SocketClient(import.meta.env.VITE_SOCKET_URL);

// Auto connect when imported? 
// The prompt says "Socket client phải có: connect()", implying manual call or auto. 
// Let's export the instance and let the app call connect, or call it here.
// Usually better to call it at app start. For now, I'll export the instance.
// But to ensure it's available for login/register immediately, I'll call connect() here 
// or ensure the functions check connection.
// The prompt requirements are simple.

// Initialize connection immediately as it's a singleton for the app
socketClient.connect();

export const register = (user: string, pass: string) => {
    socketClient.send("REGISTER", { user, pass });
};

export const login = (user: string, pass: string) => {
    socketClient.send("LOGIN", { user, pass });
};

// Export the client instance if needed for other things later
export default socketClient;
