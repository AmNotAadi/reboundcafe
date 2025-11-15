import Image from "next/image";
import { ABOUT_TEASER, CONTACT } from "@/lib/content";

const timeline = [
  { year: "2018", title: "Doors Open", description: "A small espresso bar with six tables and a dream." },
  { year: "2021", title: "Culinary Lab", description: "Dessert atelier and chef table experiences launch." },
  { year: "2024", title: "Regrowth", description: "Reimagined interiors inspired by olive walls and warm cedar floors." },
];

const ethos = [
  { title: "Sourcing", copy: "Single-origin beans, slow-fermented breads, farmers we know by name." },
  { title: "Atmosphere", copy: "Layered lighting, curated playlists, generous seating nooks." },
  { title: "Community", copy: "Art residencies, acoustic nights, seasonal pop-ups." },
];

export default function AboutPage() {
  return (
    <div className="space-y-16 pb-24">
      <section className="relative overflow-hidden rounded-[32px]">
        <Image src={ABOUT_TEASER.image} alt="Rebound Cafe interior" width={1600} height={900} className="h-80 w-full object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/70 to-transparent" />
        <div className="absolute bottom-10 left-10 text-white">
          <p className="text-xs uppercase tracking-[0.5em] text-[var(--color-gold)]">Our Story</p>
          <h1 className="mt-4 text-4xl font-semibold">Crafted for lingering conversations</h1>
        </div>
      </section>

      <section className="grid gap-8 rounded-[32px] bg-white/70 p-10 shadow-[0_20px_60px_rgba(17,18,20,0.08)] dark:bg-[var(--color-charcoal)] lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold text-[var(--color-slate)]">Timeline</h2>
          <ul className="mt-6 space-y-6">
            {timeline.map((entry) => (
              <li key={entry.year} className="border-l border-[var(--color-olive)]/30 pl-6">
                <p className="text-xs uppercase tracking-[0.5em] text-[var(--color-olive)]">{entry.year}</p>
                <h3 className="text-lg font-semibold">{entry.title}</h3>
                <p className="text-sm text-[var(--color-slate)]/80">{entry.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-6">
          <div className="flex items-center gap-4 rounded-3xl bg-white/60 p-6 dark:bg-black/30">
            <div className="relative h-20 w-20 overflow-hidden rounded-full">
              <Image src="https://lh3.googleusercontent.com/p/AF1QipPi3xdSocYEBZjieP3XUoUXy3Fr1jZmDCEABTaH=w940-h1200-n-k-no-nu" alt="Founder" fill className="object-cover" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.5em] text-[var(--color-gold)]">Founder</p>
              <h3 className="text-xl font-semibold">Aanya Kapoor</h3>
              <p className="text-sm text-[var(--color-slate)]/80">Hospitality curator & head barista.</p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {ethos.map((item) => (
              <div key={item.title} className="rounded-3xl border border-black/10 p-4">
                <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-gold)]">{item.title}</p>
                <p className="mt-2 text-sm text-[var(--color-slate)]/80">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-8 rounded-[32px] bg-white/80 p-10 shadow-[0_20px_60px_rgba(17,18,20,0.08)] dark:bg-[var(--color-charcoal)] lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold text-[var(--color-slate)]">Visit Us</h2>
          <p className="mt-4 text-[var(--color-slate)]/80">{CONTACT.address}</p>
          <div className="mt-4 space-y-2 text-sm">
            {CONTACT.hours.map((slot) => (
              <p key={slot.day} className="flex justify-between border-b border-black/5 py-2">
                <span>{slot.day}</span>
                <span>{slot.hours}</span>
              </p>
            ))}
          </div>
        </div>
        <iframe src={CONTACT.mapEmbed} title="Map" className="h-80 w-full rounded-3xl border-0" loading="lazy" />
      </section>
    </div>
  );
}
