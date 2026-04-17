import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LoukPeri | ERP, Dashboards & Business Systems",
  description:
    "Η LoukPeri σχεδιάζει και υλοποιεί custom business systems, ERP, dashboards και automations για επιχειρήσεις που θέλουν καλύτερη οργάνωση και πιο καθαρή λειτουργία.",
  applicationName: "LoukPeri",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#0B1F3A",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el">
      <body className="bg-[#0B1F3A] text-white antialiased">{children}</body>
    </html>
  );
}