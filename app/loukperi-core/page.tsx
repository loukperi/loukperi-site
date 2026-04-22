import SiteNavbar from "../components/SiteNavbar";
import SiteFooter from "../components/SiteFooter";
import BackToTopButton from "../components/BackToTopButton";

const valueBullets = [
  {
    number: "01",
    title: "Ενιαία εικόνα",
    description: "Όλα τα κρίσιμα δεδομένα και οι διαδικασίες σου σε ένα σημείο.",
  },
  {
    number: "02",
    title: "Ταχύτερη εκτέλεση",
    description: "Λιγότερες καθυστερήσεις, λιγότερα λάθη, πιο ξεκάθαρες ενέργειες.",
  },
  {
    number: "03",
    title: "Προσαρμοσμένο setup",
    description:
      "Χτίζεται πάνω στις πραγματικές ανάγκες και τα υπάρχοντα συστήματά σου.",
  },
];

const steps = [
  {
    number: "01",
    title: "Συνδέεται με τα υπάρχοντα εργαλεία σου",
    description:
      "ERP, αρχεία, spreadsheets ή εσωτερικές διαδικασίες γίνονται μέρος ενός πιο οργανωμένου συστήματος.",
  },
  {
    number: "02",
    title: "Οργανώνει δεδομένα και ροές",
    description:
      "Συγκεντρώνει κρίσιμη πληροφορία, καθαρίζει το operational χάος και δημιουργεί πιο ξεκάθαρη καθημερινή λειτουργία.",
  },
  {
    number: "03",
    title: "Δίνει εικόνα και έλεγχο",
    description:
      "Dashboards, ρόλοι, automations και business logic δουλεύουν μαζί ώστε να βλέπεις τι συμβαίνει και να κινείσαι πιο σωστά.",
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

const customizableItems = [
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

export default function LoukPeriCorePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.14),_transparent_28%),linear-gradient(to_bottom,_#f8fbff,_#ffffff_26%,_#f8fafc_72%,_#ffffff)] text-slate-900">
      <SiteNavbar currentPath="/loukperi-core" />

      <HeroSection />

      <Section className="pt-5 md:pt-8">
        <div className="grid gap-4 md:grid-cols-3">
          {valueBullets.map((item) => (
            <InfoCard
              key={item.title}
              eyebrow={item.number}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </Section>

      <Section id="what-is">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-10">
          <div className="lg:col-span-7">
            <SectionEyebrow>ΤΙ ΕΙΝΑΙ</SectionEyebrow>
            <SectionTitle>Τι είναι το LoukPeri Core</SectionTitle>

            <div className="mt-6 space-y-4 text-base leading-7 text-slate-600 md:text-lg md:leading-8">
              <p>
                Το LoukPeri Core είναι η βασική πλατφόρμα της LoukPeri για
                επιχειρήσεις που θέλουν καλύτερη ορατότητα, πιο οργανωμένες
                διαδικασίες και λιγότερο λειτουργικό χάος.
              </p>
              <p>
                Δεν έρχεται απαραίτητα να αντικαταστήσει τα εργαλεία που ήδη
                χρησιμοποιείς. Έρχεται να καθίσει πάνω από αυτά και να
                δημιουργήσει ένα πιο καθαρό, πιο χρήσιμο και πιο λειτουργικό
                επίπεδο ελέγχου για την καθημερινή λειτουργία της επιχείρησης.
              </p>
              <p>
                Συγκεντρώνει δεδομένα, οργανώνει ροές και μετατρέπει διάσπαρτη
                πληροφορία σε ξεκάθαρη εικόνα και πρακτική δράση.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/90 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur md:p-8">
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-blue-50 to-transparent" />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Core Layers
                </p>

                <div className="mt-6 space-y-4">
                  {[
                    { title: "Dashboards", sub: "Operational visibility" },
                    { title: "Workflows", sub: "Structured execution" },
                    { title: "Automations", sub: "Less manual friction" },
                    {
                      title: "Roles & Visibility",
                      sub: "Clear access and ownership",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[1.25rem] border border-slate-200/80 bg-slate-50/80 px-4 py-4 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-white"
                    >
                      <p className="text-sm font-semibold text-slate-800">
                        {item.title}
                      </p>
                      <p className="mt-1 text-sm text-slate-500">{item.sub}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="how-it-works" className="bg-slate-50/80">
        <SectionIntro
          eyebrow="ΠΩΣ ΔΟΥΛΕΥΕΙ"
          title="Πώς δουλεύει"
          description="Συνδέεται με τα εργαλεία που ήδη υπάρχουν, οργανώνει δεδομένα και ροές, και δημιουργεί ένα καθαρό επίπεδο ελέγχου για την καθημερινή λειτουργία."
          centered
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {steps.map((step) => (
            <StepCard key={step.number} {...step} />
          ))}
        </div>
      </Section>

      <Section id="what-it-solves">
        <SectionIntro
          eyebrow="ΤΙ ΛΥΝΕΙ"
          title="Τι λύνει στην πράξη"
          description="Σχεδιάστηκε για επιχειρήσεις που έχουν δεδομένα, εργαλεία και διαδικασίες, αλλά όχι αρκετή καθαρότητα στην καθημερινή λειτουργία."
          centered
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {problems.map((problem) => (
            <ProblemCard key={problem.title} {...problem} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionIntro
          eyebrow="ΤΙ ΠΕΡΙΛΑΜΒΑΝΕΙ"
          title="Τι μπορεί να περιλαμβάνει"
          description="Το LoukPeri Core προσαρμόζεται ανάλογα με την επιχείρηση και μπορεί να περιλαμβάνει συνδυασμό από τα παρακάτω."
          centered
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <FeaturePill key={feature} label={feature} />
          ))}
        </div>
      </Section>

      <Section id="customization">
        <SectionIntro
          eyebrow="ΠΡΟΣΑΡΜΟΓΗ ΑΝΑ ΠΕΛΑΤΗ"
          title="Σταθερός πυρήνας, προσαρμοσμένη υλοποίηση"
          description="Το LoukPeri Core δεν είναι rigid λογισμικό. Υπάρχει ένας σταθερός πυρήνας πλατφόρμας και πάνω σε αυτόν προσαρμόζονται όσα χρειάζεται κάθε επιχείρηση για να λειτουργεί καλύτερα."
          centered
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-200/80 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.06)] md:p-8">
            <SectionEyebrow>ΣΤΑΘΕΡΟΣ ΠΥΡΗΝΑΣ</SectionEyebrow>
            <SectionTitle className="mt-3">
              Τι παραμένει σταθερό
            </SectionTitle>

            <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-600 md:text-base">
              <li>• βασική αρχιτεκτονική</li>
              <li>• core UI framework</li>
              <li>• business logic βάση</li>
              <li>• roles / permissions foundation</li>
              <li>• modular δομή</li>
            </ul>
          </div>

          <div className="rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 shadow-[0_12px_40px_rgba(59,130,246,0.08)] md:p-8">
            <SectionEyebrow>ΠΑΡΑΜΕΤΡΟΠΟΙΟΥΝΤΑΙ</SectionEyebrow>
            <SectionTitle className="mt-3">
              Τι αλλάζει ανά επιχείρηση
            </SectionTitle>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {customizableItems.map((item) => (
                <FeaturePill key={item} label={item} compact />
              ))}
            </div>
          </div>
        </div>

        <p className="mt-6 text-sm leading-6 text-slate-600 md:text-base">
          Έτσι, κάθε υλοποίηση παραμένει δομημένη, αλλά και πραγματικά χρήσιμη
          για το περιβάλλον στο οποίο εφαρμόζεται.
        </p>
      </Section>

      <Section id="for-whom" className="bg-slate-50/80">
        <SectionIntro
          eyebrow="ΓΙΑ ΠΟΙΟΥΣ ΕΙΝΑΙ"
          title="Για ποιους είναι"
          description="Για επιχειρήσεις που δεν χρειάζονται άλλο ένα generic εργαλείο, αλλά καλύτερη οργάνωση, καθαρότερη εικόνα και πιο γρήγορη εκτέλεση."
          centered
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {audiences.map((audience) => (
            <InfoCard
              key={audience.title}
              title={audience.title}
              description={audience.description}
            />
          ))}
        </div>
      </Section>

      <Section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_28%)]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <SectionEyebrow className="text-blue-300">POSITIONING</SectionEyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            Δεν έρχεται να προσθέσει πολυπλοκότητα. Έρχεται να φέρει
            καθαρότητα.
          </h2>

          <div className="mx-auto mt-6 max-w-3xl space-y-4 text-base leading-7 text-slate-300 md:text-lg md:leading-8">
            <p>
              Το LoukPeri Core δεν σχεδιάστηκε για να φορτώσει την επιχείρηση με
              ένα ακόμα βαρύ σύστημα. Σχεδιάστηκε για να κάνει πιο χρήσιμα τα
              δεδομένα που ήδη υπάρχουν, να οργανώσει καλύτερα τη ροή εργασίας
              και να δημιουργήσει ένα πρακτικό επίπεδο ελέγχου πάνω στην
              καθημερινή λειτουργία.
            </p>
            <p>
              Σε κάποιες περιπτώσεις λειτουργεί πάνω από υπάρχοντα εργαλεία. Σε
              άλλες, γίνεται η βάση για ένα πιο οργανωμένο εσωτερικό σύστημα. Σε
              κάθε περίπτωση, ο στόχος είναι ο ίδιος: περισσότερη τάξη, καλύτερη
              εικόνα, λιγότερη τριβή.
            </p>
          </div>
        </div>
      </Section>

      <Section id="pilot">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-8 text-center shadow-[0_18px_50px_rgba(59,130,246,0.08)] md:p-12">
          <SectionEyebrow>ΑΡΧΙΚΕΣ ΣΥΝΕΡΓΑΣΙΕΣ</SectionEyebrow>
          <SectionTitle className="mt-4">
            Ξεκινάμε με επιλεγμένες υλοποιήσεις
          </SectionTitle>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-600 md:text-lg">
            Το LoukPeri Core διατίθεται αρχικά μέσω προσαρμοσμένης υλοποίησης για
            επιχειρήσεις που θέλουν καλύτερη ορατότητα, οργανωμένες διαδικασίες
            και πιο ξεκάθαρη λειτουργία.
          </p>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-600 md:text-lg">
            Στην παρούσα φάση, αναλαμβάνουμε επιλεγμένες συνεργασίες ώστε κάθε
            εφαρμογή να χτίζεται σωστά πάνω στις πραγματικές ανάγκες της
            επιχείρησης.
          </p>

          <div className="mt-8">
            <PrimaryButton href="#contact">
              Κλείσε μια πρώτη συζήτηση
            </PrimaryButton>
          </div>
        </div>
      </Section>

      <Section id="contact" className="pb-16 md:pb-24">
        <div className="mx-auto max-w-4xl text-center">
          <SectionEyebrow>ΕΠΟΜΕΝΟ ΒΗΜΑ</SectionEyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            Δες αν το LoukPeri Core ταιριάζει στη δική σου επιχείρηση.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-600 md:text-lg">
            Μια πρώτη συζήτηση αρκεί για να δούμε πού υπάρχουν καθυστερήσεις, πού
            χάνεται η εικόνα και πώς μπορεί να στηθεί ένα πιο καθαρό σύστημα
            λειτουργίας.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <PrimaryButton href="mailto:info@loukperi.com">
              Κλείσε συνάντηση
            </PrimaryButton>
            <SecondaryButton href="mailto:info@loukperi.com">
              Μίλησέ μας για την επιχείρησή σου
            </SecondaryButton>
          </div>
        </div>
      </Section>

      <SiteFooter />
	  <BackToTopButton /> 
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-2">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-100/70 blur-3xl" />
      <div className="absolute right-[-4rem] top-24 h-80 w-80 rounded-full bg-sky-100/80 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 md:py-24 lg:grid-cols-12 lg:items-center lg:px-10 lg:py-28">
        <div className="lg:col-span-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            LoukPeri Core
          </div>

          <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl lg:text-6xl lg:leading-[1.02]">
            Το κεντρικό σύστημα που βάζει τάξη στην επιχείρησή σου.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 md:text-lg md:leading-8">
            Το LoukPeri Core ενώνει δεδομένα, διαδικασίες και dashboards σε ένα
            business layer που σου δείχνει καθαρά τι συμβαίνει, πού υπάρχουν
            καθυστερήσεις και πού πρέπει να δράσεις — ώστε να δουλεύεις
            γρηγορότερα, με λιγότερα λάθη και καλύτερες αποφάσεις.
          </p>

          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <PrimaryButton href="#contact">Κλείσε συνάντηση</PrimaryButton>
            <SecondaryButton href="#how-it-works">
              Δες πώς δουλεύει
            </SecondaryButton>
          </div>

          <p className="mt-6 max-w-2xl text-sm leading-6 text-slate-500 md:text-base">
            Κουμπώνει πάνω στα εργαλεία που ήδη χρησιμοποιείς και προσαρμόζεται
            στις ανάγκες της επιχείρησής σου.
          </p>
        </div>

        <div className="relative lg:col-span-6">
          <div className="absolute inset-0 -z-10 scale-[1.04] rounded-[2.5rem] bg-gradient-to-br from-blue-100/70 via-transparent to-slate-100 blur-3xl" />
          <div className="rounded-[2.25rem] border border-white/70 bg-white/85 p-4 shadow-[0_30px_90px_rgba(15,23,42,0.12)] backdrop-blur md:p-6">
            <div className="rounded-[1.75rem] border border-slate-200/80 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-4 md:p-5">
              <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    LoukPeri Core
                  </p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">
                    Operations Overview
                  </p>
                </div>
                <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  Live
                </span>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {[
                  { label: "Orders", value: "128", hint: "+12 σήμερα" },
                  { label: "Pending", value: "14", hint: "Need review" },
                  { label: "Issues", value: "3", hint: "Priority" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm"
                  >
                    <p className="text-xs font-medium text-slate-500">
                      {item.label}
                    </p>
                    <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                      {item.value}
                    </p>
                    <p className="mt-2 text-xs text-slate-500">{item.hint}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-slate-900">
                      Workflow Status
                    </p>
                    <p className="text-xs text-slate-500">Updated τώρα</p>
                  </div>

                  <div className="mt-4 space-y-4">
                    {[
                      {
                        name: "Νέες παραγγελίες",
                        progress: "91%",
                        width: "91%",
                      },
                      { name: "Εκτέλεση", progress: "67%", width: "67%" },
                      { name: "Τιμολόγηση", progress: "78%", width: "78%" },
                    ].map((row) => (
                      <div key={row.name}>
                        <div className="mb-2 flex items-center justify-between text-xs text-slate-500">
                          <span>{row.name}</span>
                          <span>{row.progress}</span>
                        </div>
                        <div className="h-2 rounded-full bg-slate-100">
                          <div
                            className="h-2 rounded-full bg-gradient-to-r from-slate-900 to-blue-700"
                            style={{ width: row.width }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm">
                  <p className="text-sm font-semibold text-slate-900">
                    Critical Actions
                  </p>
                  <div className="mt-4 space-y-3">
                    {[
                      "3 παραγγελίες χρειάζονται έγκριση",
                      "1 integration check εκκρεμεί",
                      "Το KPI fulfillment έπεσε 6%",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-700"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200/80 bg-white px-4 py-3 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                    System layer
                  </p>
                  <p className="mt-2 text-sm font-medium text-slate-700">
                    Συνδέει δεδομένα, ροές και actions σε ένα dashboard-level
                    control layer.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200/80 bg-white px-4 py-3 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                    Implementation
                  </p>
                  <p className="mt-2 text-sm font-medium text-slate-700">
                    Productized core με tailored setup ανά επιχείρηση.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section({
  children,
  id,
  className = "",
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">{children}</div>
    </section>
  );
}

function SectionIntro({
  eyebrow,
  title,
  description,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <SectionEyebrow>{eyebrow}</SectionEyebrow>
      <SectionTitle className="mt-4">{title}</SectionTitle>
      <p className="mt-5 text-base leading-7 text-slate-600 md:text-lg md:leading-8">
        {description}
      </p>
    </div>
  );
}

function SectionEyebrow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`text-sm font-semibold uppercase tracking-[0.18em] text-blue-700 ${className}`}
    >
      {children}
    </p>
  );
}

function SectionTitle({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl ${className}`}
    >
      {children}
    </h2>
  );
}

function InfoCard({
  title,
  description,
  eyebrow,
}: {
  title: string;
  description: string;
  eyebrow?: string;
}) {
  return (
    <div className="group rounded-[1.75rem] border border-slate-200/80 bg-white/90 p-6 shadow-[0_12px_36px_rgba(15,23,42,0.05)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_46px_rgba(15,23,42,0.08)] md:p-7">
      {eyebrow ? (
        <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-blue-700">
          {eyebrow}
        </div>
      ) : null}
      <h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-900">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-600 md:text-base">
        {description}
      </p>
    </div>
  );
}

function StepCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-[1.75rem] border border-slate-200/80 bg-white p-6 shadow-[0_12px_36px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_46px_rgba(15,23,42,0.08)] md:p-8">
      <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
        {number}
      </div>
      <h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-900">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-6 text-slate-600 md:text-base">
        {description}
      </p>
    </div>
  );
}

function ProblemCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-[1.75rem] border border-slate-200/80 bg-white p-6 shadow-[0_12px_36px_rgba(15,23,42,0.05)] md:p-8">
      <div className="mb-4 h-1 w-16 rounded-full bg-gradient-to-r from-blue-600 to-slate-900" />
      <h3 className="text-xl font-semibold tracking-tight text-slate-900">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-6 text-slate-600 md:text-base">
        {description}
      </p>
    </div>
  );
}

function FeaturePill({
  label,
  compact = false,
}: {
  label: string;
  compact?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border border-slate-200/80 bg-white shadow-sm transition hover:border-blue-100 hover:shadow-md ${
        compact ? "px-4 py-3 text-sm" : "px-5 py-5 text-sm md:text-base"
      } font-medium text-slate-700`}
    >
      {label}
    </div>
  );
}

function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(15,23,42,0.16)] transition hover:-translate-y-0.5 hover:bg-slate-900"
    >
      {children}
    </a>
  );
}

function SecondaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/90 px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-900"
    >
      {children}
    </a>
  );
}