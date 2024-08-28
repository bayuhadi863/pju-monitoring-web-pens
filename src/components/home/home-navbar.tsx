import React from 'react';
import { Button } from '../ui/button';
import CustomContainer from '@/components/home/custom-container';
import { Link } from 'react-router-dom';

const HomeNavbar: React.FC = () => {
  return (
    <CustomContainer>
      <nav className='flex justify-between items-center h-20'>
        <div>
          <h3 className='text-2xl font-semibold'>Logo</h3>
        </div>
        <div>
          <ul className='flex gap-4 items-center'>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>About</a>
            </li>
            <li>
              <a href='#'>Features</a>
            </li>
          </ul>
        </div>
        <div>
          <Button>
            <Link to='/login'>Login</Link>
          </Button>
        </div>
      </nav>
    </CustomContainer>
  );
};

export default HomeNavbar;
