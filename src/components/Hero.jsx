import { Link } from "react-router-dom";
import { GraduationCap, Users, TrendingUp, Target, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const pillars = [
  { icon: GraduationCap, title: "Digital Academy", text: "In-demand skill & exam prep", color: "bg-sky" },
  { icon: Users, title: "Leadership & Growth", text: "Live mentorship & webinars", color: "bg-gold" },
  { icon: TrendingUp, title: "Money Skills", text: "Budgeting & wealth fundamentals", color: "bg-emerald-500" },
  { icon: Target, title: "Business Opportunity", text: "19 revenue streams & products", color: "bg-violet-500" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy-950 text-white">
      {/* Dynamic Animated Ambient Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(65rem 35rem at 85% 0%, rgba(30,167,255,.32), transparent 60%), radial-gradient(45rem 30rem at 0% 100%, rgba(255,201,40,.2), transparent 60%)",
        }}
      />

      <div className="container-x relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.15fr_.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full bg-gold/15 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-gold mb-5 border border-gold/30"
          >
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            <span>Digital Empowerment & Financial Freedom</span>
          </motion.div>

          <h1 className="text-4xl font-extrabold leading-[1.15] sm:text-5xl lg:text-6xl text-white tracking-tight">
            Learn today.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-300 to-amber-400">
              Lead tomorrow.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-white/80">
            Practical skills, one-on-one mentorship, everyday fintech services, and 450+ high-quality products. Empowering students, job seekers, and entrepreneurs across India.
          </p>

          <div className="mt-9 flex flex-wrap gap-4 items-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-bold text-navy-950 hover:bg-gold-deep transition duration-200 shadow-xl shadow-gold/20"
              >
                <span>Browse Academy</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-8 py-3.5 text-sm font-bold text-white hover:bg-white/10 hover:border-white transition duration-200 backdrop-blur"
              >
                <span>Explore Products</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Floating Brand Logo with Ambient Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto w-64 sm:w-80 lg:w-full lg:max-w-sm relative"
        >
          <div className="absolute inset-0 rounded-full bg-gold/20 blur-2xl transform scale-110 pointer-events-none" />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative rounded-full p-2 ring-2 ring-gold/40 shadow-2xl bg-gradient-to-tr from-navy-900 to-navy-800"
          >
            <img
              src="/images/logo.jpeg"
              alt="Next Gen Leaders emblem"
              className="w-full rounded-full shadow-2xl object-cover ring-4 ring-white/10"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Feature Pillars */}
      <div className="relative border-t border-white/10 bg-navy-950/70 backdrop-blur-md">
        <ul className="container-x grid gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ icon: Icon, title, text, color }, idx) => (
            <motion.li
              key={title}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.1, duration: 0.4 }}
              whileHover={{ y: -3 }}
              className="flex items-center gap-4 group cursor-default"
            >
              <span
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${color} shadow-md group-hover:scale-110 transition duration-200`}
              >
                <Icon className="h-6 w-6 text-white" />
              </span>
              <span>
                <span className="block font-display font-bold text-white text-sm sm:text-base group-hover:text-gold transition duration-200">
                  {title}
                </span>
                <span className="text-xs sm:text-sm text-white/65">{text}</span>
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
