import { Card, CardContent } from '@/components/ui/card';

export type PjuMonitorCardProps = {
  title: string;
  subTitle: string;
  unit: string;
  icon: React.ReactNode;
  value: number;
};

export default function PjuMonitorCard({ value, title, subTitle, unit, icon }: PjuMonitorCardProps) {
  const roundedValue = Math.round(Number(value) * 10) / 10;

  return (
    <Card className='overflow-hidden shadow-md'>
      <CardContent className='p-6'>
        <div className='grid grid-cols-[1fr,auto] gap-4 items-center'>
          <div className='space-y-2'>
            <h3 className='text-2xl font-semibold tracking-tight'>{title}</h3>
            <p className='text-sm text-muted-foreground'>{subTitle}</p>
          </div>
          <div className='bg-primary/10 p-3 rounded-full'>{icon}</div>
        </div>
        <div className='mt-4 flex items-baseline space-x-2'>
          <span className='text-4xl font-bold tracking-tighter'>{roundedValue}</span>
          <span className='text-sm font-medium text-muted-foreground'>{unit}</span>
        </div>
      </CardContent>
    </Card>
  );
}
