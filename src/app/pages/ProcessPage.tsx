"use client";

import { motion } from "motion/react";

export function ProcessPage() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Research",
      description:
        "We begin every project with deep listening—understanding your vision, constraints, site context, and aspirations. This phase involves site analysis, stakeholder interviews, and extensive research into local history, climate, and culture.",
    },
    {
      number: "02",
      title: "Concept Development",
      description:
        "Ideas take shape through sketches, models, and iterative design explorations. We develop multiple concepts that respond to site conditions, program requirements, and your unique narrative, refining them through collaborative critique.",
    },
    {
      number: "03",
      title: "Design Refinement",
      description:
        "The selected concept evolves into detailed architectural proposals. We refine spatial sequences, material palettes, structural systems, and environmental strategies, ensuring every decision serves the overall vision.",
    },
    {
      number: "04",
      title: "Technical Documentation",
      description:
        "Precision matters. We produce comprehensive construction documents, coordinating with engineers, consultants, and specialists to ensure buildability, compliance, and quality. Every detail is considered and documented.",
    },
    {
      number: "05",
      title: "Construction Administration",
      description:
        "We remain deeply involved during construction, working closely with contractors to maintain design integrity, resolve challenges, and ensure the built work honors the original vision.",
    },
    {
      number: "06",
      title: "Completion & Beyond",
      description:
        "Project completion is just the beginning. We document the finished work, gather feedback, and maintain relationships—your success stories inform our practice and inspire future projects.",
    },
  ];

  return (
    <div className="min-h-screen pt-32 md:pt-40 pb-24">
      <div className="max-w-5xl mx-auto px-8 md:px-16">
        <motion.div
          className="mb-24 md:mb-32"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl mb-8">Our Process</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Great architecture emerges from rigorous process, creative
            collaboration, and unwavering attention to detail. Here's how we
            work.
          </p>
        </motion.div>

        <div className="space-y-24 md:space-y-32">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="grid grid-cols-1 md:grid-cols-12 gap-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="md:col-span-3">
                <motion.div
                  className="text-7xl md:text-8xl text-accent/20"
                  whileInView={{ scale: [0.8, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {step.number}
                </motion.div>
              </div>
              <div className="md:col-span-9">
                <h2 className="text-3xl md:text-4xl mb-6">{step.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
