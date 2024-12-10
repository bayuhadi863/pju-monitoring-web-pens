import { getProfile } from "@/lib/services/profile-service";
import { ProfileResponse } from "@/lib/types/response/profile/profile-response";
import { exceptionHandler } from "@/lib/utils/exception-handler";
import { create } from "zustand";

type ProfileManagementStore = {
    profile: ProfileResponse | undefined;
    fetchProfileLoading: boolean;
    fetchProfileError: boolean;
    fetchProfile: () => Promise<void>;
    confirmDeleteProfileDialogOpen: boolean;
    setConfirmDeleteProfileDialogOpen: (open: boolean) => void;
};

const useProfileManagementStore = create<ProfileManagementStore>((set) => ({
    profile: undefined,
    fetchProfileLoading: false,
    fetchProfileError: false,
    fetchProfile: async () => {
        set({ fetchProfileLoading: true });

        try {
            const response = await getProfile();

            set({ profile: response.data.data });
        } catch (error) {
            exceptionHandler(error, {
                onClientError: () => {
                    set({ fetchProfileError: true });
                },
                onServerError: () => {
                    set({ fetchProfileError: true });
                },
                onUnexpectedError: () => {
                    set({ fetchProfileError: true });
                },
            });
        } finally {
            set({ fetchProfileLoading: false });
        }
    },
    confirmDeleteProfileDialogOpen: false,
    setConfirmDeleteProfileDialogOpen: (open) => set({ confirmDeleteProfileDialogOpen: open }),
}));

export default useProfileManagementStore;