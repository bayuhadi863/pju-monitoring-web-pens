import React, { useEffect } from 'react';
import Hls from 'hls.js';

const VideoPlayer2: React.FC = () => {
  const hostName = import.meta.env.VITE_VPS_HOST;
  useEffect(() => {
    const video = document.getElementById('cctv-video') as HTMLVideoElement | null;

    if (video) {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(`http://${hostName}/live/simpanglima.m3u8`);
        hls.attachMedia(video);
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = `http://${hostName}/live/simpanglima.m3u8`;
      }
    } else {
      console.error('Video element not found');
    }
  }, []);

  return (
    <div className="rounded-md aspect-video">
      <video
        id="cctv-video"
        controls
        autoPlay
        className="rounded-md w-full aspect-video"
      />
    </div>
  );
};

export default VideoPlayer2;
