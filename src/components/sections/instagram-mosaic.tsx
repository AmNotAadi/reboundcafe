import Link from "next/link";
import Image from "next/image";
import { fetchInstagramPosts } from "@/lib/instagram";

export async function InstagramMosaic() {
  const posts = await fetchInstagramPosts();

  return (
    <section className="mt-24">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.5em] text-[var(--color-olive)]">Instagram</p>
          <h2 className="mt-2 text-3xl font-semibold text-[var(--color-slate)]">Live moments from the cafe</h2>
        </div>
        <Link href="https://www.instagram.com/reboundcafe" className="text-sm font-semibold text-[var(--color-olive)]">
          Follow along →
        </Link>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.slice(0, 6).map((post) => (
          <Link
            key={post.id}
            href={post.permalink}
            className="group relative aspect-[4/5] overflow-hidden rounded-3xl"
            target="_blank"
          >
            <Image
              src={post.imageUrl}
              alt={post.caption}
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
              sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent opacity-0 transition group-hover:opacity-100" />
            <p className="absolute bottom-4 left-4 right-4 text-sm text-white opacity-0 transition group-hover:opacity-100">
              {post.caption}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
