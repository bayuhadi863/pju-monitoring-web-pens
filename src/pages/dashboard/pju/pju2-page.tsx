import Location from '@/components/dashboard/location';
import PageDescription from '@/components/dashboard/page-title/page-description';
import PageTitle from '@/components/dashboard/page-title/page-title';
import { FC } from 'react';
import { pju2Data } from '@/lib/data/pju-data';
import BlockTitle from '@/components/dashboard/block-title';
import PjuMonitorGrid from '@/components/dashboard/pju-monitor-grid';
import PjuControlCardNew from '@/components/dashboard/pju/pju-control-card-new';

const Pju2Page: FC = () => {
  return (
    <div>
      <div className='mb-5 flex flex-col md:flex-row md:justify-between items-start gap-5'>
        <div>
          <PageTitle className='mb-1'>Device PJU 2</PageTitle>
          <PageDescription>Monitor kondisi device Penerangan Jalan Umum 2 (PJU 2) dan kontrol lampu PJU 2</PageDescription>
        </div>
        <Location
          location={pju2Data.address}
          lat={pju2Data.lat}
          long={pju2Data.long}
        />
      </div>

      <div className='mt-4'>
        <BlockTitle>Data Device PJU 2</BlockTitle>
        <div className='mt-4'>
          <PjuMonitorGrid pjuId={2} />
        </div>
      </div>

      <div className='mt-4'>
        <BlockTitle>Kontrol PJU</BlockTitle>
        <div className='mt-4'>
          <PjuControlCardNew pjuId={2} />
        </div>
      </div>
    </div>
  );
};

export default Pju2Page;
