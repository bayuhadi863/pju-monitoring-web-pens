import React, { createContext, useContext, useEffect, useState } from 'react';
import { AuthUserResponse } from '@/lib/types/response/auth-user-response';
import { getCurrentUser, login, logout } from '@/lib/services/auth-service';
import { AxiosResponse } from 'axios';

type AuthContextType = {
    user: AuthUserResponse | null;
    loading: boolean;
    loginUser: (usernameEmail: string, password: string) => Promise<AxiosResponse>;
    logoutUser: () => Promise<AxiosResponse>;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const useAuth = () => useContext(AuthContext);

type AuthProviderProps = {
    children: React.ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<AuthUserResponse | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAuthUser();
    }, []);

    const getAuthUser = async () => {
        try {
            const response = await getCurrentUser();

            if (response.status === 200) {
                setUser(response.data.data);
            }

            return response;
        } catch (error) {
            console.error('Error getting user:', error);
        } finally {
            setLoading(false);
        }
    };

    const loginUser = async (usernameEmail: string, password: string) => {
        const response = await login(usernameEmail, password);

        if (response.status === 200) {
            setUser(response.data.data.user);
        }

        return response;
    };

    const logoutUser = async () => {
        const response = await logout();

        setUser(null);

        return response;
    };

    return <AuthContext.Provider value={{ user, loading, loginUser, logoutUser }}>{children}</AuthContext.Provider>;
};
