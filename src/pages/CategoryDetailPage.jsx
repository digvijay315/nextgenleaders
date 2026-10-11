import { useState, useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  fintasCategories,
  getCategoryBySlug,
} from "../data/categoriesData.js";
import { site } from "../data/content.js";
import {
  Search,
  SlidersHorizontal,
  ArrowLeft,
  ArrowRight,
  PackageCheck,
  Tag,
  CheckCircle2,
  MessageCircle,
  Eye,
  X,
  Share2,
  Sparkles,
  ShoppingBag,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CategoryDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const categoryData = useMemo(() => {
    return getCategoryBySlug(slug) || {
      category: {
        name: "Category Not Found",
        slug: "not-found",
        description: "The requested category could not be found.",
        count: 0,
      },
      products: [],
    };
  }, [slug]);

  const { category, products } = categoryData;

  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Filter & Sort Products
  const filteredProducts = useMemo(() => {
    if (!products) return [];

    let list = products.filter((p) => {
      const term = searchTerm.toLowerCase().trim();
      if (!term) return true;
      return (
        p.productName.toLowerCase().includes(term) ||
        (p.variationName && p.variationName.toLowerCase().includes(term)) ||
        (p.productCode && String(p.productCode).toLowerCase().includes(term)) ||
        (p.variationCode && String(p.variationCode).toLowerCase().includes(term))
      );
    });

    if (sortBy === "price-low") {
      list = [...list].sort((a, b) => (a.price || 0) - (b.price || 0));
    } else if (sortBy === "price-high") {
      list = [...list].sort((a, b) => (b.price || 0) - (a.price || 0));
    } else if (sortBy === "name-asc") {
      list = [...list].sort((a, b) => a.productName.localeCompare(b.productName));
    } else if (sortBy === "name-desc") {
      list = [...list].sort((a, b) => b.productName.localeCompare(a.productName));
    }

    return list;
  }, [products, searchTerm, sortBy]);

  const getWhatsAppProductLink = (prod) => {
    const text = `Hi Next Gen Leaders, I am interested in ordering/inquiring about: "${prod.productName}" (Code: ${prod.productCode || prod.variationCode}, Price: ₹${prod.price}) from the ${category.name} category. Please share availability and details.`;
    return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Category Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white pt-10 pb-12 sm:pb-16 border-b border-white/10">
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(40rem 25rem at 80% 20%, rgba(255,201,40,0.35), transparent 70%), radial-gradient(35rem 20rem at 20% 80%, rgba(30,167,255,0.3), transparent 70%)",
          }}
        />

        <div className="container-x relative">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-white/60 mb-6 flex-wrap">
            <Link to="/" className="hover:text-gold transition">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 text-white/40" />
            <Link to="/products" className="hover:text-gold transition">
              Products
            </Link>
            <ChevronRight className="h-3 w-3 text-white/40" />
            <span className="text-gold font-medium">{category.name}</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/20 border border-gold/40 px-3 py-1 text-xs font-bold text-gold uppercase tracking-wider">
                  <Sparkles className="h-3 w-3" /> Category: {category.code || "FINTAS"}
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
                  {products.length} Products
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                {category.name}
              </h1>

              <p className="mt-3 text-sm sm:text-base text-white/75 leading-relaxed">
                {category.description ||
                  `Explore genuine ${category.name} essentials with assured quality and best market prices.`}
              </p>
            </div>

            {/* Back to all categories button */}
            <div className="shrink-0 flex items-center gap-3">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white transition backdrop-blur"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>All Categories</span>
              </Link>
            </div>
          </div>

          {/* Quick Category Switcher Tabs */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <div className="flex items-center gap-2 text-xs text-white/60 mb-2.5">
              <span>Switch Category:</span>
            </div>
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
              {fintasCategories.map((c) => {
                const isActive = c.slug === category.slug;
                return (
                  <Link
                    key={c.slug}
                    to={`/category/${c.slug}`}
                    className={`shrink-0 inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                      isActive
                        ? "bg-gold text-navy-950 font-bold shadow-md shadow-gold/20"
                        : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white border border-white/10"
                    }`}
                  >
                    <span>{c.name}</span>
                    <span
                      className={`text-[10px] rounded-full px-1.5 py-0.2 ${
                        isActive
                          ? "bg-navy-950 text-gold"
                          : "bg-white/15 text-white/70"
                      }`}
                    >
                      {c.count}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container-x py-10 sm:py-14">
        {/* Search, Count & Sort Bar */}
        <div className="mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-white p-4 sm:p-5 rounded-2xl shadow-sm border border-slate-200/80">
          {/* Search Field */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder={`Search in ${category.name}...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-xl bg-slate-50 border border-slate-200 pl-10 pr-10 py-2.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:border-royal focus:outline-none focus:ring-2 focus:ring-royal/20 transition"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

          {/* Results Count & Sort Dropdown */}
          <div className="flex items-center justify-between md:justify-end gap-3 flex-wrap">
            <span className="text-xs font-medium text-slate-500">
              Showing <strong className="text-navy-950 font-bold">{filteredProducts.length}</strong> of {products.length} products
            </span>

            <div className="flex items-center gap-2">
              <SlidersHorizontal className="h-3.5 w-3.5 text-slate-400 hidden sm:block" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700 focus:bg-white focus:border-royal focus:outline-none focus:ring-2 focus:ring-royal/20"
              >
                <option value="default">Default Sorting</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
              </select>
            </div>
          </div>
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 px-4 bg-white rounded-3xl border border-slate-200/80 shadow-sm max-w-lg mx-auto">
            <div className="mx-auto w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-4">
              <PackageCheck className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-800">No products found</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              {searchTerm
                ? `No products match "${searchTerm}". Try checking for spelling or clear search.`
                : "No products available in this category at this moment."}
            </p>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="mt-4 inline-flex items-center gap-2 rounded-xl bg-navy-950 px-4 py-2 text-xs font-bold text-white hover:bg-navy-900 transition"
              >
                Clear Search Filter
              </button>
            )}
          </div>
        )}

        {/* Products Grid (Note: NO Add to Cart button per instructions) */}
        {filteredProducts.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
            {filteredProducts.map((p, idx) => (
              <motion.div
                key={p.id || idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: Math.min((idx % 12) * 0.04, 0.4) }}
                whileHover={{ y: -5 }}
                className="group flex flex-col justify-between rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-gold/60 transition-all duration-300 overflow-hidden"
              >
                {/* Product Image Container */}
                <div
                  className="relative aspect-square w-full bg-slate-50 p-4 flex items-center justify-center overflow-hidden cursor-pointer"
                  onClick={() => setSelectedProduct(p)}
                >
                  <img
                    src={p.image}
                    alt={p.productName}
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/images/groceries_basket.jpg";
                    }}
                    className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out drop-shadow-sm"
                  />

                  {/* Badges Overlay */}
                  <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 items-start">
                    {p.productCode && (
                      <span className="rounded-md bg-navy-950/80 backdrop-blur px-2 py-0.5 text-[10px] font-bold text-white tracking-wider uppercase">
                        {p.productCode}
                      </span>
                    )}
                    {p.businessValue > 0 && (
                      <span className="rounded-md bg-emerald-600/90 backdrop-blur px-2 py-0.5 text-[10px] font-bold text-white tracking-wider">
                        BV: {p.businessValue}
                      </span>
                    )}
                  </div>

                  {/* Quick View Button on Hover */}
                  <div className="absolute inset-0 bg-navy-950/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-xs font-bold text-navy-950 shadow-lg">
                      <Eye className="h-3.5 w-3.5" /> View Details
                    </span>
                  </div>
                </div>

                {/* Product Content Details */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Category tag */}
                    <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1.5">
                      <span className="font-medium truncate max-w-[150px]">{category.name}</span>
                      {p.stockQuantity > 0 && (
                        <span className="text-emerald-600 font-semibold flex items-center gap-1 text-[10px]">
                          <CheckCircle2 className="h-2.5 w-2.5" /> In Stock
                        </span>
                      )}
                    </div>

                    {/* Product Title */}
                    <h3
                      onClick={() => setSelectedProduct(p)}
                      className="font-bold text-sm sm:text-base text-navy-950 line-clamp-2 hover:text-royal transition cursor-pointer leading-snug"
                      title={p.productName}
                    >
                      {p.productName}
                    </h3>

                    {/* Variation Name if distinct */}
                    {p.variationName && p.variationName !== p.productName && (
                      <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                        {p.variationName}
                      </p>
                    )}
                  </div>

                  {/* Price & Action Section (Strictly NO ADD TO CART BUTTON) */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                        Amount
                      </span>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-lg sm:text-xl font-extrabold text-navy-950">
                          ₹{p.price.toLocaleString("en-IN")}
                        </span>
                        {p.netAmount && p.netAmount !== p.price && (
                          <span className="text-xs text-slate-400 line-through">
                            ₹{p.netAmount.toLocaleString("en-IN")}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Pure Product Action: WhatsApp Enquiry Link / Quick View */}
                    <motion.a
                      whileTap={{ scale: 0.94 }}
                      href={getWhatsAppProductLink(p)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 inline-flex items-center gap-1.5 rounded-xl bg-slate-100 hover:bg-gold hover:text-navy-950 text-slate-700 px-3 py-2 text-xs font-bold transition duration-200"
                      title="Enquire about this product on WhatsApp"
                    >
                      <MessageCircle className="h-3.5 w-3.5 text-emerald-600 group-hover:text-navy-950" />
                      <span>Enquire</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-navy-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden my-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 p-2 transition"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="grid md:grid-cols-2 gap-6 p-6 sm:p-8">
                {/* Modal Image */}
                <div className="relative aspect-square w-full rounded-2xl bg-slate-50 p-6 flex items-center justify-center border border-slate-100">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.productName}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/images/groceries_basket.jpg";
                    }}
                    className="max-h-full max-w-full object-contain drop-shadow-md"
                  />
                  <span className="absolute bottom-3 left-3 rounded-md bg-navy-950/80 text-white text-[10px] font-bold px-2 py-0.5">
                    Original Fintas Catalogue
                  </span>
                </div>

                {/* Modal Info */}
                <div className="flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-royal">
                      {category.name}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-navy-950 mt-1">
                      {selectedProduct.productName}
                    </h2>

                    {selectedProduct.variationName && (
                      <p className="text-sm text-slate-500 mt-1 font-medium">
                        {selectedProduct.variationName}
                      </p>
                    )}

                    {/* Metadata tags */}
                    <div className="mt-4 flex flex-wrap gap-2 text-xs">
                      {selectedProduct.productCode && (
                        <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-slate-700 font-semibold">
                          Code: {selectedProduct.productCode}
                        </span>
                      )}
                      {selectedProduct.variationCode && (
                        <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-slate-700 font-semibold">
                          Var: {selectedProduct.variationCode}
                        </span>
                      )}
                      {selectedProduct.businessValue > 0 && (
                        <span className="rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-1 font-semibold">
                          BV: {selectedProduct.businessValue}
                        </span>
                      )}
                    </div>

                    {/* Price display */}
                    <div className="mt-6 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                      <span className="text-xs text-slate-400 block font-medium">Product Price</span>
                      <div className="flex items-baseline gap-2 mt-0.5">
                        <span className="text-3xl font-extrabold text-navy-950">
                          ₹{selectedProduct.price.toLocaleString("en-IN")}
                        </span>
                        {selectedProduct.netAmount && selectedProduct.netAmount !== selectedProduct.price && (
                          <span className="text-sm text-slate-400 line-through">
                            ₹{selectedProduct.netAmount.toLocaleString("en-IN")}
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] text-emerald-600 font-medium block mt-1">
                        ✓ Quality checked & authentic guarantee
                      </span>
                    </div>
                  </div>

                  {/* Actions (NO Add to Cart button) */}
                  <div className="mt-6 flex flex-col gap-2.5">
                    <a
                      href={getWhatsAppProductLink(selectedProduct)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 py-3 text-sm font-bold text-white transition shadow-md shadow-emerald-600/20"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>Enquire / Order on WhatsApp</span>
                    </a>

                    <button
                      onClick={() => setSelectedProduct(null)}
                      className="inline-flex w-full items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200 py-2.5 text-xs font-semibold text-slate-700 transition"
                    >
                      Close Preview
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
