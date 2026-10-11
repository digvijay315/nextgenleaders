import { leadership } from "../data/content.js";

export default function Leadership() {
  return (
    <section id="leadership" className="bg-navy-900 py-20 text-white">
      <div className="container-x grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <h2 className="text-3xl font-bold sm:text-4xl">Leadership grows with practice</h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-white/75">
            Skills matter, but so do confidence and guidance. Our leadership programme pairs you with people who
            have been where you are headed.
          </p>
        </div>
        <ul className="grid gap-px overflow-hidden rounded-2xl bg-white/15 sm:grid-cols-2">
          {leadership.map((l) => (
            <li key={l.title} className="bg-navy-800 p-7">
              <h3 className="text-lg font-semibold text-gold">{l.title}</h3>
              <p className="mt-2 leading-relaxed text-white/75">{l.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
