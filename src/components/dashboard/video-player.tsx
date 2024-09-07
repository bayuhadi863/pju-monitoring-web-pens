import React from 'react';

const VideoPlayer: React.FC = () => {
  return (
    <div className='rounded-md'>
      {/* <iframe
        className='rounded-md w-full aspect-video'
        src='https://www.youtube.com/embed/jT8GMOupe3k?si=bJDlrIhQ6AUIquTY'
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerPolicy='strict-origin-when-cross-origin'
        allowFullScreen
      ></iframe> */}
      <img
        src='https://c993g0v4-3000.asse.devtunnels.ms/cctv/stream/1'
        alt='live-cctv'
        className='rounded-md w-full aspect-video'
      />
    </div>
  );
};

export default VideoPlayer;
