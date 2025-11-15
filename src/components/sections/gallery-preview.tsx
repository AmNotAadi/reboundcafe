import Link from "next/link";
import Image from "next/image";
import { GALLERY_ITEMS } from "@/lib/content";

export function GalleryPreview() {
  const featured = GALLERY_ITEMS.slice(0, 4);
  return (
    <section className="mt-24">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.5em] text-[var(--color-olive)]">Gallery</p>
          <h2 className="mt-2 text-3xl font-semibold text-[var(--color-slate)]">Cinematic glimpses</h2>
        </div>
        <Link href="/gallery" className="text-sm font-semibold text-[var(--color-olive)]">
          View Gallery →
        </Link>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-4">
        {featured.map((item, index) => (
          <div
            key={item.id}
            className="group relative h-64 overflow-hidden rounded-[28px]"
            style={{ transform: `translateY(${index % 2 === 0 ? "0px" : "20px"})` }}
          >
            <Image src={item.image} alt={item.alt} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(min-width:1024px) 20vw, 100vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent opacity-0 transition group-hover:opacity-100" />
            <p className="absolute bottom-4 left-4 text-sm text-white">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
