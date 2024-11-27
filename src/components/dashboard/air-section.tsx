import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SensorData } from '@/lib/types/sensor-data-type';
import { socket } from '@/lib/configs/socket';
import { carbonDioxide } from '@/lib/data/sensor-data/air-quality/carbon-dioxide';
import { oxygen } from '@/lib/data/sensor-data/air-quality/oxygen';
import { ozone } from '@/lib/data/sensor-data/air-quality/ozone';
import { nitrogenDioxide } from '@/lib/data/sensor-data/air-quality/nitrogen-dioxide';
import { sulfurDioxide } from '@/lib/data/sensor-data/air-quality/sulfur-dioxide';
import { particulateMatter25 } from '@/lib/data/sensor-data/air-quality/particulate-matter-25';
import { particulateMatter10 } from '@/lib/data/sensor-data/air-quality/particulate-matter-10';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Clock } from 'lucide-react';
import CarbonDioxideCard from './card/carbon-dioxide-card';
import OxygenCard from './card/oxygen-card';
import OzoneCard from './card/ozone-card';
import NitrogenDioxideCard from './card/nitrogen-dioxide';
import SulfurDioxideCard from './card/sulfur-dioxide';
import PM25Card from './card/pm25-card';
import PM10Card from './card/pm10-card';

const AirSection: React.FC = () => {
    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
    const [data, setData] = useState<SensorData[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [, setIsUpdating] = useState<boolean>(false);

    const fetchData = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(`${apiBaseUrl}/air-quality`);
            setData(response.data.data);
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
        socket.on('airQualityUpdate', handleDataUpdate);
        return () => {
            socket.off('airQualityUpdate');
        };
    }, []);

    const getSensorDataBySensorTypeCode = (code: string): SensorData | undefined => {
        return data.find((sensorData) => sensorData.code === code);
    };

    const carbonDioxideSensor = getSensorDataBySensorTypeCode(carbonDioxide.sensorTypeCode);
    const oxygenSensor = getSensorDataBySensorTypeCode(oxygen.sensorTypeCode);
    const ozoneSensor = getSensorDataBySensorTypeCode(ozone.sensorTypeCode);
    const nitrogenDioxideSensor = getSensorDataBySensorTypeCode(nitrogenDioxide.sensorTypeCode);
    const sulfurDioxideSensor = getSensorDataBySensorTypeCode(sulfurDioxide.sensorTypeCode);
    const particulateMatter25Sensor = getSensorDataBySensorTypeCode(particulateMatter25.sensorTypeCode);
    const particulateMatter10Sensor = getSensorDataBySensorTypeCode(particulateMatter10.sensorTypeCode);

    const formatLastUpdated = (date: Date) => {
        return new Intl.DateTimeFormat('en-US', {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
        }).format(date);
    };

    const timestamp: string | undefined = carbonDioxideSensor?.timestamp;

    return (
        <Card>
            <CardHeader>
                <CardTitle>Informasi Kualitas Udara</CardTitle>
                <CardDescription>
                    <div className='flex items-center space-x-2'>
                        <Clock className='h-5 w-5 text-slate-500' />
                        <span className='text-sm text-muted-foreground'>Terakhir diupdate: {timestamp ? formatLastUpdated(new Date(timestamp)) : '---'}</span>
                    </div>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                    <CarbonDioxideCard
                        isLoading={isLoading}
                        value={carbonDioxideSensor?.value}
                    />

                    <OxygenCard
                        isLoading={isLoading}
                        value={oxygenSensor?.value}
                    />

                    <OzoneCard
                        isLoading={isLoading}
                        value={ozoneSensor?.value}
                    />

                    <NitrogenDioxideCard
                        isLoading={isLoading}
                        value={nitrogenDioxideSensor?.value}
                    />

                    <SulfurDioxideCard
                        isLoading={isLoading}
                        value={sulfurDioxideSensor?.value}
                    />

                    <PM25Card
                        isLoading={isLoading}
                        value={particulateMatter25Sensor?.value}
                    />

                    <PM10Card
                        isLoading={isLoading}
                        value={particulateMatter10Sensor?.value}
                    />
                </div>
            </CardContent>
        </Card>
    );
};

export default AirSection;
