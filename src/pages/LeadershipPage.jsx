import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";
import { leadership } from "../data/content.js";
import { Users, Video, Calendar, Home, Award, CheckCircle, ArrowRight } from "lucide-react";

const pillarIcons = [Users, Video, Calendar, Home];

const benefits = [
  "Confidence building & public speaking techniques",
  "One-on-one career trajectory mapping with senior leaders",
  "Real-world case studies and ethical decision frameworks",
  "Networking opportunities with peers across industries",
  "Resume reviewing and mock interview simulations",
  "Continuous alumni guidance community",
];

const faqs = [
  {
    q: "Who is this leadership programme designed for?",
    a: "It is built for ambitious students, fresh graduates, early-career professionals, and aspiring entrepreneurs wanting to take decisive steps in their careers.",
  },
  {
    q: "How are mentors selected and paired?",
    a: "Our mentors are verified professionals with years of experience in business, management, civil services, and digital industries. You are matched based on your chosen career goals.",
  },
  {
    q: "Are the live sessions recorded if I miss one?",
    a: "Yes, every live webinar and workshop is recorded and added to your mobile learning portal for on-demand playback at any time.",
  },
];

export default function LeadershipPage() {
  return (
    <div>
      <PageHeader
        badge="Mentorship & Growth"
        title="Leadership Programme"
        subtitle="Skills matter, but true leadership requires confidence, clear thinking, and guidance from those who have walked the path before."
      />

      {/* Main Pillars */}
      <section className="py-20 bg-white">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-royal">Core Pillars</span>
            <h2 className="text-3xl font-bold text-navy-900 mt-2 sm:text-4xl">
              Structured to develop real-world capability
            </h2>
            <p className="mt-4 text-ink/75 leading-relaxed">
              We blend personalized mentorship, live group interactions, and self-paced practical assignments to nurture leaders.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((item, idx) => {
              const Icon = pillarIcons[idx % pillarIcons.length];
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-navy-900/10 bg-slate-50 p-7 transition hover:-translate-y-1 hover:shadow-lg hover:border-gold/50"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-gold mb-5">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/75">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What You Gain Section */}
      <section className="bg-navy-900 py-20 text-white">
        <div className="container-x grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-gold mb-3 border border-gold/30">
              <Award className="h-3.5 w-3.5" /> Tangible Outcomes
            </div>
            <h2 className="text-3xl font-bold sm:text-4xl">What you gain from this journey</h2>
            <p className="mt-4 text-white/75 leading-relaxed">
              Leadership is more than a title—it is how you communicate under pressure, inspire others, and execute plans reliably.
            </p>

            <ul className="mt-8 space-y-4">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/85 text-sm sm:text-base">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-navy-800/80 p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gold">Ready to connect with a mentor?</h3>
            <p className="mt-3 text-white/75 text-sm leading-relaxed">
              Fill out a quick interest form or message us directly on WhatsApp to get scheduled for an introductory orientation session.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 font-semibold text-navy-950 hover:bg-gold-deep transition"
              >
                Apply for Mentorship <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="container-x max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900">Frequently Asked Questions</h2>
            <p className="text-ink/70 mt-2 text-sm sm:text-base">Everything you need to know about our leadership initiatives.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-xl border border-navy-900/10 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-navy-900">{faq.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/75">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
