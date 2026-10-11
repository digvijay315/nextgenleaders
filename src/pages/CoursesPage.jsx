import { useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";
import { courses, courseGroups, site } from "../data/content.js";
import { Search, BookOpen, Clock, CheckCircle2, MessageCircle } from "lucide-react";

export default function CoursesPage() {
  const [activeGroup, setActiveGroup] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = courses.filter((c) => {
    const matchesGroup = activeGroup === "All" || c.group === activeGroup;
    const matchesSearch =
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.text.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesGroup && matchesSearch;
  });

  const getWhatsAppLink = (courseTitle) => {
    const text = `Hi, I am interested in joining the "${courseTitle}" course on Next Gen Leaders. Please share more details.`;
    return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div>
      <PageHeader
        badge="Online & Hybrid Learning"
        title="Comprehensive Courses"
        subtitle="Learn in-demand digital skills, school curriculum, competitive exam prep, and lifestyle training at your own pace."
      />

      <section className="py-16 bg-slate-50">
        <div className="container-x">
          {/* Controls: Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between pb-8">
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {courseGroups.map((group) => (
                <button
                  key={group}
                  onClick={() => setActiveGroup(group)}
                  className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                    activeGroup === group
                      ? "bg-navy-900 text-white shadow"
                      : "bg-white text-navy-900 border border-navy-900/10 hover:bg-sky-soft"
                  }`}
                >
                  {group}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-ink/40" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search courses..."
                className="w-full rounded-full border border-navy-900/15 bg-white pl-10 pr-4 py-2 text-sm focus:border-navy-900 focus:outline-none"
              />
            </div>
          </div>

          {/* Courses Grid */}
          {filteredCourses.length === 0 ? (
            <div className="py-16 text-center bg-white rounded-2xl border border-navy-900/10 p-8">
              <BookOpen className="mx-auto h-12 w-12 text-ink/30 mb-3" />
              <p className="text-lg font-semibold text-navy-900">No courses match your search</p>
              <p className="text-sm text-ink/60 mt-1">Try resetting the filter or searching for another keyword.</p>
              <button
                onClick={() => {
                  setActiveGroup("All");
                  setSearchQuery("");
                }}
                className="mt-4 rounded-full bg-navy-900 px-6 py-2 text-sm font-semibold text-white hover:bg-royal transition"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredCourses.map((c) => (
                <div
                  key={c.title}
                  className="flex flex-col justify-between rounded-2xl border border-navy-900/10 bg-white p-6 shadow-sm hover:shadow-md hover:border-gold/50 transition"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="rounded-full bg-sky-soft px-3 py-1 text-xs font-semibold text-royal">
                        {c.group}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-ink/50">
                        <Clock className="h-3.5 w-3.5" /> Self-Paced
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-navy-900">{c.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink/75">{c.text}</p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-navy-900/5 flex items-center justify-between">
                    <span className="text-xs font-medium text-emerald-600 flex items-center gap-1">
                      <CheckCircle2 className="h-3.5 w-3.5" /> Mentor Assisted
                    </span>
                    <a
                      href={getWhatsAppLink(c.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-navy-900 px-4 py-1.5 text-xs font-semibold text-white hover:bg-gold hover:text-navy-950 transition"
                    >
                      <MessageCircle className="h-3.5 w-3.5" /> Enquire
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Feature Banner */}
      <section className="bg-navy-900 py-16 text-white">
        <div className="container-x text-center max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold">Need help choosing the right course?</h2>
          <p className="mt-3 text-white/75 text-sm sm:text-base leading-relaxed">
            Our career advisors provide free one-on-one guidance to understand your goals and map out a learning plan.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-block rounded-full bg-gold px-8 py-3 font-semibold text-navy-950 hover:bg-gold-deep transition"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
