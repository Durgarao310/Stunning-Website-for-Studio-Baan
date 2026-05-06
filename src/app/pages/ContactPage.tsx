"use client";

import { motion } from "motion/react";
import { Mail, MapPin, Phone } from "lucide-react";

export function ContactPage() {
  return (
    <div className="min-h-screen pt-32 md:pt-40 pb-24">
      <div className="max-w-[1800px] mx-auto px-8 md:px-16">
        <motion.div
          className="mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl mb-6">Let's Talk</h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Whether you have a project in mind or simply want to discuss
            architecture, we'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form className="space-y-8">
              <div>
                <label className="block text-sm tracking-wide mb-3">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full px-6 py-4 bg-secondary/10 border border-border focus:border-accent focus:outline-none transition-colors"
                  placeholder="Jane Doe"
                />
              </div>

              <div>
                <label className="block text-sm tracking-wide mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-6 py-4 bg-secondary/10 border border-border focus:border-accent focus:outline-none transition-colors"
                  placeholder="jane@example.com"
                />
              </div>

              <div>
                <label className="block text-sm tracking-wide mb-3">
                  Project Type
                </label>
                <select className="w-full px-6 py-4 bg-secondary/10 border border-border focus:border-accent focus:outline-none transition-colors">
                  <option>Select a type</option>
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Cultural</option>
                  <option>Institutional</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm tracking-wide mb-3">
                  Tell Us More
                </label>
                <textarea
                  rows={6}
                  className="w-full px-6 py-4 bg-secondary/10 border border-border focus:border-accent focus:outline-none transition-colors resize-none"
                  placeholder="Share details about your project, timeline, and vision..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full md:w-auto px-12 py-4 bg-primary text-primary-foreground cursor-magnetic"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div>
              <h2 className="text-3xl md:text-4xl mb-8">Studio Information</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="mb-1">Prinsengracht 263</p>
                    <p className="text-muted-foreground">1016 GV Amsterdam</p>
                    <p className="text-muted-foreground">The Netherlands</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <a
                      href="mailto:hello@studiobaan.com"
                      className="cursor-magnetic hover:text-accent transition-colors"
                    >
                      hello@studiobaan.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <a
                      href="tel:+31205551234"
                      className="cursor-magnetic hover:text-accent transition-colors"
                    >
                      +31 20 555 1234
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-border">
              <h3 className="text-xl mb-4">Office Hours</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Monday – Friday: 9:00 – 18:00</p>
                <p>Saturday – Sunday: By appointment</p>
              </div>
            </div>

            <div className="aspect-video bg-secondary/20 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.0!2d4.883!3d52.371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDIyJzE2LjAiTiA0wrA1Mic1OS4wIkU!5e0!3m2!1sen!2snl!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Studio Baan Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
