import { createContext, PropsWithChildren, useContext, useState, useEffect } from 'react';
import { User } from '@/lib/types/user-type';
import { getCurrentUser } from '@/lib/services/auth-service';

type AuthContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
};

const AuthContext = createContext<AuthContextType | null>(null);

type AuthProviderProps = PropsWithChildren;

export default function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));

  useEffect(() => {
    if (token) {
      setLoading(true);

      // wait 3 seconds
      setTimeout(() => {
        setLoading(false);
      }, 3000);

      getCurrentUser(token)
        .then((response) => {
          if (response.status === 200) {
            setUser(response.data.data);
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [token]);

  return <AuthContext.Provider value={{ user, setUser, loading, setLoading, token, setToken }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === null) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
