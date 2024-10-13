import { Copyright } from 'lucide-react';
import React from 'react';

type DashboardFooterProps = {
  className?: string;
};

const DashboardFooter: React.FC<DashboardFooterProps> = ({ className }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-4 text-sm text-muted-foreground ${className ? className : ''}`}>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-center md:justify-between items-center gap-1'>
          <p>Tim Pengabdian Masyarakat PENS</p>
          <div className='flex items-center'>
            <Copyright className='w-4 h-4 mr-1' />
            <p>{currentYear} All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DashboardFooter;
