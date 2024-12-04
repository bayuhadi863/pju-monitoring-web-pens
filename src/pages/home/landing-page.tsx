import React from 'react';
import HomeNavbar from '@/components/home/home-navbar';
import HeroSection from '@/components/home/hero-section';
import FooterSection from '@/components/home/footer-section';
import AboutSection from '@/components/home/about-section';

const LandingPage: React.FC = () => {
    return (
        <div>
            <HomeNavbar />
            <HeroSection />
            <AboutSection />
            <FooterSection />
        </div>
    );
};

export default LandingPage;
