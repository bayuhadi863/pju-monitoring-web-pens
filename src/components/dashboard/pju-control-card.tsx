import React, { ReactNode } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '../ui/button';
import { Power, PowerOff, Loader2 } from 'lucide-react';

type PjuControlCardProps = {
  title: string;
  description: string;
  information: ReactNode;
  type: 'manual' | 'auto';
  isOn: boolean;
  icon: ReactNode;
  insertLoading: boolean;
  waitingMessage: string;
  onClick: () => void;
  label: string;
};

const PjuControlCard: React.FC<PjuControlCardProps> = ({ title, description, information, icon, insertLoading, waitingMessage, onClick, type, isOn, label }) => {
  const generateButtonText = () => {
    if (type === 'manual') {
      return isOn ? 'Matikan' : 'Hidupkan';
    } else {
      return isOn ? 'Nonaktifkan' : 'Aktifkan';
    }
  };

  const generateButtonIcon = () => {
    return isOn ? <PowerOff className='mr-2 h-4 w-4' /> : <Power className='mr-2 h-4 w-4' />;
  };

  const generateButtonContent = () => {
    if (insertLoading) {
      return (
        <>
          <Loader2 className='mr-2 h-4 w-4 animate-spin' />
          Please wait
        </>
      );
    } else {
      return (
        <>
          {generateButtonIcon()}
          {generateButtonText()}
        </>
      );
    }
  };

  return (
    <Card className='overflow-hidden shadow-md'>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          {icon}
          {title}
        </CardTitle>
        <CardDescription className='text-zinc-400'>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='flex items-center justify-between'>
          <span className='text-lg'>{label}</span>
          <Button
            variant={isOn ? 'destructive' : 'default'}
            size='sm'
            className=''
            onClick={onClick}
            disabled={insertLoading}
          >
            {generateButtonContent()}
          </Button>
        </div>
        {insertLoading && (
          <div className='flex gap-2 items-center mt-4'>
            <Loader2 className='h-3 w-3 animate-spin' />
            <p className='text-xs text-zinc-400'>{waitingMessage}</p>
          </div>
        )}
      </CardContent>
      <CardFooter>{information}</CardFooter>
    </Card>
  );
};

export default PjuControlCard;
