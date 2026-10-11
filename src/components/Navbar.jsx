import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { nav, site } from "../data/content.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-white/10 bg-navy-950/90 backdrop-blur-md"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between gap-4">
        {/* Brand Logo & Name */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
          <motion.div
            whileHover={{ rotate: 10, scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative"
          >
            <img
              src="/images/logo.jpeg"
              alt={site.name}
              className="h-9 w-9 sm:h-10 sm:w-10 rounded-full object-cover ring-2 ring-gold/40 group-hover:ring-gold transition duration-200"
            />
            <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-navy-950" />
          </motion.div>
          <div className="flex flex-col">
            <span className="font-display text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-gold transition duration-200 whitespace-nowrap">
              {site.name}
            </span>
            <span className="text-[10px] text-white/50 -mt-1 tracking-wider uppercase whitespace-nowrap hidden sm:block">
              Learn • Grow • Lead
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links - Clean, no scrollbar, no word wrapping */}
        <nav
          className="hidden lg:flex items-center gap-0.5 xl:gap-1.5"
          aria-label="Main"
        >
          {nav.map((n) => {
            const isActive = location.pathname === n.href;
            return (
              <NavLink
                key={n.href}
                to={n.href}
                className={`relative px-2 xl:px-3 py-1.5 text-xs xl:text-sm font-medium whitespace-nowrap rounded-lg transition-colors duration-150 ${
                  isActive
                    ? "text-gold font-semibold"
                    : "text-white/75 hover:text-white hover:bg-white/5"
                }`}
              >
                {n.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-x-2 -bottom-1 h-0.5 rounded-full bg-gold shadow-[0_0_8px_rgba(255,201,40,0.8)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* CTA Button and Mobile Menu Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-gold px-4 xl:px-5 py-2 text-xs xl:text-sm font-bold text-navy-950 hover:bg-gold-deep transition duration-200 shadow-md hover:shadow-gold/20 whitespace-nowrap"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </motion.div>

          <button
            className="rounded-xl p-2 text-white/80 hover:text-white hover:bg-white/10 lg:hidden transition"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Animated Mobile Drawer Menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="border-t border-white/10 bg-navy-950/98 px-4 py-4 lg:hidden overflow-hidden"
            aria-label="Mobile"
          >
            <div className="flex flex-col space-y-1">
              {nav.map((n) => {
                const isActive = location.pathname === n.href;
                return (
                  <NavLink
                    key={n.href}
                    to={n.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium whitespace-nowrap transition ${
                      isActive
                        ? "bg-gold/15 text-gold font-bold"
                        : "text-white/85 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span>{n.label}</span>
                    {isActive && <Sparkles className="h-3.5 w-3.5 text-gold" />}
                  </NavLink>
                );
              })}
              <div className="pt-3">
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-gold py-3 text-center text-sm font-bold text-navy-950 shadow-md"
                >
                  <span>Get in touch</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
