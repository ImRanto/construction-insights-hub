import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView, animate } from "framer-motion";
import {
  Search, ArrowRight, Calendar, Clock, Eye, User, Mail, MapPin, Phone,
  Facebook, Linkedin, Twitter, Instagram, ChevronLeft, ChevronRight,
  Building2, HardHat, Lightbulb, FileCheck, Quote, CheckCircle2,
} from "lucide-react";
import { articles, categories, popularCategories, projects, heroImg } from "@/lib/blog-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Blog BTP — Actualités, Conseils et Innovations du Bâtiment | Bâtipro" },
      { name: "description", content: "Découvrez nos conseils d'experts, réalisations, tendances et meilleures pratiques pour réussir vos projets de construction, génie civil et travaux publics." },
      { property: "og:title", content: "Blog BTP — Bâtipro" },
      { property: "og:description", content: "Expertise BTP & Construction : articles, études de cas et innovations du bâtiment." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroImg },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Blog",
        name: "Blog Bâtipro",
        description: "Actualités, conseils et innovations du BTP",
        publisher: { "@type": "Organization", name: "Bâtipro" },
      }),
    }],
  }),
  component: BlogPage,
});

// ---------- helpers ----------
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const } }),
};

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, { duration: 2, ease: "easeOut", onUpdate: (v) => setVal(Math.floor(v)) });
    return () => controls.stop();
  }, [inView, to]);
  return <span ref={ref}>{val.toLocaleString("fr-FR")}{suffix}</span>;
}

// ---------- page ----------
function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <SearchBar />
      <FeaturedArticles />
      <ArticleGrid />
      <CategoriesSection />
      <ExpertiseSection />
      <ProjectsSection />
      <StatsSection />
      <TestimonialsSection />
      <NewsletterSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}

// ---------- Header ----------
function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <a href="#" className="flex items-center gap-2 font-display text-xl font-bold tracking-tight">
          <span className="grid h-9 w-9 place-items-center rounded-lg gradient-brand text-brand-foreground shadow-brand">
            <HardHat className="h-5 w-5" />
          </span>
          Bâti<span className="text-brand">pro</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          <a href="#articles" className="text-muted-foreground transition-colors hover:text-foreground">Articles</a>
          <a href="#categories" className="text-muted-foreground transition-colors hover:text-foreground">Catégories</a>
          <a href="#projets" className="text-muted-foreground transition-colors hover:text-foreground">Réalisations</a>
          <a href="#contact" className="text-muted-foreground transition-colors hover:text-foreground">Contact</a>
        </nav>
        <a href="#cta" className="inline-flex items-center gap-2 rounded-full gradient-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground shadow-brand transition-transform hover:scale-105">
          Devis gratuit <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

// ---------- Hero ----------
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <section ref={ref} className="relative isolate overflow-hidden">
      <motion.div style={{ y, opacity }} className="absolute inset-0 -z-10">
        <img src={heroImg} alt="Chantier de construction moderne avec grues et architectes" className="h-full w-full object-cover" width={1920} height={1200} />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/80 to-primary/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
      </motion.div>

      <div className="container-page relative flex min-h-[88vh] flex-col justify-center py-24 text-primary-foreground">
        <motion.span
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          Expertise BTP & Construction
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
        >
          Actualités, Conseils et <span className="text-gradient-brand">Innovations</span> du Bâtiment
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-6 max-w-2xl text-lg text-primary-foreground/80 md:text-xl"
        >
          Découvrez nos conseils d'experts, nos réalisations, les tendances du secteur et les meilleures pratiques pour réussir vos projets de construction.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a href="#articles" className="inline-flex items-center gap-2 rounded-full gradient-brand px-7 py-3.5 font-semibold text-brand-foreground shadow-brand transition-transform hover:scale-105">
            Lire les articles <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#cta" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/5 px-7 py-3.5 font-semibold text-primary-foreground backdrop-blur transition-colors hover:bg-primary-foreground/15">
            Demander un devis
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.7 }}
          className="mt-16 grid max-w-2xl grid-cols-3 gap-8 border-t border-primary-foreground/15 pt-8 text-sm"
        >
          {[["250+", "Articles publiés"], ["150+", "Projets livrés"], ["50+", "Experts BTP"]].map(([n, l]) => (
            <div key={l}>
              <div className="font-display text-2xl font-bold text-brand md:text-3xl">{n}</div>
              <div className="text-primary-foreground/70">{l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ---------- SearchBar ----------
function SearchBar() {
  const [active, setActive] = useState("Tous");
  return (
    <section className="relative -mt-12 z-10">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-border bg-card p-5 shadow-elevated md:p-6"
        >
          <div className="flex items-center gap-3 rounded-xl bg-surface px-4 py-3">
            <Search className="h-5 w-5 text-muted-foreground" />
            <input
              type="search"
              placeholder="Rechercher un article..."
              className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground md:text-base"
            />
            <button className="hidden rounded-lg gradient-brand px-4 py-2 text-sm font-semibold text-brand-foreground md:inline-flex">
              Rechercher
            </button>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                  active === c
                    ? "gradient-brand text-brand-foreground shadow-soft"
                    : "bg-surface text-muted-foreground hover:bg-accent hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ---------- Featured ----------
function FeaturedArticles() {
  const featured = articles.filter((a) => a.featured);
  return (
    <section className="section-y">
      <div className="container-page">
        <SectionHeading kicker="À la Une" title="Articles à la Une" subtitle="Nos sélections éditoriales du mois sur les sujets qui façonnent le secteur." />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {featured.map((a, i) => (
            <motion.article
              key={a.id} custom={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-elevated"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={a.image} alt={a.title} loading="lazy" width={1024} height={768} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <span className="absolute left-4 top-4 rounded-full gradient-brand px-3 py-1 text-xs font-semibold text-brand-foreground shadow-brand">
                  {a.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />{a.date}</span>
                  <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{a.readTime}</span>
                </div>
                <h3 className="mt-3 font-display text-xl font-bold leading-tight transition-colors group-hover:text-brand">{a.title}</h3>
                <p className="mt-3 flex-1 text-sm text-muted-foreground">{a.excerpt}</p>
                <a href="#" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                  Lire l'article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Grid ----------
function ArticleGrid() {
  const [filter, setFilter] = useState("Tous");
  const list = useMemo(() => (filter === "Tous" ? articles : articles.filter((a) => a.category === filter)), [filter]);
  return (
    <section id="articles" className="section-y bg-surface">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading kicker="Tous les articles" title="Derniers articles" subtitle="Analyses, retours d'expérience et conseils pratiques." align="left" />
          <div className="flex flex-wrap gap-2">
            {["Tous", "Architecture", "Innovation", "Construction Durable"].map((c) => (
              <button key={c} onClick={() => setFilter(c)} className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${filter === c ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground hover:text-foreground"}`}>
                {c}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((a, i) => (
            <motion.article
              key={a.id} custom={i % 6} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={a.image} alt={a.title} loading="lazy" width={1024} height={768} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <span className="absolute left-3 top-3 rounded-md bg-card/95 px-2.5 py-1 text-xs font-semibold text-foreground backdrop-blur">{a.category}</span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><User className="h-3 w-3" />{a.author}</span>
                  <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" />{a.date}</span>
                </div>
                <h3 className="mt-3 font-display text-lg font-bold leading-snug transition-colors group-hover:text-brand">{a.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{a.excerpt}</p>
                <div className="mt-4 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" />{a.readTime}</span>
                    <span className="inline-flex items-center gap-1"><Eye className="h-3 w-3" />{a.views.toLocaleString("fr-FR")}</span>
                  </div>
                  <a href="#" className="inline-flex items-center gap-1 font-semibold text-brand">Lire <ArrowRight className="h-3 w-3" /></a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Categories ----------
function CategoriesSection() {
  return (
    <section id="categories" className="section-y">
      <div className="container-page">
        <SectionHeading kicker="Catégories" title="Explorer par catégorie" subtitle="Toute notre expertise organisée par domaine d'intervention." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {popularCategories.map((c, i) => (
            <motion.a
              key={c.name} href="#" custom={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-card"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand/0 transition-colors group-hover:bg-brand/5" />
              <div className="text-4xl">{c.icon}</div>
              <h3 className="mt-4 font-display text-lg font-bold">{c.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.count} articles</p>
              <ArrowRight className="absolute right-5 top-5 h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-brand" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Expertise ----------
function ExpertiseSection() {
  const items = [
    { icon: HardHat, title: "Expertise Technique", desc: "Conseils d'ingénieurs et spécialistes du BTP, basés sur 20 ans d'expérience terrain." },
    { icon: FileCheck, title: "Veille Réglementaire", desc: "Normes RT2020, RE2020, DTU : restez à jour sur toute la réglementation du secteur." },
    { icon: Lightbulb, title: "Innovations", desc: "BIM, impression 3D béton, matériaux biosourcés : la construction de demain dès aujourd'hui." },
    { icon: Building2, title: "Études de Cas", desc: "Retours d'expérience détaillés sur nos chantiers et ceux de nos partenaires." },
  ];
  return (
    <section className="section-y bg-surface">
      <div className="container-page">
        <SectionHeading kicker="Notre valeur" title="Pourquoi suivre notre blog ?" subtitle="Quatre piliers qui font de Bâtipro la référence éditoriale du BTP." />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title} custom={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }}
              className="group rounded-2xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl gradient-brand text-brand-foreground shadow-brand transition-transform group-hover:scale-110">
                <it.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Projects ----------
function ProjectsSection() {
  return (
    <section id="projets" className="section-y">
      <div className="container-page">
        <SectionHeading kicker="Réalisations" title="Nos chantiers emblématiques" subtitle="Des projets qui illustrent notre savoir-faire et notre exigence." />
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.location} custom={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-elevated"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.type} loading="lazy" width={1024} height={768} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-primary-foreground">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-brand px-3 py-1 text-xs font-semibold">
                    <MapPin className="h-3 w-3" />{p.location}
                  </div>
                  <h3 className="mt-2 font-display text-xl font-bold">{p.type}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-muted-foreground">{p.description}</p>
                <div className="mt-5 grid grid-cols-2 gap-4 border-t border-border pt-5 text-sm">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">Budget</div>
                    <div className="mt-0.5 font-display font-bold text-foreground">{p.budget}</div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">Durée</div>
                    <div className="mt-0.5 font-display font-bold text-foreground">{p.duration}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Stats ----------
function StatsSection() {
  const stats = [
    { v: 250, s: "+", l: "Articles publiés" },
    { v: 150, s: "+", l: "Projets réalisés" },
    { v: 50, s: "+", l: "Experts" },
    { v: 10000, s: "+", l: "Lecteurs mensuels" },
  ];
  return (
    <section className="relative overflow-hidden gradient-primary py-20 text-primary-foreground">
      <div className="absolute inset-0 opacity-20 [background:radial-gradient(circle_at_20%_20%,oklch(0.7_0.19_41/0.5),transparent_50%),radial-gradient(circle_at_80%_80%,oklch(0.7_0.19_41/0.3),transparent_50%)]" />
      <div className="container-page relative">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {stats.map((st, i) => (
            <motion.div
              key={st.l} custom={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="text-center"
            >
              <div className="font-display text-5xl font-bold text-brand md:text-6xl">
                <Counter to={st.v} suffix={st.s} />
              </div>
              <div className="mt-2 text-sm uppercase tracking-wider text-primary-foreground/70">{st.l}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Testimonials ----------
function TestimonialsSection() {
  const items = [
    { name: "Hélène Roux", role: "Directrice de projet", company: "Vinci Construction", text: "Les analyses de Bâtipro sont devenues incontournables dans notre veille hebdomadaire. Toujours pointues, toujours actuelles." },
    { name: "Karim Benali", role: "Architecte DPLG", company: "Atelier KB Architectes", text: "Un blog rigoureux qui sait vulgariser sans perdre en profondeur technique. Je le recommande à toute mon équipe." },
    { name: "Sandra Lopez", role: "Promoteur immobilier", company: "Nexity", text: "Les études de cas m'ont permis d'éviter plusieurs écueils sur mes derniers programmes. Un vrai gain de temps." },
    { name: "Pascal Girard", role: "Maître d'ouvrage", company: "Ville de Nantes", text: "Une équipe d'experts BTP qui partage généreusement son savoir. Indispensable pour les acteurs publics." },
  ];
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((i) => (i + 1) % items.length);
  const prev = () => setIdx((i) => (i - 1 + items.length) % items.length);
  return (
    <section className="section-y bg-surface">
      <div className="container-page">
        <SectionHeading kicker="Témoignages" title="Ils nous font confiance" subtitle="Directeurs de projet, architectes et promoteurs partagent leur expérience." />
        <div className="mt-12 grid items-stretch gap-6 md:grid-cols-3">
          {[0, 1, 2].map((off) => {
            const t = items[(idx + off) % items.length];
            return (
              <motion.figure
                key={`${idx}-${off}`}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: off * 0.1 }}
                className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-soft"
              >
                <Quote className="h-8 w-8 text-brand" />
                <blockquote className="mt-4 flex-1 text-foreground">"{t.text}"</blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <div className="grid h-11 w-11 place-items-center rounded-full gradient-brand font-display font-bold text-brand-foreground">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role} · {t.company}</div>
                  </div>
                </figcaption>
              </motion.figure>
            );
          })}
        </div>
        <div className="mt-8 flex items-center justify-center gap-3">
          <button onClick={prev} aria-label="Précédent" className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card transition-colors hover:bg-accent">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button onClick={next} aria-label="Suivant" className="grid h-11 w-11 place-items-center rounded-full gradient-brand text-brand-foreground shadow-brand">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

// ---------- Newsletter ----------
function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  return (
    <section className="section-y">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl gradient-primary p-10 text-primary-foreground shadow-elevated md:p-16">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-brand/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-brand/20 blur-3xl" />
          <div className="relative grid items-center gap-10 md:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
                Newsletter
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">Recevez nos derniers articles</h2>
              <p className="mt-3 text-primary-foreground/80">Restez informé des actualités du secteur BTP, des nouvelles réglementations et de nos meilleurs conseils pratiques.</p>
            </div>
            <form
              onSubmit={(e) => { e.preventDefault(); if (email.includes("@")) setDone(true); }}
              className="rounded-2xl bg-primary-foreground/10 p-2 backdrop-blur"
            >
              <div className="flex items-center gap-2 rounded-xl bg-primary-foreground/5 px-4 py-3">
                <Mail className="h-5 w-5 text-primary-foreground/70" />
                <input
                  type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre@email.com"
                  className="w-full bg-transparent text-primary-foreground outline-none placeholder:text-primary-foreground/50"
                />
              </div>
              <button type="submit" className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl gradient-brand py-3.5 font-semibold text-brand-foreground shadow-brand transition-transform hover:scale-[1.02]">
                {done ? (<><CheckCircle2 className="h-5 w-5" /> Inscription confirmée</>) : (<>S'abonner <ArrowRight className="h-4 w-4" /></>)}
              </button>
              <p className="mt-3 text-center text-xs text-primary-foreground/60">Pas de spam. Désabonnement en un clic.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Final CTA ----------
function FinalCTA() {
  return (
    <section id="cta" className="section-y bg-surface">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="grid items-center gap-10 rounded-3xl border border-border bg-card p-10 shadow-card md:grid-cols-2 md:p-14"
        >
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
              Votre projet
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-5xl">Vous avez un projet de <span className="text-gradient-brand">construction</span> ?</h2>
            <p className="mt-4 text-lg text-muted-foreground">Notre équipe vous accompagne de l'étude à la réalisation. Bénéficiez d'un audit gratuit par nos experts BTP en moins de 48h.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#" className="inline-flex items-center gap-2 rounded-full gradient-brand px-7 py-3.5 font-semibold text-brand-foreground shadow-brand transition-transform hover:scale-105">
                Demander un devis <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-7 py-3.5 font-semibold transition-colors hover:bg-accent">
                Nous contacter
              </a>
            </div>
          </div>
          <div className="relative">
            <img src={heroImg} alt="Équipe BTP sur chantier" loading="lazy" width={1024} height={768} className="aspect-[5/4] w-full rounded-2xl object-cover shadow-elevated" />
            <div className="absolute -bottom-5 -left-5 rounded-2xl border border-border bg-card p-4 shadow-card">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full gradient-brand text-brand-foreground">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div className="text-sm">
                  <div className="font-bold">Réponse 48h</div>
                  <div className="text-xs text-muted-foreground">Audit gratuit</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ---------- Footer ----------
function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 font-display text-xl font-bold">
              <span className="grid h-9 w-9 place-items-center rounded-lg gradient-brand text-brand-foreground"><HardHat className="h-5 w-5" /></span>
              Bâti<span className="text-brand">pro</span>
            </div>
            <p className="mt-4 text-sm text-primary-foreground/70">Entreprise française de BTP spécialisée dans la construction, le génie civil et les travaux publics depuis 1985.</p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Linkedin, Twitter, Instagram].map((I, i) => (
                <a key={i} href="#" aria-label="Réseau social" className="grid h-10 w-10 place-items-center rounded-full border border-primary-foreground/15 transition-colors hover:bg-brand hover:border-brand">
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display font-bold">Liens rapides</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/70">
              {["Accueil", "Articles", "Réalisations", "À propos", "Contact"].map((l) => (
                <li key={l}><a href="#" className="transition-colors hover:text-brand">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold">Services</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/70">
              {["Construction neuve", "Rénovation", "Génie civil", "Travaux publics", "Maîtrise d'œuvre"].map((l) => (
                <li key={l}><a href="#" className="transition-colors hover:text-brand">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2.5"><MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" /><span>24 avenue des Bâtisseurs, 75015 Paris</span></li>
              <li className="flex items-center gap-2.5"><Phone className="h-4 w-4 flex-shrink-0 text-brand" /><span>+33 1 23 45 67 89</span></li>
              <li className="flex items-center gap-2.5"><Mail className="h-4 w-4 flex-shrink-0 text-brand" /><span>contact@batipro.fr</span></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 text-xs text-primary-foreground/50 md:flex-row">
          <div>© 2026 Bâtipro. Tous droits réservés.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand">Mentions légales</a>
            <a href="#" className="hover:text-brand">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ---------- Section heading ----------
function SectionHeading({ kicker, title, subtitle, align = "center" }: { kicker: string; title: string; subtitle?: string; align?: "center" | "left" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
      className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}
    >
      <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
        <span className="h-1.5 w-1.5 rounded-full bg-brand" />{kicker}
      </span>
      <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground md:text-lg">{subtitle}</p>}
    </motion.div>
  );
}
