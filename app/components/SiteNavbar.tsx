"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SiteNavbar({
  currentPath = "/",
}: {
  currentPath?: string;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const isCorePage = currentPath === "/loukperi-core";

  const coreSections = useMemo(
    () => [
      "what-is",
      "how-it-works",
      "what-it-solves",
      "customization",
      "for-whom",
      "pilot",
      "contact",
    ],
    []
  );

  const navItems = isCorePage
    ? [
        { label: "Αρχική", href: "/" },
        { label: "LoukPeri Core", href: "/loukperi-core" },
        { label: "Τι είναι", href: "/loukperi-core#what-is" },
        { label: "Πώς δουλεύει", href: "/loukperi-core#how-it-works" },
        { label: "Τι λύνει", href: "/loukperi-core#what-it-solves" },
        { label: "Προσαρμογή", href: "/loukperi-core#customization" },
        { label: "Για ποιους είναι", href: "/loukperi-core#for-whom" },
        { label: "Επικοινωνία", href: "/#contact" },
      ]
    : [
        { label: "Υπηρεσίες", href: "/#services" },
        { label: "LoukPeri Core", href: "/loukperi-core" },
        { label: "Πώς δουλεύουμε", href: "/#process" },
        { label: "Επικοινωνία", href: "/#contact" },
      ];

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!isCorePage) {
      setActiveSection("");
      return;
    }

    const sections = coreSections
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0.15, 0.3, 0.5, 0.7],
      }
    );

    sections.forEach((section) => observer.observe(section));

    const syncFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && coreSections.includes(hash)) {
        setActiveSection(hash);
      }
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", syncFromHash);
    };
  }, [isCorePage, coreSections]);

  const closeMobileMenu = () => setMobileOpen(false);

  const isActive = (href: string) => {
    if (href === "/") return currentPath === "/";
    if (href === "/loukperi-core") {
      return currentPath === "/loukperi-core" && !activeSection;
    }

    if (isCorePage && href.startsWith("/loukperi-core#")) {
      const hash = href.split("#")[1];
      return activeSection === hash;
    }

    return false;
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B1F3A]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link
            href="/"
            className="flex items-center gap-3.5"
            onClick={closeMobileMenu}
          >
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
              className="hidden items-center rounded-2xl bg-[#3A8DFF] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(58,141,255,0.28)] transition duration-300 hover:bg-[#5a9eff] sm:inline-flex"
            >
              Κλείσε συνάντηση
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
              aria-label="Άνοιγμα μενού"
              aria-expanded={mobileOpen}
            >
              <span className="text-xl leading-none">☰</span>
            </button>
          </div>
        </div>
      </header>

      <div
        className={[
          "fixed inset-0 z-[60] md:hidden",
          mobileOpen ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
        aria-hidden={!mobileOpen}
      >
        <button
          type="button"
          onClick={closeMobileMenu}
          className={[
            "absolute inset-0 bg-black/45 backdrop-blur-[2px] transition-opacity duration-300",
            mobileOpen ? "opacity-100" : "opacity-0",
          ].join(" ")}
          aria-label="Κλείσιμο μενού"
        />

        <aside
          className={[
            "absolute right-0 top-0 h-full w-[88%] max-w-[360px] border-l border-white/10 bg-[#0B1F3A] shadow-[0_20px_80px_rgba(0,0,0,0.45)] transition-transform duration-300 ease-out",
            mobileOpen ? "translate-x-0" : "translate-x-full",
          ].join(" ")}
        >
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-5">
              <div className="flex items-center gap-3">
                <Image
                  src="/logo-icon-flat.png"
                  alt="LoukPeri"
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain"
                />
                <div>
                  <p className="text-sm font-semibold tracking-[0.18em] text-slate-400">
                    MENU
                  </p>
                  <p className="text-base font-semibold text-white">LoukPeri</p>
                </div>
              </div>

              <button
                type="button"
                onClick={closeMobileMenu}
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
                aria-label="Κλείσιμο μενού"
              >
                <span className="text-xl leading-none">×</span>
              </button>
            </div>

            <nav className="flex flex-1 flex-col px-4 py-4">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={[
                      "rounded-2xl px-4 py-3.5 text-sm font-medium transition duration-300",
                      isActive(item.href)
                        ? "bg-white/10 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]"
                        : "text-slate-300 hover:bg-white/5 hover:text-white",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  LoukPeri Core
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Business systems, dashboards και automations για πιο καθαρή
                  καθημερινή λειτουργία.
                </p>

                <Link
                  href="/#contact"
                  onClick={closeMobileMenu}
                  className="mt-4 inline-flex w-full items-center justify-center rounded-2xl bg-[#3A8DFF] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(58,141,255,0.28)] transition duration-300 hover:bg-[#5a9eff]"
                >
                  Κλείσε συνάντηση
                </Link>
              </div>

              <div className="mt-auto px-1 pb-2 pt-6">
                <p className="text-xs tracking-[0.16em] text-slate-500">
                  Γρήγορα. Σωστά.
                </p>
              </div>
            </nav>
          </div>
        </aside>
      </div>
    </>
  );
}
