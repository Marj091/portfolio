"use client";

import { useState } from "react";
import Image from "next/image";
import { BarChart2, Table2, Bot } from "lucide-react";

// ─── Data ──────────────────────────────────────────────────────────────────

const skills = [
  {
    category: "Design & Opmaak",
    items: ["Adobe InDesign", "Adobe Photoshop", "Adobe Illustrator", "Microsoft PowerPoint"],
  },
  {
    category: "Uitingen",
    items: ["Brochures", "Informatiedocumenten", "Presentaties", "Narrowcasting / schermcommunicatie", "Banners", "Digitale communicatie"],
  },
  {
    category: "AI & Automatisering",
    items: ["AI-agenten opzetten", "AI-prompting", "Browserautomatisering", "Workflowautomatisering"],
  },
  {
    category: "Kwaliteiten",
    items: ["Huisstijlbewaking", "Oog voor detail", "Structuur", "Complexe informatie helder maken"],
  },
];

const projects = [
  {
    title: "Illustrator-script voor automatische grafieken",
    tags: ["Illustrator", "Scripting", "Automatisering"],
    description:
      "Script dat data uitleest en grafieken in Illustrator automatisch bijwerkt. Minder handmatig werk, minder fouten en sneller consistente visuals binnen de huisstijl.",
    Icon: BarChart2,
    iconSize: 48,
    strokeWidth: 2.5,
    color: "#C1440E",      // terracotta
  },
  {
    title: "Tabel Agent voor Word naar InDesign",
    tags: ["AI", "InDesign", "Tabelopmaak"],
    description:
      "AI-agent die tabellen uit Word omzet naar een InDesign-geschikte structuur. Controleert kolommen, kopregels, lege cellen en opsommingen. Overzichtelijker en minder foutgevoelig.",
    Icon: Table2,
    iconSize: 48,
    strokeWidth: 1.25,
    color: "#2C2C2C",      // antraciet
  },
  {
    title: "AI-agent voor maaltijdselectie",
    tags: ["AI-agent", "Python", "Browserautomatisering"],
    description:
      "Persoonlijke AI-agent die automatisch een browser opent en maaltijden selecteert op basis van voorkeuren, weekindeling en voedingswensen. Vergelijkt opties en plaatst passende keuzes in de winkelmand.",
    Icon: Bot,
    iconSize: 60,
    strokeWidth: 1.25,
    color: "#7D1C2E",      // bordeaux
  },
];

const navLinks = [
  { label: "Over mij", href: "#over-mij" },
  { label: "Vaardigheden", href: "#vaardigheden" },
  { label: "Projecten", href: "#projecten" },
  { label: "Contact", href: "#contact" },
];

// ─── Nav ───────────────────────────────────────────────────────────────────

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#F9F6F1]/90 backdrop-blur-md border-b border-[#E8E0D5]">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="font-sanstext-lg font-semibold tracking-tight">
          Marjolijn<span className="text-[#C1440E]">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm text-[#6B6560] hover:text-[#C1440E] transition-colors duration-200 font-medium"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Menu openen"
        >
          <span
            className={`block h-0.5 w-6 bg-[#1A1A1A] transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#1A1A1A] transition-all duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#1A1A1A] transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#F9F6F1] border-t border-[#E8E0D5] px-6 py-4 flex flex-col gap-4">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-[#1A1A1A] hover:text-[#C1440E] transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

// ─── Hero ──────────────────────────────────────────────────────────────────

const heroTags = ["Adobe InDesign", "Illustrator", "AI & Automatisering", "Huisstijl", "PowerPoint"];

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 pt-20 pb-12 overflow-hidden"
    >
      {/* Achtergrond decoratie */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#C1440E]/6 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-[#C1440E]/4 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

        {/* Links: tekst */}
        <div>
          <p className="text-sm uppercase tracking-widest text-[#C1440E] font-semibold mb-5">
            Grafisch Vormgever · AI &amp; Automatisering
          </p>
          <h1 className="font-sans text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] text-[#1A1A1A] mb-6">
            Marjolijn
            <br />
            de Vries
          </h1>
          <p className="text-base sm:text-lg text-[#6B6560] leading-relaxed mb-8">
            Ik ontwerp duidelijke en consistente visuele communicatie, van brochures
            en documenten tot digitale uitingen. Mijn kracht zit in structuur, oog voor
            detail en het helder vormgeven van complexe informatie. Daarnaast combineer
            ik ontwerp met AI en automatisering om werkprocessen slimmer te maken.
          </p>

          {/* Skill chips */}
          <div className="flex flex-wrap gap-2 mb-10">
            {heroTags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1.5 rounded-full bg-[#E8E0D5] text-[#4A3F38] font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projecten"
              className="inline-block bg-[#C1440E] text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-[#A83A0C] transition-colors duration-200"
            >
              Bekijk projecten
            </a>
            <a
              href="#contact"
              className="inline-block border border-[#1A1A1A] text-[#1A1A1A] px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-[#1A1A1A] hover:text-white transition-colors duration-200"
            >
              Neem contact op
            </a>
          </div>
        </div>

        {/* Rechts: foto */}
        <div className="relative flex justify-center md:justify-end">
          {/* Terracotta accent blokje */}
          <div className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-[#C1440E]/10 pointer-events-none" />

          <div className="relative w-full max-w-xs aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl ring-2 ring-[#C1440E]/30 ring-offset-8 ring-offset-[#F9F6F1]">
            <Image
              src="/Foto-Marjolijn.jpg"
              alt="Marjolijn de Vries"
              fill
              className="object-cover"
              priority
            />
            {/* Naam overlay onderaan */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent px-6 py-5">
              <p className="text-white font-semibold text-sm">Marjolijn de Vries</p>
              <p className="text-white/70 text-xs">Grafisch Vormgever · AI &amp; Automatisering</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// ─── Over mij ──────────────────────────────────────────────────────────────

function About() {
  return (
    <section id="over-mij" className="py-24 px-6 bg-[#1A1A1A] text-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Foto */}
        <div className="relative flex justify-center md:justify-start">
          {/* Terracotta decoratief kader erachter */}
          <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-full h-full max-w-sm rounded-2xl border-2 border-[#C1440E]/40" />
          <div className="relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden">
            <Image
              src="/Foto-Marjolijn.jpg"
              alt="Foto van Marjolijn de Vries"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Tekst */}
        <div>
          <p className="text-xs uppercase tracking-widest text-[#C1440E] font-semibold mb-4">
            Over mij
          </p>
          <h2 className="font-sanstext-4xl sm:text-5xl font-bold leading-tight mb-6">
            Design dat
            <br />
            werkt en klopt.
          </h2>
          <div className="w-12 h-1 bg-[#C1440E] mb-8" />
          <div className="space-y-5 text-[#C8C0B8] text-base leading-relaxed">
            <p>
              Als grafisch vormgever ben ik gespecialiseerd in visuele communicatie
              die niet alleen mooi oogt, maar ook functioneel en consistent is.
              Denk aan brochures, documenten, presentaties, narrowcastingbeelden,
              banners en andere digitale uitingen.
            </p>
            <p>
              Mijn kracht zit in{" "}
              <span className="text-white font-medium">
                structuur, oog voor detail en huisstijlbewaking
              </span>{" "}
              voor het helder vormgeven van complexe informatie zodat de boodschap
              altijd duidelijk overkomt.
            </p>
            <p>
              Daarnaast verdiep ik me actief in{" "}
              <span className="text-white font-medium">
                AI, prompting en automatisering
              </span>{" "}
              om creatieve werkprocessen slimmer en efficiënter te maken.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

// ─── Vaardigheden ──────────────────────────────────────────────────────────

function Skills() {
  return (
    <section id="vaardigheden" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-[#C1440E] font-semibold mb-4">
          Vaardigheden
        </p>
        <h2 className="font-sanstext-4xl sm:text-5xl font-bold leading-tight mb-16">
          Wat ik meeneem.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-xs uppercase tracking-widest font-semibold text-[#1A1A1A] mb-5 pb-3 border-b border-[#E8E0D5]">
                {group.category}
              </h3>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#1A1A1A] font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C1440E] flex-shrink-0 mt-[0.4em]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Projecten ─────────────────────────────────────────────────────────────

function Projects() {
  return (
    <section id="projecten" className="py-24 px-6 bg-[#F0EBE3]">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-[#C1440E] font-semibold mb-4">
          Projecten
        </p>
        <h2 className="font-sanstext-4xl sm:text-5xl font-bold leading-tight mb-16">
          Recent werk.
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-2xl overflow-hidden flex flex-col shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Gekleurde kopsectie */}
              <div
                className="flex items-end justify-between px-7 pt-8 pb-6"
                style={{ backgroundColor: project.color }}
              >
                <project.Icon size={project.iconSize} color="#ffffff" strokeWidth={project.strokeWidth} />
                <div className="flex flex-wrap gap-2 justify-end">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full font-semibold"
                      style={{ backgroundColor: "rgba(255,255,255,0.20)", color: "#fff" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Witte tekstsectie */}
              <div className="bg-[#F9F6F1] px-7 py-6 flex-1 flex flex-col gap-3">
                <h3
                  className="font-sans text-xl font-bold transition-colors min-h-20 flex items-start"
                  style={{ color: project.color }}
                >
                  {project.title}
                </h3>
                <p className="text-sm text-[#1A1A1A] leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact ───────────────────────────────────────────────────────────────

function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="py-24 px-6 bg-[#1A1A1A] text-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-xs uppercase tracking-widest text-[#C1440E] font-semibold mb-4">
            Contact
          </p>
          <h2 className="font-sanstext-4xl sm:text-5xl font-bold leading-tight mb-6">
            Samenwerken?
          </h2>
          <p className="text-[#C8C0B8] text-base leading-relaxed max-w-sm">
            Heb je een project waar ik bij kan helpen? Stuur een bericht en ik
            reageer zo snel mogelijk.
          </p>
        </div>

        <div>
          {sent ? (
            <div className="bg-[#C1440E]/10 border border-[#C1440E]/30 rounded-2xl p-10 text-center">
              <div className="text-4xl mb-4">✓</div>
              <p className="font-sanstext-xl font-bold mb-2">Bericht ontvangen!</p>
              <p className="text-[#C8C0B8] text-sm">
                Ik neem zo snel mogelijk contact met je op.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#6B6560] font-semibold mb-2">
                  Naam
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Jouw naam"
                  className="w-full bg-[#2A2A2A] border border-[#3A3A3A] rounded-xl px-4 py-3.5 text-sm text-white placeholder-[#555] focus:outline-none focus:border-[#C1440E] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#6B6560] font-semibold mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="jouw@email.nl"
                  className="w-full bg-[#2A2A2A] border border-[#3A3A3A] rounded-xl px-4 py-3.5 text-sm text-white placeholder-[#555] focus:outline-none focus:border-[#C1440E] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#6B6560] font-semibold mb-2">
                  Bericht
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Vertel iets over je project..."
                  className="w-full bg-[#2A2A2A] border border-[#3A3A3A] rounded-xl px-4 py-3.5 text-sm text-white placeholder-[#555] focus:outline-none focus:border-[#C1440E] transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#C1440E] text-white px-7 py-4 rounded-xl text-sm font-semibold hover:bg-[#A83A0C] transition-colors duration-200"
              >
                Verstuur bericht
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

// ─── Footer ────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-[#111111] text-[#6B6560] py-8 px-6 text-center text-xs">
      <p>© {new Date().getFullYear()} Marjolijn de Vries — Grafisch Vormgever</p>
    </footer>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
