import { Suspense } from "react";
import { HeroSection } from "@/components/sections/hero";
import { SignatureStrip } from "@/components/sections/signature-strip";
import { AboutTeaser } from "@/components/sections/about-teaser";
import { MenuTeaser } from "@/components/sections/menu-teaser";
import { InstagramMosaic } from "@/components/sections/instagram-mosaic";
import { GalleryPreview } from "@/components/sections/gallery-preview";
import { ContactStrip } from "@/components/sections/contact-strip";

export default function Home() {
  return (
    <div className="space-y-12 pb-24">
      <HeroSection />
      <SignatureStrip />
      <AboutTeaser />
      <MenuTeaser />
      <Suspense fallback={<div className="mt-24 h-48 animate-pulse rounded-3xl bg-black/5" />}>
        <InstagramMosaic />
      </Suspense>
      <GalleryPreview />
      <ContactStrip />
    </div>
  );
}
