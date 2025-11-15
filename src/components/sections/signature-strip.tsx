import Image from "next/image";
import { SIGNATURE_CARDS } from "@/lib/content";

export function SignatureStrip() {
  return (
    <section className="mt-16 grid gap-6 md:grid-cols-3">
      {SIGNATURE_CARDS.map((card) => (
        <article
          key={card.title}
          className="group flex flex-col overflow-hidden rounded-3xl bg-[var(--color-card)] shadow-xl shadow-black/5 transition hover:-translate-y-2"
        >
          <div className="relative h-56 w-full overflow-hidden">
            <Image
              src={card.image}
              alt={card.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-1 flex-col gap-2 p-6">
            <h3 className="text-lg font-semibold text-[var(--color-slate)]">{card.title}</h3>
            <p className="text-sm text-[var(--color-slate)]/80">{card.copy}</p>
            <span className="mt-4 text-xs uppercase tracking-[0.4em] text-[var(--color-gold)]">
              View Details
            </span>
          </div>
        </article>
      ))}
    </section>
  );
}
