export type SensorData = {
  id: number;
  value: number;
  sensorTypeId: number;
  timestamp: string;
  sensorType: {
    id: number;
    code: string;
    name: string;
    unit: string;
  };
};
