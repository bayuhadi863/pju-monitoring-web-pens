import { create } from 'zustand';
import { UserResponse } from '@/lib/types/response/user-management/user-response';
import { getUserList } from '@/lib/services/user-service';
import { exceptionHandler } from '@/lib/utils/exception-handler';

type UserManagementStore = {
  users: UserResponse[];
  fetchUsersLoading: boolean;
  fetchUsersError: boolean;
  fetchUsers: () => Promise<void>;
  createUserDialogOpen: boolean;
  setCreateUserDialogOpen: (open: boolean) => void;
  confirmDeleteUserDialogOpen: boolean;
  setConfirmDeleteUserDialogOpen: (open: boolean) => void;
};

const useUserManagementStore = create<UserManagementStore>((set) => ({
  users: [],
  fetchUsersLoading: false,
  fetchUsersError: false,
  fetchUsers: async () => {
    set({ fetchUsersLoading: true });

    try {
      const response = await getUserList();

      set({ users: response.data.data });
    } catch (error) {
      exceptionHandler(error, {
        onClientError: () => {
          set({ fetchUsersError: true });
        },
        onServerError: () => {
          set({ fetchUsersError: true });
        },
        onUnexpectedError: () => {
          set({ fetchUsersError: true });
        },
      });
    } finally {
      set({ fetchUsersLoading: false });
    }
  },
  createUserDialogOpen: false,
  setCreateUserDialogOpen: (open) => set({ createUserDialogOpen: open }),
  confirmDeleteUserDialogOpen: false,
  setConfirmDeleteUserDialogOpen: (open) => set({ confirmDeleteUserDialogOpen: open }),
}));

export default useUserManagementStore;
