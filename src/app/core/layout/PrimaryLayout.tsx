import React from 'react';

interface PrimaryLayoutProps {
  children: React.ReactNode;
}

const PrimaryLayout = ({ children }: PrimaryLayoutProps) => {
  return (
    <div>
      <nav>Navigation</nav>
      <main>{children}</main>
    </div>
  );
};

export default PrimaryLayout;
