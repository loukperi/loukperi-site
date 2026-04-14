import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import ServiceWorkerRegister from "./components/ServiceWorkerRegister";
import "./globals.css";

export const metadata: Metadata = {
  title: "LoukPeri | ERP, SaaS & Software Services",
  description:
    "Αναπτύσσουμε ERP, SaaS και επιχειρησιακά συστήματα που οργανώνουν τις διαδικασίες και επιταχύνουν την ανάπτυξη της επιχείρησής σας.",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/appicon-1024.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el">
      <body>
        <ServiceWorkerRegister />
        {children}
        <Analytics />
      </body>
    </html>
  );
}