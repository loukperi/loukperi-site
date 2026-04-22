"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SiteNavbar({
  currentPath = "/",
}: {
  currentPath?: string;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const isCorePage = currentPath === "/loukperi-core";

  const navItems = isCorePage
    ? [
        { label: "Αρχική", href: "/" },
        { label: "LoukPeri Core", href: "/loukperi-core" },
        { label: "Τι είναι", href: "/loukperi-core#what-is" },
        { label: "Πώς δουλεύει", href: "/loukperi-core#how-it-works" },
        { label: "Επικοινωνία", href: "/#contact" },
      ]
    : [
        { label: "Υπηρεσίες", href: "/#services" },
        { label: "LoukPeri Core", href: "/loukperi-core" },
        { label: "Πώς δουλεύουμε", href: "/#process" },
        { label: "Επικοινωνία", href: "/#contact" },
      ];

  const isActive = (href: string) => {
    if (href === "/") return currentPath === "/";
    if (href === "/loukperi-core") return currentPath === "/loukperi-core";
    return false;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B1F3A]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3.5">
          <Image
            src="/logo-icon-flat.png"
            alt="LoukPeri"
            width={44}
            height={44}
            className="h-11 w-11 object-contain"
            priority
          />
          <span className="text-[1.2rem] font-semibold tracking-tight text-white">
            LoukPeri
          </span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={[
                "relative rounded-full px-4 py-2 text-sm font-medium transition duration-300",
                isActive(item.href)
                  ? "bg-white/10 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]"
                  : "text-slate-300 hover:bg-white/5 hover:text-white",
              ].join(" ")}
            >
              {item.label}
              {isActive(item.href) ? (
                <span className="absolute inset-x-3 -bottom-[1px] h-[2px] rounded-full bg-[#3A8DFF]" />
              ) : null}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            className="hidden sm:inline-flex items-center rounded-2xl bg-[#3A8DFF] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(58,141,255,0.28)] transition duration-300 hover:bg-[#5a9eff]"
          >
            Κλείσε συνάντηση
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white md:hidden"
            aria-label="Άνοιγμα μενού"
            aria-expanded={mobileOpen}
          >
            <span className="text-xl leading-none">{mobileOpen ? "×" : "☰"}</span>
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-white/10 bg-[#0B1F3A]/95 px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={[
                  "rounded-2xl px-4 py-3 text-sm font-medium transition",
                  isActive(item.href)
                    ? "bg-white/10 text-white"
                    : "text-slate-300 hover:bg-white/5 hover:text-white",
                ].join(" ")}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-2xl bg-[#3A8DFF] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(58,141,255,0.28)]"
            >
              Κλείσε συνάντηση
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}