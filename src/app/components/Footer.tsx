import { motion } from 'motion/react';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps = {}) {
  const socialLinks = [
    { name: 'Instagram', url: '#' },
    { name: 'LinkedIn', url: '#' },
    { name: 'Behance', url: '#' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-16 md:py-24">
      <div className="max-w-[1800px] mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-16">
          <div>
            <h3 className="text-3xl md:text-4xl mb-6">Studio Baan</h3>
            <p className="text-sm opacity-70 leading-relaxed">
              Creating timeless architecture that respects context, enhances experience,
              and celebrates craftsmanship.
            </p>
          </div>

          <div>
            <h4 className="text-sm tracking-wider mb-4 opacity-50">NAVIGATE</h4>
            <div className="flex flex-col gap-3">
              {['Work', 'Studio', 'Process', 'Journal', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm cursor-magnetic inline-block w-fit"
                  whileHover={{ x: 4 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm tracking-wider mb-4 opacity-50">CONNECT</h4>
            <div className="flex flex-col gap-3 mb-8">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  className="text-sm cursor-magnetic inline-block w-fit"
                  whileHover={{ x: 4 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
            <div className="text-sm opacity-70">
              <p>Amsterdam, Netherlands</p>
              <p>hello@studiobaan.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs opacity-50">
          <p>&copy; 2026 Studio Baan. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="cursor-magnetic hover:opacity-100 transition-opacity">
              Privacy Policy
            </a>
            <a href="#" className="cursor-magnetic hover:opacity-100 transition-opacity">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
