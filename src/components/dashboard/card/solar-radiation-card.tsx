import { FC } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { roundValue } from '@/lib/utils/roundValue';
import solarIcon from '@/assets/solar.png';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Info } from 'lucide-react';
import {
  generateSolarBadge,
  solar,
} from '@/lib/data/sensor-data/weather/solar-radiation';
import SolarRadiationChart from '../chart/solar-radiation-chart';
import ExportSensorDialog from '../dialog/export-sensor-dialog';
import { useAuth } from '@/context/auth-context';

type SolarRadiationCardProps = {
  className?: string;
  isLoading: boolean;
  value?: number;
};

const SolarRadiationCard: FC<SolarRadiationCardProps> = ({
  value,
  isLoading,
  className,
}) => {
  const { user } = useAuth();
  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex flex-col lg:flex-row justify-between gap-4">
          <div className="flex items-start gap-2">
            <img src={solarIcon} alt="App Logo" className="w-6 mt-0" />
            <div className="flex gap-1 items-center flex-wrap">
              <h5 className="font-semibold">Radiasi Matahari</h5>
              <Popover>
                <PopoverTrigger>
                  <Info className="h-4 w-4 text-muted-foreground" />
                </PopoverTrigger>

                <PopoverContent>{solar.info}</PopoverContent>
              </Popover>
            </div>
          </div>
          {user && (
            <div className="flex justify-center">
              <ExportSensorDialog
                name={solar.title}
                sensorTypeCode={solar.sensorTypeCode}
                sensorType="weather"
              />
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="flex items-start gap-1 justify-center">
            <h3 className="text-4xl font-semibold text-center">
              {isLoading ? '--' : roundValue(value)}
            </h3>
            <span className="font-semibold text-muted-foreground mt-1">
              {solar.unit}
            </span>
          </div>
          <div>{generateSolarBadge(isLoading ? undefined : value)}</div>
        </div>
        <div className="basis-1/2">
          <h4 className="mb-2 text-sm font-medium">Trend</h4>
          <SolarRadiationChart />
        </div>
      </CardContent>
    </Card>
  );
};

export default SolarRadiationCard;
