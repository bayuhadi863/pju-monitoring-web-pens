import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CircleCheckBig, Info, TriangleAlert, CircleAlert } from 'lucide-react';
import { FC } from 'react';

type CustomAlertProps = {
  title: string;
  description: string;
  variant: 'info' | 'warning' | 'destructive' | 'success';
  icon?: React.ReactNode;
};

const CustomAlert: FC<CustomAlertProps> = ({ title, description, variant, icon }) => {
  const generateIcon = () => {
    switch (variant) {
      case 'success':
        return <CircleCheckBig className='h-4 w-4' />;
      case 'info':
        return <Info className='h-4 w-4' />;
      case 'warning':
        return <TriangleAlert className='h-4 w-4' />;
      case 'destructive':
        return <CircleAlert className='h-4 w-4' />;
      default:
        return null;
    }
  };

  return (
    <Alert variant={variant}>
      {icon || generateIcon()}
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
};

export default CustomAlert;
