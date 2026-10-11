import { useState } from "react";
import { courses, courseGroups } from "../data/content.js";

export default function Courses() {
  const [group, setGroup] = useState("All");
  const list = group === "All" ? courses : courses.filter((c) => c.group === group);
  return (
    <section id="courses" className="py-20">
      <div className="container-x">
        <h2 className="max-w-2xl text-3xl font-bold text-navy-900 sm:text-4xl">Courses you can start this week</h2>
        <p className="mt-4 max-w-2xl text-lg text-ink/70">
          Pick a topic, learn through video, notes and practice papers, and ask your mentor when you get stuck.
        </p>
        <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Course category">
          {courseGroups.map((g) => (
            <button
              key={g}
              role="tab"
              aria-selected={group === g}
              onClick={() => setGroup(g)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                group === g ? "bg-navy-900 text-white" : "bg-sky-soft text-navy-900 hover:bg-sky/20"
              }`}
            >
              {g}
            </button>
          ))}
        </div>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((c) => (
            <li key={c.title} className="rounded-2xl border border-navy-900/10 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-navy-900">{c.title}</h3>
              <p className="mt-2 leading-relaxed text-ink/70">{c.text}</p>
              <p className="mt-4 text-sm font-medium text-royal">{c.group}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
