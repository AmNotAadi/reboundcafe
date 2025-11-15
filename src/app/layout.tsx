import type { Metadata } from "next";
import Script from "next/script";
import {
  Inter,
  Poppins,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";
import { BRAND } from "@/lib/content";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ModalRegrowth } from "@/components/ui/modal-regrowth";

const heading = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const serif = Playfair_Display({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-serif",
  display: "swap",
});

const title = "Rebound Cafe — Aesthetic & Cozy Café in Bhopal | Coffee • Desserts • Gatherings";
const description =
  "Rebound Cafe in Bhopal brings an aesthetic, cozy and luxurious atmosphere with handcrafted coffee, artful desserts, and warm wooden interiors. Visit our Gallery and Menu to plan your visit.";

export const metadata: Metadata = {
  metadataBase: new URL("https://reboundcafe.in"),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "https://reboundcafe.in",
    siteName: "Rebound Cafe",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: BRAND.logo,
        width: 800,
        height: 600,
        alt: "Rebound Cafe logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [BRAND.logo],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: BRAND.name,
  image: BRAND.logo,
  logo: BRAND.logo,
  url: "https://reboundcafe.in",
  address: {
    "@type": "PostalAddress",
    streetAddress: "TT Nagar",
    addressLocality: "Bhopal",
    addressRegion: "MP",
    postalCode: "462003",
    addressCountry: "IN",
  },
  telephone: "+91 98765 43210",
  servesCuisine: ["Coffee", "Desserts", "Savories"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "23:00",
    },
  ],
  menu: "https://reboundcafe.in/menu",
  sameAs: ["https://www.instagram.com/reboundcafe"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable} ${serif.variable}`}>
      <body className="bg-[var(--color-porcelain)] text-[var(--color-slate)] antialiased">
        <ModalRegrowth />
        <SiteHeader />
        <main className="relative mx-auto w-full max-w-6xl px-4 pb-24 pt-16 sm:px-6 lg:px-8">{children}</main>
        <SiteFooter />
        <Script id="rebound-jsonld" type="application/ld+json">
          {JSON.stringify(structuredData)}
        </Script>
      </body>
    </html>
  );
}
