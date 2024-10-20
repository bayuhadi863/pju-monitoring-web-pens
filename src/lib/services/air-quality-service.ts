import accessTokenAxios from '../api/accessTokenAxios';

export const getAirQualityIspu = async (pjuId: number) => {
  const response = await accessTokenAxios.get(`/air-quality/${pjuId}/ispu`);

  return response;
};
