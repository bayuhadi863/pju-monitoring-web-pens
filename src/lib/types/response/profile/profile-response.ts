import { RoleResponse } from '../user-management/role-response';

export type ProfileResponse = {
    id: number;
    username: string;
    name?: string;
    email?: string;
    role_code: string;
    created_at: string;
    updated_at: string;
    role: RoleResponse;
};
