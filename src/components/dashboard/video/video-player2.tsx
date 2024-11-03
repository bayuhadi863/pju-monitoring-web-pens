import React from 'react';

const VideoPlayer2: React.FC = () => {
  return (
    <div className='rounded-md aspect-video'>
      <iframe
        title='live-cctv'
        src='https://rtsp.me/embed/2zES6Z3D/'
        className='rounded-md w-full aspect-video'
        allow='fullscreen'
        allowFullScreen
      />
    </div>
  );
};

export default VideoPlayer2;
