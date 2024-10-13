import axios from 'axios';
import { apiBaseUrl } from '../configs/api';
import { getRefreshToken } from '../utils/storage';

const refreshTokenAxios = axios.create({
  baseURL: apiBaseUrl,
});

refreshTokenAxios.interceptors.request.use(
  (config) => {
    const refreshToken = getRefreshToken();

    if (refreshToken) {
      config.headers.Authorization = `Bearer ${refreshToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default refreshTokenAxios;
