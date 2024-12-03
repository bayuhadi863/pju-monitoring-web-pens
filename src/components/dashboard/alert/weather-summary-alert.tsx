import useWeatherSummaryStore from '@/stores/weather-summary-store';
import React from 'react';
import AlertSkeleton from '../alert-skeleton';
import CustomAlert from '../custom-alert';
import { getWeatherConclusion } from '@/lib/utils/weather-conclusion';

const WeatherSummaryAlert: React.FC = () => {
    const { summary, isLoading } = useWeatherSummaryStore();

    const weatherConclusion = getWeatherConclusion(summary);
    return (
        <>
            {isLoading ? (
                <AlertSkeleton />
            ) : !summary ? (
                <p className='text-red-600 text-sm'>Data tidak ada.</p>
            ) : (
                <CustomAlert
                    title={weatherConclusion.title}
                    description={weatherConclusion.description}
                    variant={weatherConclusion.variant}
                />
            )}
        </>
    );
};

export default WeatherSummaryAlert;
