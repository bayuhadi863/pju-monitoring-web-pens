import accessTokenAxios from '../api/accessTokenAxios';
import { CreateUserRequest } from '../types/request/create-user-request';

export const getUserList = async () => {
  const response = await accessTokenAxios.get('/user');

  return response;
};

export const createUser = async (data: CreateUserRequest) => {
  const response = await accessTokenAxios.post('/user/create', data);

  return response;
};

export const deleteUser = async (id: number) => {
  const response = await accessTokenAxios.delete(`/user/${id}/delete`);

  return response;
};
