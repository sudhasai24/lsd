import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import CosmicBackground from './CosmicBackground';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <CosmicBackground />
      <Header />
      <main className="flex-1 py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;