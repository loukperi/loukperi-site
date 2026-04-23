import Image from "next/image";
import Link from "next/link";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#08172c] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(58,141,255,0.14),_transparent_26%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
		    <div className="w-fit">
		  	<Link href="/" className="inline-flex flex-col items-center text-center">
		  	  <Image
		  		src="/logo-footer-white.png"
		  		alt="LoukPeri"
		  		width={210}
		  		height={90}
		  		className="block h-auto w-[180px] object-contain md:w-[210px]"
		  		priority
		  	  />
		  	  <p className="-mt-3 text-sm font-medium leading-tight text-slate-300 md:text-[15px]">
		  		Business Systems Builder
		  	  </p>
		  	</Link>
		    </div>
		  </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
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