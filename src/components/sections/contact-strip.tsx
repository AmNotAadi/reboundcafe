import Link from "next/link";
import { CONTACT } from "@/lib/content";

export function ContactStrip() {
  return (
    <section className="mt-24 rounded-[32px] bg-white/80 p-10 shadow-[0_20px_60px_rgba(17,18,20,0.08)] dark:bg-[var(--color-charcoal)]">
      <div className="grid gap-8 lg:grid-cols-3">
        <div>
          <p className="text-xs uppercase tracking-[0.5em] text-[var(--color-olive)]">Visit</p>
          <h2 className="mt-2 text-3xl font-semibold text-[var(--color-slate)]">Plan your table</h2>
          <p className="mt-4 text-[var(--color-slate)]/80">{CONTACT.address}</p>
          <div className="mt-4 text-sm">
            <a href={`tel:${CONTACT.phone}`} className="block text-[var(--color-olive)]">
              {CONTACT.phone}
            </a>
            <a href={`mailto:${CONTACT.email}`} className="block text-[var(--color-olive)]">
              {CONTACT.email}
            </a>
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-gold)]">Hours</p>
          <ul className="mt-4 space-y-2 text-sm text-[var(--color-slate)]/80">
            {CONTACT.hours.map((slot) => (
              <li key={slot.day} className="flex items-center justify-between border-b border-black/5 pb-2">
                <span>{slot.day}</span>
                <span>{slot.hours}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-black/10">
          <iframe
            src={CONTACT.mapEmbed}
            title="Rebound Cafe location"
            className="h-full w-full rounded-3xl"
            loading="lazy"
          />
        </div>
      </div>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link href="/contact" className="rounded-full bg-[var(--color-olive)] px-6 py-3 text-sm font-semibold text-white">
          Contact us
        </Link>
        <Link href="/contact" className="rounded-full border border-[var(--color-olive)] px-6 py-3 text-sm font-semibold text-[var(--color-olive)]">
          Accessibility support
        </Link>
      </div>
    </section>
  );
}
