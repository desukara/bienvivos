import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Bien Vivos",
    short_name: "Bien Vivos",
    description: "Tokio se vive mejor en español.",
    start_url: "/",
    display: "standalone",
    background_color: "#180b0b",
    theme_color: "#4b0d1d",
    icons: [
      {
        src: "/icon",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
