import React, { useEffect, useState } from 'react';
import PjuMonitorCard from './pju-monitor-card';
import axios from 'axios';
import { socket } from '@/lib/configs/socket';
import { apiBaseUrl } from '@/lib/configs/api';
import { pjuMonitorStaticData, PjuMonitorStaticDataType } from '@/lib/data/pju-monitor-data';

type PjuMonitorGridProps = {
  pjuId: number;
};

const PjuMonitorGrid: React.FC<PjuMonitorGridProps> = ({ pjuId }) => {
  const [data] = useState<PjuMonitorStaticDataType[]>(pjuMonitorStaticData);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [, setIsUpdating] = useState<boolean>(false);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
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
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
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

  return (
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
  );
};

export default PjuMonitorGrid;
