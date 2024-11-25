import React, { useEffect } from 'react';
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { SensorChartResponse } from '@/lib/types/response/chart/sensor-chart-response';
import { getSensorChartData } from '@/lib/services/chart-service';
import { airPressure } from '@/lib/data/sensor-data/weather/air-pressure';

const AirPressureChart: React.FC = () => {
    const [chartData, setChartData] = React.useState<SensorChartResponse[]>([]);
    const [error, setError] = React.useState<string>('');
    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    const fetchData = async () => {
        try {
            setIsLoading(true);
            const response = await getSensorChartData(airPressure.sensorTypeCode, 2);
            setChartData(response.data.data);
        } catch (error: unknown) {
            setError('Error fetching data');
            console.error('Error fetching data:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const chartConfig = {
        averageValue: {
            label: `${airPressure.title} Rata-rata`,
            color: 'hsl(var(--chart-1))',
        },
    } satisfies ChartConfig;

    const chart = (
        <ChartContainer config={chartConfig}>
            <LineChart
                accessibilityLayer
                data={chartData}
                margin={{
                    left: 12,
                    right: 12,
                }}
            >
                <CartesianGrid vertical={false} />
                <XAxis
                    dataKey='hour'
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(hour) => `${hour}:00`}
                />
                <ChartTooltip
                    cursor={true}
                    defaultIndex={1}
                    content={
                        <ChartTooltipContent
                            hideLabel
                            formatter={(value, name) => (
                                <div className='flex flex-col min-w-[130px] text-xs font-medium gap-2'>
                                    <div className='flex gap-2 items-center'>
                                        <div
                                            className='h-2.5 w-2.5 shrink-0 rounded-[2px] bg-[--color-bg]'
                                            style={
                                                {
                                                    '--color-bg': `var(--color-${name})`,
                                                } as React.CSSProperties
                                            }
                                        />
                                        <p>{chartConfig[name as keyof typeof chartConfig]?.label || name}</p>
                                    </div>
                                    <div className='flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground'>
                                        {value}
                                        <span className='font-medium text-muted-foreground'>{airPressure.unit}</span>
                                    </div>
                                </div>
                            )}
                        />
                    }
                />

                <Line
                    dataKey='averageValue'
                    type='natural'
                    stroke='var(--color-averageValue)'
                    strokeWidth={2}
                    dot={false}
                />
            </LineChart>
        </ChartContainer>
    );

    const loadingComponent = <div className='h-28 flex justify-center items-center'>Loading...</div>;
    const errorComponent = <div className='h-28 flex justify-center items-center'>{error}</div>;

    return <div>{isLoading ? loadingComponent : error ? errorComponent : chart}</div>;
};

export default AirPressureChart;
