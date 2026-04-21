import Image from "next/image";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#0B1F3A]/90 py-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left lg:px-8">
        <div className="flex flex-col items-center gap-3 sm:items-start">
          <Image
            src="/logo-footer-white.png"
            alt="LoukPeri"
            width={420}
            height={120}
            className="h-auto w-[160px] object-contain"
          />
          <p className="max-w-sm text-sm leading-6 text-white/60">
            Custom business systems για επιχειρήσεις που θέλουν πιο καθαρή
            λειτουργία και καλύτερη οργάνωση.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-white/50 sm:justify-start">
            <Link href="/">Αρχική</Link>
            <Link href="/loukperi-core">LoukPeri Core</Link>
            <Link href="/#contact">Επικοινωνία</Link>
          </div>
        </div>

        <p className="text-sm text-white/50">
          © {new Date().getFullYear()} LoukPeri. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
