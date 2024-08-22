import React, { useState, useEffect } from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import WeatherSection from '@/components/dashboard/weather-section';
import AirSection from '@/components/dashboard/air-section';
import io, { Socket } from 'socket.io-client';
import axios from 'axios';
import { SensorData } from '@/lib/types/sensor-data-type';

const socket: Socket = io(import.meta.env.VITE_API_BASE_URL || 'https://pju-api-hveq5uky7q-et.a.run.app');

const DashboardPage: React.FC = () => {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'https://pju-api-hveq5uky7q-et.a.run.app';
  const [data, setData] = useState<SensorData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isUpdating, setIsUpdating] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${apiBaseUrl}/data/all`);
      setData(response.data.data.sensor);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDataUpdate = async () => {
    setIsUpdating(true);
    await fetchData();
    setIsUpdating(false);
  };

  useEffect(() => {
    fetchData();
    socket.on('dataUpdate', handleDataUpdate);
    return () => {
      socket.off('dataUpdate');
    };
  }, []);

  return (
    <div className='py-4'>
      <div className='flex items-center gap-2 text-sm text-muted-foreground'>
        <IoLocationSharp />
        <p>Jl. Keputih, Surabaya</p>
      </div>
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <WeatherSection data={data} />
            <AirSection data={data} />
          </>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
