"use client";

import { useEffect } from "react";

const optimized = (url: string, width = 2400, quality = 88) =>
  `/_next/image?url=${encodeURIComponent(url)}&w=${width}&q=${quality}`;

const heroImage = "/images/bien-vivos-cover.webp";
const photoEssayReplacement =
  "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1600&q=90";
const guideImage =
  "https://images.unsplash.com/photo-1526481280695-3c687fd643ed?auto=format&fit=crop&w=2200&q=92";
const guideThumbReplacement =
  "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1000&q=88";

function replaceImage(image: HTMLImageElement | null, url: string, width: number) {
  if (!image) return;
  image.removeAttribute("srcset");
  image.removeAttribute("sizes");
  image.src = optimized(url, width, 90);
  image.style.opacity = "1";
}

export default function VisualImageCorrections() {
  useEffect(() => {
    const apply = () => {
      replaceImage(document.querySelector<HTMLImageElement>(".mag-cover-media img"), heroImage, 2400);
      replaceImage(document.querySelector<HTMLImageElement>(".mag-mini-cover img"), heroImage, 1200);
      replaceImage(document.querySelector<HTMLImageElement>(".mag-photo-item:nth-child(2) img"), photoEssayReplacement, 1600);
      replaceImage(document.querySelector<HTMLImageElement>(".mag-index-feature img"), guideImage, 2200);

      const oldPinkThumb = document.querySelector<HTMLImageElement>(
        '.mag-index-thumb img[src*="1493976040374"]'
      );
      replaceImage(oldPinkThumb, guideThumbReplacement, 1000);
    };

    apply();
    const frame = window.requestAnimationFrame(apply);
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return null;
}
