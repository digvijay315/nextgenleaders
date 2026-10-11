import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { site } from "../data/content.js";

export default function Contact() {
  const [f, setF] = useState({ name: "", phone: "", message: "" });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const send = () => {
    const text = `Hi, I am ${f.name}. ${f.message} (Phone: ${f.phone})`;
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  };

  const field = "w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50";

  return (
    <section id="contact" className="bg-navy-900 py-20 text-white">
      <div className="container-x grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold sm:text-4xl">Tell us what you want to learn</h2>
          <p className="mt-4 max-w-md text-lg text-white/75">
            Share your goal and we will suggest a course or a mentor session.
          </p>
          <ul className="mt-8 space-y-4 text-white/85">
            <li className="flex items-center gap-3"><Mail className="h-5 w-5 text-gold" />{site.email}</li>
            <li className="flex items-center gap-3"><Phone className="h-5 w-5 text-gold" />{site.phone}</li>
            <li className="flex items-center gap-3"><MapPin className="h-5 w-5 text-gold" />{site.address}</li>
          </ul>
        </div>
        <div className="space-y-4">
          <label className="block">
            <span className="mb-1 block text-sm text-white/80">Your name</span>
            <input className={field} value={f.name} onChange={set("name")} placeholder="Full name" />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm text-white/80">Phone number</span>
            <input className={field} value={f.phone} onChange={set("phone")} placeholder="10-digit mobile number" inputMode="tel" />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm text-white/80">Message</span>
            <textarea className={field} rows={4} value={f.message} onChange={set("message")} placeholder="Which course are you interested in?" />
          </label>
          <button
            onClick={send}
            disabled={!f.name || !f.message}
            className="rounded-full bg-gold px-7 py-3 font-semibold text-navy-950 transition hover:bg-gold-deep disabled:cursor-not-allowed disabled:opacity-50"
          >
            Send on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
