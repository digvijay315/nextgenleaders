import { Link } from "react-router-dom";
import { site, nav } from "../data/content.js";

export default function Footer() {
  return (
    <footer className="bg-navy-950 py-12 text-sm text-white/70 border-t border-white/10">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between pb-8 border-b border-white/10">
          <Link to="/" className="flex items-center gap-3">
            <img src="/images/logo.jpeg" alt={site.name} className="h-10 w-10 rounded-full" />
            <div>
              <span className="block font-semibold text-white text-base">{site.name}</span>
              <span className="text-xs text-white/50">{site.legalName}</span>
            </div>
          </Link>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {nav.map((n) => (
              <Link key={n.href} to={n.href} className="hover:text-gold transition">
                {n.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-6 md:flex-row md:items-center md:justify-between text-xs text-white/50">
          <p className="max-w-xl">
            Courses and content are for education only. Nothing here is investment advice or a promise of returns.
          </p>
          <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

