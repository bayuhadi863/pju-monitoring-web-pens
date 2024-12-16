import { FC } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import carbonDioxideIcon from '@/assets/carbon-dioxide.png';
import { roundValue } from '@/lib/utils/roundValue';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Info } from 'lucide-react';
import {
  carbonDioxide,
  generateCarbonDioxideBadge,
} from '@/lib/data/sensor-data/air-quality/carbon-dioxide';
import CarbonDioxideChart from '../chart/carbon-dioxide-chart';
import ExportSensorDialog from '../dialog/export-sensor-dialog';
import { useAuth } from '@/context/auth-context';

type CarbonDioxideCardProps = {
  className?: string;
  isLoading: boolean;
  value?: number;
};

const CarbonDioxideCard: FC<CarbonDioxideCardProps> = ({
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
            <img src={carbonDioxideIcon} alt="App Logo" className="w-6 mt-0" />
            <div className="flex gap-1 items-center flex-wrap">
              <h5 className="font-semibold">Karbon Dioksida (CO2)</h5>
              <Popover>
                <PopoverTrigger>
                  <Info className="h-4 w-4 text-muted-foreground" />
                </PopoverTrigger>

                <PopoverContent>{carbonDioxide.info}</PopoverContent>
              </Popover>
            </div>
          </div>
          {user && (
            <div className="flex justify-center">
              <ExportSensorDialog
                name={carbonDioxide.title}
                sensorTypeCode={carbonDioxide.sensorTypeCode}
                sensorType="air-quality"
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
              {carbonDioxide.unit}
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            {generateCarbonDioxideBadge(isLoading ? undefined : value)}
          </div>
        </div>
        <div className="mt-2">
          <h4 className="mb-2 text-sm font-medium">Trend</h4>
          <CarbonDioxideChart />
        </div>
      </CardContent>
    </Card>
  );
};

export default CarbonDioxideCard;
