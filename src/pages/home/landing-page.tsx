import React from 'react';
import HomeNavbar from '@/components/home/home-navbar';
import HeroSection from '@/components/home/hero-section';

const LandingPage: React.FC = () => {
  return (
    <div>
      <HomeNavbar />
      <div className='mt-4'>
        <HeroSection />
      </div>
    </div>
  );
};

export default LandingPage;
