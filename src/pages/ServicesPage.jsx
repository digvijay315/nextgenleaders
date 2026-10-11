import * as Icons from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";
import { services, site } from "../data/content.js";
import { ShieldCheck, Zap, Headphones, MessageCircle, ArrowRight, Percent, Sparkles } from "lucide-react";

export default function ServicesPage() {
  const getWhatsAppServiceLink = (serviceName) => {
    const text = `Hi, I want to use or enquire about the "${serviceName}" service on Fintas Portal.`;
    return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div>
      <PageHeader
        badge="Zero Service Charge • Instant Confirmation"
        title="All-In-One Digital Services Hub"
        subtitle="Turn your smartphone into a complete digital service kiosk. Mobile recharge, DTH, BBPS bills, AEPS banking, and travel bookings at guaranteed lowest rates."
      />

      {/* Special Cashback Announcement Banner */}
      <section className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 py-10 text-white border-b border-gold/30">
        <div className="container-x flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gold text-navy-950 font-extrabold text-2xl shadow-lg">
              %
            </span>
            <div>
              <span className="inline-block rounded-full bg-gold/20 px-3 py-0.5 text-xs font-bold text-gold mb-1">
                Guaranteed Cashback
              </span>
              <h3 className="text-xl sm:text-2xl font-bold">
                Flat 3% Cashback on Every Recharge (2% Self + 1% Sponsor)
              </h3>
              <p className="text-xs sm:text-sm text-white/75 mt-0.5">
                No hidden service charges. Every recharge directly puts money back into your wallet.
              </p>
            </div>
          </div>
          <a
            href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi, I want to register for Fintas Recharge & BBPS Portal.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full bg-gold px-7 py-3 font-bold text-navy-950 hover:bg-gold-deep transition text-sm shadow-md"
          >
            Activate Portal Access
          </a>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-royal">Multi-Service Digital Platform</span>
            <h2 className="text-3xl font-bold text-navy-900 mt-2 sm:text-4xl">
              Essential Digital & Banking Services
            </h2>
            <p className="mt-3 text-ink/75 text-sm sm:text-base">
              Providing bank-like services, utility payments, and ticket bookings across cities and rural India.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map(({ title, icon, desc }) => {
              const Icon = Icons[icon] || Zap;

              return (
                <div
                  key={title}
                  className="flex flex-col justify-between rounded-3xl bg-white p-7 shadow-sm border border-navy-900/10 hover:shadow-md hover:border-gold/50 transition group"
                >
                  <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-900 text-gold mb-5 group-hover:scale-105 transition shadow-sm">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="text-lg font-bold text-navy-900">{title}</h3>
                    <p className="mt-2 text-xs sm:text-sm text-ink/75 leading-relaxed">{desc}</p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-navy-900/5">
                    <a
                      href={getWhatsAppServiceLink(title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-royal hover:text-navy-900 transition"
                    >
                      Book / Pay Now <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison against market leaders */}
      <section className="py-20 bg-white">
        <div className="container-x">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-royal">Market Comparison</span>
            <h2 className="text-3xl font-bold text-navy-900 mt-2 sm:text-4xl">
              Why Fintas Outperforms Others
            </h2>
            <p className="mt-3 text-ink/75 leading-relaxed">
              While other apps only treat you as a customer, Fintas turns everyday users into earning partners.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-navy-900/10 shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-navy-900 text-white text-xs uppercase tracking-wider">
                <tr>
                  <th className="p-4 sm:p-5">Service Category</th>
                  <th className="p-4 sm:p-5">Conventional Apps</th>
                  <th className="p-4 sm:p-5 text-gold">Fintas Advantage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-navy-900/10 bg-white text-navy-900 text-xs sm:text-sm">
                <tr className="hover:bg-slate-50">
                  <td className="p-4 sm:p-5 font-semibold">Mobile & DTH Recharge</td>
                  <td className="p-4 sm:p-5 text-ink/65">Convenience fee charged, no income opportunity</td>
                  <td className="p-4 sm:p-5 font-bold text-royal">Zero fees + 3% Cashback + Sponsor earnings</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 sm:p-5 font-semibold">AEPS Rural Banking</td>
                  <td className="p-4 sm:p-5 text-ink/65">Limited to licensed merchant points</td>
                  <td className="p-4 sm:p-5 font-bold text-royal">Village & town empowerment with recurring commissions</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 sm:p-5 font-semibold">Travel Bookings</td>
                  <td className="p-4 sm:p-5 text-ink/65">Consumer discounts only</td>
                  <td className="p-4 sm:p-5 font-bold text-royal">Distributor level rates + PV/SV points per booking</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 sm:p-5 font-semibold">Bill Payments (BBPS)</td>
                  <td className="p-4 sm:p-5 text-ink/65">One-way spending</td>
                  <td className="p-4 sm:p-5 font-bold text-royal">Cashback & matching point calculation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Support Banner */}
      <section className="bg-navy-950 py-16 text-white text-center">
        <div className="container-x max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold">Have questions or need technical support?</h2>
          <p className="mt-3 text-white/75 text-sm sm:text-base">
            Our helpdesk is operational from 10:00 AM to 6:00 PM to assist you with quick resolution.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi, I need assistance with Fintas digital services.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 font-bold text-navy-950 hover:bg-gold-deep transition shadow-md"
            >
              <MessageCircle className="h-4 w-4" /> Message Support Helpdesk
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
