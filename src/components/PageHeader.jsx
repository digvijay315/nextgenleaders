import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function PageHeader({ title, subtitle, badge }) {
  return (
    <div className="relative overflow-hidden bg-navy-950 py-16 text-white border-b border-white/10">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(45rem 25rem at 80% 20%, rgba(30,167,255,0.25), transparent 70%), radial-gradient(35rem 20rem at 10% 80%, rgba(255,201,40,0.18), transparent 70%)",
        }}
      />
      <div className="container-x relative">
        <nav className="mb-4 flex items-center gap-2 text-xs font-medium text-white/60">
          <Link to="/" className="hover:text-gold transition">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-white/40" />
          <span className="text-gold">{title}</span>
        </nav>

        {badge && (
          <span className="inline-block rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold mb-3 border border-gold/30">
            {badge}
          </span>
        )}

        <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl text-white">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-white/75">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
