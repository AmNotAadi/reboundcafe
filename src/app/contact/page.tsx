"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/content";

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Sent");
  }

  return (
    <div className="space-y-12 pb-24">
      <section className="rounded-[32px] bg-[var(--color-charcoal)] p-10 text-white">
        <p className="text-xs uppercase tracking-[0.6em] text-[var(--color-gold)]">Contact</p>
        <h1 className="mt-4 text-4xl font-semibold">Reserve a table or host a gathering</h1>
        <p className="mt-4 text-white/70">We reply within one business day.</p>
      </section>

      <div className="grid gap-10 rounded-[32px] bg-white/80 p-10 shadow-[0_20px_60px_rgba(17,18,20,0.06)] dark:bg-[var(--color-charcoal)] lg:grid-cols-2">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-[var(--color-slate)]">Name</label>
            <input required className="mt-2 w-full rounded-2xl border border-black/10 bg-white/70 px-4 py-3" placeholder="Your name" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-[var(--color-slate)]">Email</label>
              <input required type="email" className="mt-2 w-full rounded-2xl border border-black/10 bg-white/70 px-4 py-3" placeholder="you@email.com" />
            </div>
            <div>
              <label className="text-sm font-medium text-[var(--color-slate)]">Preferred date/time</label>
              <input type="text" className="mt-2 w-full rounded-2xl border border-black/10 bg-white/70 px-4 py-3" placeholder="e.g., Friday 8 PM" />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-[var(--color-slate)]">Message</label>
            <textarea className="mt-2 w-full rounded-2xl border border-black/10 bg-white/70 px-4 py-3" rows={4} placeholder="Tell us about your gathering" />
          </div>
          <Button type="submit" className="w-full">
            Send message
          </Button>
          {status && <p className="text-sm text-[var(--color-olive)]">Thank you—we&apos;ll be in touch shortly.</p>}
        </form>
        <div className="space-y-6">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-gold)]">Visit</p>
            <p className="mt-2 text-[var(--color-slate)]">{CONTACT.address}</p>
            <div className="mt-3 space-y-1 text-sm">
              <a href={`tel:${CONTACT.phone}`} className="block text-[var(--color-olive)]">
                {CONTACT.phone}
              </a>
              <a href={`mailto:${CONTACT.email}`} className="block text-[var(--color-olive)]">
                {CONTACT.email}
              </a>
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-gold)]">Social</p>
            <a href="https://www.instagram.com/reboundcafe" className="text-sm text-[var(--color-olive)]">
              Instagram →
            </a>
          </div>
          <iframe src={CONTACT.mapEmbed} className="h-60 w-full rounded-3xl border-0" loading="lazy" title="Map" />
        </div>
      </div>
    </div>
  );
}
