import React, { useEffect } from 'react';
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { SensorChartResponse } from '@/lib/types/response/chart/sensor-chart-response';
import { getSensorChartData } from '@/lib/services/chart-service';
import { particulateMatter25 } from '@/lib/data/sensor-data/air-quality/particulate-matter-25';

const PM25Chart: React.FC = () => {
  const [chartData, setChartData] = React.useState<SensorChartResponse[]>([]);
  const [error, setError] = React.useState<string>('');
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await getSensorChartData(particulateMatter25.sensorTypeCode, 2);
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
      label: `${particulateMatter25.title} Rata-rata`,
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
                <div className='flex min-w-[130px] items-center text-xs font-medium gap-2'>
                  <div
                    className='h-2.5 w-2.5 shrink-0 rounded-[2px] bg-[--color-bg]'
                    style={
                      {
                        '--color-bg': `var(--color-${name})`,
                      } as React.CSSProperties
                    }
                  />
                  {chartConfig[name as keyof typeof chartConfig]?.label || name}
                  <div className='ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground'>
                    {value}
                    <span className='font-medium text-muted-foreground'>{particulateMatter25.unit}</span>
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

  const loadingComponent = <div className='h-72 flex justify-center items-center'>Loading...</div>;
  const errorComponent = <div className='h-72 flex justify-center items-center'>{error}</div>;

  return <div>{isLoading ? loadingComponent : error ? errorComponent : chart}</div>;
};

export default PM25Chart;
