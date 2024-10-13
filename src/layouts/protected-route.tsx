/* eslint-disable @typescript-eslint/no-explicit-any */
import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router';
import PageLoading from '@/components/dashboard/page-loading';
import { useAuth } from '@/context/auth-context';

type ProtectedRouteProps = PropsWithChildren;

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user, loading } = useAuth();

  if (loading) {
    return <PageLoading />;
  }

  if (!user) {
    return <Navigate to='/login' />;
  }

  return children;
}
