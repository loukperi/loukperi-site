import type { ReactNode } from "react";
import Link from "next/link";
import SiteNavbar from "../../components/SiteNavbar";
import SiteFooter from "../../components/SiteFooter";
import BackToTopButton from "../../components/BackToTopButton";
import CoreTabs from "../components/CoreTabs";

const capabilities = [
  "Tasks",
  "Approvals",
  "Reminders",
  "Notifications",
  "Workflows",
  "SLA visibility",
  "Activity tracking",
  "Operational follow-up",
];

const problems = [
  {
    title: "Εκκρεμότητες που χάνονται",
    text: "Όταν οι εργασίες μένουν σε email, τηλεφωνήματα ή πρόχειρες λίστες, η παρακολούθηση γίνεται αποσπασματική.",
  },
  {
    title: "Ασαφείς εγκρίσεις",
    text: "Η έλλειψη καθαρής ροής εγκρίσεων δημιουργεί καθυστερήσεις, παρεξηγήσεις και αβεβαιότητα για το ποιος πρέπει να κάνει τι.",
  },
  {
    title: "Χωρίς ορατότητα στην καθημερινότητα",
    text: "Όταν δεν υπάρχει SLA, reminder και operational follow-up, οι καθυστερήσεις φαίνονται όταν είναι ήδη αργά.",
  },
];

const useCases = [
  {
    title: "Εσωτερικές εγκρίσεις",
    text: "Ροές εγκρίσεων με σαφή επόμενο βήμα, υπευθυνότητα και ενημέρωση κατάστασης.",
  },
  {
    title: "Παρακολούθηση εκκρεμοτήτων",
    text: "Καθαρή εικόνα για ανοικτές εργασίες, καθυστερήσεις και items που απαιτούν follow-up.",
  },
  {
    title: "Operational reminders",
    text: "Υπενθυμίσεις και alerts για να μη χάνεται η καθημερινή ροή σε ad hoc επικοινωνία.",
  },
];

const workflowSteps = [
  {
    step: "01",
    title: "Task creation",
    text: "Καταγραφή του operational item με σαφή κατάσταση, υπεύθυνο και προτεραιότητα.",
  },
  {
    step: "02",
    title: "Assignment / approval",
    text: "Ανάθεση ή δρομολόγηση προς έγκριση με ορατή ευθύνη και ιστορικό.",
  },
  {
    step: "03",
    title: "Reminder / follow-up",
    text: "Υπενθυμίσεις, ειδοποιήσεις και καθαρή εικόνα για ό,τι παραμένει ανοικτό.",
  },
  {
    step: "04",
    title: "Completion / audit",
    text: "Κλείσιμο της εργασίας με traceability και δυνατότητα ανασκόπησης της ροής.",
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

export default function LoukPeriCoreOperationsPage() {
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

        <SiteNavbar currentPath="/loukperi-core/operations" />

        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pb-24 pt-24 sm:pb-28 sm:pt-28 lg:px-8 lg:pb-32 lg:pt-36">
            <div className="grid items-start gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
              <div>
                <div className="inline-flex items-center rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-sm text-blue-700 shadow-sm backdrop-blur">
                  LoukPeri Core • Operations
                </div>

                <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
                  Πιο οργανωμένη <span className="text-[#3A8DFF]">καθημερινή λειτουργία</span>.
                </h1>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
                  Η ενότητα Operations βοηθά την επιχείρηση να οργανώνει εργασίες,
				  εγκρίσεις, υπενθυμίσεις και ροές εργασίας μέσα από μία καθαρή
				  λειτουργική λογική.
                </p>

                <p className="mt-4 max-w-3xl text-base leading-7 text-slate-500">
                  Είναι η ενότητα που βάζει σειρά σε σημεία όπου η επικοινωνία
				  είναι διάσπαρτη, η παρακολούθηση γίνεται αποσπασματικά και
				  η ορατότητα είναι περιορισμένη.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="/#contact"
                    className="inline-flex items-center justify-center rounded-2xl bg-[#0B1F3A] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(11,31,58,0.18)] transition duration-300 hover:bg-[#11284a]"
                  >
                    Συζήτηση για operations
                  </a>

                  <Link
                    href="/loukperi-core"
                    className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-7 py-3.5 text-sm font-medium text-slate-700 transition duration-300 hover:bg-slate-50 hover:text-slate-900"
                  >
                    Επιστροφή στο overview
                  </Link>
                </div>

                <CoreTabs currentPath="/loukperi-core/operations" />
              </div>

              <div>
                <SoftCard className="p-5 sm:p-6">
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
                        Operations Layer
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold text-slate-950">
                        Workflow Visibility
                      </h3>
                    </div>

                    <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                      Daily Flow
                    </span>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      ["Tasks", "Open", "Καταγεγραμμένες εκκρεμότητες"],
                      ["Approvals", "Clear", "Σαφής ροή εγκρίσεων"],
                      ["Reminders", "On", "Follow-up όπου χρειάζεται"],
                      ["SLA", "Visible", "Ορατότητα στην καθυστέρηση"],
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
                      Core capabilities
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {capabilities.map((item) => (
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
              title="Όταν η καθημερινή λειτουργία χρειάζεται περισσότερη οργάνωση"
              description="Η ενότητα Operations έχει αξία όταν η καθημερινή λειτουργία χρειάζεται περισσότερη οργάνωση από τηλεφωνήματα, emails και πρόχειρες λίστες."
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
                eyebrow="ΕΝΔΕΙΚΤΙΚΕΣ ΧΡΗΣΕΙΣ"
                title="Ενδεικτικές χρήσεις"
                description="Η ενότητα Operations μπορεί να προσαρμοστεί σε εσωτερικές ροές που σήμερα δεν παρακολουθούνται μέσα από κάποιο οργανωμένο σύστημα."
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

            <div>
              <SectionHeader
                eyebrow="ΜΟΝΤΕΛΟ ΡΟΗΣ"
                title="Πώς δουλεύει"
                description="Η αξία έρχεται όταν οι εκκρεμότητες ακολουθούν καθαρή operational ροή και όχι ad hoc επικοινωνία."
              />

              <div className="mt-8 grid gap-4">
                {workflowSteps.map((item) => (
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
              title="Όταν η καθημερινότητα γίνεται workflow"
              description="Η ενότητα Operations οργανώνει εσωτερικές ροές που σήμερα χάνονται ανάμεσα σε τηλέφωνα, emails και πρόχειρες λίστες."
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
                href="/loukperi-core/reports"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-7 py-3.5 text-sm font-medium text-slate-700 transition duration-300 hover:bg-slate-50 hover:text-slate-900"
              >
                Δες και το Reports
              </Link>
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  );
}