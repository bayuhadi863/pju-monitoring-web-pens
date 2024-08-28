import axios from 'axios';

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'https://pju-api-hveq5uky7q-et.a.run.app';

export const login = async (email: string, password: string) => {
  return await axios.post(`${apiBaseUrl}/login`, {
    email,
    password,
  });
};
