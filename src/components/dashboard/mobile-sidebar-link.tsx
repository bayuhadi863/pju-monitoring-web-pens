import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type MobileSidebarLinkProps = {
  to: string;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  fontWeight?: string;
  isTargetBlank?: boolean;
};

const MobileSidebarLink: React.FC<MobileSidebarLinkProps> = ({
  to,
  children,
  className,
  icon,
  fontWeight,
  isTargetBlank = false,
}) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <>
      {isTargetBlank ? (
        <a
          href={to}
          target="_blank"
          className={`${className} flex items-center gap-2 py-2 px-4 rounded ${
            isActive ? 'bg-primary/10 text-primary' : ''
          } transition hover:bg-primary/10`}
        >
          {icon}
          <div className="max-w-full truncate">
            <span className={fontWeight || 'font-medium'}>{children}</span>
          </div>
        </a>
      ) : (
        <button
          onClick={handleClick}
          className={`${className} flex items-center gap-2 py-2 px-4 rounded ${
            isActive ? 'bg-primary/10 text-primary' : ''
          } transition hover:bg-primary/10`}
        >
          {icon}
          <div className="max-w-full truncate">
            <span className={fontWeight || 'font-medium'}>{children}</span>
          </div>
        </button>
      )}
    </>
  );
};

export default MobileSidebarLink;
