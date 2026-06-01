import type { ReactNode } from "react";
import Link from "next/link";
import SiteNavbar from "../../components/SiteNavbar";
import SiteFooter from "../../components/SiteFooter";
import BackToTopButton from "../../components/BackToTopButton";
import CoreTabs from "../components/CoreTabs";

const sources = [
  "ERP",
  "Databases",
  "APIs",
  "Excel / CSV",
  "eShop",
  "Άλλα συστήματα",
];

const capabilities = [
  "Dashboards",
  "KPIs",
  "Consolidated reporting",
  "Read-only reporting layer",
  "Saved views / filters",
  "Multi-source visibility",
];

const problems = [
  {
    title: "Διάσπαρτα δεδομένα",
    text: "Όταν η εικόνα βρίσκεται σε ERP, Excel, APIs και διαφορετικά αρχεία, η επιχείρηση αργεί να καταλάβει τι συμβαίνει πραγματικά.",
  },
  {
    title: "Manual reporting",
    text: "Τα reports στήνονται χειροκίνητα, χάνοντας χρόνο και αυξάνοντας την πιθανότητα λαθών ή ασυμφωνιών.",
  },
  {
    title: "Έλλειψη καθημερινής ορατότητας",
    text: "Η διοίκηση και οι ομάδες δεν έχουν καθαρή εικόνα για KPIs, εκκρεμότητες, αποθέματα ή παραγγελίες.",
  },
];

const useCases = [
  {
    title: "Πωλήσεις & παραγγελίες",
    text: "Καθημερινή εικόνα πωλήσεων, παραγγελιών, εκκρεμοτήτων και βασικών επιχειρησιακών δεικτών.",
  },
  {
    title: "Αποθέματα & διαθεσιμότητα",
    text: "Συγκεντρωμένη εικόνα αποθεμάτων από πολλαπλές πηγές για καλύτερο έλεγχο και λιγότερες καθυστερήσεις.",
  },
  {
    title: "Διοικητική παρακολούθηση",
    text: "Ένα reporting layer που δίνει σαφή εικόνα χωρίς να αλλάζει το υπάρχον ERP ή τα βασικά συστήματα.",
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

export default function LoukPeriCoreReportsPage() {
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

        <SiteNavbar currentPath="/loukperi-core/reports" />

        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pb-24 pt-24 sm:pb-28 sm:pt-28 lg:px-8 lg:pb-32 lg:pt-36">
            <div className="grid items-start gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
              <div>
                <div className="inline-flex items-center rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-sm text-blue-700 shadow-sm backdrop-blur">
                  LoukPeri Core • Reports
                </div>

                <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
                  Dashboards, KPIs και <span className="text-[#3A8DFF]">καθαρή εικόνα</span>.
                </h1>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
                  Το Reports module συγκεντρώνει δεδομένα από πολλαπλές πηγές
                  και τα μετατρέπει σε χρήσιμη, καθημερινή επιχειρησιακή εικόνα.
                </p>

                <p className="mt-4 max-w-3xl text-base leading-7 text-slate-500">
                  Είναι το ιδανικό πρώτο βήμα για επιχειρήσεις που θέλουν
                  ορατότητα χωρίς να αλλάξουν άμεσα τα βασικά τους συστήματα.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="/#contact"
                    className="inline-flex items-center justify-center rounded-2xl bg-[#0B1F3A] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(11,31,58,0.18)] transition duration-300 hover:bg-[#11284a]"
                  >
                    Μίλησε μαζί μας
                  </a>

                  <Link
                    href="/loukperi-core"
                    className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-7 py-3.5 text-sm font-medium text-slate-700 transition duration-300 hover:bg-slate-50 hover:text-slate-900"
                  >
                    Επιστροφή στο overview
                  </Link>
                </div>

                <CoreTabs currentPath="/loukperi-core/reports" />
              </div>

              <div>
                <SoftCard className="p-5 sm:p-6">
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
                        Reporting Layer
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold text-slate-950">
                        Daily Business View
                      </h3>
                    </div>

                    <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                      Read-only
                    </span>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      ["Πωλήσεις", "Live", "Συγκεντρωμένη εικόνα"],
                      ["Παραγγελίες", "124", "Σημερινή δραστηριότητα"],
                      ["KPIs", "Ready", "Καθημερινή παρακολούθηση"],
                      ["Πηγές", "Multi", "ERP, APIs, Excel"],
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
                      Data sources
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {sources.map((item) => (
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
              eyebrow="What it solves"
              title="Τι λύνει"
              description="Το Reports module έχει αξία όταν η επιχείρηση χρειάζεται καθαρή εικόνα χωρίς να ζει μέσα σε manual exports και πολλαπλά αρχεία."
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
                eyebrow="Capabilities"
                title="Τι περιλαμβάνει"
                description="Ένα ευέλικτο reporting layer που πατάει πάνω στα δεδομένα της επιχείρησης."
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
                eyebrow="Use cases"
                title="Ενδεικτικές χρήσεις"
                description="Το Reports module μπορεί να προσαρμοστεί ανάλογα με το σημείο που χρειάζεται η επιχείρηση περισσότερη ορατότητα."
              />

              <div className="mt-8 grid gap-4">
                {useCases.map((item) => (
                  <SoftCard key={item.title}>
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
              eyebrow="Next step"
              title="Ξεκίνα από το reporting layer"
              description="Συνήθως είναι το πιο γρήγορο entry point για επιχειρήσεις που θέλουν άμεσο operational insight χωρίς βαρύ πρώτο scope."
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
                href="/loukperi-core/bridge"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-7 py-3.5 text-sm font-medium text-slate-700 transition duration-300 hover:bg-slate-50 hover:text-slate-900"
              >
                Δες και το Bridge
              </Link>
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  );
}