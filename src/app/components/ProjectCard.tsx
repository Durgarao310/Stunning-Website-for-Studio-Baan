import { motion } from 'motion/react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectCardProps {
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
  onClick?: () => void;
}

export function ProjectCard({
  title,
  category,
  location,
  year,
  image,
  onClick,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="cursor-magnetic group relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary/20">
        <motion.div
          className="w-full h-full"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <ImageWithFallback
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          className="absolute inset-0 bg-primary/80 flex items-center justify-center p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-center text-primary-foreground">
            <motion.p
              className="text-xs tracking-widest mb-2 opacity-70"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 0.7 : 0 }}
              transition={{ delay: 0.1 }}
            >
              {category}
            </motion.p>
            <motion.h3
              className="text-2xl md:text-3xl mb-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
              transition={{ delay: 0.15 }}
            >
              {title}
            </motion.h3>
            <motion.div
              className="text-sm opacity-70"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 0.7 : 0 }}
              transition={{ delay: 0.2 }}
            >
              <p>{location}</p>
              <p>{year}</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="mt-4">
        <h3 className="text-lg mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">
          {location} • {year}
        </p>
      </div>
    </motion.div>
  );
}
