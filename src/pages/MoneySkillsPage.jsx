import { useState } from "react";
import PageHeader from "../components/PageHeader.jsx";
import { moneyTopics } from "../data/content.js";
import { ShieldAlert, Calculator, CheckCircle2, TrendingUp, AlertTriangle } from "lucide-react";

export default function MoneySkillsPage() {
  const [income, setIncome] = useState(25000);

  // 50/30/20 Rule Calculation
  const needs = Math.round(income * 0.5);
  const wants = Math.round(income * 0.3);
  const savings = Math.round(income * 0.2);

  return (
    <div>
      <PageHeader
        badge="Financial Education"
        title="Practical Money Skills"
        subtitle="No get-rich-quick schemes. We teach the honest essentials of budgeting, emergency funds, debt management, and investing."
      />

      {/* Core Topics */}
      <section className="py-20 bg-white">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-royal">Core Fundamentals</span>
            <h2 className="text-3xl font-bold text-navy-900 mt-2 sm:text-4xl">
              Building lasting financial strength
            </h2>
            <p className="mt-4 text-ink/75 leading-relaxed">
              Step-by-step principles that help you take control of your earnings and secure your future.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {moneyTopics.map((topic, index) => (
              <div
                key={topic.title}
                className="rounded-2xl border-l-4 border-gold bg-sky-soft/50 p-7 shadow-sm transition hover:shadow-md"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-navy-900 text-gold text-xs font-bold">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-bold text-navy-900">{topic.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink/75 pl-10">{topic.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive 50/30/20 Budget Calculator */}
      <section className="py-20 bg-slate-50 border-y border-navy-900/10">
        <div className="container-x">
          <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 sm:p-10 shadow-lg border border-navy-900/10">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-900 text-gold">
                <Calculator className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-2xl font-bold text-navy-900">50/30/20 Budgeting Tool</h3>
                <p className="text-xs sm:text-sm text-ink/65">
                  See how the classic budgeting formula splits your monthly income.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <label className="block text-sm font-semibold text-navy-900 mb-2">
                Monthly Income (₹): <span className="text-royal font-bold text-lg">₹{income.toLocaleString("en-IN")}</span>
              </label>
              <input
                type="range"
                min="5000"
                max="200000"
                step="1000"
                value={income}
                onChange={(e) => setIncome(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-navy-900"
              />
              <div className="flex justify-between text-xs text-ink/50 mt-1">
                <span>₹5,000</span>
                <span>₹1,00,000</span>
                <span>₹2,00,000+</span>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-sky-soft p-5 border border-sky/20">
                <span className="text-xs font-bold uppercase tracking-wider text-royal">50% Needs</span>
                <p className="text-2xl font-extrabold text-navy-900 mt-2">₹{needs.toLocaleString("en-IN")}</p>
                <p className="text-xs text-ink/65 mt-2">Rent, groceries, utilities & essential medicines.</p>
              </div>

              <div className="rounded-xl bg-gold/15 p-5 border border-gold/30">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-deep">30% Wants</span>
                <p className="text-2xl font-extrabold text-navy-900 mt-2">₹{wants.toLocaleString("en-IN")}</p>
                <p className="text-xs text-ink/65 mt-2">Dining out, hobbies, subscriptions & leisure.</p>
              </div>

              <div className="rounded-xl bg-emerald-50 p-5 border border-emerald-200">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">20% Savings</span>
                <p className="text-2xl font-extrabold text-navy-900 mt-2">₹{savings.toLocaleString("en-IN")}</p>
                <p className="text-xs text-ink/65 mt-2">Emergency fund, recurring deposits & SIPs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Anti-Scam Guide */}
      <section className="py-20 bg-white">
        <div className="container-x">
          <div className="mx-auto max-w-3xl rounded-2xl border-2 border-red-200 bg-red-50/50 p-8">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-8 w-8 text-red-600 shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-red-900">How to Spot Investment Scams & Red Flags</h3>
                <p className="mt-2 text-sm text-red-950/80 leading-relaxed">
                  Financial security is just as much about keeping what you have as making more. Watch out for these danger signs:
                </p>

                <ul className="mt-4 space-y-2 text-sm text-red-900">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span><strong>Guaranteed Returns:</strong> No legal equity or market investment offers fixed, daily or monthly guaranteed high returns.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span><strong>Pressure Tactics:</strong> Urgent deadlines to transfer money into personal UPI IDs or dubious crypto apps.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span><strong>Unregistered Entities:</strong> Always check SEBI or RBI registers before handing your hard-earned money to any advisor or entity.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-xs text-ink/60">
            Disclaimer: Educational materials only. Next Gen Leaders does not provide registered financial advice or stock tips.
          </p>
        </div>
      </section>
    </div>
  );
}
