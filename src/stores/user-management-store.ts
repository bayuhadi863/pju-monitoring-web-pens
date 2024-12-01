import { create } from 'zustand';
import { UserResponse } from '@/lib/types/response/user-management/user-response';
import { getSingleUser, getUserList } from '@/lib/services/user-service';
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
    updateUserDialogOpen: boolean;
    setUpdateUserDialogOpen: (open: boolean) => void;
    updateUserId: number;
    setUpdateUserId: (id: number) => void;
    getSingleUser: (id: number) => Promise<void>;
    singleUser: UserResponse | undefined;
    getSingleUserLoading: boolean;
    getSingleUserError: boolean;
    listNeedRefresh: boolean;
    setListNeedRefresh: (refresh: boolean) => void;
    deleteUserId: number;
    setDeleteUserId: (id: number) => void;
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
    updateUserDialogOpen: false,
    setUpdateUserDialogOpen: (open) => set({ updateUserDialogOpen: open }),
    updateUserId: 0,
    setUpdateUserId: (id) => set({ updateUserId: id }),
    getSingleUser: async (id: number) => {
        set({ getSingleUserLoading: true });

        try {
            const response = await getSingleUser(id);

            set({ singleUser: response.data.data });
            set({ listNeedRefresh: false });
        } catch (error) {
            exceptionHandler(error, {
                onClientError: () => {
                    set({ getSingleUserError: true });
                },
                onServerError: () => {
                    set({ getSingleUserError: true });
                },
                onUnexpectedError: () => {
                    set({ getSingleUserError: true });
                },
            });
        } finally {
            set({ getSingleUserLoading: false });
        }
    },
    singleUser: undefined,
    getSingleUserLoading: false,
    getSingleUserError: false,
    listNeedRefresh: false,
    setListNeedRefresh: (refresh) => set({ listNeedRefresh: refresh }),
    deleteUserId: 0,
    setDeleteUserId: (id) => set({ deleteUserId: id }),
}));

export default useUserManagementStore;
