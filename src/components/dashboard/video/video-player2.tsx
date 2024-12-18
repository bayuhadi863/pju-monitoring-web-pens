import React from 'react';

const VideoPlayer2: React.FC = () => {
  return (
    <div className="rounded-md aspect-video">
      {/* <iframe
        title="live-cctv"
        src="http://203.175.11.69"
        className="rounded-md w-full aspect-video"
        allow="fullscreen"
        allowFullScreen
      /> */}
      <embed
        src="http://203.175.11.69"
        className="rounded-md w-full aspect-video"
      />
      {/* <video controls className="rounded-md w-full aspect-video">
        <source src="http://203.175.11.69/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
    </div>
  );
};

export default VideoPlayer2;
