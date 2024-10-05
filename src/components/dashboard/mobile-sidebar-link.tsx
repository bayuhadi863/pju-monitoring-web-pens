import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type MobileSidebarLinkProps = {
  to: string;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
};

const MobileSidebarLink: React.FC<MobileSidebarLinkProps> = ({ to, children, className, icon }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <button
      onClick={handleClick}
      className={`${className} flex items-center gap-2 py-2 px-4 rounded ${isActive ? 'bg-accent text-primary' : ''} transition hover:bg-accent`}
    >
      {icon}
      <span className='text font-medium'>{children}</span>
    </button>
  );
};

export default MobileSidebarLink;
