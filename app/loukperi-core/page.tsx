import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import BackToTopButton from "../components/BackToTopButton";
import SiteNavbar from "../components/SiteNavbar";
import SiteFooter from "../components/SiteFooter";

const valueBullets = [
  {
    title: "Ενιαία εικόνα",
    description: "Όλα τα κρίσιμα δεδομένα και οι διαδικασίες σου σε ένα σημείο.",
    index: "01",
  },
  {
    title: "Ταχύτερη εκτέλεση",
    description: "Λιγότερες καθυστερήσεις, λιγότερα λάθη, πιο ξεκάθαρες ενέργειες.",
    index: "02",
  },
  {
    title: "Προσαρμοσμένο setup",
    description: "Χτίζεται πάνω στις πραγματικές ανάγκες και τα υπάρχοντα συστήματά σου.",
    index: "03",
  },
];

const steps = [
  {
    title: "Συνδέεται με τα υπάρχοντα εργαλεία σου",
    description:
      "ERP, αρχεία, spreadsheets ή εσωτερικές διαδικασίες γίνονται μέρος ενός πιο οργανωμένου συστήματος.",
    index: "01",
  },
  {
    title: "Οργανώνει δεδομένα και ροές",
    description:
      "Συγκεντρώνει κρίσιμη πληροφορία, καθαρίζει το operational χάος και δημιουργεί πιο ξεκάθαρη καθημερινή λειτουργία.",
    index: "02",
  },
  {
    title: "Δίνει εικόνα και έλεγχο",
    description:
      "Dashboards, ρόλοι, automations και business logic δουλεύουν μαζί ώστε να βλέπεις τι συμβαίνει και να κινείσαι πιο σωστά.",
    index: "03",
  },
];

const problems = [
  {
    title: "Διάσπαρτα δεδομένα",
    description:
      "Όταν η πληροφορία βρίσκεται σε πολλά σημεία, η εικόνα της επιχείρησης χάνεται.",
  },
  {
    title: "Χειροκίνητες διαδικασίες",
    description:
      "Όταν η δουλειά περνάει από Excel, τηλέφωνα και μηνύματα, αυξάνονται τα λάθη και οι καθυστερήσεις.",
  },
  {
    title: "Έλλειψη ορατότητας",
    description:
      "Όταν δεν βλέπεις καθαρά πού κολλάει η λειτουργία, δεν μπορείς να πάρεις γρήγορες αποφάσεις.",
  },
  {
    title: "Μη συντονισμένες ομάδες",
    description:
      "Όταν κάθε τμήμα δουλεύει αλλιώς, η εκτέλεση γίνεται αργή και ασύνδετη.",
  },
];

const features = [
  "Dashboards και reporting",
  "Διαχείριση ροών εργασίας",
  "Automations και ειδοποιήσεις",
  "Ρόλους χρηστών και δικαιώματα",
  "Παρακολούθηση παραγγελιών ή εργασιών",
  "Business metrics και KPI visibility",
  "Integrations με υπάρχοντα συστήματα",
  "Εσωτερικά εργαλεία για καθημερινή λειτουργία",
];

const customization = [
  "Modules",
  "Dashboards",
  "Ροές εργασίας",
  "Ρόλοι χρηστών",
  "Δικαιώματα πρόσβασης",
  "Automations",
  "Integrations",
  "Business rules",
];

const audiences = [
  {
    title: "Επιχειρήσεις με operational chaos",
    description:
      "Όταν οι διαδικασίες τρέχουν αποσπασματικά και η οργάνωση βασίζεται σε manual δουλειά.",
  },
  {
    title: "Ομάδες που έχουν εργαλεία αλλά όχι καθαρή εικόνα",
    description:
      "Όταν υπάρχουν ήδη συστήματα, αλλά λείπει ένα ενιαίο σημείο ελέγχου.",
  },
  {
    title: "Εταιρείες που θέλουν καλύτερη εκτέλεση",
    description:
      "Όταν το ζητούμενο δεν είναι άλλο ένα εργαλείο, αλλά πιο σωστή λειτουργία και ταχύτερη λήψη αποφάσεων.",
  },
];

const sectionClass = "relative border-t border-white/10 py-24 sm:py-28";
const containerClass = "mx-auto max-w-7xl px-6 lg:px-8";
const cardClass =
  "rounded-3xl border border-white/10 bg-white/[0.045] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.18)] backdrop-blur-sm transition-all duration-300 hover:border-white/15 hover:bg-white/[0.06]";
const primaryButtonClass =
  "inline-flex items-center justify-center rounded-2xl bg-[#3A8DFF] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(58,141,255,0.28)] transition duration-300 hover:bg-[#5a9eff]";
const secondaryButtonClass =
  "inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/[0.03] px-7 py-3.5 text-sm font-medium text-white transition duration-300 hover:bg-white/[0.06]";

function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  const alignClass =
    align === "center"
      ? "mx-auto items-center text-center"
      : "items-start text-left";

  return (
    <div className={`flex max-w-3xl flex-col ${alignClass}`}>
      {eyebrow ? (
        <span className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-blue-200/90">
          {eyebrow}
        </span>
      ) : null}

      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function GlassCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`${cardClass} ${className}`}>{children}</div>;
}

export default function LoukPeriCorePage() {
  return (
    <>
      <BackToTopButton />

      <div className="fixed bottom-4 right-4 z-50 sm:bottom-5 sm:right-5">
        <a
          href="#contact"
          className="inline-flex items-center rounded-full border border-white/10 bg-[#3A8DFF] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(58,141,255,0.35)] transition duration-300 hover:scale-[1.03] hover:bg-[#5a9eff]"
        >
          Κλείσε συνάντηση
        </a>
      </div>

      <main className="min-h-screen overflow-hidden bg-[#0B1F3A] text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(58,141,255,0.22),transparent_28%),radial-gradient(circle_at_top_left,rgba(255,255,255,0.05),transparent_22%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[860px] bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent)]" />

        <SiteNavbar currentPath="/loukperi-core" />

        <section className="relative overflow-hidden">
          <div
            className={`${containerClass} pb-24 pt-24 sm:pb-28 sm:pt-28 lg:pb-32 lg:pt-36`}
          >
            <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-blue-200">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#3A8DFF]" />
                  LoukPeri Core
                </div>

                <h1 className="mt-8 max-w-3xl text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
                  Το κεντρικό σύστημα που βάζει τάξη στην επιχείρησή σου.
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                  Το LoukPeri Core ενώνει δεδομένα, διαδικασίες και dashboards σε
                  ένα business layer που σου δείχνει καθαρά τι συμβαίνει, πού
                  υπάρχουν καθυστερήσεις και πού πρέπει να δράσεις.
                </p>

                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
                  Κουμπώνει πάνω στα εργαλεία που ήδη χρησιμοποιείς και
                  προσαρμόζεται στις ανάγκες της επιχείρησής σου, ώστε να
                  δουλεύεις γρηγορότερα, με λιγότερα λάθη και καλύτερες
                  αποφάσεις.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <a href="#contact" className={primaryButtonClass}>
                    Κλείσε συνάντηση
                  </a>
                  <a href="#what-is" className={secondaryButtonClass}>
                    Δες πώς δουλεύει
                  </a>
                </div>

                
              </div>

              <div className="relative flex items-center justify-center">
                <div className="absolute -inset-8 rounded-[48px] bg-[radial-gradient(circle_at_top_right,rgba(58,141,255,0.18),transparent_45%)] blur-2xl" />

                <div className="relative z-10 w-full max-w-[580px] rounded-[30px] border border-white/10 bg-white/[0.045] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-sm">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                        <Image
                          src="/logo-icon-flat.png"
                          alt="LoukPeri Core"
                          width={24}
                          height={24}
                          className="h-6 w-6 object-contain"
                        />
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-[0.16em] text-slate-400">
                          LoukPeri Core
                        </p>
                        <h3 className="mt-1 text-2xl font-semibold text-white">
                          Operations Overview
                        </h3>
                      </div>
                    </div>

                    <span className="rounded-full border border-[#3A8DFF]/20 bg-[#3A8DFF]/10 px-3 py-1 text-xs font-medium text-blue-200">
                      Selected Implementations
                    </span>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-3">
                    {[
                      ["Orders", "128", "Σημερινή εικόνα"],
                      ["Pending", "14", "Need review"],
                      ["Issues", "3", "Priority"],
                    ].map(([label, value, note]) => (
                      <div
                        key={label}
                        className="rounded-2xl border border-white/6 bg-white/[0.04] p-4"
                      >
                        <div className="text-sm text-slate-400">{label}</div>
                        <div className="mt-2 text-2xl font-semibold text-white">
                          {value}
                        </div>
                        <div className="mt-1 text-sm text-slate-500">
                          {note}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
                    <div className="rounded-2xl border border-white/6 bg-white/[0.03] p-4">
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-sm text-slate-400">
                          Workflow Status
                        </span>
                        <span className="text-sm font-medium text-blue-200">
                          Updated τώρα
                        </span>
                      </div>

                      <div className="mt-4 space-y-4">
                        {[
                          ["Νέες παραγγελίες", "91%"],
                          ["Εκτέλεση", "67%"],
                          ["Τιμολόγηση", "78%"],
                        ].map(([label, width]) => (
                          <div key={label}>
                            <div className="mb-2 flex items-center justify-between text-xs text-slate-400">
                              <span>{label}</span>
                              <span>{width}</span>
                            </div>
                            <div className="h-2 overflow-hidden rounded-full bg-white/5">
                              <div
                                className="h-full rounded-full bg-[#3A8DFF]"
                                style={{ width }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/6 bg-white/[0.03] p-4">
                      <span className="text-sm text-slate-400">Critical Actions</span>

                      <div className="mt-4 space-y-3">
                        {[
                          "3 παραγγελίες χρειάζονται έγκριση",
                          "1 integration check εκκρεμεί",
                          "Το KPI fulfillment έπεσε 6%",
                        ].map((item) => (
                          <div
                            key={item}
                            className="rounded-2xl border border-white/6 bg-white/[0.04] p-3 text-sm text-slate-300"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative pb-8">
          <div className={containerClass}>
            <div className="grid gap-6 md:grid-cols-3">
              {valueBullets.map((item) => (
                <GlassCard key={item.title} className="h-full">
                  <div className="mb-4 inline-flex rounded-2xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-blue-200">
                    {item.index}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        <section id="what-is" className={sectionClass}>
          <div className={containerClass}>
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <div>
                <SectionHeader
                  eyebrow="LoukPeri Core"
                  title="Τι είναι το LoukPeri Core"
                  description="Το LoukPeri Core είναι η βασική πλατφόρμα της LoukPeri για επιχειρήσεις που θέλουν καλύτερη ορατότητα, πιο οργανωμένες διαδικασίες και λιγότερο λειτουργικό χάος."
                />

                <div className="mt-6 space-y-5 text-base leading-8 text-slate-300">
                  <p>
                    Δεν έρχεται απαραίτητα να αντικαταστήσει τα εργαλεία που
                    ήδη χρησιμοποιείς. Έρχεται να καθίσει πάνω από αυτά και να
                    δημιουργήσει ένα πιο καθαρό, πιο χρήσιμο και πιο λειτουργικό
                    επίπεδο ελέγχου για την καθημερινή λειτουργία της
                    επιχείρησης.
                  </p>
                  <p>
                    Συγκεντρώνει δεδομένα, οργανώνει ροές και μετατρέπει
                    διάσπαρτη πληροφορία σε ξεκάθαρη εικόνα και πρακτική δράση.
                  </p>
                </div>
              </div>

              <GlassCard>
                <div className="mb-5 inline-flex rounded-2xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-blue-200">
                  Core Layers
                </div>

                <div className="space-y-4">
                  {[
                    ["Dashboards", "Operational visibility"],
                    ["Workflows", "Structured execution"],
                    ["Automations", "Less manual friction"],
                    ["Roles & Visibility", "Clear access and ownership"],
                  ].map(([title, note]) => (
                    <div
                      key={title}
                      className="rounded-2xl border border-white/6 bg-white/[0.04] p-4"
                    >
                      <div className="text-base font-semibold text-white">{title}</div>
                      <div className="mt-1 text-sm text-slate-400">{note}</div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          </div>
        </section>

        <section id="how-it-works" className={sectionClass}>
          <div className={containerClass}>
            <SectionHeader
              eyebrow="Workflow"
              title="Πώς δουλεύει"
              description="Συνδέεται με τα εργαλεία που ήδη υπάρχουν, οργανώνει δεδομένα και ροές, και δημιουργεί ένα καθαρό επίπεδο ελέγχου για την καθημερινή λειτουργία."
              align="center"
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {steps.map((step) => (
                <GlassCard key={step.title} className="h-full">
                  <div className="mb-4 inline-flex rounded-2xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-blue-200">
                    {step.index}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {step.description}
                  </p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        <section className={sectionClass}>
          <div className={containerClass}>
            <SectionHeader
              eyebrow="Operational Problems"
              title="Τι λύνει στην πράξη"
              description="Σχεδιάστηκε για επιχειρήσεις που έχουν δεδομένα, εργαλεία και διαδικασίες, αλλά όχι αρκετή καθαρότητα στην καθημερινή λειτουργία."
              align="center"
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {problems.map((item) => (
                <GlassCard key={item.title} className="h-full">
                  <div className="mb-4 h-1.5 w-16 rounded-full bg-[#3A8DFF]" />
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        <section className={sectionClass}>
          <div className={containerClass}>
            <SectionHeader
              eyebrow="Capabilities"
              title="Τι μπορεί να περιλαμβάνει"
              description="Το LoukPeri Core προσαρμόζεται ανάλογα με την επιχείρηση και μπορεί να περιλαμβάνει συνδυασμό από τα παρακάτω."
              align="center"
            />

            <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {features.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.045] px-5 py-5 text-sm font-medium text-slate-200 shadow-[0_10px_30px_rgba(0,0,0,0.14)] backdrop-blur-sm transition hover:bg-white/[0.06]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={sectionClass}>
          <div className={containerClass}>
            <div className="grid gap-6 lg:grid-cols-2">
              <GlassCard className="h-full">
                <div className="mb-4 inline-flex rounded-2xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-blue-200">
                  Stable foundation
                </div>
                <h3 className="text-2xl font-semibold text-white">
                  Σταθερός πυρήνας πλατφόρμας
                </h3>
                <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-300">
                  <li>• βασική αρχιτεκτονική</li>
                  <li>• core UI framework</li>
                  <li>• business logic βάση</li>
                  <li>• roles / permissions foundation</li>
                  <li>• modular δομή</li>
                </ul>
              </GlassCard>

              <GlassCard className="h-full">
                <div className="mb-4 inline-flex rounded-2xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-blue-200">
                  Customizable
                </div>
                <h3 className="text-2xl font-semibold text-white">
                  Τι προσαρμόζεται ανά πελάτη
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  Το LoukPeri Core δεν είναι rigid λογισμικό. Υπάρχει ένας
                  σταθερός πυρήνας πλατφόρμας και πάνω σε αυτόν προσαρμόζονται
                  όσα χρειάζεται κάθε επιχείρηση για να λειτουργεί καλύτερα.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {customization.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-3 text-sm text-slate-300"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>

            <p className="mt-6 text-sm leading-7 text-slate-400">
              Έτσι, κάθε υλοποίηση παραμένει δομημένη, αλλά και πραγματικά
              χρήσιμη για το περιβάλλον στο οποίο εφαρμόζεται.
            </p>
          </div>
        </section>

        <section id="for-whom" className={sectionClass}>
          <div className={containerClass}>
            <SectionHeader
              eyebrow="ΠΟΙΟΥΣ ΑΦΟΡΑ"
              title="Ποιούς αφορά"
              description="Για επιχειρήσεις που δεν χρειάζονται άλλο ένα generic εργαλείο, αλλά καλύτερη οργάνωση, καθαρότερη εικόνα και πιο γρήγορη εκτέλεση."
              align="center"
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {audiences.map((item) => (
                <GlassCard key={item.title} className="h-full">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        <section className={sectionClass}>
          <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
            <div className="rounded-[32px] border border-white/10 bg-white/[0.045] px-6 py-10 shadow-[0_20px_60px_rgba(0,0,0,0.22)] backdrop-blur-sm sm:px-10 sm:py-12">
              <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-blue-200">
                Positioning
              </span>

              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Δεν έρχεται να προσθέσει πολυπλοκότητα. Έρχεται να φέρει
                καθαρότητα.
              </h2>

              <div className="mx-auto mt-5 max-w-3xl space-y-4 text-base leading-8 text-slate-300">
                <p>
                  Το LoukPeri Core δεν σχεδιάστηκε για να φορτώσει την
                  επιχείρηση με ένα ακόμα βαρύ σύστημα. Σχεδιάστηκε για να κάνει
                  πιο χρήσιμα τα δεδομένα που ήδη υπάρχουν, να οργανώσει
                  καλύτερα τη ροή εργασίας και να δημιουργήσει ένα πρακτικό
                  επίπεδο ελέγχου πάνω στην καθημερινή λειτουργία.
                </p>
                <p>
                  Σε κάποιες περιπτώσεις λειτουργεί πάνω από υπάρχοντα εργαλεία.
                  Σε άλλες, γίνεται η βάση για ένα πιο οργανωμένο εσωτερικό
                  σύστημα. Σε κάθε περίπτωση, ο στόχος είναι ο ίδιος:
                  περισσότερη τάξη, καλύτερη εικόνα, λιγότερη τριβή.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={sectionClass}>
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="rounded-[32px] border border-white/10 bg-white/[0.045] px-6 py-10 text-center shadow-[0_20px_60px_rgba(0,0,0,0.22)] backdrop-blur-sm sm:px-10 sm:py-12">
              <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-blue-200">
                Selected Implementations
              </span>

              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Ξεκινάμε με επιλεγμένες υλοποιήσεις
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Το LoukPeri Core διατίθεται αρχικά μέσω προσαρμοσμένης
                υλοποίησης για επιχειρήσεις που θέλουν καλύτερη ορατότητα,
                οργανωμένες διαδικασίες και πιο ξεκάθαρη λειτουργία.
              </p>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                Στην παρούσα φάση, αναλαμβάνουμε επιλεγμένες συνεργασίες ώστε
                κάθε εφαρμογή να χτίζεται σωστά πάνω στις πραγματικές ανάγκες της
                επιχείρησης.
              </p>

              <div className="mt-8">
                <a href="#contact" className={primaryButtonClass}>
                  Κλείσε μια πρώτη συζήτηση
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className={sectionClass}>
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <SectionHeader
              eyebrow="Contact"
              title="Δες αν το LoukPeri Core ταιριάζει στη δική σου επιχείρηση."
              description="Μια πρώτη συζήτηση αρκεί για να δούμε πού υπάρχουν καθυστερήσεις, πού χάνεται η εικόνα και πώς μπορεί να στηθεί ένα πιο καθαρό σύστημα λειτουργίας."
              align="center"
            />

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:info@loukperi.gr?subject=%CE%95%CE%BD%CE%B4%CE%B9%CE%B1%CF%86%CE%AD%CF%81%CE%BF%CE%BD%20%CE%B3%CE%B9%CE%B1%20LoukPeri%20Core"
                className={primaryButtonClass}
              >
                Κλείσε συνάντηση
              </a>

              <Link href="/" className={secondaryButtonClass}>
                Επιστροφή στην εταιρική σελίδα
              </Link>
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  );
}
