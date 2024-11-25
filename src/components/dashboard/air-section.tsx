import React, { useState, useEffect } from 'react';
import SensorCard from './sensor-card';
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
import { format } from 'date-fns';
import CarbonDioxideChart from './chart/carbon-dioxide-chart';
import OxygenChart from './chart/oxygen-chart';
import OzoneChart from './chart/ozone';
import NitrogenDioxideChart from './chart/nitrogen-dioxide-chart';
import SulfurDioxideChart from './chart/sulfur-dioxide-chart';
import PM25Chart from './chart/pm25-chart';
import PM10Chart from './chart/pm10-chart';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Clock } from 'lucide-react';

const AirSection: React.FC = () => {
    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
    const [data, setData] = useState<SensorData[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [, setIsUpdating] = useState<boolean>(false);

    const dateNow = new Date();
    const formattedDate = format(dateNow, 'dd-MM-yyyy');

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
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-3'>
                    <SensorCard
                        title={carbonDioxide.title}
                        subTitle={carbonDioxide.subtitle}
                        value={carbonDioxideSensor?.value}
                        unit={carbonDioxide.unit}
                        color={carbonDioxideSensor ? carbonDioxide.generateColor(carbonDioxideSensor.value) : ''}
                        icon={carbonDioxideSensor ? carbonDioxide.generateIcon(carbonDioxideSensor.value) : ''}
                        info={carbonDioxide.info}
                        isLoading={isLoading}
                        chartTitle='Grafik Karbon Dioksida'
                        chartDescription={`Grafik nilai kadar karbon dioksida pada hari ini tanggal ${formattedDate}`}
                        chart={<CarbonDioxideChart />}
                    />

                    <SensorCard
                        title={oxygen.title}
                        subTitle={oxygen.subtitle}
                        value={oxygenSensor?.value}
                        unit={oxygen.unit}
                        color={oxygenSensor ? oxygen.generateColor(oxygenSensor.value) : ''}
                        icon={oxygenSensor ? oxygen.generateIcon(oxygenSensor.value) : ''}
                        info={oxygen.info}
                        isLoading={isLoading}
                        chartTitle='Grafik Oksigen'
                        chartDescription={`Grafik nilai kadar oksigen pada hari ini tanggal ${formattedDate}`}
                        chart={<OxygenChart />}
                    />

                    <SensorCard
                        title={ozone.title}
                        subTitle={ozone.subtitle}
                        value={ozoneSensor?.value}
                        unit={ozone.unit}
                        color={ozoneSensor ? ozone.generateColor(ozoneSensor.value) : ''}
                        icon={ozoneSensor ? ozone.generateIcon(ozoneSensor.value) : ''}
                        info={ozone.info}
                        isLoading={isLoading}
                        chartTitle='Grafik Gas Ozon'
                        chartDescription={`Grafik nilai kadar gas ozon pada hari ini tanggal ${formattedDate}`}
                        chart={<OzoneChart />}
                    />

                    <SensorCard
                        title={nitrogenDioxide.title}
                        subTitle={nitrogenDioxide.subtitle}
                        value={nitrogenDioxideSensor?.value}
                        unit={nitrogenDioxide.unit}
                        color={nitrogenDioxideSensor ? nitrogenDioxide.generateColor(nitrogenDioxideSensor.value) : ''}
                        icon={nitrogenDioxideSensor ? nitrogenDioxide.generateIcon(nitrogenDioxideSensor.value) : ''}
                        info={nitrogenDioxide.info}
                        isLoading={isLoading}
                        chartTitle='Grafik Nitrogen Dioksida'
                        chartDescription={`Grafik nilai kadar nitrogen dioksida pada hari ini tanggal ${formattedDate}`}
                        chart={<NitrogenDioxideChart />}
                    />

                    <SensorCard
                        title={sulfurDioxide.title}
                        subTitle={sulfurDioxide.subtitle}
                        value={sulfurDioxideSensor?.value}
                        unit={sulfurDioxide.unit}
                        color={sulfurDioxideSensor ? sulfurDioxide.generateColor(sulfurDioxideSensor.value) : ''}
                        icon={sulfurDioxideSensor ? sulfurDioxide.generateIcon(sulfurDioxideSensor.value) : ''}
                        info={sulfurDioxide.info}
                        isLoading={isLoading}
                        chartTitle='Grafik Sulfur Dioksida'
                        chartDescription={`Grafik nilai kadar sulfur dioksida pada hari ini tanggal ${formattedDate}`}
                        chart={<SulfurDioxideChart />}
                    />

                    <SensorCard
                        title={particulateMatter25.title}
                        subTitle={particulateMatter25.subtitle}
                        value={particulateMatter25Sensor?.value}
                        unit={particulateMatter25.unit}
                        color={particulateMatter25Sensor ? particulateMatter25.generateColor(particulateMatter25Sensor.value) : ''}
                        icon={particulateMatter25Sensor ? particulateMatter25.generateIcon(particulateMatter25Sensor.value) : ''}
                        info={particulateMatter25.info}
                        isLoading={isLoading}
                        chartTitle='Grafik Partikulat Materi 2.5'
                        chartDescription={`Grafik nilai kadar partikulat materi 2.5 pada hari ini tanggal ${formattedDate}`}
                        chart={<PM25Chart />}
                    />

                    <SensorCard
                        title={particulateMatter10.title}
                        subTitle={particulateMatter10.subtitle}
                        value={particulateMatter10Sensor?.value}
                        unit={particulateMatter10.unit}
                        color={particulateMatter10Sensor ? particulateMatter10.generateColor(particulateMatter10Sensor.value) : ''}
                        icon={particulateMatter10Sensor ? particulateMatter10.generateIcon(particulateMatter10Sensor.value) : ''}
                        info={particulateMatter10.info}
                        isLoading={isLoading}
                        chartTitle='Grafik Partikulat Materi 10'
                        chartDescription={`Grafik nilai kadar partikulat materi 10 pada hari ini tanggal ${formattedDate}`}
                        chart={<PM10Chart />}
                    />
                </div>
            </CardContent>
        </Card>
    );
};

export default AirSection;
