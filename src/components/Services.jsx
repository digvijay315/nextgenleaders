import * as Icons from "lucide-react";
import { Zap, Sparkles } from "lucide-react";
import { services } from "../data/content.js";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

export default function Services() {
  return (
    <section id="services" className="bg-gradient-to-b from-sky-soft/60 to-sky-soft/20 py-24 relative overflow-hidden">
      {/* Decorative background glow */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-3xl opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(30,167,255,0.3) 0%, rgba(255,201,40,0.15) 100%)",
        }}
      />

      <div className="container-x relative">
        {/* Animated Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 rounded-full bg-royal/10 border border-royal/20 px-3.5 py-1 text-xs font-bold text-royal mb-3 uppercase tracking-wider"
          >
            <Sparkles className="h-3.5 w-3.5 text-royal" />
            <span>Digital Kiosk & Utility Hub</span>
          </motion.span>

          <h2 className="text-3xl font-extrabold text-navy-900 sm:text-4xl tracking-tight">
            Everyday digital services in one place
          </h2>

          <p className="mt-4 text-base sm:text-lg text-ink/75 leading-relaxed">
            Recharge, pay utility bills, AEPS banking and book travel directly from your phone with instant confirmation and cashback.
          </p>
        </motion.div>

        {/* Animated Cards Grid with Stagger & Micro-interactions */}
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-5"
        >
          {services.map(({ title, icon }) => {
            const Icon = Icons[icon] || Zap;
            return (
              <motion.li
                key={title}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                  boxShadow: "0 20px 25px -5px rgba(10, 25, 47, 0.12), 0 8px 10px -6px rgba(10, 25, 47, 0.08)",
                }}
                whileTap={{ scale: 0.97 }}
                className="group relative flex flex-col items-start gap-4 rounded-3xl bg-white p-5 sm:p-6 border border-navy-900/10 transition-all duration-300 cursor-pointer hover:border-gold/60"
              >
                {/* Icon box with hover animation */}
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-900 text-gold shadow-sm group-hover:scale-110 group-hover:bg-gold group-hover:text-navy-950 transition-all duration-300">
                  <Icon className="h-6 w-6 transition-transform duration-300 group-hover:rotate-6" />
                </span>

                <div className="flex-1 flex flex-col justify-between">
                  <span className="font-bold text-navy-900 text-sm sm:text-base group-hover:text-royal transition duration-200">
                    {title}
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-600 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Active • Instant
                  </span>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
