import React from 'react';

type BlockTitleProps = {
  children: React.ReactNode;
};

const BlockTitle: React.FC<BlockTitleProps> = ({ children }) => {
  return <h1 className='font-semibold text-2xl'>{children}</h1>;
};

export default BlockTitle;
