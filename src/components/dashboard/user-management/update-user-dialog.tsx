import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import useUserManagementStore from '@/stores/user-management-store';
import UpdateUserForm from './update-user-form';

export default function UpdateUserDialog() {
    const { updateUserDialogOpen, setUpdateUserDialogOpen, updateUserId } = useUserManagementStore((state) => state);

    return (
        <Dialog
            open={updateUserDialogOpen}
            onOpenChange={setUpdateUserDialogOpen}
        >
            <DialogContent className='sm:max-w-[500px] max-h-[90vh] overflow-y-auto'>
                <DialogHeader>
                    <DialogTitle>Edit User</DialogTitle>
                </DialogHeader>
                <UpdateUserForm userId={updateUserId} />
            </DialogContent>
        </Dialog>
    );
}
