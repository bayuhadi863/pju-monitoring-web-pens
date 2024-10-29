import React, { useEffect, useRef } from 'react';
import Spinner from '../spinner/spinner';

const VideoPlayer: React.FC = () => {
  const videoRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const refreshVideo = () => {
      if (videoRef.current) {
        // Menambahkan timestamp untuk me-refresh video setiap kali interval berjalan
        videoRef.current.src = `https://bambubot.up.railway.app/api/cctv-stream?timestamp=${new Date().getTime()}`;
      }
    };

    // Refresh video setiap 10 detik
    const intervalId = setInterval(refreshVideo, 10000);

    // Memanggil refresh pertama kali saat komponen di-mount
    refreshVideo();

    // Membersihkan interval saat komponen dilepas dari DOM
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='rounded-md aspect-video flex justify-center items-center relative'>
      <img
        ref={videoRef}
        alt='live-cctv'
        className='rounded-md w-full aspect-video absolute inset-0 z-40'
      />
      <div className='flex gap-2 items-center'>
        <Spinner />
        <p className='text-sm text-center'>Mohon tunggu ...</p>
      </div>
    </div>
  );
};

export default VideoPlayer;
