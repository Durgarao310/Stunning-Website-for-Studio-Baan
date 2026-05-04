import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string, projectId?: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Work', id: 'work' },
    { name: 'Services', id: 'services' },
    { name: 'Studio', id: 'studio' },
    { name: 'Journal', id: 'journal' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        initial={{ backgroundColor: 'rgba(248, 245, 240, 0)' }}
        animate={{
          backgroundColor: isScrolled
            ? 'rgba(248, 245, 240, 0.95)'
            : 'rgba(248, 245, 240, 0)',
        }}
      >
        <div className="max-w-[1800px] mx-auto px-8 md:px-16 py-6 md:py-8 flex items-center justify-between">
          <motion.button
            onClick={() => onNavigate('home')}
            className="cursor-magnetic relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h1 className="text-2xl md:text-3xl tracking-tight">Studio Baan</h1>
          </motion.button>

          <div className="hidden md:flex items-center gap-12">
            {menuItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="cursor-magnetic relative text-sm tracking-wide"
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                {item.name}
                {currentPage === item.id && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-[1px] bg-accent"
                    layoutId="underline"
                  />
                )}
              </motion.button>
            ))}
          </div>

          <button
            className="md:hidden cursor-magnetic relative w-8 h-8 flex flex-col justify-center gap-1.5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <motion.span
              className="w-full h-[1px] bg-foreground"
              animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 5 : 0 }}
            />
            <motion.span
              className="w-full h-[1px] bg-foreground"
              animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
            />
            <motion.span
              className="w-full h-[1px] bg-foreground"
              animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -5 : 0 }}
            />
          </button>
        </div>
      </motion.nav>

      <motion.div
        className="fixed inset-0 bg-background z-40 md:hidden"
        initial={{ opacity: 0, y: -100 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          y: isMobileMenuOpen ? 0 : -100,
          pointerEvents: isMobileMenuOpen ? 'auto' : 'none',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {menuItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setIsMobileMenuOpen(false);
              }}
              className="text-4xl cursor-magnetic"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isMobileMenuOpen ? 1 : 0,
                y: isMobileMenuOpen ? 0 : 20,
              }}
              transition={{ delay: index * 0.1 }}
            >
              {item.name}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </>
  );
}
