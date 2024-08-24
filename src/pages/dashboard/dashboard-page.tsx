import React, { useState, useEffect } from 'react';
import WeatherSection from '@/components/dashboard/weather-section';
import AirSection from '@/components/dashboard/air-section';
import io, { Socket } from 'socket.io-client';
import axios from 'axios';
import { SensorData } from '@/lib/types/sensor-data-type';
import Location from '@/components/dashboard/location';

const socket: Socket = io(import.meta.env.VITE_API_BASE_URL || 'https://pju-api-hveq5uky7q-et.a.run.app');

const DashboardPage: React.FC = () => {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'https://pju-api-hveq5uky7q-et.a.run.app';
  const [data, setData] = useState<SensorData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [, setIsUpdating] = useState<boolean>(false);

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
      <div>
        <Location />
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
