import { FC, ReactNode } from 'react';

type PageDescriptionProps = {
  children?: ReactNode;
  className?: string;
};

const PageDescription: FC<PageDescriptionProps> = ({ children, className }) => {
  return <p className={`text-muted-foreground ${className}`}>{children}</p>;
};

export default PageDescription;
