import React from 'react';

const VideoPlayer: React.FC = () => {
  return (
    <div className='rounded-md'>
      <iframe
        src='https://www.youtube.com/embed/PiOqMMOFQNw?si=Xyrkp7atO8Ek8WqZ'
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        className='rounded-md w-full aspect-video'
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
