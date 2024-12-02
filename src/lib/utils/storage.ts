import CryptoJS from 'crypto-js';
import { v4 as uuidv4 } from 'uuid';
// User ID
const secretKey = 'Its not a bug, its an undocumented feature';
export const getUserId = (): string => {
    let encryptedId = localStorage.getItem('userId');

    // Jika tidak ada encryptedId, generate UUID baru dan set di localStorage
    if (!encryptedId) {
        const userId = uuidv4(); // Generate UUID v4
        encryptedId = CryptoJS.AES.encrypt(userId, secretKey).toString();
        localStorage.setItem('userId', encryptedId);
        return userId; // Kembalikan UUID yang baru dibuat
    }

    // Jika ada encryptedId, decrypt dan kembalikan userId
    const bytes = CryptoJS.AES.decrypt(encryptedId, secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
};

export const setUserId = (userId: string): void => {
    const encryptedId = CryptoJS.AES.encrypt(userId.toString(), secretKey).toString();
    localStorage.setItem('userId', encryptedId);
};

// Akses Token
export const getAccessToken = (): string | null => localStorage.getItem('access_token');
export const setAccessToken = (token: string): void => localStorage.setItem('access_token', token);

// Refresh Token
export const getRefreshToken = (): string | null => localStorage.getItem('refresh_token');
export const setRefreshToken = (token: string): void => localStorage.setItem('refresh_token', token);

// Clear Tokens
export const clearTokens = (): void => {
    localStorage.removeItem('userId');
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
};
