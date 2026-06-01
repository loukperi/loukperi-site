import Link from "next/link";
import SiteNavbar from "../../components/SiteNavbar";
import SiteFooter from "../../components/SiteFooter";
import BackToTopButton from "../../components/BackToTopButton";
import CoreTabs from "../components/CoreTabs";

const flows = [
  "eShop → ERP",
  "ERP → Courier",
  "ΕΚΑΠΥ → ERP",
  "Third-party API → Internal Systems",
];

const capabilities = [
  "Validation rules",
  "Mapping logic",
  "Sync jobs",
  "Retry mechanism",
  "Error handling",
  "Audit / logs",
  "Status sync",
  "External links / tracking",
];

export default function LoukPeriCoreBridgePage() {
  return (
    <>
      <BackToTopButton />

      <div className="fixed bottom-4 right-4 z-50 sm:bottom-5 sm:right-5">
        <a
          href="/#contact"
          className="inline-flex items-center rounded-full border border-white/10 bg-[#3A8DFF] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(58,141,255,0.35)] transition duration-300 hover:scale-[1.03] hover:bg-[#5a9eff]"
        >
          Κλείσε συνάντηση
        </a>
      </div>

      <main className="min-h-screen overflow-hidden bg-[#0B1F3A] text-white">
        <SiteNavbar currentPath="/loukperi-core/bridge" />

        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pb-20 pt-24 lg:px-8 lg:pb-24 lg:pt-32">
            <div className="max-w-4xl">
              <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-blue-200">
                LoukPeri Core • Bridge
              </span>

              <h1 className="mt-8 text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl">
                Ασφαλείς διασυνδέσεις μεταξύ συστημάτων.
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
                Το Bridge module αναλαμβάνει transactional flows και ανταλλαγή
                δεδομένων μεταξύ ERP, eShop, courier, ΕΚΑΠΥ και άλλων systems.
              </p>

              <CoreTabs currentPath="/loukperi-core/bridge" />
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 py-24 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <h2 className="text-3xl font-semibold sm:text-4xl">
                Παραδείγματα ροών
              </h2>
              <div className="mt-8 grid gap-3">
                {flows.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/6 bg-white/[0.04] px-4 py-3 text-sm text-slate-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-semibold sm:text-4xl">
                Bridge capabilities
              </h2>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {capabilities.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/6 bg-white/[0.04] px-4 py-3 text-sm text-slate-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 py-24 text-center sm:py-28">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Όχι άλλα manual περάσματα
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Το Bridge module μειώνει λάθη, διπλοπεράσματα και χαμένο χρόνο
              σε ροές που σήμερα γίνονται χειροκίνητα.
            </p>
            <div className="mt-8">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-2xl bg-[#3A8DFF] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(58,141,255,0.28)] transition duration-300 hover:bg-[#5a9eff]"
              >
                Συζήτηση για integrations
              </Link>
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  );
}