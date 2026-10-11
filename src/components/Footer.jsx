import { Link } from "react-router-dom";
import { site, nav } from "../data/content.js";
import { fintasCategories } from "../data/categoriesData.js";

export default function Footer() {
  return (
    <footer className="bg-navy-950 py-12 text-sm text-white/70 border-t border-white/10">
      <div className="container-x">
        {/* Main Brand and Navigation */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between pb-8 border-b border-white/10">
          <Link to="/" className="flex items-center gap-3">
            <img src="/images/logo.jpeg" alt={site.name} className="h-10 w-10 rounded-full object-cover" />
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

        {/* Fintas Categories Links */}
        <div className="py-6 border-b border-white/10">
          <span className="block text-xs font-bold uppercase tracking-wider text-gold mb-3">
            Product Categories:
          </span>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs">
            {fintasCategories.map((c) => (
              <Link
                key={c.slug}
                to={`/category/${c.slug}`}
                className="text-white/60 hover:text-white hover:underline transition"
              >
                {c.name} ({c.count})
              </Link>
            ))}
          </div>
        </div>

        {/* Legal and Copyright */}
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
