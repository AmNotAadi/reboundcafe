import { MENU_SECTIONS } from "@/lib/content";
import { Button } from "@/components/ui/button";

export default function MenuPage() {
  return (
    <div className="space-y-12 pb-24">
      <section className="rounded-[32px] bg-[var(--color-charcoal)] p-10 text-white">
        <p className="text-xs uppercase tracking-[0.6em] text-[var(--color-gold)]">Rebound Menu</p>
        <h1 className="mt-4 text-4xl font-semibold">Every plate tells a story</h1>
        <p className="mt-4 max-w-2xl text-white/70">
          Seasonal degustations, chef-table tastings, artisanal desserts and coffee flights. Curate your own pairings or let our baristas design a ritual.
        </p>
        <div className="mt-6 flex gap-3">
          <Button>Reserve a tasting</Button>
          <Button variant="secondary" className="text-white">
            Download PDF
          </Button>
        </div>
      </section>

      {MENU_SECTIONS.map((section) => (
        <section key={section.title} className="rounded-[32px] bg-white/80 p-8 shadow-[0_20px_60px_rgba(17,18,20,0.06)] dark:bg-[var(--color-charcoal)]">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="text-2xl font-semibold text-[var(--color-slate)]">{section.title}</h2>
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-gold)]">Signature</p>
          </div>
          {section.items.length === 0 ? (
            <div className="mt-6 rounded-[24px] border border-dashed border-[var(--color-gold)] bg-[var(--color-porcelain)]/70 p-10 text-center">
              <p className="font-serif text-4xl text-[var(--color-slate)]">Your Menu Here</p>
              <p className="mt-3 text-sm text-[var(--color-slate)]/70">
                Curate coffee flights, dessert pairings, seasonal chef menus or private experiences.
              </p>
              <Button variant="secondary" className="mt-6">
                Request this menu
              </Button>
            </div>
          ) : (
            <ul className="mt-6 space-y-4">
              {section.items.map((item) => (
                <li key={item.name} className="flex items-start justify-between gap-6 border-b border-black/5 pb-4 text-sm text-[var(--color-slate)]">
                  <div>
                    <p className="text-lg font-semibold">{item.name}</p>
                    <p className="text-[var(--color-slate)]/70">{item.description}</p>
                  </div>
                  <span className="text-[var(--color-gold)]">{item.price}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  );
}
