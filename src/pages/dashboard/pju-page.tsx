/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import BlockTitle from '@/components/dashboard/block-title';
import Location from '@/components/dashboard/location';
// import PjuControlGrid from '@/components/dashboard/pju-control-grid';
import PjuMonitorGrid from '@/components/dashboard/pju-monitor-grid';
import PjuControlCardNew from '@/components/dashboard/pju/pju-control-card-new';

const PjuPage: React.FC = () => {
  return (
    <div className='mt-4'>
      <Location />
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
