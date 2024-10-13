/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import BlockTitle from '@/components/dashboard/block-title';
import Location from '@/components/dashboard/location';
// import PjuControlGrid from '@/components/dashboard/pju-control-grid';
import PjuMonitorGrid from '@/components/dashboard/pju-monitor-grid';
import PjuControlCardNew from '@/components/dashboard/pju/pju-control-card-new';
import PageTitle from '@/components/dashboard/page-title/page-title';
import PageDescription from '@/components/dashboard/page-title/page-description';

const PjuPage: React.FC = () => {
  return (
    <div>
      <div className='mb-5 flex flex-col md:flex-row md:justify-between items-start gap-5'>
        <div>
          <PageTitle className='mb-1'>Dashboard</PageTitle>
          <PageDescription>Pemantau Sensor Cuaca dan Kualitas Udara.</PageDescription>
        </div>
        <Location />
      </div>

      <div className='mt-4'>
        <BlockTitle>Data Device PJU</BlockTitle>
        <div className='mt-2'>
          <PjuMonitorGrid />
        </div>
      </div>

      <div className='mt-4'>
        <BlockTitle>Kontrol PJU</BlockTitle>
        <div className='mt-2'>
          {/* <PjuControlGrid /> */}
          <PjuControlCardNew />
        </div>
      </div>
    </div>
  );
};

export default PjuPage;
