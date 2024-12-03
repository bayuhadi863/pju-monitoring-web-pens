import FetchLoading from '@/components/loader/fetch-loading';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import useLampStatusStore from '@/stores/lamp-status-store';
import React from 'react';
import { LuLightbulb } from 'react-icons/lu';
import { LuLightbulbOff } from 'react-icons/lu';

type LampStatusCardProps = {
    pjuId: number;
    className?: string;
};

const LampStatusCard: React.FC<LampStatusCardProps> = ({ pjuId, className }) => {
    const { pjuId: lampStatePjuId, isOn, isLoading } = useLampStatusStore();

    const getLampIcon = (isOn: boolean) => {
        return isOn ? <LuLightbulb className='text-yellow-500 text-6xl' /> : <LuLightbulbOff className='text-gray-400 text-6xl' />;
    };

    return (
        <Card className={`overflow-hidden shadow-md ${className}`}>
            <CardHeader>
                <CardTitle className='flex items-center gap-2'>Status Lampu PJU {pjuId}</CardTitle>
                <CardDescription className='text-muted-foreground'>Monitor status lampu PJU {pjuId} saat ini: Aktif atau Nonaktif</CardDescription>
            </CardHeader>
            <CardContent>
                {isLoading ? (
                    <FetchLoading />
                ) : pjuId !== lampStatePjuId ? (
                    <div className='text-center text-muted-foreground'>Data tidak ditemukan</div>
                ) : isOn === undefined ? (
                    <p className='text-center text-muted-foreground'>Data status lampu tidak ada</p>
                ) : (
                    <div className='flex flex-col xl:flex-row items-center justify-center gap-4'>
                        {getLampIcon(isOn)}
                        <span className='font-semibold text-lg'>{isOn ? 'Aktif' : 'Nonaktif'}</span>
                    </div>
                )}
            </CardContent>
            <CardFooter></CardFooter>
        </Card>
    );
};

export default LampStatusCard;
