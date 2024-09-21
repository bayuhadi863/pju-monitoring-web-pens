import React from 'react';
import WeatherSection from '@/components/dashboard/weather-section';
import AirSection from '@/components/dashboard/air-section';
import Location from '@/components/dashboard/location';

const DashboardPage: React.FC = () => {
  return (
    <div className='py-4'>
      <div>
        <Location />

        <WeatherSection />
        <AirSection />
      </div>
    </div>
  );
};

export default DashboardPage;
