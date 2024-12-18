import React from 'react';

const VideoPlayer2: React.FC = () => {
  return (
    <div className='rounded-md aspect-video'>
      <iframe
        title='live-cctv'
        src='http://203.175.11.69/'
        className='rounded-md w-full aspect-video'
        allow='fullscreen'
        allowFullScreen
      />
    </div>
  );
};

export default VideoPlayer2;
