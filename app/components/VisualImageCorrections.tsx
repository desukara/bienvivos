"use client";

import { useEffect } from "react";

const heroImage =
  "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=2400&q=94";
const photoEssayReplacement =
  "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1600&q=90";
const guideImage =
  "https://images.unsplash.com/photo-1526481280695-3c687fd643ed?auto=format&fit=crop&w=2200&q=92";
const guideThumbReplacement =
  "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1000&q=88";

function replaceImage(image: HTMLImageElement | null, url: string) {
  if (!image) return;

  image.removeAttribute("srcset");
  image.removeAttribute("sizes");
  image.src = url;
  image.style.opacity = "1";
  image.style.visibility = "visible";
  image.style.display = "block";
}

export default function VisualImageCorrections() {
  useEffect(() => {
    const apply = () => {
      replaceImage(document.querySelector<HTMLImageElement>(".mag-cover-media img"), heroImage);
      replaceImage(document.querySelector<HTMLImageElement>(".mag-mini-cover img"), heroImage);
      replaceImage(document.querySelector<HTMLImageElement>(".mag-photo-item:nth-child(2) img"), photoEssayReplacement);
      replaceImage(document.querySelector<HTMLImageElement>(".mag-index-feature img"), guideImage);

      const oldPinkThumb = document.querySelector<HTMLImageElement>(
        '.mag-index-thumb img[src*="1493976040374"]'
      );
      replaceImage(oldPinkThumb, guideThumbReplacement);
    };

    apply();
    const frame = window.requestAnimationFrame(apply);
    const timer = window.setTimeout(apply, 500);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timer);
    };
  }, []);

  return null;
}
