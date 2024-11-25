export type SensorData = {
    id: number;
    value: number;
    timestamp: string;
    code: string;
    sensorTypeId: number;
};

export type SensorStaticData = {
    sensorTypeCode: string;
    title: string;
    subtitle: string;
    unit: string;
    generateColor: (value?: number) => string;
    generateIcon: (value?: number) => JSX.Element;
    info: JSX.Element;
};
