import Image from "next/image";
import Link from "next/link";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#08172c] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(58,141,255,0.16),_transparent_28%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-4">
              <Image
                src="/logo-footer-white.png"
                alt="LoukPeri"
                width={54}
                height={54}
                className="h-12 w-12 object-contain"
              />
              <div>
                <p className="text-xl font-semibold tracking-tight text-white">
                  LoukPeri
                </p>
                <p className="mt-1 text-sm text-slate-400">
                  Business Systems Builder
                </p>
              </div>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-300 md:text-base">
              Software, dashboards και operational systems για επιχειρήσεις που
              θέλουν καλύτερη οργάνωση, καθαρότερη εικόνα και γρηγορότερη
              εκτέλεση.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/#contact"
                className="inline-flex items-center rounded-2xl bg-[#3A8DFF] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(58,141,255,0.28)] transition duration-300 hover:bg-[#5a9eff]"
              >
                Κλείσε συνάντηση
              </Link>

              <Link
                href="/loukperi-core"
                className="inline-flex items-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-white/10"
              >
                Δες το LoukPeri Core
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300">
                Dashboards
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300">
                Automations
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300">
                Business Systems
              </span>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                Εταιρεία
              </p>

              <div className="mt-4 flex flex-col gap-3">
                <Link
                  href="/"
                  className="text-sm text-slate-300 transition hover:text-white"
                >
                  Αρχική
                </Link>
                <Link
                  href="/#services"
                  className="text-sm text-slate-300 transition hover:text-white"
                >
                  Υπηρεσίες
                </Link>
                <Link
                  href="/#process"
                  className="text-sm text-slate-300 transition hover:text-white"
                >
                  Πώς δουλεύουμε
                </Link>
                <Link
                  href="/#contact"
                  className="text-sm text-slate-300 transition hover:text-white"
                >
                  Επικοινωνία
                </Link>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                Προϊόν
              </p>

              <div className="mt-4 flex flex-col gap-3">
                <Link
                  href="/loukperi-core"
                  className="text-sm text-slate-300 transition hover:text-white"
                >
                  LoukPeri Core
                </Link>
                <Link
                  href="/loukperi-core#what-is"
                  className="text-sm text-slate-300 transition hover:text-white"
                >
                  Τι είναι
                </Link>
                <Link
                  href="/loukperi-core#how-it-works"
                  className="text-sm text-slate-300 transition hover:text-white"
                >
                  Πώς δουλεύει
                </Link>
                <Link
                  href="/loukperi-core#for-whom"
                  className="text-sm text-slate-300 transition hover:text-white"
                >
                  Για ποιους είναι
                </Link>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                Επικοινωνία
              </p>

              <div className="mt-4 flex flex-col gap-3">
                <a
                  href="mailto:info@loukperi.gr"
                  className="text-sm text-slate-300 transition hover:text-white"
                >
                  info@loukperi.gr
                </a>
                <p className="text-sm text-slate-300">Ελλάδα</p>
                <p className="text-sm text-slate-400">Γρήγορα. Σωστά.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-slate-400">
              © {year} LoukPeri. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
              <Link href="/" className="transition hover:text-white">
                LoukPeri
              </Link>
              <Link
                href="/loukperi-core"
                className="transition hover:text-white"
              >
                LoukPeri Core
              </Link>
              <a
                href="mailto:info@loukperi.gr"
                className="transition hover:text-white"
              >
                info@loukperi.gr
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}