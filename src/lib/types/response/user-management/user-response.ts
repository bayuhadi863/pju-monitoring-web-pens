import { RoleResponse } from './role-response';

export type UserResponse = {
    id: number;
    username: string;
    name?: string;
    email?: string;
    role_code: string;
    created_at: string;
    updated_at: string;
    role: RoleResponse;
};
