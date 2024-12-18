import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

type SidebarLinkProps = {
  to: string;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  fontWeight?: string;
  rightSection?: React.ReactNode;
  isTargetBlank?: boolean;
};

const SidebarLink: React.FC<SidebarLinkProps> = ({
  to,
  children,
  className,
  icon,
  fontWeight,
  rightSection,
  isTargetBlank = false,
}) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`${className} flex items-center w-full gap-1 rounded ${
        isActive ? 'bg-primary/10 text-primary' : ''
      } transition hover:bg-primary/10`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isTargetBlank ? (
        <a
          href={to}
          target="_blank"
          className="flex-1 flex items-center gap-2 py-2 px-3 truncate me-2"
        >
          {icon}
          <span className={fontWeight || 'font-medium'}>{children}</span>
        </a>
      ) : (
        <Link
          to={to}
          className="flex-1 flex items-center gap-2 py-2 px-3 truncate me-2"
        >
          {icon}
          <span className={fontWeight || 'font-medium'}>{children}</span>
        </Link>
      )}

      {isHovered && (
        <div className="flex items-center justify-center py-2 pe-3">
          {rightSection}
        </div>
      )}
    </div>
  );
};

export default SidebarLink;
