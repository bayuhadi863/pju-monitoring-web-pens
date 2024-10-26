import React, { useEffect } from 'react';
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { SensorChartResponse } from '@/lib/types/response/chart/sensor-chart-response';
import { getSensorChartData } from '@/lib/services/chart-service';

const HumidityChart: React.FC = () => {
  const [chartData, setChartData] = React.useState<SensorChartResponse[]>([]);
  const [error, setError] = React.useState<string>('');
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await getSensorChartData('HUM', 2);
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
      label: 'Kelembaban Rata-rata',
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
          content={<ChartTooltipContent />}
        />
        <Line
          dataKey='averageValue'
          type='natural'
          stroke='var(--color-averageValue)'
          strokeWidth={2}
          dot={{
            fill: 'var(--color-averageValue)',
          }}
          activeDot={{
            r: 6,
          }}
        />
      </LineChart>
    </ChartContainer>
  );

  const loadingComponent = <div className='h-80 flex justify-center items-center'>Loading...</div>;
  const errorComponent = <div className='h-80 flex justify-center items-center'>{error}</div>;

  return <div>{isLoading ? loadingComponent : error ? errorComponent : chart}</div>;
};

export default HumidityChart;
