import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { ParallaxImage } from "@/components/site/ParallaxImage";
import { useScrollY } from "@/hooks/use-scroll-fx";
import { cn } from "@/lib/utils";
import scheduleCall from "@/assets/schedule-call.jpg";
import {
  CALENDLY_URL,
  EMAIL,
  HERO_IMAGE,
  LOCATION,
  LOGO_URL,
  PHONE,
  PHONE_HREF,
  COMING_SOON,
  PROCESS,
  PROJECTS,
  SERVICES,
} from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Decobay & OCD | Design–Build Contractor in the Bay Area" },
      {
        name: "description",
        content:
          "Decobay & OCD is a Bay Area design–build studio and general contractor: custom homes, ADUs, kitchen and bath remodels, foundations and commercial build-outs.",
      },
      { property: "og:title", content: "Decobay & OCD | Design–Build Contractor in the Bay Area" },
      {
        property: "og:description",
        content:
          "Decobay & OCD is a Bay Area design–build studio and general contractor: custom homes, ADUs, kitchen and bath remodels, foundations and commercial build-outs.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: HERO_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: HERO_IMAGE },
    ],
  }),
  component: Index,
});

const NAV = [
  { label: "Studio", href: "#studio" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Coming soon", href: "#coming-soon" },
];

function Header() {
  const y = useScrollY();
  const solid = y > 40;
  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        solid ? "bg-background/85 py-3 backdrop-blur-md" : "py-6",
      )}
    >
      <div className="mx-auto flex max-w-[86rem] items-center justify-between px-6 md:px-10">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={LOGO_URL}
            alt="Decobay & OCD"
            className={cn(
              "w-auto transition-all duration-500",
              solid ? "h-10 md:h-12" : "h-14 md:h-16",
            )}
          />
          <span className="sr-only">Decobay &amp; OCD</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-muted-foreground transition-colors hover:text-accent"
            >
              {n.label}
            </a>
          ))}
          <a
            href="#schedule"
            className="rounded-full bg-primary px-5 py-2.5 text-xs tracking-[0.14em] text-primary-foreground uppercase transition-transform duration-300 hover:scale-[1.04]"
          >
            Schedule a call
          </a>
        </nav>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-primary px-4 py-2 text-[11px] tracking-[0.14em] text-primary-foreground uppercase md:hidden"
        >
          Book
        </a>
      </div>
    </header>
  );
}

function Hero() {
  const y = useScrollY();
  return (
    <section id="top" className="relative h-[100svh] min-h-[620px] overflow-hidden">
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translate3d(0, ${y * 0.35}px, 0) scale(1.12)` }}
      >
        <img
          src={HERO_IMAGE}
          alt="Bay Area design–build kitchen renovation by Decobay & OCD"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/45 to-background/10" />
      <div className="relative mx-auto flex h-full max-w-[86rem] flex-col justify-end px-6 pb-20 md:px-10 md:pb-28">
        <Reveal delay={100}>
          <p className="eyebrow">Decobay &amp; OCD · The Bay Area, California</p>
        </Reveal>
        <Reveal delay={220}>
          <h1 className="font-display mt-6 max-w-4xl text-[clamp(2.8rem,7.5vw,6rem)] leading-[0.95] tracking-tight">
            Interiors and <em className="text-accent not-italic italic">construction</em>,
            <br className="hidden md:block" /> under one roof.
          </h1>
        </Reveal>
        <Reveal delay={340}>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground">
            A Bay Area design–build studio and licensed general contractor — custom homes, ADUs,
            kitchen and bath remodels, foundations and commercial build-outs, shaped around how the
            space will actually be lived in.
          </p>
        </Reveal>
        <Reveal delay={460}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#schedule"
              className="rounded-full bg-primary px-7 py-3.5 text-sm text-primary-foreground transition-transform duration-300 hover:scale-[1.04]"
            >
              Schedule a call
            </a>
            <a
              href="#projects"
              className="rounded-full border border-foreground/25 px-7 py-3.5 text-sm transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              View projects
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Studio() {
  return (
    <section id="studio" className="mx-auto max-w-[86rem] px-6 py-28 md:px-10 md:py-40">
      <Reveal>
        <p className="eyebrow">01 — Studio</p>
      </Reveal>
      <Reveal delay={120}>
        <h2 className="font-display mt-8 max-w-3xl text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.05]">
          A team devoted to timeless spaces — and to building them properly.
        </h2>
      </Reveal>
      <div className="mt-20 grid gap-14 md:grid-cols-3">
        {[
          {
            t: "Our philosophy",
            d: "Design is a collaboration. We listen first, then shape spaces that are beautiful and quietly functional.",
          },
          {
            t: "Our experience",
            d: "Over a decade refining residential and commercial work across the Bay Area — from a single room to a full ground-up build.",
          },
          {
            t: "Our approach",
            d: "Light, material, structure and flow considered together, with transparent pricing and one point of contact throughout.",
          },
        ].map((c, i) => (
          <Reveal key={c.t} delay={i * 140}>
            <div className="border-t border-border pt-7">
              <h3 className="font-display text-2xl">{c.t}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="bg-sand/60 py-28 md:py-40">
      <div className="mx-auto max-w-[86rem] px-6 md:px-10">
        <Reveal>
          <p className="eyebrow">02 — Selected work</p>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="font-display mt-8 max-w-2xl text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.05]">
            Recent projects
          </h2>
        </Reveal>

        <div className="mt-20 space-y-24 md:space-y-32">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title}>
              <article
                className={cn(
                  "grid items-center gap-10 md:grid-cols-12 md:gap-16",
                  i % 2 === 1 && "md:[&>figure]:order-first",
                )}
              >
                <div className={cn("md:col-span-5", i % 2 === 1 && "md:col-start-8")}>
                  <p className="eyebrow">
                    {p.tag} · {p.place}
                  </p>
                  <h3 className="font-display mt-4 text-[clamp(1.75rem,3vw,2.75rem)] leading-tight">
                    {p.title}
                  </h3>
                  <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
                    {p.text}
                  </p>
                </div>
                <figure
                  className={cn(
                    "md:col-span-7",
                    i % 2 === 1 ? "md:col-start-1 md:row-start-1" : "",
                  )}
                >
                  <ParallaxImage
                    src={p.image}
                    alt={`${p.title} — ${p.place}, California`}
                    strength={40}
                    className="h-[42vh] min-h-[280px] w-full md:h-[62vh]"
                  />
                </figure>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComingSoon() {
  return (
    <section id="coming-soon" className="mx-auto max-w-[86rem] px-6 py-28 md:px-10 md:py-40">
      <Reveal>
        <p className="eyebrow">06 — Coming soon</p>
      </Reveal>
      <Reveal delay={120}>
        <h2 className="font-display mt-8 max-w-3xl text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.05]">
          {COMING_SOON.title}
        </h2>
      </Reveal>
      <Reveal delay={200}>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
          {COMING_SOON.text}
        </p>
      </Reveal>
      <div className="mt-16 grid gap-6 sm:grid-cols-2">
        {COMING_SOON.images.map((src, i) => (
          <Reveal key={src} delay={(i % 2) * 120}>
            <ParallaxImage
              src={src}
              alt={`${COMING_SOON.title} — construction progress ${i + 1}, ${COMING_SOON.place}`}
              strength={30}
              className="h-[34vh] min-h-[240px] w-full md:h-[46vh]"
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="mx-auto max-w-[86rem] px-6 py-28 md:px-10 md:py-40">
      <Reveal>
        <p className="eyebrow">03 — Services</p>
      </Reveal>
      <Reveal delay={120}>
        <h2 className="font-display mt-8 max-w-3xl text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.05]">
          From a single room to a ground-up build.
        </h2>
      </Reveal>
      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => (
          <Reveal key={s.n} delay={(i % 3) * 120}>
            <div className="group h-full bg-card">
              <div className="media-zoom h-56 w-full">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="px-1 pt-6">
                <div className="flex items-baseline gap-4">
                  <span className="text-xs text-accent">{s.n}</span>
                  <h3 className="font-display text-2xl leading-snug">{s.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="bg-primary py-28 text-primary-foreground md:py-40">
      <div className="mx-auto max-w-[86rem] px-6 md:px-10">
        <Reveal>
          <p className="eyebrow text-primary-foreground/55">04 — How it works</p>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="font-display mt-8 max-w-2xl text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.05]">
            Plan &amp; design process
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-px border-t border-primary-foreground/15">
          {PROCESS.map((p, i) => (
            <Reveal key={p.n} delay={i * 90}>
              <div className="grid gap-4 border-b border-primary-foreground/15 py-8 md:grid-cols-12 md:items-baseline">
                <span className="text-xs tracking-[0.2em] text-accent md:col-span-1">{p.n}</span>
                <h3 className="font-display text-2xl md:col-span-4">{p.title}</h3>
                <p className="text-sm leading-relaxed text-primary-foreground/65 md:col-span-7">
                  {p.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Schedule() {
  const [hover, setHover] = useState(false);
  return (
    <section id="schedule" className="relative overflow-hidden py-28 md:py-40">
      <div className="pointer-events-none absolute -top-40 -right-40 h-[36rem] w-[36rem] rounded-full bg-clay/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-52 -left-40 h-[32rem] w-[32rem] rounded-full bg-sand blur-3xl" />
      <div className="relative mx-auto grid max-w-[86rem] items-center gap-14 px-6 md:grid-cols-12 md:px-10">
        <Reveal className="md:col-span-5">
          <div className="relative">
            <div className="absolute -top-5 -left-5 h-full w-full rounded-[2rem] border border-accent/35" />
            <div className="media-zoom relative aspect-4/5 w-full rounded-[2rem]">
              <img
                src={scheduleCall}
                alt="Decobay & OCD project advisor smiling, ready for your consultation call"
                loading="lazy"
                width={1024}
                height={1280}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -right-4 -bottom-6 rounded-2xl bg-card px-6 py-4 shadow-[0_20px_60px_-25px_rgba(60,40,25,0.45)]">
              <p className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
                Free consultation
              </p>
              <p className="font-display text-2xl">30 minutes</p>
            </div>
          </div>
        </Reveal>

        <div className="md:col-span-7 md:pl-6">
          <Reveal>
            <p className="eyebrow">05 — Start here</p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="font-display mt-7 text-[clamp(2.2rem,5vw,4.2rem)] leading-[1.02]">
              Let&apos;s talk about <em className="text-accent italic">your space</em>.
            </h2>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              No forms, no waiting. Pick a time that suits you and we&apos;ll walk through your
              project, the realistic budget range and what the next step looks like — with someone
              who will actually be on your job.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              className="group mt-10 inline-flex items-center gap-4 rounded-full bg-accent px-9 py-5 text-accent-foreground shadow-[0_24px_60px_-24px_rgba(160,90,45,0.8)] transition-all duration-500 hover:scale-[1.04] hover:shadow-[0_30px_70px_-22px_rgba(160,90,45,0.9)]"
            >
              <span className="text-base tracking-wide">Schedule a call</span>
              <span
                className={cn(
                  "text-lg transition-transform duration-500",
                  hover ? "translate-x-1.5" : "",
                )}
                aria-hidden
              >
                →
              </span>
            </a>
          </Reveal>
          <Reveal delay={420}>
            <div className="mt-12 grid gap-6 border-t border-border pt-8 sm:grid-cols-3">
              <div>
                <p className="eyebrow">Call</p>
                <a href={PHONE_HREF} className="mt-2 block text-sm hover:text-accent">
                  {PHONE}
                </a>
              </div>
              <div>
                <p className="eyebrow">Email</p>
                <a href={`mailto:${EMAIL}`} className="mt-2 block text-sm break-all hover:text-accent">
                  {EMAIL}
                </a>
              </div>
              <div>
                <p className="eyebrow">Where</p>
                <p className="mt-2 text-sm">{LOCATION}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-sand/50">
      <div className="mx-auto grid max-w-[86rem] gap-12 px-6 py-16 md:grid-cols-3 md:px-10">
        <div>
          <img src={LOGO_URL} alt="Decobay & OCD" className="h-16 w-auto" loading="lazy" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Decobay &amp; OCD — design–build studio and licensed general contractor serving the Bay
            Area, California.
          </p>
        </div>
        <div>
          <p className="eyebrow">Explore</p>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="transition-colors hover:text-accent">
                  {n.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#schedule" className="transition-colors hover:text-accent">
                Schedule a call
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="eyebrow">Contact</p>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li>
              <a href={PHONE_HREF} className="hover:text-accent">
                {PHONE}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="break-all hover:text-accent">
                {EMAIL}
              </a>
            </li>
            <li>{LOCATION}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/70 py-6">
        <p className="mx-auto max-w-[86rem] px-6 text-xs text-muted-foreground md:px-10">
          © {new Date().getFullYear()} Decobay &amp; OCD — All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function Index() {
  useEffect(() => {
    document.documentElement.classList.remove("dark");
  }, []);
  return (
    <main>
      <Header />
      <Hero />
      <Studio />
      <Projects />
      <Services />
      <Process />
      <Schedule />
      <ComingSoon />
      <Footer />
    </main>
  );
}
