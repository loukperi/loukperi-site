import type { ReactNode } from "react";
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

const problems = [
  {
    title: "Χειροκίνητα περάσματα",
    text: "Παραγγελίες, ενημερώσεις και ανταλλαγές δεδομένων περνάνε από ανθρώπους αντί για ελεγχόμενες ροές.",
  },
  {
    title: "Αστάθεια στα integrations",
    text: "Όταν λείπουν validation, retries και logging, τα errors χάνονται και οι αστοχίες φαίνονται πολύ αργά.",
  },
  {
    title: "Δύσκολος εντοπισμός λαθών",
    text: "Χωρίς audit και status tracking, είναι δύσκολο να εντοπιστεί ποιο βήμα έσπασε και γιατί.",
  },
];

const steps = [
  {
    step: "01",
    title: "Validation",
    text: "Έλεγχος πριν φύγουν ή πριν περάσουν τα δεδομένα στο επόμενο σύστημα.",
  },
  {
    step: "02",
    title: "Mapping",
    text: "Μετατροπή και αντιστοίχιση πεδίων, statuses και επιχειρησιακών κανόνων.",
  },
  {
    step: "03",
    title: "Sync",
    text: "Ελεγχόμενη αποστολή, λήψη και συγχρονισμός με logging και retries.",
  },
  {
    step: "04",
    title: "Monitoring",
    text: "Ορατότητα στη ροή, στα errors και στην κατάσταση των integrations.",
  },
];

function SectionHeader({
  eyebrow,
  title,
  description,
  center = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <div
      className={[
        "flex max-w-3xl flex-col",
        center ? "mx-auto items-center text-center" : "items-start text-left",
      ].join(" ")}
    >
      <span className="mb-4 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-blue-700">
        {eyebrow}
      </span>

      <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function SoftCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "rounded-3xl border border-slate-200/80 bg-white p-6",
        "shadow-[0_12px_36px_rgba(15,23,42,0.05)]",
        "transition-all duration-300 hover:-translate-y-1 hover:border-slate-300/80 hover:shadow-[0_18px_46px_rgba(15,23,42,0.08)]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

export default function LoukPeriCoreBridgePage() {
  return (
    <>
      <BackToTopButton />

      <div className="fixed bottom-4 right-4 z-50 sm:bottom-5 sm:right-5">
        <a
          href="/#contact"
          className="inline-flex items-center rounded-full bg-[#0B1F3A] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(11,31,58,0.22)] transition duration-300 hover:scale-[1.03] hover:bg-[#11284a]"
        >
          Κλείσε συνάντηση
        </a>
      </div>

      <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(58,141,255,0.12),_transparent_24%),linear-gradient(to_bottom,_#f8fbff,_#ffffff_28%,_#f8fafc_72%,_#ffffff)] text-slate-900">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(58,141,255,0.10),transparent_26%),radial-gradient(circle_at_top_left,rgba(11,31,58,0.03),transparent_20%)]" />

        <SiteNavbar currentPath="/loukperi-core/bridge" />

        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pb-24 pt-24 sm:pb-28 sm:pt-28 lg:px-8 lg:pb-32 lg:pt-36">
            <div className="grid items-start gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
              <div>
                <div className="inline-flex items-center rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-sm text-blue-700 shadow-sm backdrop-blur">
                  LoukPeri Core • Bridge
                </div>

                <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
                  Ασφαλείς <span className="text-[#3A8DFF]">διασυνδέσεις</span> μεταξύ συστημάτων.
                </h1>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
                  Η ενότητα Bridge οργανώνει την ανταλλαγή δεδομένων
				  και τις κρίσιμες ροές μεταξύ ERP, eShop, courier,
				  ΕΚΑΠΥ και άλλων συστημάτων.
                </p>

                <p className="mt-4 max-w-3xl text-base leading-7 text-slate-500">
                  Δεν είναι απλώς “σύνδεση API”. Είναι ελεγχόμενη ροή με
                  validation, mapping, monitoring και retry logic.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="/#contact"
                    className="inline-flex items-center justify-center rounded-2xl bg-[#0B1F3A] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(11,31,58,0.18)] transition duration-300 hover:bg-[#11284a]"
                  >
                    Συζήτηση για integrations
                  </a>

                  <Link
                    href="/loukperi-core"
                    className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-7 py-3.5 text-sm font-medium text-slate-700 transition duration-300 hover:bg-slate-50 hover:text-slate-900"
                  >
                    Επιστροφή στο overview
                  </Link>
                </div>

                <CoreTabs currentPath="/loukperi-core/bridge" />
              </div>

              <div>
                <SoftCard className="p-5 sm:p-6">
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
                        Integration Layer
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold text-slate-950">
                        Controlled Flow
                      </h3>
                    </div>

                    <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                      Transactional
                    </span>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      ["Validation", "On", "Έλεγχοι πριν το sync"],
                      ["Retries", "Safe", "Επαναλήψεις όπου χρειάζεται"],
                      ["Logs", "Tracked", "Ορατότητα στη ροή"],
                      ["Status", "Sync", "Ελεγχόμενη ενημέρωση"],
                    ].map(([label, value, note]) => (
                      <div
                        key={label}
                        className="rounded-2xl border border-slate-200/70 bg-slate-50/80 p-4"
                      >
                        <div className="text-sm text-slate-500">{label}</div>
                        <div className="mt-2 text-2xl font-semibold text-slate-950">
                          {value}
                        </div>
                        <div className="mt-1 text-sm text-slate-500">{note}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50/70 p-4">
                    <p className="text-sm font-medium text-slate-900">
                      Typical flows
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {flows.map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </SoftCard>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeader
              eyebrow="ΠΟΥ ΒΟΗΘΑΕΙ"
              title="Όταν οι διασυνδέσεις δημιουργούν λειτουργική τριβή"
              description="Η ενότητα Bridge είναι κατάλληλη όταν οι διασυνδέσεις μεταξύ συστημάτων επηρεάζουν τη ροή εργασίας και δημιουργούν λειτουργική τριβή."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {problems.map((item) => (
                <SoftCard key={item.title}>
                  <h3 className="text-xl font-semibold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>
                </SoftCard>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <SectionHeader
                eyebrow="ΔΥΝΑΤΟΤΗΤΕΣ"
                title="Bridge capabilities"
                description="Επιχειρησιακά ασφαλής λογική για integrations που δεν αρκεί να “συνδέονται”, αλλά πρέπει και να ελέγχονται."
              />

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {capabilities.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionHeader
                eyebrow="ΜΟΝΤΕΛΟ ΡΟΗΣ"
                title="Πώς δουλεύει"
                description="Κάθε integration flow πρέπει να περνά από σαφή βήματα και όχι από “μαγικό sync”."
              />

              <div className="mt-8 grid gap-4">
                {steps.map((item) => (
                  <SoftCard key={item.step}>
                    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0B1F3A] text-sm font-semibold text-white">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.text}
                    </p>
                  </SoftCard>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <SectionHeader
              eyebrow="ΠΡΩΤΟ ΒΗΜΑ"
              title="Όχι άλλα manual περάσματα"
              description="Η ενότητα Bridge μειώνει λάθη, διπλοπεράσματα και χαμένο χρόνο, οργανώνοντας ροές που σήμερα εκτελούνται χειροκίνητα ή ασύνδετα."
              center
            />

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center rounded-2xl bg-[#0B1F3A] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(11,31,58,0.18)] transition duration-300 hover:bg-[#11284a]"
              >
                Κλείσε συνάντηση
              </a>

              <Link
                href="/loukperi-core/operations"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-7 py-3.5 text-sm font-medium text-slate-700 transition duration-300 hover:bg-slate-50 hover:text-slate-900"
              >
                Δες και το Operations
              </Link>
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  );
}