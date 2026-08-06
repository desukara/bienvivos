import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import "./styles/header.css";
import "./styles/features.css";
import "./styles/features-two.css";
import "./styles/responsive.css";
import "./styles/polish.css";
import "./styles/motion.css";
import "./styles/motion-fixes.css";
import "./styles/editorial-balance.css";
import "./styles/crisp-cover.css";
import "./styles/launch-hard-reset.css";
import "./styles/site-audit.css";
import "./styles/masculine-palette.css";
import "./styles/social-icons.css";
import "./styles/magazine-home.css";
import "./styles/magazine-qa.css";
import "./styles/magazine-mobile-repair.css";
import "./styles/magazine-desktop-repair.css";
import "./styles/magazine-brand-image-pass.css";
import "./styles/magazine-final-visual-fix.css";
import "./styles/live-image-menu-correction.css";
import "./styles/mobile-menu-single-close.css";
import "./styles/mobile-menu-overlap-fix.css";
import "./styles/bien-vivos-passion-pass.css";
import "./styles/cover-art-direction.css";
import "./styles/nav-contrast-fix.css";
import "./styles/bien-vivos-logo.css";
import "./styles/hero-image.css";

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

export const viewport: Viewport = {
  themeColor: "#4b0d1d",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bienvivos.com"),
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "Bien Vivos",
    statusBarStyle: "black-translucent",
  },
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Bien Vivos — Tokio se vive mejor en español",
    template: "%s | Bien Vivos",
  },
  description: "Bien Vivos es la revista de Tokio para el mundo hispanohablante. Arte, comida, música, cultura, fotografía y mucha vida.",
  openGraph: {
    title: "Bien Vivos — Tokio se vive mejor en español",
    description: "La revista de Tokio para el mundo hispanohablante.",
    url: "/",
    siteName: "Bien Vivos",
    locale: "es_ES",
    type: "website",
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
    description: "La revista de Tokio para el mundo hispanohablante.",
    images: ["/opengraph-image"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Bien Vivos",
  url: "https://www.bienvivos.com",
  description: "Revista independiente de Tokio para el mundo hispanohablante.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${sans.variable} ${display.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
