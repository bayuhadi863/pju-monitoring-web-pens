import React from 'react';

const CustomContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={`px-4 md:px-6 lg:px-12 xl:px-24 ${className}`}>{children}</div>;
};

export default CustomContainer;
