import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

// ─────────────────────────────────────────────────────────────────────────────
// Content
// ─────────────────────────────────────────────────────────────────────────────

const NAV = [
  { id: "about", label: "about" },
  { id: "experience", label: "experience" },
  { id: "education", label: "education" },
  { id: "publications", label: "publications" },
  { id: "awards", label: "awards" },
  { id: "skills", label: "skills" },
  { id: "languages", label: "languages" },
  { id: "contact", label: "contact" },
] as const;

type Experience = {
  role: string;
  org: string;
  location: string;
  dates: string;
  bullets: string[];
  tags?: string[];
};

const EXPERIENCE: Experience[] = [
  {
    role: "Software Engineering Intern (PhD)",
    org: "Meta",
    location: "Menlo Park, CA, USA",
    dates: "Jun 2025 — Sep 2025",
    bullets: [
      "Metadata Store team. Re-implemented data recovery functionality.",
    ],
    tags: ["Java", "Thrift", "React", "Hack"],
  },
  {
    role: "Software Engineering Intern",
    org: "Firstset",
    location: "Stockholm, Sweden",
    dates: "Jul 2024 — Sep 2024",
    bullets: [
      "Automated Ethereum infrastructure for the Lido CSM staking protocol.",
    ],
    tags: ["Python", "Ethereum"],
  },
  {
    role: "Research Assistant",
    org: "KTH Royal Institute of Technology",
    location: "Stockholm, Sweden",
    dates: "2019 — 2021",
    bullets: [
      "Research on AI for automatic program repair.",
      "Published a paper on continual learning for automatic repair of Java bugs.",
    ],
    tags: ["Java", "Jenkins"],
  },
  {
    role: "Backend Engineer",
    org: "Criptext",
    location: "Guayaquil, Ecuador",
    dates: "2018 — 2019",
    bullets: ["Owned backend development. Microservices, API engineering."],
    tags: ["Node.js", "C"],
  },
  {
    role: "Google Summer of Code Intern",
    org: "CROSS @ UC Santa Cruz",
    location: "Santa Cruz, CA, USA",
    dates: "Jun 2018 — Sep 2018",
    bullets: [
      "Spent the summer at UC Santa Cruz working on Zlog, a fast distributed ledger. Caching solutions.",
    ],
    tags: ["C++"],
  },
  {
    role: "Game Programmer & Co-founder",
    org: "Freaky Creations",
    location: "Guayaquil, Ecuador",
    dates: "2012 — 2018",
    bullets: [
      "Gameplay, UI, and tools programming for To Leave.",
      "Released on all major platforms (Steam, Switch, PS4, Xbox).",
    ],
    tags: ["Unity", "C#"],
  },
];

type Education = {
  degree: string;
  school: string;
  location: string;
  dates: string;
  notes?: string[];
};

const EDUCATION: Education[] = [
  {
    degree: "Ph.D. in Computer Science / Software",
    school: "KTH Royal Institute of Technology",
    location: "Stockholm, Sweden",
    dates: "2021 — present",
    notes: ["Supervised by Martin Monperrus."],
  },
  {
    degree: "M.Sc. Software Engineering of Distributed Systems",
    school: "KTH Royal Institute of Technology",
    location: "Stockholm, Sweden",
    dates: "2019 — 2021",
    notes: [
      'Thesis: <a href="https://kth.diva-portal.org/smash/record.jsf?pid=diva2%3A1613786" target="_blank" rel="noreferrer noopener" class="term-link">Scaling the Simulation Core of Modifiable Virtual Environments with Serverless Computing</a>.',
    ],
  },
  {
    degree: "Computer Science Engineering",
    school: "ESPOL University",
    location: "Guayaquil, Ecuador",
    dates: "2008 — 2018",
  },
];

type Pub = { title: string; venue: string; year: string; desc: string; url: string; tags?: string[] };

const SCHOLAR = (cid: string) =>
  `https://scholar.google.com/citations?view_op=view_citation&hl=en&user=QSYKdF4AAAAJ&citation_for_view=QSYKdF4AAAAJ:${cid}`;

const PUBS_FIRST: Pub[] = [
  { title: "Highly Available Blockchain Nodes with N-Version Design", venue: "IEEE TDSC", year: "2023", desc: "N-version design applied to Ethereum clients to improve node availability.", url: SCHOLAR("2osOgNQ5qMEC") },
  { title: "Galapagos: Automated N-Version Programming with LLMs", venue: "ACM TOSEM", year: "2025", desc: "Automated N-version programming using large language models.", url: SCHOLAR("Tyk-4Ss8FVUC") },
  { title: "Proving and Rewarding Client Diversity to Strengthen Resilience of Blockchain Networks", venue: "ACM Distributed Ledger Technologies", year: "2025", desc: "Cryptographic proofs of client diversity for blockchain network resilience.", url: SCHOLAR("Y0pCki6q_DkC") },
  { title: "Verifiable Provenance of Software Artifacts with Zero-Knowledge Compilation", venue: "arXiv (under review)", year: "2026", desc: "Verifiable provenance of software artifacts via zero-knowledge compilation.", url: SCHOLAR("eQOLeE2rZwMC") },
];

const PUBS_COLLAB: Pub[] = [
  { title: "A Software-Repair Robot Based on Continual Learning", venue: "IEEE Software", year: "2021", desc: "Continual learning for automatic repair of Java bugs.", url: SCHOLAR("u5HHmVD_uO8C"), tags: ["Java", "OpenNMT"] },
  { title: "Challenges of Producing Software Bill of Materials for Java", venue: "IEEE Security & Privacy", year: "2023", desc: "Open challenges in producing accurate SBOMs for the Java ecosystem.", url: SCHOLAR("9yKSN-GCB0IC"), tags: ["Java", "Maven"] },
  { title: "Generative AI to Generate Test Data Generators", venue: "IEEE Software", year: "2024", desc: "Using generative AI to synthesize test data generators.", url: SCHOLAR("zYLM7Y9cAGgC") },
  { title: "Uppercase is All You Need", venue: "SIGBOVIK", year: "2025", desc: "A lighthearted, almost unserious paper.", url: SCHOLAR("YsMSGLbcyi4C") },
  { title: "Chaos Engineering of Ethereum Blockchain Clients", venue: "ACM Distributed Ledger Technologies", year: "2023", desc: "Chaos engineering of Ethereum blockchain clients via syscall fault injection.", url: SCHOLAR("d1gkVwhDpl0C"), tags: ["eBPF", "fault injection", "syscall interception"] },
  { title: "Servo: Increasing the Scalability of Modifiable Virtual Environments using Serverless Computing", venue: "IEEE ICDCS", year: "2023", desc: "Serverless scaling of modifiable virtual environments (Minecraft-like games).", url: SCHOLAR("UeHWp8X0CEIC"), tags: ["Minecraft", "Java", "AWS"] },
];

const THESES = [
  { student: "Vivi Andersson", title: "Geth Rebuild: Verifiable Builds for Go Ethereum", url: "https://kth.diva-portal.org/smash/record.jsf?pid=diva2%3A1908608" },
  { student: "Titouan Forissier", title: "EVeilM: EVM Bytecode Obfuscation", url: "https://kth.diva-portal.org/smash/record.jsf?pid=diva2%3A1935522" },
  { student: "Dhruv Shetty", title: "Minimizing Blast Radius of Chaos Engineering Experiments via Steady-State Metrics Forecasting", url: "https://kth.diva-portal.org/smash/record.jsf?pid=diva2%3A1801368" },
  { student: "Tom Sorger", title: "Towards Zero-Knowledge Software Bill of Materials", url: "https://kth.diva-portal.org/smash/record.jsf?pid=diva2%3A1998445" },
  { student: "Leonard Stutzer", title: "State Validation of Ethash-based Blockchains using a zk-SNARK-based Chain Relay", url: "https://kth.diva-portal.org/smash/record.jsf?pid=diva2%3A1710479" },
];

const AWARDS = [
  { title: "KTH 1-year Scholarship", org: "KTH", year: "2020" },
  { title: "Karl Engvers Scholarship", org: "KTH", year: "2020" },
  { title: "1st place — ETH Prague", org: "Transaction mining for automatic program repair of smart contracts.", year: "2023" },
  { title: "1st place — Essential, ETH Global @ Devcon", org: "Tooling for the Essential programming language: Hardhat integration and LSP.", year: "2024" },
];

const LANGS = [
  "Java",
  "Thrift",
  "React",
  "Hack",
  "Python",
  "Ethereum",
  "Jenkins",
  "Node.js",
  "C",
  "C++",
  "C#",
  "Unity",
];

const SPOKEN = [
  { name: "English", level: "Full Professional" },
  { name: "Spanish", level: "Native" },
  { name: "Swedish", level: "Intermediate" },
];

// ─────────────────────────────────────────────────────────────────────────────
// Small components
// ─────────────────────────────────────────────────────────────────────────────

function AsciiRule() {
  return (
    <div
      aria-hidden
      className="my-8 select-none overflow-hidden whitespace-nowrap text-[var(--rule)]"
    >
      {"─".repeat(200)}
    </div>
  );
}

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="scroll-mt-24 text-xl font-bold text-accent-term sm:text-2xl"
    >
      <span className="text-muted-term">## </span>
      {children}
    </h2>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return <span className="tag-chip">{children}</span>;
}

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer noopener" className="term-link">
      {children}
    </a>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────────────────

function Index() {
  const [active, setActive] = useState<string>("about");
  const [emailCopied, setEmailCopied] = useState(false);

  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(
      (el): el is HTMLElement => !!el,
    );
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
  };

  const copyEmail = async () => {
    const email = "javierron90" + "@" + "gmail.com";
    try {
      await navigator.clipboard.writeText(email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 1500);
    } catch {
      /* noop */
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top window bar / nav */}
      <header className="sticky top-0 z-30 border-b border-rule bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70">
        <div className="flex w-max min-w-full items-center gap-3 px-4 py-2 text-xs sm:text-sm">
          <span className="text-accent-term">▎</span>
          <span className="text-muted-term">~/javier-ron</span>
          <span className="text-accent-term">$</span>
          <nav className="ml-auto flex gap-1 whitespace-nowrap">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={scrollTo(n.id)}
                className={
                  "px-1.5 py-0.5 transition-colors " +
                  (active === n.id
                    ? "bg-accent-term text-[var(--accent-term-foreground)]"
                    : "text-muted-term hover:text-accent-term")
                }
              >
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 pb-24 pt-10 text-sm sm:text-base">
        {/* Hero */}
        <section aria-labelledby="hero">
          <p className="text-muted-term">$ whoami</p>
          <h1
            id="hero"
            className="blink-cursor mt-2 text-3xl font-bold leading-tight text-accent-term sm:text-5xl"
          >
            javier ron
          </h1>
          <p className="mt-4 max-w-2xl text-foreground/90">
            <span className="text-muted-term">{"// "}</span>
            Systems programmer. Researcher on AI for code, verifiable software
            supply chains, and systems reliability. Game programmer.
          </p>
          <p className="mt-3 text-muted-term">
            PhD candidate @ KTH (Stockholm) · prev. Meta, Firstset, Criptext, Freaky Creations.
          </p>
          <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1 text-xs sm:text-sm">
            {NAV.map((n) => (
              <a key={n.id} href={`#${n.id}`} onClick={scrollTo(n.id)} className="term-link">
                [{n.label}]
              </a>
            ))}
          </div>
        </section>

        <AsciiRule />

        {/* About */}
        <section aria-labelledby="about">
          <SectionHeading id="about">about</SectionHeading>
          <div className="mt-4 space-y-3 text-foreground/90">
            <p>
              I&apos;m a PhD candidate at <strong className="text-accent-term">KTH</strong> in
              Stockholm, supervised by{" "}
              <ExternalLink href="https://www.monperrus.net/martin/">
                Martin Monperrus
              </ExternalLink>
              . My research sits at the intersection of AI on code, verifiable
              software supply chains, and the reliability of distributed
              systems (Ethereum in particular).
            </p>
            <p>
              Before academia I shipped a game (
              <em>To Leave</em>) on every major console, ran backend
              microservices at Criptext, and spent a Google Summer of Code
              working on distributed storage. More recently I interned at{" "}
              <strong className="text-accent-term">Meta</strong> on the
              Metadata Store team.
            </p>
          </div>
        </section>

        <AsciiRule />

        {/* Experience */}
        <section aria-labelledby="experience">
          <SectionHeading id="experience">experience</SectionHeading>
          <ul className="mt-6 space-y-7">
            {EXPERIENCE.map((e) => (
              <li key={e.role + e.org} className="grid gap-1">
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <span className="text-accent-term">▸</span>
                  <h3 className="font-bold text-foreground">{e.role}</h3>
                  <span className="text-muted-term">@</span>
                  <span className="text-accent-term">{e.org}</span>
                </div>
                <div className="pl-5 text-xs text-muted-term">
                  {e.location} · {e.dates}
                </div>
                <ul className="mt-1 space-y-1 pl-5 text-foreground/90">
                  {e.bullets.map((b) => (
                    <li key={b}>
                      <span className="text-muted-term">— </span>
                      {b}
                    </li>
                  ))}
                </ul>
                {e.tags && (
                  <div className="mt-1 pl-5">
                    {e.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </section>

        <AsciiRule />

        {/* Education */}
        <section aria-labelledby="education">
          <SectionHeading id="education">education</SectionHeading>
          <ul className="mt-6 space-y-6">
            {EDUCATION.map((ed) => (
              <li key={ed.degree} className="grid gap-1">
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <span className="text-accent-term">▸</span>
                  <h3 className="font-bold text-foreground">{ed.degree}</h3>
                </div>
                <div className="pl-5 text-accent-term">{ed.school}</div>
                <div className="pl-5 text-xs text-muted-term">
                  {ed.location} · {ed.dates}
                </div>
                {ed.notes && (
                  <ul className="mt-1 space-y-1 pl-5 text-foreground/90">
                    {ed.notes.map((n) => (
                      <li key={n}>
                        <span className="text-muted-term">— </span>
                        <span dangerouslySetInnerHTML={{ __html: n }} />
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </section>

        <AsciiRule />

        {/* Publications */}
        <section aria-labelledby="publications">
          <SectionHeading id="publications">publications</SectionHeading>
          <p className="mt-3 text-muted-term">
            <span className="text-muted-term">{"// "}</span>
            full list and PDFs on{" "}
            <ExternalLink href="https://scholar.google.com/citations?user=QSYKdF4AAAAJ&hl=en&inst=3006122349567257957">
              Google Scholar
            </ExternalLink>
            .
          </p>

          <h3 className="mt-6 text-foreground">
            <span className="text-muted-term">&gt; </span>first-authored
          </h3>
          <ul className="mt-3 space-y-4">
            {PUBS_FIRST.map((p) => (
              <PubItem key={p.title} pub={p} />
            ))}
          </ul>

          <h3 className="mt-8 text-foreground">
            <span className="text-muted-term">&gt; </span>collaborations
          </h3>
          <ul className="mt-3 space-y-4">
            {PUBS_COLLAB.map((p) => (
              <PubItem key={p.title} pub={p} />
            ))}
          </ul>

          <h3 className="mt-8 text-foreground">
            <span className="text-muted-term">&gt; </span>master&apos;s thesis supervision
          </h3>
          <p className="mt-2 text-muted-term text-xs">
            browse the full theses on{" "}
            <ExternalLink href="https://kth.diva-portal.org/smash/resultList.jsf?dswid=-4901&language=en&searchType=SIMPLE&query=javier+ron&af=%5B%5D&aq=%5B%5B%5D%5D&aq2=%5B%5B%5D%5D&aqe=%5B%5D&noOfRows=50&sortOrder=author_sort_asc&sortOrder2=title_sort_asc&onlyFullText=false&sf=undergraduate">
              KTH DiVA
            </ExternalLink>
            .
          </p>
          <ul className="mt-3 space-y-2">
            {THESES.map((t) => (
              <li key={t.student} className="text-foreground/90">
                <span className="text-muted-term">— </span>
                <span className="text-accent-term">{t.student}</span>
                <span className="text-muted-term"> · </span>
                <a
                  href={t.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="term-link"
                >
                  {t.title}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <AsciiRule />

        {/* Awards */}
        <section aria-labelledby="awards">
          <SectionHeading id="awards">awards &amp; honors</SectionHeading>
          <ul className="mt-6 space-y-4">
            {AWARDS.map((a) => (
              <li key={a.title} className="grid gap-0.5">
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <span className="text-accent-term">★</span>
                  <span className="font-bold text-foreground">{a.title}</span>
                  <span className="text-muted-term">· {a.year}</span>
                </div>
                <p className="pl-6 text-muted-term">{a.org}</p>
              </li>
            ))}
          </ul>
        </section>

        <AsciiRule />

        {/* Skills */}
        <section aria-labelledby="skills">
          <SectionHeading id="skills">skills</SectionHeading>
          <p className="mt-4 text-muted-term text-xs">programming languages</p>
          <div className="mt-2">
            {LANGS.map((l) => (
              <Tag key={l}>{l}</Tag>
            ))}
          </div>
        </section>

        <AsciiRule />

        {/* Languages */}
        <section aria-labelledby="languages">
          <SectionHeading id="languages">languages</SectionHeading>
          <ul className="mt-4 space-y-1">
            {SPOKEN.map((l) => (
              <li key={l.name}>
                <span className="text-accent-term">{l.name}</span>
                <span className="text-muted-term"> — {l.level}</span>
              </li>
            ))}
          </ul>
        </section>

        <AsciiRule />

        {/* Contact */}
        <section aria-labelledby="contact">
          <SectionHeading id="contact">contact</SectionHeading>
          <div className="mt-4 space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-muted-term">email:</span>
              <code className="text-accent-term">javierron90 [at] gmail [dot] com</code>
              <button
                type="button"
                onClick={copyEmail}
                className="term-link text-xs"
                aria-label="Copy email address"
              >
                {emailCopied ? "[copied!]" : "[copy]"}
              </button>
            </div>
            <ul className="space-y-1">
              <li>
                <span className="text-muted-term">github: </span>
                <ExternalLink href="https://github.com/javierron">
                  @javierron
                </ExternalLink>
              </li>
              <li>
                <span className="text-muted-term">scholar: </span>
                <ExternalLink href="https://scholar.google.com/citations?user=QSYKdF4AAAAJ&hl=en&inst=3006122349567257957">
                  Javier Ron
                </ExternalLink>
              </li>
              <li>
                <span className="text-muted-term">linkedin: </span>
                <ExternalLink href="https://www.linkedin.com/in/javier-ron-arteaga-2ba3a579/">
                  Javier Ron Arteaga
                </ExternalLink>
              </li>
            </ul>
          </div>
        </section>

        <AsciiRule />

        <footer className="mt-2 text-xs text-muted-term">
          <p>
            <span className="text-accent-term">$</span> echo &quot;built with care · Stockholm&quot;
          </p>
          <p className="mt-1">© {new Date().getFullYear()} Javier Ron.</p>
        </footer>
      </main>
    </div>
  );
}

function PubItem({ pub }: { pub: Pub }) {
  return (
    <li className="grid gap-0.5">
      <div className="flex flex-wrap items-baseline gap-x-2">
        <span className="text-accent-term">▸</span>
        <a
          href={pub.url}
          target="_blank"
          rel="noreferrer noopener"
          className="term-link font-bold"
        >
          {pub.title}
        </a>
        <span className="text-muted-term">
          · <em className="not-italic">{pub.venue}</em> · {pub.year}
        </span>
      </div>
      <p className="pl-5 text-foreground/90">{pub.desc}</p>
      {pub.tags && (
        <div className="pl-5">
          {pub.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      )}
    </li>
  );
}
