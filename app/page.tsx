import InstallPWAButton from "./components/InstallPWAButton";
export default function LoukPeriLandingPage() {
  return (
    <>
      {/* STICKY CTA */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="#contact"
          className="bg-[#3A8DFF] hover:scale-105 transition-all shadow-2xl shadow-blue-500/30 text-white px-6 py-4 rounded-full font-semibold"
        >
          Κλείσε συνάντηση
        </a>
      </div>
    <div className="min-h-screen bg-[#0B1F3A] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(58,141,255,0.25),_transparent_50%)]" />
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8 lg:py-36">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-blue-200">
                LoukPeri • ERP • SaaS • Consulting
              </div>

              <h1 className="text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
                Γρήγορα. <span className="text-[#3A8DFF]">Σωστά.</span>
              </h1>

              <p className="mt-4 text-lg text-slate-300">
                Built Fast. Built Right.
              </p>

              <p className="mt-6 max-w-2xl text-lg text-slate-300">
                Αναπτύσσουμε ERP, SaaS και επιχειρησιακά συστήματα που οργανώνουν τις διαδικασίες σας και επιταχύνουν την ανάπτυξη.
              </p>

              <p className="mt-2 max-w-2xl text-base text-slate-400">
                We build ERP systems and SaaS platforms that simplify operations and scale your business.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#contact" className="rounded-2xl bg-[#3A8DFF] px-6 py-3 font-semibold shadow-lg">
                  Κλείσε συνάντηση
                </a>
                <a href="#services" className="rounded-2xl border border-white/15 px-6 py-3">
                  Δες υπηρεσίες
                </a>
              </div>

              {/* Trust trigger */}
              <p className="mt-6 text-sm text-slate-400">
                Χωρίς περιττή πολυπλοκότητα. Μόνο συστήματα που δουλεύουν.
              </p>
            </div>

            {/* VISUAL */}
            <div className="relative">
              <div className="rounded-[32px] border border-white/10 bg-slate-950/40 p-6 shadow-2xl backdrop-blur">
                <div className="rounded-[24px] bg-[#08172d] p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-sm text-slate-400">ERP Dashboard</div>
                      <div className="text-xl font-semibold">Operations Overview</div>
                    </div>
                    <div className="text-green-400 text-sm">Live</div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="bg-white/5 p-4 rounded-xl">
                      <div className="text-sm text-slate-400">Ταχύτητα</div>
                      <div className="text-2xl font-bold">+42%</div>
                    </div>
                    <div className="bg-white/5 p-4 rounded-xl">
                      <div className="text-sm text-slate-400">Ακρίβεια</div>
                      <div className="text-2xl font-bold">99%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold">Υπηρεσίες</h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              { title: "Ανάπτυξη ERP", desc: "Προσαρμοσμένα συστήματα πάνω στις ανάγκες σας" },
              { title: "SaaS Platforms", desc: "Σύγχρονες scalable εφαρμογές" },
              { title: "Συμβουλευτική", desc: "Σωστή αρχιτεκτονική πριν το development" },
              { title: "Αυτοματισμοί", desc: "Λιγότερη χειροκίνητη δουλειά, περισσότερη ροή" },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-slate-400 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold">Γιατί LoukPeri</h2>

          <div className="mt-10 grid gap-4">
            {[
              "Ταχύτητα χωρίς εκπτώσεις",
              "Συστήματα που βγάζουν νόημα",
              "Κλιμακούμενη αρχιτεκτονική",
              "Σκέψη πάνω στο business, όχι μόνο στο code",
            ].map((item) => (
              <div key={item} className="rounded-xl border border-white/10 p-4">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold">Αποτελέσματα / Case Studies</h2>
          <p className="mt-4 text-slate-300 max-w-2xl">
            Πώς μετατρέπουμε προβληματικές διαδικασίες σε συστήματα που δουλεύουν.
          </p>

          <div className="mt-12 grid gap-10">

            {/* MAIN FEATURED CASE */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">Retail Company (ERP Implementation)</h3>
                <span className="text-sm text-slate-400">Demo Case</span>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <p className="text-red-400 text-sm font-semibold">ΠΡΙΝ</p>
                  <ul className="mt-3 space-y-2 text-slate-400">
                    <li>• Διαχείριση μέσω Excel</li>
                    <li>• Καθυστερήσεις στις παραγγελίες</li>
                    <li>• Έλλειψη ορατότητας σε αποθέματα</li>
                  </ul>
                </div>

                <div>
                  <p className="text-green-400 text-sm font-semibold">ΜΕΤΑ</p>
                  <ul className="mt-3 space-y-2 text-slate-300">
                    <li>• Custom ERP σύστημα</li>
                    <li>• Αυτοματοποιημένες ροές εργασίας</li>
                    <li>• Real-time dashboard</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 text-[#3A8DFF] font-semibold text-lg">
                +45% ταχύτερη λειτουργία • -60% λάθη • πλήρης έλεγχος
              </div>
            </div>

            {/* SECONDARY CASES */}
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Service Company",
                  result: "99% ακρίβεια δεδομένων",
                },
                {
                  title: "Logistics Business",
                  result: "+35% βελτίωση αποδοτικότητας",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 text-[#3A8DFF] font-semibold">
                    {item.result}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LEAD MAGNET */}
      <section className="border-t border-white/10 py-24 text-center">
        <h2 className="text-3xl font-bold">Δωρεάν αξιολόγηση συστημάτων</h2>
        <p className="mt-4 text-slate-300 max-w-xl mx-auto">
          Δες πού χάνει χρόνο και χρήμα η επιχείρησή σου και πώς μπορεί να βελτιωθεί.
        </p>

        <div className="mt-8">
          <a href="mailto:hello@loukperi.com" className="bg-[#3A8DFF] px-8 py-4 rounded-xl font-semibold">
            Ζήτησε δωρεάν αξιολόγηση
          </a>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="border-t border-white/10 py-28 text-center">
        <h2 className="text-4xl font-bold">Έτοιμοι να οργανώσουμε την επιχείρησή σας;</h2>
        <p className="mt-4 text-slate-300">Μιλήστε μαζί μας και δείτε πώς μπορούμε να βοηθήσουμε.</p>

        <div className="mt-8">
          <a href="mailto:hello@loukperi.com" className="bg-[#3A8DFF] px-8 py-4 rounded-xl font-semibold">
            Επικοινωνία
          </a>
		 <InstallPWAButton />  
        </div>
      </section>
    </div>
   </>
  );
}
