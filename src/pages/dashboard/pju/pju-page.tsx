/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import BlockTitle from '@/components/dashboard/block-title';
import Location from '@/components/dashboard/location';
import PjuMonitorGrid from '@/components/dashboard/pju-monitor-grid';
import PageTitle from '@/components/dashboard/page-title/page-title';
import PageDescription from '@/components/dashboard/page-title/page-description';
import { pju1Data } from '@/lib/data/pju-data';
import PjuControlCardNew from '@/components/dashboard/pju/pju-control-card-new';
import { useAuth } from '@/context/auth-context';
// import LampStatusCard from '@/components/dashboard/card/lamp-status-card';

const PjuPage: React.FC = () => {
  const { user } = useAuth();
  return (
    <div>
      <div className="mb-5 flex flex-col md:flex-row md:justify-between items-start gap-5">
        <div>
          <PageTitle className="mb-1">Device PJU 1</PageTitle>
          <PageDescription>
            Monitor kondisi device Penerangan Jalan Umum 1 (PJU 1) dan kontrol
            lampu PJU 1
          </PageDescription>
        </div>
        <Location
          location={pju1Data.address}
          lat={pju1Data.lat}
          long={pju1Data.long}
        />
      </div>

      <div className="mt-4">
        <BlockTitle>Data Device PJU 1</BlockTitle>
        <div className="mt-4">
          <PjuMonitorGrid pjuId={1} />
        </div>
      </div>

      {user && (
        <div className="mt-4 flex flex-col sm:flex-row gap-5">
          {/* <div className='sm:basis-1/2 flex flex-col gap-4'>
                    <BlockTitle>Status Lampu PJU</BlockTitle>
                    <LampStatusCard pjuId={1} className='w-full h-full' />
                </div> */}
          <div className="sm:basis-1/2 flex flex-col gap-4">
            <BlockTitle>Kontrol PJU</BlockTitle>
            <PjuControlCardNew pjuId={1} className="w-full h-full" />
          </div>
        </div>
      )}
    </div>
  );
};

export default PjuPage;
