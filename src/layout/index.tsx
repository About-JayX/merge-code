import React from 'react';
import { Space } from '@/components/domain';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
  data: any;
}

const Layout: React.FC<LayoutProps> = ({ children, data }) => {
  return (
    <>
      <Space />
      <Header />
      <main className="px-3 py-4 md:px-8 lg:px-16 w-full max-w-screen-xl overflow-y-hidden mx-auto z-10 pt-24 sm:pt-36">
        {children}
      </main>
    </>
  );
};

export default Layout; 