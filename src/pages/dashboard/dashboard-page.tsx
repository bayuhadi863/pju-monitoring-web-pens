import React from 'react';
import WeatherSection from '@/components/dashboard/weather-section';
import AirSection from '@/components/dashboard/air-section';
import Location from '@/components/dashboard/location';
import PageTitle from '@/components/dashboard/page-title/page-title';
import PageDescription from '@/components/dashboard/page-title/page-description';

const DashboardPage: React.FC = () => {
  return (
    <div>
      <div className='mb-5 flex flex-col md:flex-row md:justify-between items-start gap-5'>
        <div>
          <PageTitle className='mb-1'>Dashboard</PageTitle>
          <PageDescription>Pemantau Sensor Cuaca dan Kualitas Udara.</PageDescription>
        </div>
        <Location />
      </div>

      <WeatherSection />
      <AirSection />
    </div>
  );
};

export default DashboardPage;
