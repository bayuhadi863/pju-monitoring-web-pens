import React from 'react';
import { Card } from '@/components/ui/card';
import VideoPlayer from '@/components/dashboard/video-player';

const CctvPage: React.FC = () => {
  return (
    <div className='mt-4'>
      <Card className='p-3 shadow'>
        <VideoPlayer />
      </Card>
    </div>
  );
};

export default CctvPage;
