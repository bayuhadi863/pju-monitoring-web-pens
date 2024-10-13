import { FC, ReactNode } from 'react';

type PageTitleProps = {
  children?: ReactNode;
  className?: string;
};

const PageTitle: FC<PageTitleProps> = ({ children, className }) => {
  return <h1 className={`text-3xl font-semibold ${className}`}>{children}</h1>;
};

export default PageTitle;
