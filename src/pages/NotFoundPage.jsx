import { Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 py-20 px-4 text-center">
      <div className="max-w-md">
        <span className="text-6xl font-extrabold text-royal block">404</span>
        <h1 className="mt-4 text-3xl font-bold text-navy-900">Page Not Found</h1>
        <p className="mt-2 text-ink/70 text-sm leading-relaxed">
          The page you are looking for doesn't exist or has been moved to a new route.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-2.5 text-sm font-semibold text-white hover:bg-royal transition"
          >
            <Home className="h-4 w-4" /> Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
