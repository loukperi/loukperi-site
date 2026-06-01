import Link from "next/link";
import SiteNavbar from "../components/SiteNavbar";
import SiteFooter from "../components/SiteFooter";
import BackToTopButton from "../components/BackToTopButton";
import CoreTabs from "./components/CoreTabs";

const modules = [
  {
    title: "Reports",
    description:
      "Dashboards, KPIs και consolidated reporting από ERP, βάσεις, APIs, Excel και άλλα συστήματα.",
    href: "/loukperi-core/reports",
  },
  {
    title: "Bridge",
    description:
      "Διασυνδέσεις μεταξύ συστημάτων με validation, mapping, logs, retries και ασφαλή ροή δεδομένων.",
    href: "/loukperi-core/bridge",
  },
  {
    title: "Operations",
    description:
      "Tasks, approvals, reminders, notifications και workflows για πιο καθαρή εσωτερική λειτουργία.",
    href: "/loukperi-core/operations",
  },
];

const foundations = [
  "Auth & Users",
  "Roles / RBAC",
  "Workspaces & Companies",
  "Integrations & Sync Jobs",
  "Logs / Audit Trail",
  "Settings",
];

export default function LoukPeriCoreOverviewPage() {
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

	  <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(58,141,255,0.12),_transparent_24%),linear-gradient(to_bottom,_#f8fbff,_#ffffff_28%,_#f8fafc_72%,_#ffffff)] text-slate-900">
		<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(58,141,255,0.10),transparent_26%),radial-gradient(circle_at_top_left,rgba(11,31,58,0.03),transparent_20%)]" />



        <SiteNavbar currentPath="/loukperi-core" />

        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pb-24 pt-24 lg:px-8 lg:pb-28 lg:pt-32">
            <div className="max-w-4xl">
              <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-blue-200">
                LoukPeri Core • Modular Business Platform
              </div>

              <h1 className="mt-8 text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
                Μία πλατφόρμα. <span className="text-[#3A8DFF]">Τρία modules.</span>
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
                Το LoukPeri Core είναι μία modular business platform που βοηθά
                τις επιχειρήσεις να αποκτήσουν καλύτερη εικόνα, ασφαλείς
                διασυνδέσεις και πιο οργανωμένη καθημερινή λειτουργία.
              </p>

              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-400">
                Ξεκινάς με το module που χρειάζεσαι σήμερα και επεκτείνεσαι
                σταδιακά, πάνω στην ίδια πλατφόρμα.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/loukperi-core/reports"
                  className="inline-flex items-center justify-center rounded-2xl bg-[#3A8DFF] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(58,141,255,0.28)] transition duration-300 hover:bg-[#5a9eff]"
                >
                  Δες τα modules
                </Link>
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/[0.03] px-7 py-3.5 text-sm font-medium text-white transition duration-300 hover:bg-white/[0.06]"
                >
                  Μίλησε μαζί μας
                </Link>
              </div>

              <CoreTabs currentPath="/loukperi-core" />
            </div>
          </div>
        </section>

        <section className="relative border-t border-white/10 py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12 max-w-3xl">
              <span className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-blue-200/90">
                Modules
              </span>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Το LoukPeri Core οργανώνεται σε 3 modules
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
                Κάθε module καλύπτει διαφορετικό επιχειρησιακό επίπεδο, αλλά όλα
                πατάνε πάνω στην ίδια λογική πλατφόρμας.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {modules.map((module) => (
                <div
                  key={module.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.045] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.18)] backdrop-blur-sm transition-all duration-300 hover:border-white/15 hover:bg-white/[0.06]"
                >
                  <h3 className="text-2xl font-semibold">{module.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {module.description}
                  </p>
                  <Link
                    href={module.href}
                    className="mt-6 inline-flex items-center text-sm font-semibold text-blue-200 transition hover:text-white"
                  >
                    Άνοιγμα module →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative border-t border-white/10 py-24 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <span className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-blue-200/90">
                Shared Platform
              </span>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Κοινή πλατφόρμα, όχι 3 διαφορετικά apps
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
                Το LoukPeri Core σχεδιάζεται σαν ένα ενιαίο σύστημα με modular
                ενεργοποίηση. Αυτό σημαίνει πιο καθαρή αρχιτεκτονική, κοινό
                security model και λιγότερη πολυπλοκότητα για τον πελάτη.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.18)] backdrop-blur-sm">
              <h3 className="text-xl font-semibold">Platform Foundations</h3>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {foundations.map((item) => (
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

        <section className="relative border-t border-white/10 py-24 sm:py-28">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <span className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-blue-200/90">
              Next Step
            </span>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Ξεκινάς από εκεί που πονάει περισσότερο
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Reports για καθαρή εικόνα, Bridge για ασφαλείς διασυνδέσεις,
              Operations για οργανωμένη καθημερινή λειτουργία.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-2xl bg-[#3A8DFF] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(58,141,255,0.28)] transition duration-300 hover:bg-[#5a9eff]"
              >
                Κλείσε συνάντηση
              </Link>
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  );
}