"use client";

import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { projects, Project } from "../data/projects";
import { getProjectHref } from "@/constants/routes";

export function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<"All" | Project["category"]>(
    "All",
  );
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const router = useRouter();

  const filters: Array<"All" | Project["category"]> = [
    "All",
    "Architecture",
    "Interior",
    "Product",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen pt-32 md:pt-40 pb-24">
      <div className="max-w-[1800px] mx-auto px-8 md:px-16">
        <motion.div
          className="mb-24 md:mb-32"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-12 gap-8 mb-16">
            <div className="col-span-12 md:col-span-8">
              <h1 className="text-5xl md:text-7xl lg:text-8xl mb-8 leading-[0.95] tracking-tighter">
                Our
                <br />
                Portfolio
              </h1>
              <p className="text-xl md:text-2xl opacity-60 max-w-2xl leading-relaxed">
                A comprehensive collection of our work across architecture,
                interior design, and product design.
              </p>
            </div>

            <div className="col-span-12 md:col-span-4 flex items-end md:justify-end">
              <div className="flex flex-wrap md:flex-col gap-3">
                {filters.map((filter) => (
                  <motion.button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-6 py-3 text-sm tracking-wider transition-colors cursor-magnetic ${
                      activeFilter === filter
                        ? "bg-primary text-primary-foreground"
                        : "border border-border hover:border-accent hover:text-accent"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {filter}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="space-y-32">
          {filteredProjects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.id}
                className="cursor-magnetic group"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -60 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                onClick={() => router.push(getProjectHref(project.id))}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
                    isEven ? "" : "lg:direction-rtl"
                  }`}
                >
                  <motion.div
                    className={`lg:col-span-7 overflow-hidden ${
                      isEven ? "" : "lg:col-start-6"
                    }`}
                    whileHover={{ scale: 0.98 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-secondary/20">
                      <motion.div
                        animate={{ scale: hoveredId === project.id ? 1.05 : 1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <ImageWithFallback
                          src={project.heroImage}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>

                      <motion.div
                        className="absolute inset-0 bg-primary/90 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="text-primary-foreground text-lg tracking-wider">
                          View Project
                        </span>
                      </motion.div>
                    </div>
                  </motion.div>

                  <div
                    className={`lg:col-span-5 ${
                      isEven ? "" : "lg:col-start-1 lg:row-start-1"
                    }`}
                    style={{ direction: "ltr" }}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                    >
                      <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">
                        {String(index + 1).padStart(2, "0")} /{" "}
                        {project.category}
                      </p>

                      <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 group-hover:text-accent transition-colors">
                        {project.title}
                      </h2>

                      <p className="text-xl md:text-2xl opacity-60 mb-8 leading-relaxed">
                        {project.subtitle}
                      </p>

                      <div className="grid grid-cols-2 gap-6 mb-8">
                        <div>
                          <p className="text-xs tracking-wider uppercase opacity-40 mb-2">
                            Location
                          </p>
                          <p className="opacity-70">{project.location}</p>
                        </div>
                        <div>
                          <p className="text-xs tracking-wider uppercase opacity-40 mb-2">
                            Year
                          </p>
                          <p className="opacity-70">{project.year}</p>
                        </div>
                        {project.typology && (
                          <div>
                            <p className="text-xs tracking-wider uppercase opacity-40 mb-2">
                              Type
                            </p>
                            <p className="opacity-70">{project.typology}</p>
                          </div>
                        )}
                        {project.size && (
                          <div>
                            <p className="text-xs tracking-wider uppercase opacity-40 mb-2">
                              Size
                            </p>
                            <p className="opacity-70">{project.size}</p>
                          </div>
                        )}
                      </div>

                      <p className="opacity-60 leading-relaxed mb-8">
                        {project.description.slice(0, 200)}...
                      </p>

                      <motion.button
                        className="inline-flex items-center gap-2 text-sm tracking-wider border-b border-foreground pb-1 group-hover:border-accent group-hover:text-accent transition-colors"
                        whileHover={{ x: 4 }}
                      >
                        Explore Project
                        <span className="group-hover:translate-x-1 transition-transform">
                          →
                        </span>
                      </motion.button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-32"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-2xl opacity-40">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
