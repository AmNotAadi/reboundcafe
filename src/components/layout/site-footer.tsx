import Link from "next/link";
import Image from "next/image";
import { INSTAGRAM_FALLBACK, CONTACT } from "@/lib/content";

const footerLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Press", href: "/press" },
  { label: "Careers", href: "/careers" },
];

export function SiteFooter() {
  return (
    <footer className="bg-[var(--color-charcoal)] text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-[var(--color-gold)]">Rebound Cafe</p>
            <p className="mt-3 max-w-sm text-sm text-white/70">
              {CONTACT.address}
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-white/60">
              <a href={`tel:${CONTACT.phone}`} className="hover:text-white">
                {CONTACT.phone}
              </a>
              <a href={`mailto:${CONTACT.email}`} className="hover:text-white">
                {CONTACT.email}
              </a>
            </div>
          </div>
          <div className="flex gap-8 text-sm text-white/70">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
          <form className="flex w-full max-w-sm flex-col gap-3 text-sm">
            <label htmlFor="newsletter" className="text-white/80">
              Sip first. Stories later.
            </label>
            <div className="flex rounded-full bg-white/10 p-1 text-white">
              <input
                id="newsletter"
                type="email"
                placeholder="Email address"
                className="flex-1 rounded-full bg-transparent px-4 py-2 text-sm text-white placeholder:text-white/50 focus:outline-none"
              />
              <button type="submit" className="rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-charcoal)]">
                Send
              </button>
            </div>
          </form>
        </div>
        <div className="border-t border-white/10 pt-8">
          <p className="text-xs uppercase tracking-[0.4em] text-white/50">
            Instagram
          </p>
          <div className="mt-4 flex gap-4 overflow-x-auto pb-2">
            {INSTAGRAM_FALLBACK.map((item) => (
              <Link
                key={item.id}
                href={item.permalink}
                className="group relative h-28 w-28 flex-shrink-0 overflow-hidden rounded-xl"
              >
                <span
                  className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition group-hover:opacity-100"
                  aria-hidden
                />
                <Image
                  src={item.imageUrl}
                  alt={item.caption}
                  fill
                  className="object-cover"
                  sizes="112px"
                />
              </Link>
            ))}
          </div>
          <p className="mt-6 text-xs text-white/50">© {new Date().getFullYear()} Rebound Cafe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
