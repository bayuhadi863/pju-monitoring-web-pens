import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

type SidebarLinkProps = {
  to: string;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
};

const SidebarLink: React.FC<SidebarLinkProps> = ({ to, children, className, icon }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`${className} flex items-center gap-2 py-2 px-4 rounded ${isActive ? 'bg-primary/10 text-primary' : ''} transition hover:bg-primary/10`}
    >
      {icon}
      <span className='font-medium'>{children}</span>
    </Link>
  );
};

export default SidebarLink;
