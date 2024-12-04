import React from 'react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
    return (
        <section
            id='home'
            className='h-[92vh] flex items-center'
        >
            <div className='h-[90vh] w-full rounded-2xl mx-4 mb-4 bg-hero bg-cover bg-repeat-x bg-bottom shadow-lg shadow-slate-400/100 flex flex-col justify-center items-center'>
                <div className='text-center text-lg font-semibold md:text-xl lg:text-2xl xl:text-4xl text-gray-900'>
                    Sistem Cerdas
                    <br />
                    Pemantau Penerangan Jalan Umum
                </div>
                <div className='text-center mx-4 pt-2 capitalize text-sm md:text-base lg:text-lg xl:text-xl text-gray-900'>
                    Pantau data sensor cuaca, kualitas udara, CCTV, dan kondisi perangkat PJU secara real-time <br /> untuk pengelolaan yang lebih efisien dan responsif.
                </div>
                <div>
                    <Button
                        className='mt-4'
                        variant='dark'
                    >
                        <Link to='/dashboard'>Lihat Kondisi Cuaca</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
