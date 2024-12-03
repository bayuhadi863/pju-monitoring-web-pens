import PageLoading from '@/components/dashboard/page-loading';
import { useAuth } from '@/context/auth-context';
import { checkIsAdmin } from '@/lib/utils/check-role';
import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router';

type AdminLayoutProps = PropsWithChildren;

export default function AdminLayout({ children }: AdminLayoutProps) {
    const { user, loading } = useAuth();
    const isAdmin = checkIsAdmin(user?.role_code || '');

    if (loading) {
        return <PageLoading />;
    }

    if (!user) {
        return <Navigate to='/login' />;
    }

    if (!isAdmin) {
        return <Navigate to='/404' />;
    }

    return children;
}
