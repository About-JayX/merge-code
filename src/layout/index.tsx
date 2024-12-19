import React from 'react';
import { StarrySky } from '@/components/domain';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
  data: any;
}

const Layout: React.FC<LayoutProps> = ({ children, data }) => {
  return (
    <>
      <StarrySky />
      <Header />
      <main className="px-3 sm:p-8 md:px-16 w-full max-w-screen-xl mx-auto z-10">
        {children}
      </main>
    </>
  );
};

export default Layout; 