import { create } from 'zustand';

export type Summary = {
    rainfallLevel: number;
    temperature: number;
    solarRadiation: number;
};

type WeatherSummaryStore = {
    summary?: Summary;
    setSummary: (summary: Summary) => void;
    isLoading: boolean;
    setIsLoading: (isLoading: boolean) => void;
};

const useWeatherSummaryStore = create<WeatherSummaryStore>((set) => ({
    summary: undefined,
    setSummary: (summary) => set({ summary }),
    isLoading: false,
    setIsLoading: (isLoading) => set({ isLoading }),
}));

export default useWeatherSummaryStore;
