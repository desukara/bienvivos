import type { Metadata } from "next";
import "./eastokyo-layout-fix.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.eastokyo.com"),
  appleWebApp: {
    capable: true,
    title: "EASTOKYO",
    statusBarStyle: "black-translucent",
  },
  alternates: {
    canonical: "/",
    languages: {
      en: "https://www.eastokyo.com/",
      es: "https://www.bienvivos.com/",
    },
  },
  title: {
    absolute: "EASTOKYO — Tokyo, fully alive",
  },
  description: "EASTOKYO is an independent magazine about Tokyo culture, food, music, photography, neighborhoods and city life.",
  openGraph: {
    title: "EASTOKYO — Tokyo, fully alive",
    description: "An independent magazine about the Tokyo worth feeling, eating, hearing and seeing.",
    url: "/",
    siteName: "EASTOKYO",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "EASTOKYO — Tokyo, fully alive",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EASTOKYO — Tokyo, fully alive",
    description: "An independent magazine about Tokyo culture and city life.",
    images: ["/opengraph-image"],
  },
};

export default function EastokyoLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}