import { useState } from "react";
import PageHeader from "../components/PageHeader.jsx";
import { fintasPackages, incomeTypes, milestoneRewards, site } from "../data/content.js";
import { Check, Gift, Award, Shield, Zap, Sparkles, MessageCircle, Briefcase } from "lucide-react";

export default function BusinessPlanPage() {
  const [selectedPackage, setSelectedPackage] = useState(fintasPackages[0]);

  const getPackageWhatsApp = (pkgName, price) => {
    const text = `Hi, I am interested in joining Fintas with the ${pkgName} (₹${price.toLocaleString("en-IN")}). Please provide registration and activation guidance.`;
    return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div>
      <PageHeader
        badge="Zero Risk • High Growth"
        title="Fintas Business Opportunity"
        subtitle="A legally compliant, product-based digital business model empowering youth, women, and professionals across India to build long-term financial security."
      />

      {/* Packages Overview */}
      <section className="py-20 bg-slate-50">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-royal">Choose Your Entry Level</span>
            <h2 className="text-3xl font-bold text-navy-900 mt-2 sm:text-4xl">
              Fintas Activation Packages
            </h2>
            <p className="mt-3 text-ink/75 text-sm sm:text-base leading-relaxed">
              Every package comes bundled with genuine wellness products, training academy access, insurance coverage, and daily earnings.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {fintasPackages.map((pkg) => {
              const isPopular = pkg.badge === "Most Popular";
              return (
                <div
                  key={pkg.name}
                  className={`flex flex-col justify-between rounded-3xl bg-white p-6 transition duration-200 border ${
                    isPopular
                      ? "border-gold shadow-xl ring-2 ring-gold/20 scale-[1.02]"
                      : "border-navy-900/10 shadow-sm hover:shadow-md"
                  }`}
                >
                  <div>
                    {pkg.badge && (
                      <span
                        className={`inline-block rounded-full px-3 py-0.5 text-xs font-bold mb-3 ${
                          isPopular ? "bg-gold text-navy-950" : "bg-sky-soft text-royal"
                        }`}
                      >
                        {pkg.badge}
                      </span>
                    )}

                    <h3 className="text-lg font-bold text-navy-900">{pkg.name}</h3>
                    <div className="mt-3 flex items-baseline">
                      <span className="text-2xl font-extrabold text-navy-900">
                        ₹{pkg.price.toLocaleString("en-IN")}
                      </span>
                      <span className="text-xs text-ink/50 ml-1">/ one-time</span>
                    </div>

                    <ul className="mt-6 space-y-2.5 text-xs text-ink/80 border-t border-navy-900/10 pt-4">
                      <li className="flex items-center gap-2">
                        <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                        <span><strong>Products:</strong> {pkg.products}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                        <span><strong>Direct Bonus:</strong> ₹{pkg.directBonus}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                        <span><strong>Commission Wallet:</strong> ₹{pkg.commissionWallet}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                        <span><strong>Shopping Wallet:</strong> ₹{pkg.shoppingWallet}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                        <span><strong>Ad Bonus:</strong> {pkg.adBonus}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                        <span><strong>BV / SV:</strong> {pkg.bv} / {pkg.sv}</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-navy-900/5">
                    <a
                      href={getPackageWhatsApp(pkg.name, pkg.price)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex w-full items-center justify-center gap-1.5 rounded-full py-2.5 text-xs font-bold transition ${
                        isPopular
                          ? "bg-gold text-navy-950 hover:bg-gold-deep"
                          : "bg-navy-900 text-white hover:bg-royal"
                      }`}
                    >
                      <MessageCircle className="h-3.5 w-3.5" /> Activate Now
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 19 Types of Income Section */}
      <section className="py-20 bg-white">
        <div className="container-x">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-royal">Comprehensive Earnings</span>
            <h2 className="text-3xl font-bold text-navy-900 mt-2 sm:text-4xl">
              19 Revenue Streams in Fintas
            </h2>
            <p className="mt-3 text-ink/75 leading-relaxed">
              Our business model rewards both direct efforts, team mentoring, retail sales, and continuous repurchases.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {incomeTypes.map((inc) => (
              <div
                key={inc}
                className="flex items-center gap-3 rounded-2xl border border-navy-900/10 bg-slate-50/70 p-4 hover:border-gold/60 hover:bg-white hover:shadow-sm transition"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-navy-900 text-gold text-xs font-bold">
                  ✓
                </span>
                <span className="text-sm font-semibold text-navy-900">{inc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Permanent Salary & Insurance Benefit */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="container-x grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-gold mb-3 border border-gold/30">
              <Award className="h-3.5 w-3.5" /> Stability & Security
            </span>
            <h2 className="text-3xl font-bold sm:text-4xl">Permanent Monthly Salary</h2>
            <p className="mt-4 text-white/75 leading-relaxed">
              Achieve specified team point matchings and unlock fixed monthly salaries directly transferred to your bank account:
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-navy-800 p-6 border border-white/10">
                <span className="text-xs font-bold text-gold uppercase tracking-wider">Manager Rank</span>
                <p className="text-3xl font-extrabold text-white mt-2">₹25,000</p>
                <p className="text-xs text-white/60 mt-1">Per Month Fixed Salary</p>
                <p className="text-xs text-gold/80 mt-3 pt-3 border-t border-white/10">Matching: 500 PV/PP</p>
              </div>

              <div className="rounded-2xl bg-navy-800 p-6 border border-white/10">
                <span className="text-xs font-bold text-gold uppercase tracking-wider">Director Rank</span>
                <p className="text-3xl font-extrabold text-white mt-2">₹50,000</p>
                <p className="text-xs text-white/60 mt-1">Per Month Fixed Salary</p>
                <p className="text-xs text-gold/80 mt-3 pt-3 border-t border-white/10">Matching: 5,000 PV/PP</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold text-navy-950">
                <Shield className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-xl font-bold text-white">Channel Partner Insurance Policy</h3>
                <p className="text-xs text-white/60">Complimentary with active package</p>
              </div>
            </div>

            <p className="text-sm text-white/80 leading-relaxed">
              Every qualified distributor using our Smart Card and active packages is protected with financial security for their family:
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex justify-between items-center rounded-xl bg-navy-950/70 p-4 border border-white/10">
                <span className="text-sm text-white/80">Accident Insurance Cover</span>
                <span className="font-bold text-gold text-base">₹2,00,000/-</span>
              </div>
              <div className="flex justify-between items-center rounded-xl bg-navy-950/70 p-4 border border-white/10">
                <span className="text-sm text-white/80">Accidental Death Cover</span>
                <span className="font-bold text-gold text-base">₹5,00,000/-</span>
              </div>
            </div>

            <p className="mt-4 text-xs text-white/50">
              *Terms and conditions apply. Requires self-shopping of 3000 SV and active Smart Card status.
            </p>
          </div>
        </div>
      </section>

      {/* Rewards & Milestones Showcase */}
      <section className="py-20 bg-slate-50">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-royal">Performance Recognition</span>
            <h2 className="text-3xl font-bold text-navy-900 mt-2 sm:text-4xl">
              Milestone Rewards & Luxury Gifts
            </h2>
            <p className="mt-3 text-ink/75 text-sm sm:text-base">
              Fully paid rewards awarded as your left and right team matching points grow.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {milestoneRewards.map((m) => (
              <div
                key={m.match}
                className="flex flex-col justify-between rounded-2xl bg-white p-5 border border-navy-900/10 shadow-sm hover:border-gold hover:shadow-md transition text-center"
              >
                <div>
                  <span className="inline-block rounded-full bg-sky-soft px-2.5 py-0.5 text-[11px] font-bold text-royal mb-2">
                    {m.match}
                  </span>
                  <h4 className="text-base font-bold text-navy-900">{m.reward}</h4>
                </div>
                <p className="mt-3 text-xs text-ink/50 border-t border-navy-900/5 pt-2">{m.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="bg-navy-950 py-16 text-white text-center border-t border-white/10">
        <div className="container-x max-w-2xl">
          <h2 className="text-3xl font-bold">Start Your Journey Today</h2>
          <p className="mt-3 text-white/75 text-sm sm:text-base">
            Join thousands of active partners across India. Get registered, attend our daily Zoom orientations, and build your digital wealth.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi, I want to join Fintas Business Opportunity. Please share the joining link.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gold px-8 py-3 font-bold text-navy-950 hover:bg-gold-deep transition shadow-lg"
            >
              Get Started via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
