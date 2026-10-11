import { productCategories } from "../data/content.js";

export default function Products() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container-x">
        <h2 className="max-w-2xl text-3xl font-bold text-navy-900 sm:text-4xl">
          Everyday products, delivered to your door
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-ink/70">
          Shop wholesome groceries, pure spices, organic pulses, natural beauty, and baby essentials.
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((p) => (
            <li
              key={p.name}
              className="flex items-center gap-4 rounded-2xl border border-navy-900/10 bg-slate-50/70 p-5 hover:bg-white hover:shadow-sm transition"
            >
              <span className="text-3xl">{p.icon}</span>
              <div>
                <h3 className="font-bold text-navy-900 text-base">{p.name}</h3>
                <p className="text-xs text-ink/65 mt-0.5 line-clamp-1">{p.items}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

