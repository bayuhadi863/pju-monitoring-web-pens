import accessTokenAxios from '../api/accessTokenAxios';
import { CreateUserRequest } from '../types/request/user-management/create-user-request';
import { UpdateUserRequest } from '../types/request/user-management/update-user-request';

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

export const getSingleUser = async (id: number) => {
    const response = await accessTokenAxios.get(`/user/${id}`);

    return response;
};

export const updateUser = async (id: number, data: UpdateUserRequest) => {
    const response = await accessTokenAxios.patch(`/user/${id}/update`, data);

    return response;
};
