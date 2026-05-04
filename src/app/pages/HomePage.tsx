import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ChevronDown, ArrowRight } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string, projectId?: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  const featuredProjects = [
    {
      id: 'casa-meridian',
      title: 'Casa Meridian',
      category: 'Architecture',
      location: 'Barcelona',
      year: '2025',
      image:
        'https://images.unsplash.com/photo-1768223933860-6d62bc5b2ff3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
    },
    {
      id: 'void-gallery',
      title: 'The Void Gallery',
      category: 'Architecture',
      location: 'Amsterdam',
      year: '2024',
      image:
        'https://images.unsplash.com/photo-1771678040857-51d00a11be7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
    },
    {
      id: 'lumina-residence',
      title: 'Lumina Residence',
      category: 'Interior',
      location: 'Copenhagen',
      year: '2024',
      image:
        'https://images.unsplash.com/photo-1775486134015-cedad4808fea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
    },
    {
      id: 'node-chair',
      title: 'Node Chair',
      category: 'Product',
      location: 'Studio Collection',
      year: '2024',
      image:
        'https://images.unsplash.com/photo-1626233235316-34e306a47d30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
    },
  ];

  return (
    <div className="min-h-screen">
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1760340769739-653d00200baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2400"
            alt="Studio Baan"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/60" />
        </motion.div>

        <div className="relative z-10 w-full px-8 md:px-16 max-w-[1800px] mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <motion.div
              className="overflow-hidden mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.h1
                className="text-6xl md:text-8xl lg:text-9xl leading-[0.95] tracking-tighter"
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                Architecture
                <br />
                <span className="text-accent">Interior</span>
                <br />
                Product
              </motion.h1>
            </motion.div>

            <motion.div
              className="flex items-end justify-between gap-8 flex-wrap"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <p className="text-lg md:text-xl max-w-md opacity-60 leading-relaxed">
                A multidisciplinary design studio creating architecture, interiors, and
                objects that celebrate materiality, craft, and spatial experience.
              </p>

              <motion.button
                onClick={() => onNavigate('work')}
                className="group cursor-magnetic flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-sm tracking-wider">View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-16 left-1/2 -translate-x-1/2 cursor-magnetic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1.3 },
            y: { repeat: Infinity, duration: 2, ease: 'easeInOut' },
          }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </section>

      <section className="py-32 md:py-48">
        <div className="max-w-[1800px] mx-auto px-8 md:px-16">
          <motion.div
            className="grid grid-cols-12 gap-4 mb-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="col-span-12 md:col-span-2">
              <p className="text-xs tracking-[0.3em] uppercase opacity-40">Featured</p>
            </div>
            <div className="col-span-12 md:col-span-10">
              <h2 className="text-4xl md:text-6xl lg:text-7xl tracking-tight leading-[1.1]">
                Selected
                <br />
                Projects
              </h2>
            </div>
          </motion.div>

          <div className="space-y-2">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group cursor-magnetic border-t border-border last:border-b"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => onNavigate('project', project.id)}
              >
                <div className="grid grid-cols-12 gap-4 md:gap-8 py-8 md:py-12 items-center relative">
                  <div className="col-span-1 text-xs opacity-30">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  <div className="col-span-11 md:col-span-5 lg:col-span-4">
                    <motion.h3
                      className="text-2xl md:text-4xl lg:text-5xl group-hover:translate-x-4 transition-transform duration-500"
                      animate={{ x: hoveredIndex === index ? 16 : 0 }}
                    >
                      {project.title}
                    </motion.h3>
                  </div>

                  <div className="col-span-6 md:col-span-3 text-sm md:text-base opacity-50">
                    <p>{project.category}</p>
                  </div>

                  <div className="col-span-5 md:col-span-2 text-sm md:text-base opacity-50 text-right md:text-left">
                    <p>{project.location}</p>
                  </div>

                  <div className="hidden md:block md:col-span-1 text-sm opacity-50 text-right">
                    <p>{project.year}</p>
                  </div>

                  <motion.div
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 lg:w-96 lg:h-96 pointer-events-none overflow-hidden hidden lg:block"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0,
                      scale: hoveredIndex === index ? 1 : 0.8,
                      x: hoveredIndex === index ? -100 : 0,
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.button
              onClick={() => onNavigate('work')}
              className="cursor-magnetic group inline-flex items-center gap-3 text-sm tracking-wider border border-border px-8 py-4 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      <section className="relative py-48 md:py-64 overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 opacity-5">
          <div className="text-[25vw] leading-none tracking-tighter absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
            STUDIO BAAN
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto px-8 md:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="text-xs tracking-[0.4em] uppercase mb-8 opacity-50">Philosophy</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-12 leading-[1.2] tracking-tight">
              "Design is not just what it looks like and feels like.
              <br className="hidden md:block" />
              Design is how it works, how it lives, how it endures."
            </h2>
            <p className="text-lg opacity-60">— Studio Baan</p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 md:py-48">
        <div className="max-w-[1800px] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xs tracking-[0.3em] uppercase opacity-40 mb-8">Services</p>
              <h2 className="text-4xl md:text-6xl mb-8 leading-tight">
                What We
                <br />
                Create
              </h2>
              <p className="text-lg opacity-60 leading-relaxed mb-8">
                From architecture to interiors to products—our integrated approach delivers
                holistic design solutions that consider every detail.
              </p>
              <motion.button
                onClick={() => onNavigate('services')}
                className="cursor-magnetic inline-flex items-center gap-3 text-sm tracking-wider border-b border-foreground pb-1 hover:border-accent hover:text-accent transition-colors"
                whileHover={{ x: 4 }}
              >
                Explore Services
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-8"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-5xl mb-3 text-accent">45+</h3>
                  <p className="text-sm opacity-60">Projects Completed</p>
                </div>
                <div>
                  <h3 className="text-5xl mb-3 text-accent">8</h3>
                  <p className="text-sm opacity-60">Years Experience</p>
                </div>
              </div>
              <div className="space-y-8 mt-16">
                <div>
                  <h3 className="text-5xl mb-3 text-accent">12</h3>
                  <p className="text-sm opacity-60">Int'l Awards</p>
                </div>
                <div>
                  <h3 className="text-5xl mb-3 text-accent">3</h3>
                  <p className="text-sm opacity-60">Disciplines</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-border pt-16">
            {[
              {
                title: 'Architecture',
                description:
                  'Buildings that respond to context, climate, and culture while creating lasting value.',
              },
              {
                title: 'Interior Design',
                description:
                  'Spatial experiences that engage the senses and enhance how people live and work.',
              },
              {
                title: 'Product Design',
                description:
                  'Objects and furniture that celebrate materiality, craft, and thoughtful detail.',
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-2xl mb-4">{service.title}</h3>
                <p className="opacity-60 leading-relaxed text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 md:py-48 bg-secondary/10">
        <div className="max-w-2xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs tracking-[0.3em] uppercase opacity-40 mb-8">Newsletter</p>
            <h2 className="text-3xl md:text-5xl mb-6 leading-tight">
              Stay in the Loop
            </h2>
            <p className="mb-12 opacity-60 leading-relaxed">
              Receive insights on design, architecture, and our latest projects.
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-4 bg-background border border-border focus:outline-none focus:border-accent transition-colors text-sm"
              />
              <motion.button
                className="px-8 py-4 bg-primary text-primary-foreground cursor-magnetic whitespace-nowrap text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
