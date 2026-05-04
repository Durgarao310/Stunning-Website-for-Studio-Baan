import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function ServicesPage() {
  const [activeService, setActiveService] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  const services = [
    {
      number: '01',
      title: 'Architecture',
      subtitle: 'From concept to completion',
      description:
        'We design buildings that respond to their context, enhance human experience, and stand the test of time. Our architectural practice spans residential, commercial, cultural, and institutional typologies.',
      capabilities: [
        'Concept Design & Master Planning',
        'Schematic & Design Development',
        'Construction Documentation',
        'Construction Administration',
        'Adaptive Reuse & Renovation',
        'Sustainable Design Consulting',
      ],
      image:
        'https://images.unsplash.com/photo-1760340769739-653d00200baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
    },
    {
      number: '02',
      title: 'Interior Design',
      subtitle: 'Crafting spatial narratives',
      description:
        'Our interior design practice creates environments that engage the senses and support how people live and work. We consider every detail, from spatial flow to material selection to custom furniture design.',
      capabilities: [
        'Space Planning & Programming',
        'Material & Finish Selection',
        'Custom Furniture Design',
        'Lighting Design',
        'Art Consultation & Curation',
        'FF&E Procurement',
      ],
      image:
        'https://images.unsplash.com/photo-1717076521696-ea6d8ed0963a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
    },
    {
      number: '03',
      title: 'Product Design',
      subtitle: 'Objects with soul',
      description:
        'Through our Studio Baan Collection, we design limited-edition furniture and objects that celebrate materiality and craft. Each piece is produced in small batches by skilled artisans.',
      capabilities: [
        'Furniture Design & Prototyping',
        'Lighting Fixture Design',
        'Hardware & Accessory Design',
        'Material Research & Development',
        'Craft Collaboration',
        'Limited Edition Production',
      ],
      image:
        'https://images.unsplash.com/photo-1551907234-fb773fb08a2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
    },
    {
      number: '04',
      title: 'Design Research',
      subtitle: 'Exploring future possibilities',
      description:
        'We invest in research exploring emerging materials, construction technologies, and design methodologies. This research informs our practice and contributes to advancing the discipline.',
      capabilities: [
        'Material Innovation Research',
        'Computational Design Methods',
        'Climate-Responsive Strategies',
        'Circular Economy Applications',
        'Digital Fabrication Techniques',
        'Cross-Disciplinary Collaboration',
      ],
      image:
        'https://images.unsplash.com/photo-1760389944963-3f2d0d56a1e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
    },
  ];

  return (
    <div className="min-h-screen pt-32 md:pt-40 pb-24">
      <div className="max-w-[1800px] mx-auto px-8 md:px-16">
        <motion.div
          className="mb-24 md:mb-32"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl mb-8">What We Do</h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl leading-relaxed">
            A multidisciplinary practice integrating architecture, interior design, product
            design, and research to deliver holistic solutions.
          </p>
        </motion.div>

        <div className="space-y-32 md:space-y-48 mb-32">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              onViewportEnter={() => setActiveService(index)}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <motion.div
                  className="aspect-[4/3] overflow-hidden bg-secondary/20 mb-8"
                  whileHover={{ scale: 0.98 }}
                  transition={{ duration: 0.6 }}
                >
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <motion.div
                  className="text-8xl md:text-9xl opacity-10 mb-4"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 0.1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  {service.number}
                </motion.div>

                <h2 className="text-4xl md:text-5xl mb-4">{service.title}</h2>
                <p className="text-xl text-accent mb-8">{service.subtitle}</p>
                <p className="text-lg opacity-70 leading-relaxed mb-12">
                  {service.description}
                </p>

                <div>
                  <h3 className="text-sm tracking-wider uppercase opacity-50 mb-6">
                    Capabilities
                  </h3>
                  <ul className="space-y-3">
                    {service.capabilities.map((capability, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.05 }}
                      >
                        <span className="w-1 h-1 bg-accent rounded-full" />
                        <span className="opacity-70">{capability}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          ref={ref}
          className="relative py-32 md:py-48 overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.div
            style={{ y }}
            className="absolute inset-0 -z-10 opacity-5"
          >
            <div className="text-[20vw] leading-none tracking-tighter">
              STUDIO
              <br />
              BAAN
            </div>
          </motion.div>

          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl mb-12 leading-tight">
              Let's create something exceptional together
            </h2>
            <motion.button
              className="px-12 py-5 bg-primary text-primary-foreground cursor-magnetic text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Conversation
            </motion.button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 pt-32 border-t border-border">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl mb-4">Our Approach</h3>
            <p className="opacity-70 leading-relaxed">
              Every project begins with listening. We invest time understanding your vision,
              constraints, and aspirations before proposing solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-2xl mb-4">Collaboration</h3>
            <p className="opacity-70 leading-relaxed">
              Great work emerges from dialogue. We collaborate closely with clients,
              consultants, and craftspeople throughout the design process.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl mb-4">Commitment</h3>
            <p className="opacity-70 leading-relaxed">
              We remain deeply involved from concept through construction, ensuring every
              detail honors the original vision and maintains quality.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
