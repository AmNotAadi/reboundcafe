import Image from "next/image";
import Link from "next/link";
import { ABOUT_TEASER } from "@/lib/content";

export function AboutTeaser() {
  return (
    <section className="mt-24 grid gap-8 rounded-[32px] bg-white/70 p-8 shadow-[0_20px_60px_rgba(17,18,20,0.08)] dark:bg-[var(--color-charcoal)]">
      <div className="relative h-72 w-full overflow-hidden rounded-3xl">
        <Image src={ABOUT_TEASER.image} alt={ABOUT_TEASER.headline} fill className="object-cover" sizes="(min-width:1024px) 50vw, 100vw" />
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-olive)]">The Vibe</p>
        <h2 className="text-3xl font-semibold text-[var(--color-slate)]">{ABOUT_TEASER.headline}</h2>
        <p className="text-base text-[var(--color-slate)]/80">{ABOUT_TEASER.copy}</p>
        <Link href={ABOUT_TEASER.link} className="text-sm font-semibold text-[var(--color-olive)] underline-offset-8 hover:underline">
          Discover Our Story →
        </Link>
      </div>
    </section>
  );
}
