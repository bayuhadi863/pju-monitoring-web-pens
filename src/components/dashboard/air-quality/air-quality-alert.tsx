import { FC, useEffect, useState } from 'react';
import CustomAlert from '../custom-alert';
import { AirQualityIspuResponse } from '@/lib/types/response/air-quality/air-quality-ispu-response';
import { getAirQualityIspu } from '@/lib/services/air-quality-service';
import { exceptionHandler } from '@/lib/utils/exception-handler';
import { socket } from '@/lib/configs/socket';
import { getISPUConclusion } from '@/lib/utils/ispu-conclusion';
import AlertSkeleton from '../alert-skeleton';

type AirQualityAlertProps = {
    pjuId: number;
};

const AirQualityAlert: FC<AirQualityAlertProps> = ({ pjuId }) => {
    const [fetchLoading, setFetchLoading] = useState<boolean>(false);
    const [ispuData, setIspuData] = useState<AirQualityIspuResponse>();
    const [, setIsUpdating] = useState<boolean>(false);
    const [fetchError, setFetchError] = useState<boolean>(false);

    const fetchData = async () => {
        try {
            setFetchLoading(true);

            const response = await getAirQualityIspu(pjuId);
            setIspuData(response.data.data);
        } catch (error) {
            exceptionHandler(error, {
                onClientError: () => {
                    setFetchError(true);
                },
                onServerError: () => {
                    setFetchError(true);
                },
                onUnexpectedError: () => {
                    setFetchError(true);
                },
            });
        } finally {
            setFetchLoading(false);
        }
    };

    const handleDataUpdate = async () => {
        setIsUpdating(true);
        await fetchData();
        setIsUpdating(false);
    };

    useEffect(() => {
        fetchData();
        socket.on('airQualityUpdate', handleDataUpdate);
        return () => {
            socket.off('airQualityUpdate');
        };
    }, []);

    const ispuConclusion = getISPUConclusion(ispuData?.ispu_category || '');

    return (
        <>
            {fetchLoading ? (
                <AlertSkeleton />
            ) : fetchError ? (
                <p className='text-red-600 text-sm'>Terjadi kesalahan dalam mengambil data.</p>
            ) : (
                <CustomAlert
                    title={ispuConclusion.title}
                    description={ispuConclusion.description}
                    variant={ispuConclusion.variant}
                />
            )}
        </>
    );
};

export default AirQualityAlert;
