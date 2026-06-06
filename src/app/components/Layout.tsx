import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const isDark = location.pathname === '/black';

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className={`min-h-screen bg-background text-foreground transition-colors duration-500 overflow-x-hidden ${isDark ? 'dark' : ''}`}>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}
