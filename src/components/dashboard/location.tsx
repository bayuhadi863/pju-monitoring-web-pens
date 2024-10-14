import React from 'react';
import { IoLocationSharp } from 'react-icons/io5';

type LocationProps = {
  location: string;
  lat: string;
  long: string;
};

const Location: React.FC<LocationProps> = ({ location, lat, long }) => {
  return (
    <div className='text-xs text-muted-foreground max-w-64 '>
      <div className='flex items-start gap-2'>
        <IoLocationSharp className='mt-1 h-3 w-3 basis-1/12' />
        <div>
          <p>{location}</p>
          <div className='flex gap-4 mt-2'>
            <p>
              <span className='font-medium'>Lat:</span> {lat}
            </p>
            <p>
              <span className='font-medium'>Long:</span> {long}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
