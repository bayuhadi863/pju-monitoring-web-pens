import React from 'react';
import useUserManagementStore from '@/stores/user-management-store';
import { deleteUser } from '@/lib/services/user-service';
import { toast } from '@/components/hooks/use-toast';
import { exceptionHandler } from '@/lib/utils/exception-handler';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { Loader2 } from 'lucide-react';

const ConfirmDeleteDialog: React.FC = () => {
    const fetchUsers = useUserManagementStore((state) => state.fetchUsers);
    const setConfirmDeleteUserDialogOpen = useUserManagementStore((state) => state.setConfirmDeleteUserDialogOpen);
    const confirmDeleteUserDialogOpen = useUserManagementStore((state) => state.confirmDeleteUserDialogOpen);
    const { deleteUserId } = useUserManagementStore((state) => state);
    const [submitting, setSubmitting] = React.useState(false);

    const handleDeleteUser = async () => {
        if (!deleteUserId) return;
        try {
            setSubmitting(true);
            await deleteUser(deleteUserId);

            toast({
                variant: 'success',
                duration: 3000,
                title: 'Berhasil!',
                description: 'User baru berhasil ditambahkan.',
            });

            setConfirmDeleteUserDialogOpen(false);
            setSubmitting(false);
            fetchUsers();
        } catch (error) {
            exceptionHandler(error, {
                onClientError: (message) => {
                    toast({
                        variant: 'destructive',
                        duration: 3000,
                        title: 'Gagal!',
                        description: message,
                    });
                },
                onServerError: () => {
                    toast({
                        variant: 'destructive',
                        duration: 3000,
                        title: 'Terjadi Kesalahan!',
                        description: 'Internal server error. Coba lagi nanti.',
                    });
                },
                onUnexpectedError: () => {
                    toast({
                        variant: 'destructive',
                        duration: 3000,
                        title: 'Terjadi Kesalahan!',
                        description: 'Error tidak diketahui. Coba lagi nanti.',
                    });
                },
            });
        }
    };

    return (
        <AlertDialog
            open={confirmDeleteUserDialogOpen}
            onOpenChange={setConfirmDeleteUserDialogOpen}
        >
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Apakah Anda Yakin?</AlertDialogTitle>
                    <AlertDialogDescription>Data User yang dihapus tidak bisa dikembalikan.</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={() => setConfirmDeleteUserDialogOpen(false)}>Batal</AlertDialogCancel>
                    <AlertDialogAction
                        onClick={handleDeleteUser}
                        disabled={submitting}
                    >
                        {submitting ? (
                            <div className='flex items-center gap-1'>
                                <Loader2 className='animate-spin' />
                                <span>Menghapus...</span>
                            </div>
                        ) : (
                            'Hapus'
                        )}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default ConfirmDeleteDialog;
