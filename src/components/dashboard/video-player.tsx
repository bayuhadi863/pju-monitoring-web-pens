import React, { useEffect, useRef } from 'react';

const VideoPlayer: React.FC = () => {
  const videoRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = `https://bambubot.up.railway.app/api/cctv-strean`;
    }
  }, []);

  return (
    <div className='rounded-md'>
      <img
        ref={videoRef}
        alt='live-cctv'
        className='rounded-md w-full aspect-video'
      />
    </div>
  );
};

export default VideoPlayer;
