// Akses Token
export const getAccessToken = (): string | null => localStorage.getItem('access_token');
export const setAccessToken = (token: string): void => localStorage.setItem('access_token', token);

// Refresh Token
export const getRefreshToken = (): string | null => localStorage.getItem('refresh_token');
export const setRefreshToken = (token: string): void => localStorage.setItem('refresh_token', token);

// Clear Tokens
export const clearTokens = (): void => {
  localStorage.removeItem('access_token');
  localStorage.removeItem('refresh_token');
};
