import React from 'react';
import CustomContainer from '@/components/home/custom-container';
import heroImage from '@/assets/hero-image.png';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
    return (
        <section className='h-[85vh] flex items-center'>
            <CustomContainer className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10 lg:mt-0'>
                <div>
                    <h1 className='text-center lg:text-start text-4xl font-semibold'>SISTEM CERDAS PEMANTAU PENERANGAN JALAN UMUM (PJU) TERINTEGRASI</h1>
                    <p className='mt-4 text-center lg:text-start'>Pantau data beberapa sensor cuaca dan kualitas udara, CCTV, dan kondisi perangkan PJU secara real time.</p>
                    <div className='flex justify-center lg:justify-start mb-4 lg:mb-0'>
                        <Button className='mt-4'>
                            <Link to='/dashboard'>Lihat Kondisi Cuaca Saat Ini</Link>
                        </Button>
                    </div>
                </div>
                <div className='flex justify-end'>
                    <img
                        src={heroImage}
                        alt='Hero Image'
                        className='w-full h-full max-w-[40rem] object-cover object-center'
                    />
                </div>
            </CustomContainer>
        </section>
    );
};

export default HeroSection;
