import React from 'react';
import { Button } from '@/components/ui/button';

const NotFound: React.FC = () => {
    return (
        <section className='bg-white dark:bg-gray-900 h-screen flex justify-center items-center'>
            <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
                <div className='mx-auto max-w-screen-sm text-center'>
                    <h1 className='mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary'>404</h1>
                    <p className='mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white'>Something's missing.</p>
                    <p className='mb-4 text-lg font-light text-gray-500 dark:text-gray-400'>Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
                    <Button>
                        <a href='/'>Back to Homepage</a>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default NotFound;
