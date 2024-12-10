import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/components/hooks/use-toast';
import { exceptionHandler } from '@/lib/utils/exception-handler';
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useProfileManagementStore from '@/stores/profile-management-store';
import { deleteProfile } from '@/lib/services/profile-service';

const DialogConfirmDelete: React.FC = () => {
  const navigate = useNavigate();
  const { confirmDeleteProfileDialogOpen, setConfirmDeleteProfileDialogOpen } = useProfileManagementStore((state) => state);
  const [submitting, setSubmitting] = React.useState(false);

  const handleDeleteProfile = async () => {
    try {
      setSubmitting(true);
      await deleteProfile();

      toast({
        variant: 'success',
        duration: 3000,
        title: 'Berhasil!',
        description: 'Profile berhasil dihapus.',
      });

      setConfirmDeleteProfileDialogOpen(false);
      setSubmitting(false);

      // Redirect to login page
      navigate('/login');
    } catch (error) {
      setSubmitting(false);
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
      open={confirmDeleteProfileDialogOpen}
      onOpenChange={setConfirmDeleteProfileDialogOpen}
    >
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Apakah Anda Yakin?</AlertDialogTitle>
          <AlertDialogDescription>Tindakan ini tidak bisa dibatalkan</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setConfirmDeleteProfileDialogOpen(false)}>Batal</AlertDialogCancel>

          <Button
            onClick={handleDeleteProfile}
            disabled={submitting}
            variant='destructive'
          >
            {submitting ? (
              <div className='flex items-center gap-1'>
                <Loader2 className='animate-spin' />
                <span>Menghapus...</span>
              </div>
            ) : (
              'Hapus'
            )}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DialogConfirmDelete;
