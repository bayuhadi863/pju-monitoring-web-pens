import axios from 'axios';
import { apiBaseUrl } from '../configs/api';
import { getAccessToken, getRefreshToken, setAccessToken } from '../utils/storage';
import { refreshAccessToken } from '../services/auth-service';
import { redirect } from 'react-router';

const accessTokenAxios = axios.create({
  baseURL: apiBaseUrl,
});

accessTokenAxios.interceptors.request.use(
  (config) => {
    const accessToken = getAccessToken();

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

accessTokenAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    const anauthorized = error.response?.status === 401 || error.response?.status === 403;

    if (anauthorized && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = getRefreshToken();

      if (refreshToken) {
        try {
          const response = await refreshAccessToken();

          const { access_token } = response.data.data;

          setAccessToken(access_token);

          originalRequest.headers.Authorization = `Bearer ${access_token}`;

          return accessTokenAxios(originalRequest);
        } catch (refreshError) {
          console.error('Refresh token failed:', refreshError);

          redirect('/login');
        }
      }
    }

    return Promise.reject(error);
  }
);

export default accessTokenAxios;
