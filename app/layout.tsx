import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ShieldPest Pro | Professional Pest Control Services in Seattle",
  description:
    "ShieldPest Pro offers professional pest control services in the Seattle metro area. Termite control, rodent removal, ant treatment, mosquito control, and more. Licensed, insured, and eco-friendly. Call (206) 555-0147 for a free inspection.",
  keywords: [
    "pest control",
    "termite control",
    "rodent removal",
    "Seattle pest control",
    "exterminator",
    "bed bug removal",
    "mosquito control",
    "wildlife exclusion",
  ],
  openGraph: {
    title: "ShieldPest Pro | Professional Pest Control Services",
    description:
      "Protect your home and business from pests. Licensed, insured, and eco-friendly pest control services in the Seattle metro area.",
    type: "website",
    locale: "en_US",
    siteName: "ShieldPest Pro",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "ShieldPest Pro",
  description:
    "Professional pest control services in the Seattle metro area. Termite control, rodent removal, ant treatment, mosquito control, bed bug elimination, and wildlife exclusion.",
  telephone: "(206) 555-0147",
  email: "info@shieldpestpro.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4521 Aurora Ave N",
    addressLocality: "Seattle",
    addressRegion: "WA",
    postalCode: "98103",
    addressCountry: "US",
  },
  areaServed: [
    "Seattle",
    "Bellevue",
    "Tacoma",
    "Redmond",
    "Kirkland",
    "Renton",
    "Everett",
    "Kent",
    "Federal Way",
    "Bothell",
    "Issaquah",
    "Sammamish",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "17:00",
    },
  ],
  priceRange: "$$",
  image: "",
  url: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
