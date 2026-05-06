"use client";

import { useRouter } from "next/navigation";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Project } from "../data/projects";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getProjectHref, siteRoutes } from "@/constants/routes";

interface ProjectDetailPageProps {
  project: Project;
  previousProjectId?: string;
  nextProjectId?: string;
}

export function ProjectDetailPage({
  project,
  previousProjectId,
  nextProjectId,
}: ProjectDetailPageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen pt-24">
      <div ref={ref} className="relative h-screen overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <ImageWithFallback
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </motion.div>

        <motion.div
          style={{ opacity }}
          className="relative h-full flex items-end justify-center pb-24 px-8"
        >
          <div className="max-w-4xl text-center">
            <motion.p
              className="text-sm tracking-[0.3em] uppercase mb-4 text-accent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {project.category} {project.typology && `• ${project.typology}`}
            </motion.p>
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {project.title}
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl opacity-70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {project.subtitle}
            </motion.p>
          </div>
        </motion.div>

        <button
          onClick={() => router.push(siteRoutes.work)}
          className="absolute top-32 left-8 md:left-16 cursor-magnetic flex items-center gap-2 text-sm tracking-wide opacity-70 hover:opacity-100 transition-opacity"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Work
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-8 md:px-16 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
          <div className="lg:col-span-3 lg:sticky lg:top-32 self-start">
            <div className="space-y-8">
              <div>
                <p className="text-xs tracking-wider uppercase opacity-50 mb-2">
                  Location
                </p>
                <p className="text-lg">{project.location}</p>
              </div>
              <div>
                <p className="text-xs tracking-wider uppercase opacity-50 mb-2">
                  Year
                </p>
                <p className="text-lg">{project.year}</p>
              </div>
              {project.size && (
                <div>
                  <p className="text-xs tracking-wider uppercase opacity-50 mb-2">
                    Size
                  </p>
                  <p className="text-lg">{project.size}</p>
                </div>
              )}
              <div>
                <p className="text-xs tracking-wider uppercase opacity-50 mb-2">
                  Status
                </p>
                <p className="text-lg">{project.status}</p>
              </div>
              {project.client && (
                <div>
                  <p className="text-xs tracking-wider uppercase opacity-50 mb-2">
                    Client
                  </p>
                  <p className="text-lg">{project.client}</p>
                </div>
              )}
              {project.collaborators && (
                <div>
                  <p className="text-xs tracking-wider uppercase opacity-50 mb-2">
                    Collaborators
                  </p>
                  {project.collaborators.map((collab, i) => (
                    <p key={i} className="text-sm mb-1">
                      {collab}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-9 space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-2xl md:text-3xl leading-relaxed">
                {project.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl mb-6">The Challenge</h2>
              <p className="text-lg opacity-70 leading-relaxed">
                {project.challenge}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl mb-6">Our Solution</h2>
              <p className="text-lg opacity-70 leading-relaxed">
                {project.solution}
              </p>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {project.images.map((image, index) => (
            <motion.div
              key={index}
              className="aspect-[4/3] overflow-hidden bg-secondary/20"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <ImageWithFallback
                src={image}
                alt={`${project.title} - Image ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="max-w-4xl mx-auto mb-32"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl mb-8">Key Features</h2>
          <ul className="space-y-4">
            {project.features.map((feature, index) => (
              <motion.li
                key={index}
                className="flex gap-4 text-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className="text-accent mt-1">—</span>
                <span className="opacity-70">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {project.awards && project.awards.length > 0 && (
          <motion.div
            className="max-w-4xl mx-auto mb-32 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl mb-8">Recognition</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {project.awards.map((award, index) => (
                <span
                  key={index}
                  className="px-6 py-3 bg-accent/10 text-accent text-sm tracking-wide"
                >
                  {award}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-16 flex justify-between items-center">
          {previousProjectId && (
            <motion.button
              onClick={() => router.push(getProjectHref(previousProjectId))}
              className="cursor-magnetic flex items-center gap-3 group"
              whileHover={{ x: -4 }}
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm tracking-wide">Previous Project</span>
            </motion.button>
          )}
          {nextProjectId && (
            <motion.button
              onClick={() => router.push(getProjectHref(nextProjectId))}
              className="cursor-magnetic flex items-center gap-3 group ml-auto"
              whileHover={{ x: 4 }}
            >
              <span className="text-sm tracking-wide">Next Project</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
}
