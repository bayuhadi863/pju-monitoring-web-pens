/* eslint-disable @typescript-eslint/no-explicit-any */
import { PropsWithChildren, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageLoader from '@/components/page-loader';
import { getCurrentUser } from '@/lib/services/auth-service';

type ProtectedRouteProps = PropsWithChildren;

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      if (!token) {
        navigate('/login');
      }

      try {
        await getCurrentUser(token);
      } catch (error: any) {
        console.error('Error checking auth:', error);
        navigate('/login');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [navigate, token]);

  if (loading) {
    return <PageLoader />;
  }

  return <>{children}</>;
}
