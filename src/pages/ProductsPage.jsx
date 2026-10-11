import { useState } from "react";
import PageHeader from "../components/PageHeader.jsx";
import { stemGrowProduct, productCategories, site } from "../data/content.js";
import { Sparkles, ShieldCheck, Heart, Truck, Check, ShoppingBag, MessageCircle, ArrowRight, Eye, Star } from "lucide-react";
import { motion } from "framer-motion";

const categoryImages = {
  "Health Care & Wellness": "/images/stem_grow.jpg",
  "Organic Pulses & Grains": "/images/groceries_basket.jpg",
  "Dry Fruits & Nuts": "/images/groceries_basket.jpg",
  "Natural Spices (Grind & Whole)": "/images/groceries_basket.jpg",
  "Breakfast & Groceries": "/images/groceries_basket.jpg",
  "Natural Beauty Care": "/images/beauty_care.jpg",
  "Personal Care": "/images/beauty_care.jpg",
  "Baby Care Essentials": "/images/beauty_care.jpg",
};

export default function ProductsPage() {
  const getWhatsAppProductLink = (productTitle) => {
    const text = `Hi, I am interested in ordering "${productTitle}" from Next Gen Leaders store. Please share the catalogue and order instructions.`;
    return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="overflow-hidden">
      <PageHeader
        badge="Pure • Natural • Quality Certified"
        title="Premium Wellness & Daily Essentials"
        subtitle="Explore our flagship herbal formulation Stem Grow alongside 450+ daily groceries, organic pulses, pure spices, and personal care products."
      />

      {/* Flagship Product Showcase: Stem Grow */}
      <section className="py-20 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{
            background:
              "radial-gradient(50rem 30rem at 85% 15%, rgba(30,167,255,0.4), transparent 70%), radial-gradient(40rem 25rem at 15% 85%, rgba(255,201,40,0.35), transparent 70%)",
          }}
        />

        <div className="container-x relative">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Product Image Showcase with interactive badge & glow */}
            {/* Product Image Showcase without any clipping/cutting */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative mx-auto max-w-md lg:max-w-none w-full"
            >
              <div className="relative group rounded-3xl border border-white/20 shadow-2xl bg-gradient-to-b from-white via-white to-slate-50 p-6 sm:p-8 flex flex-col items-center justify-center">
                {/* Badges on top row */}
                <div className="w-full flex items-center justify-between gap-2 mb-3">
                  <span className="rounded-full bg-gold px-3.5 py-1 text-xs font-black uppercase text-navy-950 tracking-wider shadow-md flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 fill-navy-950" /> 100% Herbal
                  </span>
                  <span className="rounded-full bg-emerald-700 px-3 py-1 text-xs font-bold text-white shadow-md">
                    1000MG • 30 Tablets
                  </span>
                </div>

                {/* Fully visible bottle image */}
                <div className="w-full flex items-center justify-center py-2 min-h-[360px] sm:min-h-[440px]">
                  <img
                    src="/images/stem_grow.png"
                    alt="Stem Grow Supplement 1000MG 30 Tablets"
                    className="max-h-[380px] sm:max-h-[440px] w-auto max-w-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out drop-shadow-2xl"
                  />
                </div>

                {/* Info strip below bottle */}
                <div className="w-full mt-2 pt-3 border-t border-slate-200 flex items-center justify-between text-navy-900">
                  <span className="text-xs font-bold text-royal">Active Living Formula</span>
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    Quality Inspected
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Product Info Column */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block rounded-full bg-gold/15 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-gold mb-3 border border-gold/30">
                Top Rated Formula
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                {stemGrowProduct.name}
              </h2>
              <p className="mt-2 text-base sm:text-lg text-gold font-medium">
                {stemGrowProduct.subtitle}
              </p>

              {/* Pricing Cards */}
              <div className="mt-6 flex flex-wrap gap-4 items-center">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="rounded-2xl bg-white/10 p-4 border border-white/15 backdrop-blur flex-1 min-w-[140px]"
                >
                  <span className="text-xs text-white/60 block font-medium">Single Jar (1 Pc)</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-3xl font-extrabold text-white">₹{stemGrowProduct.offerPrice}</span>
                    <span className="text-sm line-through text-white/50">₹{stemGrowProduct.mrp}</span>
                    <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-xs font-bold text-emerald-400">
                      {stemGrowProduct.discount}
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="rounded-2xl bg-gold/15 p-4 border border-gold/50 backdrop-blur flex-1 min-w-[180px] shadow-lg shadow-gold/10"
                >
                  <span className="text-xs text-gold block font-bold">Starter Package (2 Pcs)</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-3xl font-extrabold text-gold">₹{stemGrowProduct.packageOffer.offerPrice}</span>
                    <span className="text-sm line-through text-white/50">₹{stemGrowProduct.packageOffer.mrp}</span>
                    <span className="rounded-full bg-gold text-navy-950 px-2 py-0.5 text-xs font-black">
                      {stemGrowProduct.packageOffer.discount}
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Key Benefits */}
              <div className="mt-7">
                <h3 className="text-sm font-bold uppercase tracking-wider text-white/90 mb-3">
                  Proven Clinical & Wellness Benefits:
                </h3>
                <div className="grid gap-2 sm:grid-cols-2 text-xs sm:text-sm text-white/80">
                  {stemGrowProduct.benefits.slice(0, 8).map((b) => (
                    <div key={b} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={getWhatsAppProductLink("Stem Grow 2-Pc Starter Combo ₹1248")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-gold px-7 py-3.5 font-bold text-navy-950 hover:bg-gold-deep transition shadow-xl shadow-gold/20 inline-flex items-center gap-2 text-sm"
                >
                  <ShoppingBag className="h-4 w-4" /> Order 2-Pc Combo (₹1,248)
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href={getWhatsAppProductLink("Stem Grow Single Jar ₹749")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/30 px-6 py-3.5 font-semibold text-white hover:bg-white/10 transition inline-flex items-center gap-2 text-sm"
                >
                  Order Single Jar (₹749)
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 450+ Daily Essentials Category Showcase */}
      <section className="py-20 bg-slate-50">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-royal">
              Complete FMCG & Household Range
            </span>
            <h2 className="text-3xl font-bold text-navy-900 mt-2 sm:text-4xl">
              Over 450+ Everyday Products
            </h2>
            <p className="mt-3 text-ink/75 text-sm sm:text-base leading-relaxed">
              From unpolished organic pulses and pure grind spices to premium dry fruits, baby care, and ayurvedic skin routines.
            </p>
          </motion.div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((cat, idx) => {
              const bgImg = categoryImages[cat.name];

              return (
                <motion.div
                  key={cat.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (idx % 3) * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="flex flex-col justify-between rounded-3xl bg-white overflow-hidden border border-navy-900/10 shadow-sm hover:shadow-xl hover:border-gold/60 transition-all duration-300 group"
                >
                  {/* Category Image Preview if available */}
                  {bgImg && (
                    <div className="relative h-48 w-full overflow-hidden bg-slate-100 flex items-center justify-center">
                      <img
                        src={bgImg}
                        alt={cat.name}
                        className={`h-full w-full ${
                          cat.name === "Health Care & Wellness" ? "object-contain p-3 bg-white" : "object-cover"
                        } group-hover:scale-105 transition-transform duration-500 ease-out`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                      <span className="absolute bottom-3 left-4 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold text-navy-900 shadow">
                        {cat.name}
                      </span>
                    </div>
                  )}

                  <div className="p-6">
                    {!bgImg && (
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-4xl group-hover:scale-110 transition duration-200">
                          {cat.icon}
                        </span>
                        <span className="rounded-full bg-sky-soft px-3 py-1 text-xs font-bold text-royal">
                          Natural
                        </span>
                      </div>
                    )}

                    <h3 className="text-xl font-bold text-navy-900 group-hover:text-royal transition">
                      {cat.name}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-ink/75 leading-relaxed">
                      {cat.items}
                    </p>
                  </div>

                  <div className="p-6 pt-0">
                    <motion.a
                      whileTap={{ scale: 0.96 }}
                      href={getWhatsAppProductLink(cat.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-navy-900 py-3 text-xs font-bold text-white group-hover:bg-gold group-hover:text-navy-950 transition duration-200 shadow-sm"
                    >
                      <MessageCircle className="h-4 w-4" /> Order Category on WhatsApp
                    </motion.a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust & Guarantees */}
      <section className="py-16 bg-white border-t border-navy-900/10">
        <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <motion.div whileHover={{ scale: 1.02 }} className="flex items-center gap-4 p-5 rounded-2xl bg-sky-soft/40 border border-sky/20">
            <ShieldCheck className="h-9 w-9 text-royal shrink-0" />
            <div>
              <h4 className="font-bold text-navy-900 text-sm">100% Quality Inspected</h4>
              <p className="text-xs text-ink/65 mt-0.5">Lab-tested & certified purity</p>
            </div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} className="flex items-center gap-4 p-5 rounded-2xl bg-sky-soft/40 border border-sky/20">
            <Truck className="h-9 w-9 text-royal shrink-0" />
            <div>
              <h4 className="font-bold text-navy-900 text-sm">Doorstep Delivery</h4>
              <p className="text-xs text-ink/65 mt-0.5">Prompt nationwide dispatch</p>
            </div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} className="flex items-center gap-4 p-5 rounded-2xl bg-sky-soft/40 border border-sky/20">
            <Heart className="h-9 w-9 text-emerald-600 shrink-0" />
            <div>
              <h4 className="font-bold text-navy-900 text-sm">Natural Ingredients</h4>
              <p className="text-xs text-ink/65 mt-0.5">Zero harmful additives</p>
            </div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} className="flex items-center gap-4 p-5 rounded-2xl bg-sky-soft/40 border border-sky/20">
            <ShoppingBag className="h-9 w-9 text-gold-deep shrink-0" />
            <div>
              <h4 className="font-bold text-navy-900 text-sm">Smart Card Cashback</h4>
              <p className="text-xs text-ink/65 mt-0.5">Rewards on every self-purchase</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
