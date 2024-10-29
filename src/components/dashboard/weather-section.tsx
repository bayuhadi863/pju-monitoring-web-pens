import React, { useState, useEffect } from 'react';
import BlockTitle from './block-title';
import SensorCard from './sensor-card';
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
import { format } from 'date-fns';
import HumidityChart from './chart/humidity-chart';
import TemperatureChart from './chart/temperature-chart';
import SolarRadiationChart from './chart/solar-radiation-chart';
import AirPressureChart from './chart/air-pressure-chart';
import RainfallLevelChart from './chart/rainfall-level-chart';
import WindSpeedChart from './chart/wind-speed-chart';
import WindDirectionChart from './chart/wind-direction-chart';

const WeatherSection: React.FC = () => {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
  const [data, setData] = useState<SensorData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [, setIsUpdating] = useState<boolean>(false);

  const dateNow = new Date();
  const formattedDate = format(dateNow, 'dd-MM-yyyy');

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${apiBaseUrl}/weather`);
      setData(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
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

  return (
    <section className='mt-4'>
      <BlockTitle>Data Sensor Cuaca Terbaru</BlockTitle>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-3'>
        <SensorCard
          title={humidity.title}
          subTitle={humidity.subtitle}
          value={humiditySensor?.value}
          unit={humidity.unit}
          color={humiditySensor ? humidity.generateColor(humiditySensor.value) : ''}
          icon={humiditySensor ? humidity.generateIcon(humiditySensor.value) : ''}
          info={humidity.info}
          isLoading={isLoading}
          chartTitle='Grafik Kelembaban Udara'
          chartDescription={`Grafik nilai kelembaban udara pada hari ini tanggal ${formattedDate}`}
          chart={<HumidityChart />}
        />

        <SensorCard
          title={temperature.title}
          subTitle={temperature.subtitle}
          value={temperatureSensor?.value}
          unit={temperature.unit}
          color={temperatureSensor ? temperature.generateColor(temperatureSensor.value) : ''}
          icon={temperatureSensor ? temperature.generateIcon(temperatureSensor.value) : ''}
          info={temperature.info}
          isLoading={isLoading}
          chartTitle='Grafik Suhu'
          chartDescription={`Grafik nilai suhu pada hari ini tanggal ${formattedDate}`}
          chart={<TemperatureChart />}
        />

        <SensorCard
          title={solar.title}
          subTitle={solar.subtitle}
          value={solarSensor?.value}
          unit={solar.unit}
          color={solarSensor ? solar.generateColor(solarSensor.value) : ''}
          icon={solarSensor ? solar.generateIcon(solarSensor.value) : ''}
          info={solar.info}
          isLoading={isLoading}
          chartTitle='Grafik Radiasi Matahari'
          chartDescription={`Grafik kadar radiasi matahari pada hari ini tanggal ${formattedDate}`}
          chart={<SolarRadiationChart />}
        />

        <SensorCard
          title={airPressure.title}
          subTitle={airPressure.subtitle}
          value={airPressureSensor?.value}
          unit={airPressure.unit}
          color={airPressureSensor ? airPressure.generateColor(airPressureSensor.value) : ''}
          icon={airPressureSensor ? airPressure.generateIcon(airPressureSensor.value) : ''}
          info={airPressure.info}
          isLoading={isLoading}
          chartTitle='Grafik Tekanan Udara'
          chartDescription={`Grafik nilai tekanan udara pada hari ini tanggal ${formattedDate}`}
          chart={<AirPressureChart />}
        />

        <SensorCard
          title={rainfall.title}
          subTitle={rainfall.subtitle}
          value={rainfallSensor?.value}
          unit={rainfall.unit}
          color={rainfallSensor ? rainfall.generateColor(rainfallSensor.value) : ''}
          icon={rainfallSensor ? rainfall.generateIcon(rainfallSensor.value) : ''}
          info={rainfall.info}
          isLoading={isLoading}
          chartTitle='Grafik Curah Hujan'
          chartDescription={`Grafik nilai curah hujan pada hari ini tanggal ${formattedDate}`}
          chart={<RainfallLevelChart />}
        />

        <SensorCard
          title={windSpeed.title}
          subTitle={windSpeed.subtitle}
          value={windSpeedSensor?.value}
          unit={windSpeed.unit}
          color={windSpeedSensor ? windSpeed.generateColor(windSpeedSensor.value) : ''}
          icon={windSpeedSensor ? windSpeed.generateIcon(windSpeedSensor.value) : ''}
          info={windSpeed.info}
          isLoading={isLoading}
          chartTitle='Grafik Kecepatan Angin'
          chartDescription={`Grafik nilai kecepatan angin pada hari ini tanggal ${formattedDate}`}
          chart={<WindSpeedChart />}
        />

        <SensorCard
          title={windDirection.title}
          subTitle={windDirection.subtitle}
          value={windDirectionSensor?.value}
          unit={windDirection.unit}
          color={windDirectionSensor ? windDirection.generateColor(windDirectionSensor.value) : ''}
          icon={windDirectionSensor ? windDirection.generateIcon(windDirectionSensor.value) : ''}
          info={windDirection.info}
          isLoading={isLoading}
          chartTitle='Grafik Arah Angin'
          chartDescription={`Grafik nilai derajat arah angin pada hari ini tanggal ${formattedDate}`}
          chart={<WindDirectionChart />}
        />
      </div>
    </section>
  );
};

export default WeatherSection;
