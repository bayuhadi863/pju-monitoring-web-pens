import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';

const VideoPlayer2: React.FC = () => {
  const baseUrl = import.meta.env.VITE_VPS_BASE_URL;
  // useEffect(() => {
  //   const video = document.getElementById(
  //     'cctv-video'
  //   ) as HTMLVideoElement | null;

  //   if (video) {
  //     if (Hls.isSupported()) {
  //       const hls = new Hls();
  //       hls.loadSource(`${baseUrl}/live/simpanglima.m3u8`);
  //       hls.attachMedia(video);
  //     } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
  //       video.src = `${baseUrl}/live/simpanglima.m3u8`;
  //     }
  //   } else {
  //     console.error('Video element not found');
  //   }
  // }, []);

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      const videoSrc = `${baseUrl}/live/simpanglima.m3u8`;

      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(videoSrc);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          video.play().catch((err) => console.log('Playback failed:', err));
        });
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = videoSrc;
        video.addEventListener('loadedmetadata', () => {
          video.play().catch((err) => console.log('Playback failed:', err));
        });
      }
    }
  }, []);

  return (
    <div className="rounded-md aspect-video">
      <video
        ref={videoRef}
        controls
        autoPlay
        className="rounded-md w-full aspect-video"
      />
    </div>
  );
};

export default VideoPlayer2;
