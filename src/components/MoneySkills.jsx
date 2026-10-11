import { moneyTopics } from "../data/content.js";

export default function MoneySkills() {
  return (
    <section id="money" className="py-20">
      <div className="container-x">
        <h2 className="max-w-2xl text-3xl font-bold text-navy-900 sm:text-4xl">Money skills, without the hype</h2>
        <p className="mt-4 max-w-2xl text-lg text-ink/70">
          Financial freedom is built slowly, through habits and good decisions. We teach the basics honestly,
          including what can go wrong.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {moneyTopics.map((t) => (
            <article key={t.title} className="rounded-2xl border-l-4 border-gold bg-sky-soft p-6">
              <h3 className="text-lg font-semibold text-navy-900">{t.title}</h3>
              <p className="mt-2 leading-relaxed text-ink/75">{t.text}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-3xl rounded-xl bg-gold/20 p-4 text-sm leading-relaxed text-navy-900">
          This content is for education only and is not investment advice. No return is guaranteed. Before you
          invest, check that the person or company is registered with SEBI or RBI.
        </p>
      </div>
    </section>
  );
}
