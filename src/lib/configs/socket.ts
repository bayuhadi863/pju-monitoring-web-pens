import io, { Socket } from 'socket.io-client';

export const socket: Socket = io(import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000');
