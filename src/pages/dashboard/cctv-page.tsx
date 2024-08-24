import React from 'react';
import { Card } from '@/components/ui/card';
import VideoPlayer from '@/components/dashboard/video-player';
import Location from '@/components/dashboard/location';

const CctvPage: React.FC = () => {
  return (
    <div className='mt-4'>
      <Location />
      <Card className='p-3 shadow mt-4'>
        <VideoPlayer />
      </Card>
    </div>
  );
};

export default CctvPage;
