import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "LoukPeri",
    short_name: "LoukPeri",
    description:
      "Custom business systems για επιχειρήσεις που θέλουν καλύτερη οργάνωση και πιο καθαρή λειτουργία.",
    start_url: "/",
    display: "standalone",
    background_color: "#08172d",
    theme_color: "#0B1F3A",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}