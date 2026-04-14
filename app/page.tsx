import InstallPWAButton from "./components/InstallPWAButton";

export default function HomePage() {
  return (
    <main className="bg-[#0B1F3A] text-white">
      {/* NAVBAR */}
      <header className="flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
        <div className="text-xl font-bold">LoukPeri</div>

        <div className="flex items-center gap-4">
          <a
            href="#services"
            className="text-sm text-white/80 hover:text-white"
          >
            Υπηρεσίες
          </a>

          <a
            href="#contact"
            className="bg-[#3A8DFF] px-4 py-2 rounded-xl text-sm font-semibold"
          >
            Επικοινωνία
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Οργάνωσε την επιχείρησή σου
          <br />
          <span className="text-[#3A8DFF]">
            με software που δουλεύει
          </span>
        </h1>

        <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
          Αναπτύσσουμε ERP, SaaS και επιχειρησιακά συστήματα που μειώνουν
          καθυστερήσεις, λάθη και δίνουν πλήρη εικόνα της επιχείρησης.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="rounded-2xl bg-[#3A8DFF] px-6 py-3 font-semibold shadow-lg"
          >
            Κλείσε συνάντηση
          </a>

          <a
            href="#services"
            className="rounded-2xl border border-white/20 px-6 py-3"
          >
            Δες υπηρεσίες
          </a>

          <InstallPWAButton />
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="bg-white text-slate-900 py-24"
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">
            Τι κάνουμε
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-lg">
                ERP Development
              </h3>
              <p className="text-slate-500 mt-2">
                Προσαρμοσμένα συστήματα για πλήρη έλεγχο της επιχείρησης.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-lg">
                SaaS Solutions
              </h3>
              <p className="text-slate-500 mt-2">
                Εφαρμογές που απλοποιούν διαδικασίες και αυξάνουν παραγωγικότητα.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-lg">
                Automation
              </h3>
              <p className="text-slate-500 mt-2">
                Μείωση manual εργασιών και λαθών με έξυπνες ροές.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section
        id="contact"
        className="py-24 text-center"
      >
        <h2 className="text-3xl font-bold">
          Έτοιμος να οργανώσεις την επιχείρησή σου;
        </h2>

        <p className="text-white/70 mt-4">
          Σε 2–4 εβδομάδες μπορείς να έχεις πλήρη εικόνα και έλεγχο.
        </p>

        <a
          href="mailto:info@loukperi.com"
          className="inline-block mt-8 bg-[#3A8DFF] px-8 py-4 rounded-2xl font-semibold shadow-lg"
        >
          Στείλε μήνυμα
        </a>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 text-center text-sm text-white/60">
        © {new Date().getFullYear()} LoukPeri. All rights reserved.
      </footer>
    </main>
  );
}