import { Link } from "react-router-dom";
import Hero from "../components/Hero.jsx";
import Courses from "../components/Courses.jsx";
import Leadership from "../components/Leadership.jsx";
import MoneySkills from "../components/MoneySkills.jsx";
import Services from "../components/Services.jsx";
import Contact from "../components/Contact.jsx";
import { ArrowRight, ShieldCheck, Sparkles, Building2, TrendingUp, Gift, ShoppingBag, Star, Check } from "lucide-react";
import { stemGrowProduct } from "../data/content.js";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <Hero />

      {/* Featured Banner: Stem Grow & Health Care Starter Pack */}
      <section className="bg-navy-950 py-16 text-white border-y border-white/10 relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(45rem 25rem at 80% 50%, rgba(30,167,255,0.4), transparent 70%), radial-gradient(35rem 20rem at 10% 50%, rgba(255,201,40,0.3), transparent 70%)",
          }}
        />

        <div className="container-x relative">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-gradient-to-r from-navy-900 via-navy-900/95 to-navy-850 p-8 sm:p-12 border border-gold/30 shadow-2xl grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center"
          >
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gold px-3.5 py-1 text-xs font-black text-navy-950 mb-4 uppercase tracking-wider shadow">
                <Sparkles className="h-3.5 w-3.5" /> Special Starter Offer • Flat 37.5% Off
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Health Care Project: 2 Pcs Stem Grow at ₹1,248/-
              </h2>

              <p className="mt-3 text-white/80 text-sm sm:text-base leading-relaxed">
                Kickstart your wellness and income journey with our flagship antioxidant green tea. Includes Academy lifetime access, Smart Card, Equity allocation, and accidental insurance up to ₹5,00,000.
              </p>

              <div className="mt-6 flex flex-wrap gap-4 items-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/products"
                    className="rounded-full bg-gold px-7 py-3 text-sm font-bold text-navy-950 hover:bg-gold-deep transition duration-200 shadow-lg shadow-gold/20 inline-flex items-center gap-2"
                  >
                    <ShoppingBag className="h-4 w-4" /> Order Starter Pack (₹1,248)
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                  <Link
                    to="/business-plan"
                    className="rounded-full border border-white/30 px-7 py-3 text-sm font-semibold text-white hover:bg-white/10 transition duration-200"
                  >
                    View 5 Activation Packages
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* Product Image Thumbnail Card - fully visible bottle */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-white p-5 flex flex-col items-center justify-center group"
            >
              <div className="w-full flex items-center justify-center py-2 h-64 sm:h-72">
                <img
                  src="/images/stem_grow.png"
                  alt="Stem Grow Jar 1000MG 30 Tablets"
                  className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-xl"
                />
              </div>
              <div className="w-full mt-2 pt-3 border-t border-slate-200 flex items-center justify-between text-navy-900">
                <div>
                  <span className="text-[10px] text-royal font-bold uppercase block">Starter Combo</span>
                  <span className="text-xl font-black text-navy-900">₹1,248/-</span>
                  <span className="text-xs text-slate-400 line-through ml-2">₹1,999</span>
                </div>
                <span className="rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 px-3 py-1 text-xs font-bold">
                  Save ₹751
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Courses Section with dedicated page link */}
      <section className="relative">
        <Courses />
        <div className="container-x pb-16 text-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-8 py-3.5 text-sm font-bold text-white transition hover:bg-royal hover:shadow-lg shadow-md"
            >
              Explore all courses in Academy <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Business Opportunity Teaser */}
      <section className="bg-slate-50 py-20 border-y border-navy-900/10">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xs font-bold uppercase tracking-wider text-royal">
                Zero Risk • High Growth Ecosystem
              </span>
              <h2 className="text-3xl font-bold text-navy-900 mt-2 sm:text-4xl">
                The Future of Finance in Your Pocket
              </h2>
              <p className="mt-4 text-ink/75 leading-relaxed">
                Work from anywhere using your smartphone. Benefit from 19 streams of income, daily advertisement viewing income, fixed monthly salaries for Managers & Directors, and vehicle milestone rewards.
              </p>
              <div className="mt-8">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                  <Link
                    to="/business-plan"
                    className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-8 py-3.5 text-sm font-bold text-white hover:bg-royal transition shadow-md"
                  >
                    <span>See All 19 Income Streams</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              <motion.div
                whileHover={{ y: -5 }}
                className="rounded-3xl bg-white p-6 border border-navy-900/10 shadow-sm hover:shadow-md transition"
              >
                <TrendingUp className="h-8 w-8 text-royal mb-3" />
                <h4 className="font-bold text-navy-900 text-lg">Daily Payouts</h4>
                <p className="text-xs text-ink/70 mt-1 leading-relaxed">
                  Income credited on daily and weekly schedules directly into your verified account.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="rounded-3xl bg-white p-6 border border-navy-900/10 shadow-sm hover:shadow-md transition"
              >
                <Gift className="h-8 w-8 text-gold-deep mb-3" />
                <h4 className="font-bold text-navy-900 text-lg">Milestone Gifts</h4>
                <p className="text-xs text-ink/70 mt-1 leading-relaxed">
                  Smartwatches, Laptops, Activa 6G, Bullet, Swift, Scorpio, and luxury flats.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="rounded-3xl bg-white p-6 border border-navy-900/10 shadow-sm hover:shadow-md transition"
              >
                <Building2 className="h-8 w-8 text-emerald-600 mb-3" />
                <h4 className="font-bold text-navy-900 text-lg">Franchise Model</h4>
                <p className="text-xs text-ink/70 mt-1 leading-relaxed">
                  Exclusive Master, Hub, and Store territories across every district and pincode.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="rounded-3xl bg-white p-6 border border-navy-900/10 shadow-sm hover:shadow-md transition"
              >
                <ShieldCheck className="h-8 w-8 text-violet-600 mb-3" />
                <h4 className="font-bold text-navy-900 text-lg">Smart Card</h4>
                <p className="text-xs text-ink/70 mt-1 leading-relaxed">
                  Digital card identity with built-in ₹5 Lakh accidental insurance cover.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Visual Highlight */}
      <section className="py-20 bg-white">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-royal">
              Authentic & Pure Products
            </span>
            <h2 className="text-3xl font-bold text-navy-900 mt-2 sm:text-4xl">
              Quality Essentials Delivered to Your Door
            </h2>
            <p className="mt-3 text-ink/70 text-sm sm:text-base">
              Shop pure groceries, whole grind spices, California dry fruits, and herbal wellness.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <motion.div
              whileHover={{ y: -6 }}
              className="relative rounded-3xl overflow-hidden border border-navy-900/10 shadow-md group h-72 sm:h-80"
            >
              <img
                src="/images/groceries_basket.jpg"
                alt="Organic Pulses, Spices & Dry Fruits"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="rounded-full bg-gold px-3 py-1 text-xs font-bold text-navy-950 uppercase mb-2 inline-block">
                  Groceries & Spices
                </span>
                <h3 className="text-2xl font-bold">Unpolished Pulses & Whole Spices</h3>
                <p className="text-xs sm:text-sm text-white/80 mt-1">
                  California almonds, cashews, pure turmeric, and pantry staples.
                </p>
                <Link
                  to="/products"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-gold hover:underline"
                >
                  Browse Store Items <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              className="relative rounded-3xl overflow-hidden border border-navy-900/10 shadow-md group h-72 sm:h-80"
            >
              <img
                src="/images/beauty_care.jpg"
                alt="Herbal Beauty & Personal Care"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="rounded-full bg-sky px-3 py-1 text-xs font-bold text-navy-950 uppercase mb-2 inline-block">
                  Beauty & Personal Care
                </span>
                <h3 className="text-2xl font-bold">Ayurvedic Skincare & Hair Care</h3>
                <p className="text-xs sm:text-sm text-white/80 mt-1">
                  Gentle herbal body washes, facial serums, and artisan botanical soaps.
                </p>
                <Link
                  to="/products"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-gold hover:underline"
                >
                  Browse Personal Care <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative">
        <Services />
        <div className="bg-sky-soft pb-16 text-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-8 py-3.5 text-sm font-bold text-white transition hover:bg-royal shadow-md"
            >
              View all utility, AEPS & travel services <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="relative">
        <Leadership />
        <div className="bg-navy-900 pb-16 text-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
            <Link
              to="/leadership"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-bold text-navy-950 transition hover:bg-gold-deep shadow-md"
            >
              Learn about our leadership & mentorship programme <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Money Skills Section */}
      <section className="relative">
        <MoneySkills />
        <div className="container-x pb-16 text-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
            <Link
              to="/money-skills"
              className="inline-flex items-center gap-2 rounded-full border border-navy-900 px-8 py-3.5 text-sm font-bold text-navy-900 transition hover:bg-navy-900 hover:text-white"
            >
              Explore money management & 50/30/20 calculator <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
