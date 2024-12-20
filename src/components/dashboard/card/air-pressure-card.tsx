import { FC } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { roundValue } from '@/lib/utils/roundValue';
import airPressureIcon from '@/assets/air-pressure.png';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Info } from 'lucide-react';
import {
  airPressure,
  generateAirPressureBadge,
} from '@/lib/data/sensor-data/weather/air-pressure';
import AirPressureChart from '../chart/air-pressure-chart';
import ExportSensorDialog from '../dialog/export-sensor-dialog';
import { useAuth } from '@/context/auth-context';

type AirPressureCardProps = {
  className?: string;
  isLoading: boolean;
  value?: number;
};

const AirPressureCard: FC<AirPressureCardProps> = ({
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
            <img src={airPressureIcon} alt="App Logo" className="w-6 mt-0" />
            <div className="flex gap-1 items-center flex-wrap">
              <h5 className="font-semibold">Tekanan Udara</h5>
              <Popover>
                <PopoverTrigger>
                  <Info className="h-4 w-4 text-muted-foreground" />
                </PopoverTrigger>

                <PopoverContent>{airPressure.info}</PopoverContent>
              </Popover>
            </div>
          </div>
          {user && (
            <div className="flex justify-center">
              <ExportSensorDialog
                name={airPressure.title}
                sensorTypeCode={airPressure.sensorTypeCode}
                sensorType="weather"
              />
            </div>
          )}
        </div>

        <div className="flex flex-col lg:flex-row gap-2">
          <div className="lg:basis-1/2">
            <div className="flex flex-col justify-center items-center gap-2 h-full">
              <div className="flex items-start gap-1 justify-center">
                <h3 className="text-4xl font-semibold text-center">
                  {isLoading ? '--' : roundValue(value)}
                </h3>
                <span className="font-semibold text-muted-foreground mt-1">
                  {airPressure.unit}
                </span>
              </div>
              <div>
                {generateAirPressureBadge(isLoading ? undefined : value)}
              </div>
            </div>
          </div>
          <div className="lg:basis-1/2">
            <h4 className="mb-2 text-sm font-medium">Trend</h4>
            <AirPressureChart />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AirPressureCard;
