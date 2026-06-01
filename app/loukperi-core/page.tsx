import type { ReactNode } from "react";
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
    points: ["Dashboards", "KPIs", "Consolidated reporting"],
  },
  {
    title: "Bridge",
    description:
      "Διασυνδέσεις μεταξύ συστημάτων με validation, mapping, logs, retries και ασφαλή ροή δεδομένων.",
    href: "/loukperi-core/bridge",
    points: ["Integrations", "Validation", "Sync jobs"],
  },
  {
    title: "Operations",
    description:
      "Tasks, approvals, reminders, notifications και workflows για πιο καθαρή εσωτερική λειτουργία.",
    href: "/loukperi-core/operations",
    points: ["Tasks", "Approvals", "Workflows"],
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

const problems = [
  {
    title: "Διάσπαρτη εικόνα",
    text: "Όταν τα δεδομένα βρίσκονται σε ERP, Excel, APIs και διαφορετικά εργαλεία, η επιχείρηση χάνει χρόνο μέχρι να αποκτήσει καθαρή εικόνα.",
  },
  {
    title: "Χειροκίνητες διασυνδέσεις",
    text: "Παραγγελίες, ενημερώσεις και ανταλλαγή δεδομένων περνάνε από ανθρώπους αντί για ασφαλείς και ελεγχόμενες ροές.",
  },
  {
    title: "Χαοτική καθημερινή λειτουργία",
    text: "Εγκρίσεις, εκκρεμότητες, reminders και εσωτερικές εργασίες χάνονται σε τηλέφωνα, emails και πρόχειρες λίστες.",
  },
];

const audiences = [
  "Εμπορικές εταιρείες με ERP και πολλαπλές ροές",
  "Επιχειρήσεις με eShop, APIs ή τρίτα συστήματα",
  "Ομάδες που θέλουν dashboards, integrations και πιο καθαρή λειτουργία",
  "Εταιρείες που θέλουν modular λύση και όχι βαριά αντικατάσταση όλων των συστημάτων",
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

export default function LoukPeriCoreOverviewPage() {
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

        <SiteNavbar currentPath="/loukperi-core" />

        <section id="what-is" className="relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pb-24 pt-24 sm:pb-28 sm:pt-28 lg:px-8 lg:pb-32 lg:pt-36">
            <div className="grid items-start gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
              <div className="relative z-10">
                <div className="inline-flex items-center rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-sm text-blue-700 shadow-sm backdrop-blur">
                  LoukPeri Core • Modular Business Platform
                </div>

                <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
                  Μία πλατφόρμα. <span className="text-[#3A8DFF]">Τρία modules.</span>
                </h1>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
                  Το LoukPeri Core είναι μία modular business platform που
                  οργανώνει reporting, διασυνδέσεις και καθημερινή λειτουργία
                  πάνω στην ίδια λογική πλατφόρμας.
                </p>

                <p className="mt-4 max-w-3xl text-base leading-7 text-slate-500">
                  Ξεκινάς από το module που χρειάζεσαι σήμερα και επεκτείνεσαι
                  σταδιακά, χωρίς να στήνεις κάθε φορά ξεχωριστό app ή
                  αποσπασματική λύση.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    href="#customization"
                    className="inline-flex items-center justify-center rounded-2xl bg-[#0B1F3A] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(11,31,58,0.18)] transition duration-300 hover:bg-[#11284a]"
                  >
                    Δες όλα τα modules
                  </Link>

                  <a
                    href="/#contact"
                    className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-7 py-3.5 text-sm font-medium text-slate-700 transition duration-300 hover:bg-slate-50 hover:text-slate-900"
                  >
                    Μίλησε μαζί μας
                  </a>
                </div>

                <CoreTabs currentPath="/loukperi-core" />
              </div>

              <div className="relative">
                <SoftCard className="p-5 sm:p-6">
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
                        Platform Architecture
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold text-slate-950">
                        LoukPeri Core
                      </h3>
                    </div>

                    <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                      Modular Setup
                    </span>
                  </div>

                  <div className="space-y-4">
                    {modules.map((module) => (
                      <div
                        key={module.title}
                        className="rounded-2xl border border-slate-200/70 bg-slate-50/80 p-4"
                      >
                        <div>
                          <p className="text-lg font-semibold text-slate-900">
                            {module.title}
                          </p>
                          <p className="mt-1 text-sm leading-6 text-slate-600">
                            {module.description}
                          </p>
                        </div>

                        <div className="mt-3 flex flex-wrap gap-2">
                          {module.points.map((point) => (
                            <span
                              key={point}
                              className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600"
                            >
                              {point}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50/70 p-4">
                    <p className="text-sm font-medium text-slate-900">
                      Shared platform foundations
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {foundations.map((item) => (
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

        <section id="how-it-works" className="relative py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeader
              eyebrow="How it works"
              title="Πώς λειτουργεί στην πράξη"
              description="Δεν πρόκειται για 3 άσχετα προϊόντα. Είναι μία κοινή πλατφόρμα όπου ενεργοποιείς τα modules που χρειάζεται η επιχείρησή σου."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                {
                  step: "01",
                  title: "Ξεκινάς από το σωστό σημείο",
                  text: "Συνήθως από Reports για ορατότητα, από Bridge για integrations ή από Operations για πιο οργανωμένη καθημερινότητα.",
                },
                {
                  step: "02",
                  title: "Πατάς σε κοινή βάση",
                  text: "Users, roles, companies, logs, settings και integrations δεν ξαναστήνονται από την αρχή για κάθε ανάγκη.",
                },
                {
                  step: "03",
                  title: "Επεκτείνεσαι σταδιακά",
                  text: "Καθώς ωριμάζει η ανάγκη, ενεργοποιείς και τα υπόλοιπα modules χωρίς να σπάει η συνοχή του συστήματος.",
                },
              ].map((item) => (
                <SoftCard key={item.step}>
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0B1F3A] text-sm font-semibold text-white">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>
                </SoftCard>
              ))}
            </div>
          </div>
        </section>

        <section id="what-it-solves" className="relative py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeader
              eyebrow="What it solves"
              title="Τι λύνει το LoukPeri Core"
              description="Το προϊόν έχει νόημα όταν η επιχείρηση έχει ταυτόχρονα ανάγκη για εικόνα, ροή δεδομένων και καθαρότερη λειτουργία."
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

        <section id="customization" className="relative py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeader
              eyebrow="Customization"
              title="Προσαρμογή ανά πελάτη, όχι one-size-fits-all"
              description="Η ίδια πλατφόρμα μπορεί να ενεργοποιείται διαφορετικά ανά επιχείρηση, ανάλογα με το pain point και το maturity level."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {modules.map((module) => (
                <SoftCard key={module.title} className="h-full">
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-950">
                      {module.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {module.description}
                    </p>
                  </div>

                  <Link
                    href={module.href}
                    className="mt-6 inline-flex items-center text-sm font-semibold text-blue-700 transition hover:text-slate-900"
                  >
                    Άνοιγμα module →
                  </Link>
                </SoftCard>
              ))}
            </div>
          </div>
        </section>

        <section id="for-whom" className="relative py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeader
              eyebrow="For whom"
              title="Για ποιους είναι"
              description="Το LoukPeri Core δεν απευθύνεται σε μία μόνο κατηγορία εταιρειών. Απευθύνεται σε επιχειρήσεις που έχουν λειτουργικές τριβές και θέλουν modular βελτίωση."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {audiences.map((item) => (
                <SoftCard key={item}>
                  <p className="text-sm leading-7 text-slate-700">{item}</p>
                </SoftCard>
              ))}
            </div>
          </div>
        </section>

        <section id="pilot" className="relative py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <SoftCard>
                <SectionHeader
                  eyebrow="Pilot"
                  title="Η σωστή πρώτη υλοποίηση"
                  description="Στις περισσότερες περιπτώσεις, η πιο σωστή εκκίνηση είναι από το module που δίνει το πιο άμεσο επιχειρησιακό αποτέλεσμα."
                />

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {[
                    {
                      label: "Reports",
                      text: "όταν χρειάζεται καθαρή εικόνα",
                    },
                    {
                      label: "Bridge",
                      text: "όταν χρειάζονται αξιόπιστες διασυνδέσεις",
                    },
                    {
                      label: "Operations",
                      text: "όταν χρειάζεται πιο οργανωμένη καθημερινή λειτουργία",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <p className="text-sm font-semibold text-slate-900">
                        {item.label}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </SoftCard>

              <div className="rounded-3xl border border-blue-100 bg-blue-50/70 p-6 shadow-[0_12px_36px_rgba(15,23,42,0.05)]">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-blue-700">
                  Recommended approach
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-slate-950">
                  Ξεκίνα lean. Επέκτεινε modular.
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Έτσι αποκτάς γρηγορότερα αποτέλεσμα, κρατάς καθαρό scope και
                  αποφεύγεις το “να τα λύσουμε όλα μαζί” από την πρώτη φάση.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="relative py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <SectionHeader
              eyebrow="Contact"
              title="Θες να δούμε ποιο module είναι το σωστό πρώτο βήμα;"
              description="Μπορούμε να συζητήσουμε την ανάγκη σου και να δούμε αν ξεκινάς από Reports, Bridge ή Operations — πάντα με βάση το πραγματικό operational pain point."
              center
            />

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center rounded-2xl bg-[#0B1F3A] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(11,31,58,0.18)] transition duration-300 hover:bg-[#11284a]"
              >
                Κλείσε συνάντηση
              </a>

              <a
                href="mailto:info@loukperi.gr?subject=Ενδιαφέρον%20για%20LoukPeri%20Core"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-7 py-3.5 text-sm font-medium text-slate-700 transition duration-300 hover:bg-slate-50 hover:text-slate-900"
              >
                Στείλε email
              </a>
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  );
}