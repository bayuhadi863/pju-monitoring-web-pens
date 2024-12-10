import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SensorData } from '@/lib/types/sensor-data-type';
import { socket } from '@/lib/configs/socket';
import { humidity } from '@/lib/data/sensor-data/weather/humidity';
import { temperature } from '@/lib/data/sensor-data/weather/temperature';
import { solar } from '@/lib/data/sensor-data/weather/solar-radiation';
import { rainfall } from '@/lib/data/sensor-data/weather/rainfall-level';
import { windSpeed } from '@/lib/data/sensor-data/weather/wind-speed';
import { windDirection } from '@/lib/data/sensor-data/weather/wind-direction';
import { airPressure } from '@/lib/data/sensor-data/weather/air-pressure';
import HumidityCard from './card/humidity-card';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Clock } from 'lucide-react';
import TemperatureCard from './card/temperature-card';
import AirPressureCard from './card/air-pressure-card';
import RainfallLevelCard from './card/rainfall-level-card';
import WindDirectionCard from './card/wind-direction-card';
import WindSpeedCard from './card/wind-speed-card';
import SolarRadiationCard from './card/solar-radiation-card';
import useWeatherSummaryStore, { Summary } from '@/stores/weather-summary-store';

const WeatherSection: React.FC = () => {
    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
    const [data, setData] = useState<SensorData[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [, setIsUpdating] = useState<boolean>(false);

    const { setSummary, setIsLoading: setSummaryLoading } = useWeatherSummaryStore();

    const fetchData = async () => {
        try {
            setIsLoading(true);
            setSummaryLoading(true);
            const response = await axios.get(`${apiBaseUrl}/weather`);
            setData(response.data.data);
            const summary: Summary = {
                rainfallLevel: response.data.data.find((sensorData: SensorData) => sensorData.code === rainfall.sensorTypeCode)?.value || 0,
                temperature: response.data.data.find((sensorData: SensorData) => sensorData.code === temperature.sensorTypeCode)?.value || 0,
                solarRadiation: response.data.data.find((sensorData: SensorData) => sensorData.code === solar.sensorTypeCode)?.value || 0,
            };

            if (response.data.data.length > 0) {
                setSummary(summary);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setIsLoading(false);
            setSummaryLoading(false);
        }
    };

    const handleWeatherUpdate = async () => {
        setIsUpdating(true);
        await fetchData();
        setIsUpdating(false);
    };

    useEffect(() => {
        fetchData();
        socket.on('weatherUpdate', handleWeatherUpdate);
        return () => {
            socket.off('weatherUpdate');
        };
    }, []);

    const getSensorDataBySensorTypeCode = (code: string): SensorData | undefined => {
        return data.find((sensorData) => sensorData.code === code);
    };

    const humiditySensor = getSensorDataBySensorTypeCode(humidity.sensorTypeCode);
    const temperatureSensor = getSensorDataBySensorTypeCode(temperature.sensorTypeCode);
    const solarSensor = getSensorDataBySensorTypeCode(solar.sensorTypeCode);
    const rainfallSensor = getSensorDataBySensorTypeCode(rainfall.sensorTypeCode);
    const windSpeedSensor = getSensorDataBySensorTypeCode(windSpeed.sensorTypeCode);
    const windDirectionSensor = getSensorDataBySensorTypeCode(windDirection.sensorTypeCode);
    const airPressureSensor = getSensorDataBySensorTypeCode(airPressure.sensorTypeCode);

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

    const timestamp: string | undefined = temperatureSensor?.timestamp;

    return (
        <Card>
            <CardHeader>
                <CardTitle>Informasi Cuaca</CardTitle>
                <CardDescription>
                    <div className='flex items-center space-x-2'>
                        <Clock className='h-5 w-5 text-slate-500' />
                        <span className='text-sm text-muted-foreground'>Terakhir diupdate: {timestamp ? formatLastUpdated(new Date(timestamp)) : '---'}</span>
                    </div>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className='flex flex-col lg:flex-row gap-4'>
                    <div className='lg:basis-2/5 xl:basis-1/2 flex items-center'>
                        <TemperatureCard
                            className='w-full  h-full flex flex-col justify-evenly p-4 rounded-lg border'
                            isLoading={isLoading}
                            value={temperatureSensor?.value}
                        />
                    </div>
                    <div className='lg:basis-3/5 xl:basis-1/2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4'>
                        <AirPressureCard
                            isLoading={isLoading}
                            value={airPressureSensor?.value}
                        />
                        <RainfallLevelCard
                            isLoading={isLoading}
                            value={rainfallSensor?.value}
                        />
                        <WindDirectionCard
                            isLoading={isLoading}
                            value={windDirectionSensor?.value}
                        />
                    </div>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mt-4'>
                    <HumidityCard
                        isLoading={isLoading}
                        value={humiditySensor?.value}
                    />
                    <WindSpeedCard
                        isLoading={isLoading}
                        value={windSpeedSensor?.value}
                    />
                    <SolarRadiationCard
                        isLoading={isLoading}
                        value={solarSensor?.value}
                    />
                </div>
            </CardContent>
        </Card>
    );
};

export default WeatherSection;
