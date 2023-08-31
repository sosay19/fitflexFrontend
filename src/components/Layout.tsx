// components/Layout.tsx

import React from 'react';
import Header from './Header'; // Example: Header component
import Footer from './Footer'; // Example: Footer component

interface LayoutProps {
  children: React.ReactNode; // Content to be placed inside the layout
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;
