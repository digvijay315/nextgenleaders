import { useState } from "react";
import PageHeader from "../components/PageHeader.jsx";
import { site } from "../data/content.js";
import { Mail, Phone, MapPin, MessageSquare, Clock, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    subject: "Course enquiry",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
  };

  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    if (!form.name || !form.message) return;

    const messageText = `*New Inquiry via Website*\n*Name:* ${form.name}\n*Phone:* ${form.phone || "Not provided"}\n*Subject:* ${form.subject}\n*Message:* ${form.message}`;
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(messageText)}`, "_blank", "noopener");
    setSubmitted(true);
  };

  const fieldStyles =
    "w-full rounded-xl border border-navy-900/20 bg-slate-50 px-4 py-3 text-navy-900 placeholder:text-ink/40 focus:border-navy-900 focus:bg-white focus:outline-none text-sm transition";

  return (
    <div>
      <PageHeader
        badge="Connect With Us"
        title="We are here to help"
        subtitle="Reach out with your goals, questions, or ideas. Our advisors are available to guide you on the right path."
      />

      <section className="py-20 bg-slate-50">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          {/* Contact Details Column */}
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-royal">Reach Us Directly</span>
              <h2 className="text-3xl font-bold text-navy-900 mt-2">Get in touch with our team</h2>
              <p className="mt-3 text-ink/75 text-sm sm:text-base leading-relaxed">
                Whether you want to enroll in a course, book a mentorship slot, or order essentials, we are always accessible.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 rounded-2xl bg-white p-5 border border-navy-900/10 shadow-sm">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-gold">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="font-bold text-navy-900 text-sm">Email Address</h4>
                  <a href={`mailto:${site.email}`} className="text-sm text-royal hover:underline mt-0.5 block">
                    {site.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl bg-white p-5 border border-navy-900/10 shadow-sm">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-gold">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="font-bold text-navy-900 text-sm">Phone Number</h4>
                  <a href={`tel:${site.phone}`} className="text-sm text-royal hover:underline mt-0.5 block">
                    {site.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl bg-white p-5 border border-navy-900/10 shadow-sm">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-gold">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="font-bold text-navy-900 text-sm">Head Office Location</h4>
                  <p className="text-sm text-ink/75 mt-0.5">{site.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl bg-white p-5 border border-navy-900/10 shadow-sm">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-gold">
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="font-bold text-navy-900 text-sm">Working Hours</h4>
                  <p className="text-sm text-ink/75 mt-0.5">Monday to Saturday: 9:00 AM – 7:00 PM IST</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Form Column */}
          <div className="rounded-3xl bg-white p-8 sm:p-10 border border-navy-900/10 shadow-lg">
            <h3 className="text-2xl font-bold text-navy-900">Send an inquiry</h3>
            <p className="text-sm text-ink/70 mt-1 mb-6">
              Fill in your details below to connect directly with our advisor on WhatsApp.
            </p>

            {submitted && (
              <div className="mb-6 flex items-center gap-2 rounded-xl bg-emerald-50 border border-emerald-200 p-4 text-emerald-800 text-sm">
                <CheckCircle2 className="h-5 w-5 shrink-0" />
                <span>Inquiry opened in WhatsApp! Our team will respond shortly.</span>
              </div>
            )}

            <form onSubmit={handleSendWhatsApp} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-navy-900 mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  className={fieldStyles}
                  placeholder="e.g. Ramesh Kumar"
                  value={form.name}
                  onChange={handleChange("name")}
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-navy-900 mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    inputMode="tel"
                    className={fieldStyles}
                    placeholder="10-digit mobile number"
                    value={form.phone}
                    onChange={handleChange("phone")}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-navy-900 mb-1.5">
                    Interest / Category
                  </label>
                  <select
                    className={fieldStyles}
                    value={form.subject}
                    onChange={handleChange("subject")}
                  >
                    <option value="Course enquiry">Course enquiry</option>
                    <option value="Leadership programme">Leadership programme</option>
                    <option value="Money skills guidance">Money skills guidance</option>
                    <option value="Digital services booking">Digital services booking</option>
                    <option value="Products catalogue">Products catalogue</option>
                    <option value="Other general query">Other general query</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-navy-900 mb-1.5">
                  Your Message or Question *
                </label>
                <textarea
                  rows={4}
                  required
                  className={fieldStyles}
                  placeholder="Please describe what you are looking for..."
                  value={form.message}
                  onChange={handleChange("message")}
                />
              </div>

              <button
                type="submit"
                disabled={!form.name || !form.message}
                className="w-full flex items-center justify-center gap-2 rounded-full bg-gold py-3.5 px-6 font-bold text-navy-950 hover:bg-gold-deep transition shadow-md disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Send className="h-4 w-4" /> Send Message via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
