import { useState } from "react";
import PageHeader from "../components/PageHeader.jsx";
import { franchiseModel, site } from "../data/content.js";
import { Building2, Warehouse, Store, CheckCircle2, ShieldCheck, TrendingUp, Send } from "lucide-react";

const tierIcons = {
  Building2: Building2,
  Warehouse: Warehouse,
  Store: Store,
};

export default function FranchisePage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    state: "",
    tier: "Franchise Store (Pincode Wise)",
    investmentBudget: "₹1 Lakh - ₹3 Lakhs",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `*New Franchise Inquiry*\n*Name:* ${form.name}\n*Phone:* ${form.phone}\n*City/State:* ${form.city}, ${form.state}\n*Franchise Tier:* ${form.tier}\n*Investment Budget:* ${form.investmentBudget}`;
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    setSubmitted(true);
  };

  const inputStyle =
    "w-full rounded-xl border border-navy-900/15 bg-slate-50 px-4 py-3 text-sm text-navy-900 placeholder:text-ink/40 focus:border-navy-900 focus:bg-white focus:outline-none transition";

  return (
    <div>
      <PageHeader
        badge="State • District • Pincode"
        title="Fintas Franchise Network"
        subtitle="Become a regional partner with Fintas. Establish a verified distribution hub or retail store with 450+ high-demand FMCG and wellness products."
      />

      {/* 3 Tier Model */}
      <section className="py-20 bg-white">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-royal">Proven Business Models</span>
            <h2 className="text-3xl font-bold text-navy-900 mt-2 sm:text-4xl">
              Three Levels of Franchise Partnership
            </h2>
            <p className="mt-3 text-ink/75 text-sm sm:text-base">
              Structured territorially to ensure zero internal competition and guaranteed regional distribution volume.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {franchiseModel.map((item) => {
              const Icon = tierIcons[item.icon] || Store;
              const isHub = item.level === "District Wise";

              return (
                <div
                  key={item.tier}
                  className={`flex flex-col justify-between rounded-3xl p-8 border transition duration-200 ${
                    isHub
                      ? "border-gold bg-slate-50 shadow-xl ring-2 ring-gold/20"
                      : "border-navy-900/10 bg-white shadow-sm hover:shadow-md"
                  }`}
                >
                  <div>
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-900 text-gold mb-6">
                      <Icon className="h-7 w-7" />
                    </span>

                    <span className="inline-block rounded-full bg-sky-soft px-3 py-1 text-xs font-bold text-royal mb-2">
                      {item.level}
                    </span>

                    <h3 className="text-2xl font-bold text-navy-900">{item.tier}</h3>
                    <p className="text-xs font-semibold text-gold-deep mt-1">{item.tagline}</p>
                    <p className="mt-4 text-sm leading-relaxed text-ink/75">{item.benefits}</p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-navy-900/10">
                    <ul className="space-y-2 text-xs text-ink/80">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                        <span>Exclusive geographical boundary</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                        <span>Integrated POS & inventory app</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                        <span>Company promotional support</span>
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Franchise With Us */}
      <section className="py-20 bg-slate-50 border-y border-navy-900/10">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-royal">Partner Benefits</span>
              <h2 className="text-3xl font-bold text-navy-900 mt-2 sm:text-4xl">
                Why Invest in a Fintas Franchise?
              </h2>
              <p className="mt-4 text-ink/75 leading-relaxed">
                Fintas bridges high-demand daily essential goods, natural wellness remedies, and digital utility services into a single unified storefront.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex gap-4 items-start rounded-2xl bg-white p-5 border border-navy-900/10 shadow-sm">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-gold">
                    <TrendingUp className="h-5 w-5" />
                  </span>
                  <div>
                    <h4 className="font-bold text-navy-900 text-base">High Margins & Quick Break-Even</h4>
                    <p className="text-sm text-ink/75 mt-1">
                      Direct factory-to-store pricing eliminates middleman markups, leaving healthy profits for franchise owners.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start rounded-2xl bg-white p-5 border border-navy-900/10 shadow-sm">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-gold">
                    <ShieldCheck className="h-5 w-5" />
                  </span>
                  <div>
                    <h4 className="font-bold text-navy-900 text-base">450+ Fast-Moving Products</h4>
                    <p className="text-sm text-ink/75 mt-1">
                      From everyday spices, dals, and groceries to herbal Stem Grow and beauty products that customers re-order monthly.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Franchise Application Form */}
            <div className="rounded-3xl bg-white p-8 sm:p-10 border border-navy-900/10 shadow-xl">
              <h3 className="text-2xl font-bold text-navy-900">Franchise Application Form</h3>
              <p className="text-sm text-ink/70 mt-1 mb-6">
                Submit your territory preference and our expansion manager will connect with you.
              </p>

              {submitted && (
                <div className="mb-6 rounded-xl bg-emerald-50 border border-emerald-200 p-4 text-emerald-800 text-sm flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 shrink-0" />
                  <span>Your application details have been submitted to WhatsApp!</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-navy-900 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    className={inputStyle}
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-navy-900 mb-1">
                      Contact Number *
                    </label>
                    <input
                      type="tel"
                      required
                      inputMode="tel"
                      className={inputStyle}
                      placeholder="10-digit mobile number"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-navy-900 mb-1">
                      City / District *
                    </label>
                    <input
                      type="text"
                      required
                      className={inputStyle}
                      placeholder="e.g. Raipur"
                      value={form.city}
                      onChange={(e) => setForm({ ...form, city: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-navy-900 mb-1">
                      State *
                    </label>
                    <input
                      type="text"
                      required
                      className={inputStyle}
                      placeholder="e.g. Chhattisgarh"
                      value={form.state}
                      onChange={(e) => setForm({ ...form, state: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-navy-900 mb-1">
                      Franchise Model
                    </label>
                    <select
                      className={inputStyle}
                      value={form.tier}
                      onChange={(e) => setForm({ ...form, tier: e.target.value })}
                    >
                      <option value="Franchise Store (Pincode Wise)">Franchise Store (Pincode Wise)</option>
                      <option value="Franchise Hub (District Wise)">Franchise Hub (District Wise)</option>
                      <option value="Master Franchise (State Wise)">Master Franchise (State Wise)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-navy-900 mb-1">
                    Investment Capacity
                  </label>
                  <select
                    className={inputStyle}
                    value={form.investmentBudget}
                    onChange={(e) => setForm({ ...form, investmentBudget: e.target.value })}
                  >
                    <option value="₹1 Lakh - ₹3 Lakhs">₹1 Lakh - ₹3 Lakhs (Pincode Store)</option>
                    <option value="₹3 Lakhs - ₹10 Lakhs">₹3 Lakhs - ₹10 Lakhs (District Hub)</option>
                    <option value="₹10 Lakhs+">₹10 Lakhs+ (State Master)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={!form.name || !form.phone}
                  className="w-full flex items-center justify-center gap-2 rounded-full bg-gold py-3.5 px-6 font-bold text-navy-950 hover:bg-gold-deep transition shadow-md disabled:cursor-not-allowed disabled:opacity-50 mt-4"
                >
                  <Send className="h-4 w-4" /> Apply for Franchise via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
