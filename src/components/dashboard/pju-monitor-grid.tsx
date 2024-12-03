import React, { useEffect, useState } from 'react';
import PjuMonitorCard from './pju-monitor-card';
import axios from 'axios';
import { socket } from '@/lib/configs/socket';
import { apiBaseUrl } from '@/lib/configs/api';
import { pjuMonitorStaticData, PjuMonitorStaticDataType } from '@/lib/data/pju-monitor-data';
import { Clock } from 'lucide-react';
import useLampStatusStore from '@/stores/lamp-status-store';

type PjuMonitorGridProps = {
    pjuId: number;
};

const PjuMonitorGrid: React.FC<PjuMonitorGridProps> = ({ pjuId }) => {
    const [data] = useState<PjuMonitorStaticDataType[]>(pjuMonitorStaticData);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [, setIsUpdating] = useState<boolean>(false);
    const [isEmpty, setIsEmpty] = useState<boolean>(false);
    const [timestamp, setTimestamp] = useState<string>('');

    const { setPjuId, setIsOn, setIsLoading: setLampStatusLoading } = useLampStatusStore();

    const fetchData = async () => {
        try {
            setIsLoading(true);
            setLampStatusLoading(true);
            const response = await axios.get(`${apiBaseUrl}/monitor/${pjuId}`);
            const responseData = response.data.data;

            if (responseData.length === 0) {
                setIsEmpty(true);
                return;
            }

            responseData.forEach((monitorData: PjuMonitorStaticDataType) => {
                const index = data.findIndex((data) => data.code === monitorData.code);
                data[index].value = monitorData.value;
            });

            // find response data with code 'POW'
            const lampStatus = responseData.find((data: any) => data.code === 'POW');

            setPjuId(pjuId);
            if (lampStatus) {
                setIsOn(lampStatus.value > 0 ? true : false);
            }

            setTimestamp(responseData[0].timestamp);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setIsLoading(false);
            setLampStatusLoading(false);
        }
    };

    const handleMonitorUpdate = async () => {
        setIsUpdating(true);
        await fetchData();
        setIsUpdating(false);
    };

    useEffect(() => {
        fetchData();
        socket.on('monitorUpdate', handleMonitorUpdate);
        return () => {
            socket.off('monitorUpdate');
        };
    }, []);

    const formatLastUpdated = (date: Date) => {
        return new Intl.DateTimeFormat('en-US', {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
        }).format(date);
    };

    return (
        <>
            <div className='flex items-center space-x-2 mb-4'>
                <Clock className='h-5 w-5 text-slate-500' />
                <span className='text-sm text-muted-foreground'>Terakhir diupdate: {timestamp ? formatLastUpdated(new Date(timestamp)) : '---'}</span>
            </div>
            <div className='grid gap-6 sm:grid-cols-2 xl:grid-cols-3'>
                {data.map((item, i) => (
                    <PjuMonitorCard
                        key={i}
                        subTitle={item.subTitle}
                        title={item.title}
                        value={isLoading ? 0 : item.value}
                        unit={item.unit}
                        icon={item.icon}
                        isLoading={isLoading}
                        isEmpty={isEmpty}
                    />
                ))}
            </div>
        </>
    );
};

export default PjuMonitorGrid;
