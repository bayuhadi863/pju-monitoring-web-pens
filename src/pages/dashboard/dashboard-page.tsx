import React from 'react';
import WeatherSection from '@/components/dashboard/weather-section';
import AirSection from '@/components/dashboard/air-section';
import Location from '@/components/dashboard/location';
import PageTitle from '@/components/dashboard/page-title/page-title';
import PageDescription from '@/components/dashboard/page-title/page-description';
import { pju2Data } from '@/lib/data/pju-data';
import CustomAlert from '@/components/dashboard/custom-alert';

const DashboardPage: React.FC = () => {
  return (
    <div>
      <div className='mb-5 flex flex-col md:flex-row md:justify-between items-start gap-5'>
        <div>
          <PageTitle className='mb-1'>Dashboard</PageTitle>
          <PageDescription>Pemantau Sensor Cuaca dan Kualitas Udara.</PageDescription>
        </div>
        <Location
          location={pju2Data.address}
          lat={pju2Data.lat}
          long={pju2Data.long}
        />
      </div>

      <div className='flex flex-col md:flex-row gap-4'>
        <CustomAlert
          title='Kondisi Cuaca Baik'
          description='Kondisi cuaca saat ini tergolong baik untuk beraktivitas.'
          variant='success'
        />
        <CustomAlert
          title='Kualitas Udara Sangat Buruk'
          description='Kualitas udara saat ini sangat buruk dan berbahaya bagi kesehatan'
          variant='destructive'
        />
      </div>

      <div className='flex flex-col gap-2'>
        <WeatherSection />
        <AirSection />
      </div>
    </div>
  );
};

export default DashboardPage;
