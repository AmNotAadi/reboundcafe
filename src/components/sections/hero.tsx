import { BRAND } from "@/lib/content";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const fallbackVideo = BRAND.heroVideoSources[0]?.src;

  return (
    <section className="relative isolate min-h-[70vh] overflow-hidden rounded-[32px] bg-black text-white">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        src={fallbackVideo}
      >
        {BRAND.heroVideoSources.map((source) => (
          <source key={`${source.type}-${source.media}`} {...source} />
        ))}
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-olive)]/80 via-black/40 to-transparent" />
      <div className="relative z-10 flex min-h-[70vh] flex-col justify-between gap-10 p-8 sm:p-12 lg:p-16">
        <div>
          <p className="text-sm uppercase tracking-[0.7em] text-[var(--color-gold)]">Bhopal — TT Nagar</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-balance sm:text-5xl lg:text-6xl">
            Rebound Cafe — Where Time Slows Down
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            A curated space for artful coffee, seasonal desserts, and lingering conversations.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Button className="min-w-[160px]" size="lg" asChild>
            <a href="/contact">Reserve a Table</a>
          </Button>
          <Button variant="secondary" className="min-w-[160px]" size="lg" asChild>
            <a href="/menu">View the Menu</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
