import { create } from 'zustand';

type LampStatusStore = {
    pjuId: number;
    setPjuId: (pjuId: number) => void;
    isOn?: boolean;
    setIsOn: (isOn: boolean) => void;
    isLoading: boolean;
    setIsLoading: (isLoading: boolean) => void;
};

const useLampStatusStore = create<LampStatusStore>((set) => ({
    pjuId: 0,
    setPjuId: (pjuId) => set({ pjuId }),
    isOn: undefined,
    setIsOn: (isOn) => set({ isOn }),
    isLoading: false,
    setIsLoading: (isLoading) => set({ isLoading }),
}));

export default useLampStatusStore;
