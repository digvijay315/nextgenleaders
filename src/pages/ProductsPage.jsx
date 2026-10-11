import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";
import { stemGrowProduct, site } from "../data/content.js";
import {
  fintasCategories,
  fintasByCategory,
} from "../data/categoriesData.js";
import {
  Sparkles,
  ShieldCheck,
  Heart,
  Truck,
  Check,
  ShoppingBag,
  MessageCircle,
  ArrowRight,
  Layers,
  Star,
  PackageCheck,
  ChevronRight,
  Search,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = useMemo(() => {
    if (!searchTerm) return fintasCategories;
    const term = searchTerm.toLowerCase().trim();
    return fintasCategories.filter(
      (c) =>
        c.name.toLowerCase().includes(term) ||
        c.code.toLowerCase().includes(term) ||
        (c.description && c.description.toLowerCase().includes(term))
    );
  }, [searchTerm]);

  const getWhatsAppProductLink = (productTitle) => {
    const text = `Hi Next Gen Leaders, I am interested in inquiring about "${productTitle}". Please share catalogue and details.`;
    return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="overflow-hidden bg-slate-50 text-slate-800">
      <PageHeader
        badge="Official Fintas Catalogue • 14 Categories • 325+ Products"
        title="Products & Daily Essentials"
        subtitle="Explore genuine FMCG, grocery, wellness, personal care, and tech accessories with complete category pages, verified amounts, and photos."
      />

      {/* Flagship Product Showcase: Stem Grow */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white relative overflow-hidden border-b border-white/10">
        <div
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{
            background:
              "radial-gradient(50rem 30rem at 85% 15%, rgba(30,167,255,0.4), transparent 70%), radial-gradient(40rem 25rem at 15% 85%, rgba(255,201,40,0.35), transparent 70%)",
          }}
        />

        <div className="container-x relative">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Product Image Showcase without clipping */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative mx-auto max-w-md lg:max-w-none w-full"
            >
              <div className="relative group rounded-3xl border border-white/20 shadow-2xl bg-gradient-to-b from-white via-white to-slate-50 p-6 sm:p-8 flex flex-col items-center justify-center">
                <div className="w-full flex items-center justify-between gap-2 mb-3">
                  <span className="rounded-full bg-gold px-3.5 py-1 text-xs font-black uppercase text-navy-950 tracking-wider shadow-md flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 fill-navy-950" /> 100% Herbal
                  </span>
                  <span className="rounded-full bg-emerald-700 px-3 py-1 text-xs font-bold text-white shadow-md">
                    1000MG • 30 Tablets
                  </span>
                </div>

                <div className="w-full flex items-center justify-center py-2 min-h-[340px] sm:min-h-[400px]">
                  <img
                    src="/images/stem_grow.png"
                    alt="Stem Grow Supplement 1000MG 30 Tablets"
                    className="max-h-[360px] sm:max-h-[400px] w-auto max-w-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out drop-shadow-2xl"
                  />
                </div>

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
                Flagship Formulation
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
                  Key Formulated Benefits:
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

              {/* Action Buttons (NO Add to Cart button) */}
              <div className="mt-8 flex flex-wrap gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={getWhatsAppProductLink("Stem Grow 2-Pc Package")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-gold px-7 py-3.5 font-bold text-navy-950 hover:bg-gold-deep transition shadow-xl shadow-gold/20 inline-flex items-center gap-2 text-sm"
                >
                  <MessageCircle className="h-4 w-4" /> Enquire on WhatsApp
                </motion.a>

                <Link
                  to="/category/health-wellness"
                  className="rounded-full border border-white/30 px-6 py-3.5 font-semibold text-white hover:bg-white/10 transition inline-flex items-center gap-2 text-sm"
                >
                  View Health & Wellness Range <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 14 Fintas Categories Showcase Section */}
      <section className="py-16 sm:py-24">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-royal">
                <Layers className="h-4 w-4 text-royal" /> Explore All 14 Categories
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 mt-2">
                Browse by Category
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl">
                Each category has its own dedicated page with live products, authentic pricing, codes, and high-resolution photos.
              </p>
            </div>

            {/* Live Search */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Filter categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-xl bg-white border border-slate-300 pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-800 focus:border-royal focus:outline-none focus:ring-2 focus:ring-royal/20"
              />
            </div>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCategories.map((cat, idx) => {
              const catInfo = fintasByCategory[cat.slug];
              const sampleImg =
                catInfo?.products?.[0]?.image || "/images/groceries_basket.jpg";

              return (
                <motion.div
                  key={cat.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (idx % 4) * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="flex flex-col justify-between rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-gold/70 transition-all duration-300 overflow-hidden group"
                >
                  {/* Category Image Header */}
                  <Link
                    to={`/category/${cat.slug}`}
                    className="relative h-44 w-full overflow-hidden bg-slate-50 flex items-center justify-center p-4 border-b border-slate-100"
                  >
                    <img
                      src={sampleImg}
                      alt={cat.name}
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/images/groceries_basket.jpg";
                      }}
                      className="h-full w-full object-contain group-hover:scale-108 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    {/* Count Badge */}
                    <span className="absolute top-3 right-3 rounded-full bg-navy-950/80 backdrop-blur text-white text-[11px] font-bold px-3 py-1 shadow">
                      {cat.count} Products
                    </span>

                    {/* Code badge */}
                    <span className="absolute bottom-3 left-3 rounded-md bg-gold text-navy-950 text-[10px] font-extrabold uppercase px-2 py-0.5 shadow-sm">
                      {cat.code}
                    </span>
                  </Link>

                  {/* Body Info */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <Link to={`/category/${cat.slug}`}>
                        <h3 className="text-lg font-bold text-navy-950 group-hover:text-royal transition flex items-center justify-between">
                          <span>{cat.name}</span>
                          <ChevronRight className="h-4 w-4 text-slate-300 group-hover:text-royal group-hover:translate-x-1 transition" />
                        </h3>
                      </Link>
                      <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed line-clamp-2">
                        {cat.description}
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] font-medium text-slate-400">
                        {cat.count} Items Listed
                      </span>
                      <Link
                        to={`/category/${cat.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-royal group-hover:text-gold-deep transition"
                      >
                        <span>View Category</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust & Guarantees */}
      <section className="py-16 bg-white border-t border-slate-200">
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
              <h4 className="font-bold text-navy-900 text-sm">Direct Manufacturer</h4>
              <p className="text-xs text-ink/65 mt-0.5">Authentic catalogue & rates</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
