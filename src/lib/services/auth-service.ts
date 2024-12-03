/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { apiBaseUrl } from '../configs/api';
import publicAxios from '../api/publicAxios';
import { clearTokens, setAccessToken, setRefreshToken, setUserId } from '../utils/storage';
import refreshTokenAxios from '../api/refreshTokenAxios';
import accessTokenAxios from '../api/accessTokenAxios';

type AxiosConfig = {
    method: 'get' | 'post' | 'put' | 'delete';
    url: string;
    data?: Record<string, unknown>;
    headers?: Record<string, string>;
};

export const login = async (usernameEmail: string, password: string) => {
    const response = await publicAxios.post('/login', {
        username_email: usernameEmail,
        password,
    });

    const responseBody = response.data;
    const { token, user } = responseBody.data;
    const userId = user.id;
    const accessToken = token.access_token;
    const refreshToken = token.refresh_token;

    setUserId(userId);
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);

    return response;
};

export const refreshAccessToken = async () => {
    const response = await refreshTokenAxios.post('/refresh-token');

    const { access_token } = response.data.data;

    setAccessToken(access_token);

    return response;
};

export const getCurrentUser = async () => {
    const response = await accessTokenAxios.get('/me');

    return response;
};

export const logout = async () => {
    const response = await accessTokenAxios.post('/logout');

    clearTokens();

    return response;
};

export const authenticated = async (token: string | null) => {
    try {
        const config: AxiosConfig = {
            method: 'get',
            url: `${apiBaseUrl}/protected`,
        };

        if (token) {
            config.headers = {
                Authorization: token,
            };
        }

        const response = await axios(config);
        if (response.status === 200) {
            return true;
        }
    } catch (error: any) {
        if (error.response.status === 401 || error.response.status === 403) {
            return false;
        }

        return false;
    }
};
