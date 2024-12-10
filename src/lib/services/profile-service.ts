import accessTokenAxios from "../api/accessTokenAxios"
import { UpdatePasswordRequest } from "../types/request/profile/update-password-request";
import { UpdateProfileRequest } from "../types/request/profile/update-profile-request";

export const getProfile = async () => {
  const response = await accessTokenAxios.get('/profile');

  return response;
}

export const updateProfile = async (data: UpdateProfileRequest) => {
  const response = await accessTokenAxios.patch('/profile/update', data);

  return response;
}

export const updatePassword = async (data: UpdatePasswordRequest) => {
  const response = await accessTokenAxios.patch('/profile/update-password', data);

  return response;
}

export const deleteProfile = async () => {
  const response = await accessTokenAxios.delete('/profile/delete');

  return response;
}