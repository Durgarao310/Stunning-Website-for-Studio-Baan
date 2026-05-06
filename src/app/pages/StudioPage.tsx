"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function StudioPage() {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const team = [
    {
      name: "Emma Baan",
      role: "Founder & Principal Architect",
      bio: "Emma founded Studio Baan in 2018 after a decade working with renowned practices across Europe. Her philosophy centers on architecture as a social art, creating spaces that elevate daily life.",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&h=1000&fit=crop&crop=faces",
      expertise: ["Architecture", "Urban Planning", "Research"],
    },
    {
      name: "Lars van Dijk",
      role: "Design Director",
      bio: "Lars brings fifteen years of experience in computational design and material research. He leads our design innovation initiatives and explores emerging construction technologies.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop&crop=faces",
      expertise: ["Computational Design", "Material Research", "Fabrication"],
    },
    {
      name: "Sofia Chen",
      role: "Senior Architect",
      bio: "Sofia specializes in sustainable architecture and has led several award-winning residential projects. Her work demonstrates how ecological responsibility and design excellence coexist.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop&crop=faces",
      expertise: ["Sustainable Design", "Residential", "Passive Systems"],
    },
    {
      name: "Marcus Berg",
      role: "Interior Design Lead",
      bio: "Marcus brings spatial thinking to every scale. His interior design work has been featured in leading publications for its refined materiality and attention to craft.",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=1000&fit=crop&crop=faces",
      expertise: ["Interior Design", "Custom Furniture", "Lighting"],
    },
  ];

  const values = [
    {
      title: "Context",
      description:
        "Every site has a story. We begin by understanding place—its history, climate, culture, and community. Our work emerges from this understanding.",
    },
    {
      title: "Materiality",
      description:
        "Materials are not finishes—they are architecture. We celebrate honest expression of materials, allowing each to speak its inherent language.",
    },
    {
      title: "Craft",
      description:
        "Quality is in the details. We collaborate with skilled craftspeople who share our commitment to precision and care in execution.",
    },
    {
      title: "Longevity",
      description:
        "We design for the long term, creating architecture that improves with age and adapts to changing needs without losing its essence.",
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      <div ref={heroRef} className="relative h-screen overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1771678040588-d88ff1fb2370?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2400"
            alt="Studio Baan Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </motion.div>

        <div className="relative h-full flex items-end pb-24 px-8 md:px-16 max-w-[1800px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <p className="text-xs tracking-[0.3em] uppercase opacity-50 mb-6">
              About Us
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl mb-8 leading-[0.95] tracking-tighter max-w-4xl">
              A Practice
              <br />
              Built on
              <br />
              Principles
            </h1>
          </motion.div>
        </div>
      </div>

      <section className="py-32 md:py-48">
        <div className="max-w-[1800px] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl mb-8 leading-tight">
                Founded on the belief that architecture shapes experience
              </h2>
            </motion.div>

            <motion.div
              className="lg:col-span-7 space-y-6 text-lg opacity-70 leading-relaxed"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 0.7, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p>
                Studio Baan was founded in 2018 by Emma Baan with a vision to
                create architecture that transcends aesthetic trends and
                addresses fundamental human needs for beauty, shelter, and
                connection.
              </p>
              <p>
                We are a multidisciplinary practice integrating architecture,
                interior design, and product design. This integrated approach
                allows us to consider every scale—from urban planning to door
                hardware—ensuring coherence between vision and execution.
              </p>
              <p>
                Our work has been recognized with international awards and
                featured in leading publications, but our greatest satisfaction
                comes from the enduring relationships we build with clients and
                the positive impact our projects have on communities.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-border pt-16">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-2xl mb-4">{value.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 md:py-48 bg-secondary/5">
        <div className="max-w-[1800px] mx-auto px-8 md:px-16">
          <motion.div
            className="mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl mb-6">The Team</h2>
            <p className="text-xl opacity-60 max-w-3xl leading-relaxed">
              A diverse group of architects, designers, and thinkers united by a
              shared commitment to excellence and innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="group cursor-magnetic"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                onClick={() =>
                  setSelectedMember(selectedMember === index ? null : index)
                }
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-secondary/20 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  >
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </motion.div>
                </div>

                <h3 className="text-2xl md:text-3xl mb-2">{member.name}</h3>
                <p className="text-sm tracking-wider uppercase text-accent mb-4">
                  {member.role}
                </p>

                <motion.div
                  initial={false}
                  animate={{
                    height: selectedMember === index ? "auto" : 0,
                    opacity: selectedMember === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-sm opacity-70 leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-3 py-1 bg-accent/10 text-accent"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>

                <motion.button
                  className="mt-4 text-sm tracking-wide opacity-60 hover:opacity-100 transition-opacity"
                  whileHover={{ x: 4 }}
                >
                  {selectedMember === index ? "Show less" : "Read more"} →
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 md:py-48 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-8 md:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
              Interested in working with us?
            </h2>
            <p className="text-lg opacity-70 mb-12 leading-relaxed">
              We're always looking for talented individuals who share our values
              and passion for exceptional design.
            </p>
            <motion.button
              className="px-12 py-5 border border-primary-foreground cursor-magnetic hover:bg-primary-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Open Positions
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
