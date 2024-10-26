import publicAxios from '../api/publicAxios';
import { format } from 'date-fns';

const sensorEndpoint = '/sensor/hourly';
const dateNow = new Date();
const formattedDate = format(dateNow, 'yyyy-MM-dd');

export const getSensorChartData = async (sensorCode: string, pjuId: number) => {
  const data = {
    sensorCode,
    pjuId,
    date: formattedDate,
  };

  const response = await publicAxios.get(sensorEndpoint, { params: data });

  return response;
};
