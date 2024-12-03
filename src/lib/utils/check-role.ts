import { Role } from '../data/enum/RoleEnum';

export const checkIsAdmin = (role: string): boolean => {
    return role === Role.Admin;
};

export const checkIsOperator = (role: string): boolean => {
    return role === Role.Operator;
};
