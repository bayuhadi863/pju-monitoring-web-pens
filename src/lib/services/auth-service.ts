/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'https://pju-api-hveq5uky7q-et.a.run.app';

type AxiosConfig = {
  method: 'get' | 'post' | 'put' | 'delete';
  url: string;
  data?: Record<string, unknown>;
  headers?: Record<string, string>;
};

export const login = async (email: string, password: string) => {
  return await axios.post(`${apiBaseUrl}/login`, {
    email,
    password,
  });
};

export const getCurrentUser = async (token: string | null) => {
  return await axios.get(`${apiBaseUrl}/me`, {
    headers: {
      Authorization: token,
    },
  });
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
