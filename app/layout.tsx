import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import "./styles/header.css";
import "./styles/features.css";
import "./styles/features-two.css";
import "./styles/responsive.css";
import "./styles/polish.css";
import "./styles/motion.css";

const sans = Montserrat({
  variable: "--font-bienvivos-sans",
  subsets: ["latin"],
  display: "swap",
});

const display = Cormorant_Garamond({
  variable: "--font-bienvivos-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bienvivos.com"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Bien Vivos — Tokio se vive mejor en español",
    template: "%s | Bien Vivos",
  },
  description:
    "Bien Vivos es la revista de Tokio para el mundo hispanohablante. Arte, comida, música, cultura, fotografía y mucha vida.",
  applicationName: "Bien Vivos",
  keywords: [
    "Bien Vivos",
    "Tokio en español",
    "revista de Tokio",
    "cultura de Tokio",
    "arte en Tokio",
    "restaurantes españoles en Tokio",
  ],
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Bien Vivos",
    title: "Bien Vivos — Tokio se vive mejor en español",
    description:
      "La revista de Tokio para el mundo hispanohablante. Edición inaugural: 1 de septiembre de 2026.",
    url: "/",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Bien Vivos — Tokio se vive mejor en español",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bien Vivos — Tokio se vive mejor en español",
    description:
      "La revista de Tokio para el mundo hispanohablante. Edición inaugural: 1 de septiembre de 2026.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${sans.variable} ${display.variable}`}>{children}</body>
    </html>
  );
}
