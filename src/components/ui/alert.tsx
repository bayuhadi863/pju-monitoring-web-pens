import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const alertVariants = cva('relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground', {
  variants: {
    variant: {
      default: 'bg-background text-foreground',
      destructive: 'border-red-600/50 text-red-600 dark:border-red-600/50 [&>svg]:text-red-600 bg-red-600/10 dark:bg-red-600/10',
      success: 'border-green-600/50 text-green-600 dark:border-green-600/50 dark:text-green-600 [&>svg]:text-green-600 bg-green-600/10 dark:bg-green-600/10',
      warning: 'border-yellow-400/50 text-yellow-500 dark:border-yellow-400/50 dark:text-yellow-500 [&>svg]:text-yellow-500 bg-yellow-400/5 dark:bg-yellow-400/5',
      info: 'border-primary/50 text-primary dark:border-primary/50 dark:text-primary [&>svg]:text-primary bg-primary/10 dark:bg-primary/10',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

const Alert = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role='alert'
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
));
Alert.displayName = 'Alert';

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn('mb-1 font-medium leading-none tracking-tight', className)}
    {...props}
  />
));
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('text-sm [&_p]:leading-relaxed', className)}
    {...props}
  />
));
AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertTitle, AlertDescription };
