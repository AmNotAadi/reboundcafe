"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { BRAND } from "@/lib/content";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[var(--color-porcelain)]/80 backdrop-blur-xl dark:bg-[var(--color-charcoal)]/80">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-white/40 shadow-lg">
            <Image src={BRAND.logo} alt="Rebound Cafe logo" fill className="object-cover" sizes="40px" />
          </div>
          <span className="text-sm uppercase tracking-[0.3em] text-[var(--color-slate)] dark:text-white">
            Rebound Cafe
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-[var(--color-slate)] md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition hover:text-[var(--color-olive)]",
                pathname === item.href && "text-[var(--color-olive)]"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-full border border-[var(--color-olive)] px-4 py-2 text-xs uppercase tracking-[0.2em] text-[var(--color-olive)] transition hover:bg-[var(--color-olive)] hover:text-white lg:block"
          >
            Reserve
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
