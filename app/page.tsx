import type { ReactNode } from "react";
import Image from "next/image";
import InstallPWAButton from "./components/InstallPWAButton";

const services = [
  {
    title: "ERP & Operations Systems",
    description:
      "Συστήματα προσαρμοσμένα στις πραγματικές ροές της επιχείρησής σας, ώστε η καθημερινή λειτουργία να γίνεται πιο οργανωμένη και πιο ελεγχόμενη.",
  },
  {
    title: "Dashboards & Reporting",
    description:
      "Καθαρή εικόνα για παραγγελίες, εργασίες, αποθέματα, εκκρεμότητες και βασικά επιχειρησιακά δεδομένα μέσα από εύχρηστα dashboards.",
  },
  {
    title: "Automations & Integrations",
    description:
      "Αυτοματοποιήσεις και συνδέσεις μεταξύ συστημάτων που μειώνουν τις επαναλαμβανόμενες χειροκίνητες ενέργειες και περιορίζουν τα λάθη.",
  },
  {
    title: "Technical Consulting",
    description:
      "Σωστή ανάλυση πριν την υλοποίηση, ώστε κάθε λύση να ξεκινά με καθαρή λογική, σωστή αρχιτεκτονική και ρεαλιστικό πλάνο.",
  },
];

const reasons = [
  {
    title: "Καθαρή σκέψη πριν την υλοποίηση",
    description:
      "Ξεκινάμε από το πρόβλημα, τη ροή και τον στόχο της επιχείρησης — όχι από έτοιμα templates ή τυχαία features.",
  },
  {
    title: "Λύσεις προσαρμοσμένες στις ανάγκες σας",
    description:
      "Κάθε επιχείρηση δουλεύει διαφορετικά. Γι’ αυτό σχεδιάζουμε συστήματα που προσαρμόζονται στον τρόπο λειτουργίας σας.",
  },
  {
    title: "Άμεση επικοινωνία και συνεργασία",
    description:
      "Μιλάτε απευθείας με τον άνθρωπο που αναλύει, σχεδιάζει και υλοποιεί τη λύση, χωρίς περιττή πολυπλοκότητα.",
  },
  {
    title: "Έμφαση σε λειτουργία και αποτέλεσμα",
    description:
      "Στόχος μας δεν είναι απλώς να φαίνεται σωστό. Είναι να δουλεύει σωστά και να βελτιώνει την καθημερινότητα της επιχείρησης.",
  },
];

const scenarios = [
  {
    title: "Εταιρεία λιανικής",
    problem:
      "Διαχείριση με Excel, καθυστερήσεις στις παραγγελίες και περιορισμένη εικόνα για αποθέματα και εκκρεμότητες.",
    solution:
      "Custom ERP, dashboard παρακολούθησης και αυτοματοποιημένες ροές για καλύτερη οργάνωση της καθημερινής λειτουργίας.",
    goal: "Λιγότερα λάθη, καλύτερος έλεγχος και ταχύτερη διαχείριση.",
  },
  {
    title: "Εταιρεία υπηρεσιών",
    problem:
      "Διάσπαρτη πληροφορία, χειροκίνητη παρακολούθηση εργασιών και δυσκολία στη συνολική εικόνα έργων και πελατών.",
    solution:
      "Workflow dashboard, task tracking, συγκεντρωμένη καταγραφή εργασιών και βασικό reporting.",
    goal:
      "Καλύτερη οργάνωση ομάδας, καθαρότερη παρακολούθηση και λιγότερος χαμένος χρόνος.",
  },
  {
    title: "Επιχείρηση logistics / διανομών",
    problem:
      "Καθυστερήσεις στην ενημέρωση, περιορισμένη ορατότητα στη ροή εργασιών και δύσκολος συντονισμός.",
    solution:
      "Operations dashboard, status tracking και αυτοματοποιημένες ενημερώσεις για καλύτερη διαχείριση της ροής.",
    goal:
      "Πιο καθαρή εικόνα, πιο γρήγορες αποφάσεις και καλύτερος συντονισμός.",
  },
];

const processSteps = [
  {
    title: "Καταγραφή αναγκών",
    description:
      "Συζητάμε πώς λειτουργεί σήμερα η επιχείρησή σας, πού υπάρχουν καθυστερήσεις, λάθη ή έλλειψη ορατότητας.",
  },
  {
    title: "Σχεδιασμός λύσης",
    description:
      "Ορίζουμε τη σωστή δομή, τις βασικές λειτουργίες και την τεχνική κατεύθυνση με βάση τις πραγματικές σας ανάγκες.",
  },
  {
    title: "Υλοποίηση",
    description:
      "Προχωράμε σε κατασκευή του συστήματος με έμφαση στη χρηστικότητα, τη σαφήνεια και τη λειτουργία.",
  },
  {
    title: "Βελτίωση και εξέλιξη",
    description:
      "Μετά την αρχική υλοποίηση, η λύση μπορεί να επεκταθεί και να βελτιωθεί σύμφωνα με τη χρήση και την εξέλιξη της επιχείρησης.",
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

function SiteNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B1F3A]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/logo-icon-flat.png"
            alt="LoukPeri"
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
            priority
          />
          <span className="text-lg font-semibold tracking-tight text-white">
            LoukPeri
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#services"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            Υπηρεσίες
          </a>
          <a
            href="#process"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            Πώς δουλεύουμε
          </a>
          <a
            href="#contact"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            Επικοινωνία
          </a>
        </nav>

        <a
          href="#contact"
          className="hidden sm:inline-flex items-center rounded-2xl bg-[#3A8DFF] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(58,141,255,0.28)] transition duration-300 hover:bg-[#5a9eff]"
        >
          Κλείσε συνάντηση
        </a>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#0B1F3A]/90 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left lg:px-8">
        <div className="flex flex-col items-center gap-4 sm:items-start">
          <Image
            src="/logo-footer-white.png"
            alt="LoukPeri"
            width={420}
            height={120}
            className="h-auto w-[220px] object-contain"
          />
          <p className="max-w-md text-sm leading-6 text-white/60">
            Custom business systems για επιχειρήσεις που θέλουν πιο καθαρή
            λειτουργία και καλύτερη οργάνωση.
          </p>
        </div>

        <p className="text-sm text-white/50">
          © {new Date().getFullYear()} LoukPeri. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default function LoukPeriLandingPage() {
  return (
    <>
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
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[720px] bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent)]" />

        <SiteNavbar />

        <section className="relative overflow-hidden">
          <div
            className={`${containerClass} pb-24 pt-24 sm:pb-28 sm:pt-28 lg:pb-32 lg:pt-36`}
          >
            <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
              <div className="relative z-10">
                <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-blue-200">
                  ERP • Dashboards • Automations • Business Systems
                </div>

                <h1 className="mt-8 max-w-3xl text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
                  Γρήγορα. <span className="text-[#3A8DFF]">Σωστά.</span>
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                  Φτιάχνουμε custom business systems για επιχειρήσεις που θέλουν
                  λιγότερα λάθη, καλύτερη οργάνωση και πιο γρήγορη καθημερινή
                  λειτουργία.
                </p>

                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
                  ERP, dashboards, automations και εργαλεία που προσαρμόζονται
                  στον τρόπο που δουλεύει η επιχείρησή σας — όχι το αντίστροφο.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <a href="#contact" className={primaryButtonClass}>
                    Κλείσε συνάντηση
                  </a>
                  <a href="#services" className={secondaryButtonClass}>
                    Δες τι μπορούμε να υλοποιήσουμε
                  </a>
                </div>

                <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-slate-400">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#3A8DFF]" />
                  Πρακτικές λύσεις με καθαρή σκέψη, σωστή δομή και έμφαση στη
                  λειτουργία.
                </div>
              </div>

              <div className="relative flex items-center justify-center">
                <div className="absolute -inset-8 rounded-[48px] bg-[radial-gradient(circle_at_top_right,rgba(58,141,255,0.18),transparent_45%)] blur-2xl" />

                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/logo-icon-flat.png"
                    alt=""
                    width={520}
                    height={520}
                    className="h-auto w-full max-w-[420px] object-contain opacity-[0.08] blur-[1px] sm:max-w-[460px] lg:max-w-[500px]"
                    aria-hidden="true"
                  />
                </div>

                <div className="relative z-10 w-full max-w-[560px] rounded-[30px] border border-white/10 bg-white/[0.045] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-sm">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                        <Image
                          src="/logo-icon-flat.png"
                          alt="LoukPeri"
                          width={24}
                          height={24}
                          className="h-6 w-6 object-contain"
                        />
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-[0.16em] text-slate-400">
                          LoukPeri
                        </p>
                        <h3 className="mt-1 text-2xl font-semibold text-white">
                          Daily Overview
                        </h3>
                      </div>
                    </div>

                    <span className="rounded-full border border-[#3A8DFF]/20 bg-[#3A8DFF]/10 px-3 py-1 text-xs font-medium text-blue-200">
                      Custom Setup
                    </span>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      ["Παραγγελίες", "124", "Σημερινή εικόνα"],
                      ["Εκκρεμότητες", "8", "Απαιτούν ενέργεια"],
                      ["Αποθέματα", "Live", "Συγκεντρωμένη εικόνα"],
                      ["Ροές εργασίας", "Auto", "Λιγότερη χειροκίνητη δουλειά"],
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

                  <div className="mt-5 rounded-2xl border border-white/6 bg-white/[0.03] p-4">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-sm text-slate-400">
                        Operational Visibility
                      </span>
                      <span className="text-sm font-medium text-blue-200">
                        Better coordination
                      </span>
                    </div>

                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/5">
                      <div className="h-full w-[72%] rounded-full bg-[#3A8DFF]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className={sectionClass}>
          <div className={containerClass}>
            <SectionHeader
              eyebrow="Services"
              title="Τι μπορούμε να υλοποιήσουμε"
              description="Η LoukPeri δημιουργεί επιχειρησιακά συστήματα που βοηθούν τις εταιρείες να οργανώσουν καλύτερα τη δουλειά τους, να μειώσουν τη χειροκίνητη διαχείριση και να αποκτήσουν καθαρή εικόνα των διαδικασιών τους."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {services.map((item) => (
                <GlassCard key={item.title} className="h-full">
                  <div className="mb-4 inline-flex rounded-2xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-blue-200">
                    Solution
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
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
              eyebrow="Why LoukPeri"
              title="Γιατί LoukPeri"
              description="Η προσέγγισή μας βασίζεται στην ουσία: καταλαβαίνουμε τη λειτουργία της επιχείρησης και σχεδιάζουμε λύσεις που βγάζουν νόημα στην πράξη."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {reasons.map((item, index) => (
                <GlassCard key={item.title}>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-semibold text-blue-200">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        <section className={sectionClass}>
          <div className={containerClass}>
            <SectionHeader
              eyebrow="Use Cases"
              title="Ενδεικτικά σενάρια εφαρμογής"
              description="Παρακάτω βλέπετε παραδείγματα του τύπου λύσεων που μπορούμε να σχεδιάσουμε και να υλοποιήσουμε, ανάλογα με τις ανάγκες κάθε επιχείρησης."
            />

            <div className="mt-12 grid gap-6 xl:grid-cols-3">
              {scenarios.map((item) => (
                <GlassCard key={item.title} className="h-full">
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <div className="mt-6 space-y-6">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-red-300">
                        Πρόβλημα
                      </p>
                      <p className="mt-2 text-sm leading-7 text-slate-400">
                        {item.problem}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-200">
                        Τι μπορούμε να υλοποιήσουμε
                      </p>
                      <p className="mt-2 text-sm leading-7 text-slate-300">
                        {item.solution}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">
                        Στόχος
                      </p>
                      <p className="mt-2 text-sm leading-7 text-slate-300">
                        {item.goal}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className={sectionClass}>
          <div className={containerClass}>
            <SectionHeader
              eyebrow="Process"
              title="Πώς δουλεύουμε"
              description="Κάθε συνεργασία ξεκινά από κατανόηση της πραγματικής ανάγκης και προχωρά σε λύση με ξεκάθαρα βήματα."
              align="center"
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {processSteps.map((step, index) => (
                <GlassCard key={step.title} className="h-full">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-semibold text-blue-200">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {step.description}
                  </p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        <section className={sectionClass}>
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="rounded-[32px] border border-white/10 bg-white/[0.045] px-6 py-10 text-center shadow-[0_20px_60px_rgba(0,0,0,0.22)] backdrop-blur-sm sm:px-10 sm:py-12">
              <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-blue-200">
                Free Assessment
              </span>

              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Δωρεάν αρχική αξιολόγηση
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Σε μια πρώτη σύντομη συνάντηση βλέπουμε πού υπάρχουν χειροκίνητες
                διαδικασίες, καθυστερήσεις ή έλλειψη καθαρής εικόνας και
                συζητάμε ποιο μπορεί να είναι το πρώτο σωστό βήμα.
              </p>

              <div className="mt-8">
                <a
                  href="mailto:info@loukperi.gr?subject=%CE%91%CE%AF%CF%84%CE%B7%CE%BC%CE%B1%20%CE%B3%CE%B9%CE%B1%20%CE%B4%CF%89%CF%81%CE%B5%CE%AC%CE%BD%20%CE%B1%CF%81%CF%87%CE%B9%CE%BA%CE%AE%20%CE%B1%CE%BE%CE%B9%CE%BF%CE%BB%CF%8C%CE%B3%CE%B7%CF%83%CE%B7"
                  className={primaryButtonClass}
                >
                  Κλείσε δωρεάν συνάντηση
                </a>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-400">
                Χωρίς δέσμευση. Με πρακτική προσέγγιση και καθαρή συζήτηση πάνω
                στην ανάγκη σας.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className={sectionClass}>
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <SectionHeader
              eyebrow="Contact"
              title="Έχει η επιχείρησή σας διαδικασίες που καθυστερούν;"
              description="Αν υπάρχουν Excel, επαναλαμβανόμενες χειροκίνητες ενέργειες ή δυσκολία στην παρακολούθηση της καθημερινής λειτουργίας, μπορούμε να δούμε μαζί τι αξίζει να οργανωθεί πρώτο."
              align="center"
            />

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:info@loukperi.gr?subject=%CE%95%CE%BD%CE%B4%CE%B9%CE%B1%CF%86%CE%AD%CF%81%CE%BF%CE%BD%20%CE%B3%CE%B9%CE%B1%20%CF%83%CF%85%CE%BD%CE%B5%CF%81%CE%B3%CE%B1%CF%83%CE%AF%CE%B1"
                className={primaryButtonClass}
              >
                Μίλησε μαζί μας
              </a>

              <div className="[&>button]:inline-flex [&>button]:items-center [&>button]:justify-center [&>button]:rounded-2xl [&>button]:border [&>button]:border-white/12 [&>button]:bg-white/[0.03] [&>button]:px-7 [&>button]:py-3.5 [&>button]:text-sm [&>button]:font-medium [&>button]:text-white [&>button]:transition [&>button]:duration-300 hover:[&>button]:bg-white/[0.06]">
                <InstallPWAButton />
              </div>
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  );
}