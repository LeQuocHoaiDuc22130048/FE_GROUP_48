import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },
    server: {
        proxy: {
            '/ws': {
                target: 'wss://chat.longapp.site/chat/chat',
                changeOrigin: true,
                ws: true,
                rewrite: (path) => path.replace(/^\/ws/, '')
            }
        }
    }
});
