import React, { useEffect, useRef } from 'react';

const VideoPlayer: React.FC = () => {
  const videoRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = `http://localhost:5000/cctv-stream`;
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
