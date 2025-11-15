import Image from "next/image";
import Link from "next/link";
import { MENU_TEASER } from "@/lib/content";

export function MenuTeaser() {
  return (
    <section className="mt-24 grid gap-10 rounded-[32px] bg-[var(--color-charcoal)] p-10 text-white lg:grid-cols-2">
      <div className="flex flex-col gap-4">
        <p className="text-xs uppercase tracking-[0.6em] text-[var(--color-gold)]">Menu Preview</p>
        <h2 className="font-serif text-4xl">{MENU_TEASER.heading}</h2>
        <p className="text-base text-white/80">{MENU_TEASER.subheading}</p>
        <div className="mt-6 space-y-3 text-sm">
          <p className="flex items-center justify-between border-b border-white/10 pb-2">
            <span>Signature Flight</span>
            <span className="text-[var(--color-gold)]">₹2,100</span>
          </p>
          <p className="flex items-center justify-between border-b border-white/10 pb-2">
            <span>Chef&apos;s Table</span>
            <span className="text-[var(--color-gold)]">₹3,400</span>
          </p>
        </div>
        <Link href={MENU_TEASER.link} className="inline-block rounded-full border border-white/30 px-6 py-3 text-sm uppercase tracking-[0.3em] text-white">
          View Full Menu
        </Link>
      </div>
      <div className="relative h-80 w-full overflow-hidden rounded-3xl border border-white/10">
        <Image src={MENU_TEASER.background} alt="Menu teaser" fill className="object-cover" sizes="(min-width:1024px) 40vw, 100vw" />
      </div>
    </section>
  );
}
