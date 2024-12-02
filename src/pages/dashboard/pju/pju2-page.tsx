import Location from '@/components/dashboard/location';
import PageDescription from '@/components/dashboard/page-title/page-description';
import PageTitle from '@/components/dashboard/page-title/page-title';
import { FC } from 'react';
import { pju2Data } from '@/lib/data/pju-data';
import BlockTitle from '@/components/dashboard/block-title';
import PjuMonitorGrid from '@/components/dashboard/pju-monitor-grid';
import PjuControlCardNew from '@/components/dashboard/pju/pju-control-card-new';
import LampStatusCard from '@/components/dashboard/card/lamp-status-card';

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

            <div className='mt-4 flex flex-col sm:flex-row gap-5'>
                <div className='sm:basis-1/2 flex flex-col gap-4'>
                    <BlockTitle>Status Lampu PJU</BlockTitle>
                    <LampStatusCard
                        pjuId={2}
                        className='w-full h-full'
                    />
                </div>
                <div className='sm:basis-1/2 flex flex-col gap-4'>
                    <BlockTitle>Kontrol PJU</BlockTitle>
                    <PjuControlCardNew
                        pjuId={2}
                        className='w-full h-full'
                    />
                </div>
            </div>
        </div>
    );
};

export default Pju2Page;
