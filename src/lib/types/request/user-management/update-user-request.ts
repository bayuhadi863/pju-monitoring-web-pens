export interface UpdateUserRequest {
    username: string;
    name: string;
    email: string;
    password?: string;
    confirm_password?: string;
    role_code?: string;
}
