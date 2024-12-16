import { FC } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { roundValue } from '@/lib/utils/roundValue';
import rainfallLevelIcon from '@/assets/rainfall-level.png';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Info } from 'lucide-react';
import RainfallLevelChart from '../chart/rainfall-level-chart';
import {
  generateRainfallBadge,
  rainfall,
} from '@/lib/data/sensor-data/weather/rainfall-level';
import ExportSensorDialog from '../dialog/export-sensor-dialog';
import { useAuth } from '@/context/auth-context';

type RainfallLevelCardProps = {
  className?: string;
  isLoading: boolean;
  value?: number;
};

const RainfallLevelCard: FC<RainfallLevelCardProps> = ({
  value,
  isLoading,
  className,
}) => {
  const { user } = useAuth();
  return (
    <Card className={className}>
      <CardContent className="mt-5 flex flex-col gap-4">
        <div className="flex flex-col lg:flex-row justify-between gap-4">
          <div className="flex items-start gap-2">
            <img src={rainfallLevelIcon} alt="App Logo" className="w-6 mt-0" />
            <div className="flex gap-1 items-center flex-wrap">
              <h5 className="font-semibold">Curah Hujan</h5>
              <Popover>
                <PopoverTrigger>
                  <Info className="h-4 w-4 text-muted-foreground" />
                </PopoverTrigger>

                <PopoverContent>{rainfall.info}</PopoverContent>
              </Popover>
            </div>
          </div>
          {user && (
            <div className="flex justify-center">
              <ExportSensorDialog
                name={rainfall.title}
                sensorTypeCode={rainfall.sensorTypeCode}
                sensorType="weather"
              />
            </div>
          )}
        </div>
        <div className="flex flex-col lg:flex-row gap-2">
          <div className="lg:basis-1/2 flex flex-col gap-4">
            <div className="flex flex-col justify-center items-center gap-2 h-full">
              <div className="flex items-start gap-1 justify-center">
                <h3 className="text-4xl font-semibold text-center">
                  {isLoading ? '--' : roundValue(value)}
                </h3>
                <span className="font-semibold text-muted-foreground mt-1">
                  {rainfall.unit}
                </span>
              </div>
              <div>{generateRainfallBadge(isLoading ? undefined : value)}</div>
            </div>
          </div>
          <div className="lg:basis-1/2">
            <h4 className="mb-2 text-sm font-medium">Trend</h4>
            <RainfallLevelChart />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RainfallLevelCard;
