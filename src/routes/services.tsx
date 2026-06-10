import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView, animate, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Building2, Home, Hammer, TrafficCone, Bridge, Layers,
  CheckCircle2, ShieldCheck, Users, Clock, Wrench, Sparkles, Award,
  ChevronLeft, ChevronRight, Mail, MapPin, Phone, Facebook, Linkedin, Twitter, Instagram,
  FileSearch, ClipboardList, FileCheck, Calendar, HardHat, KeyRound, Quote,
  Truck, Cog, ChevronDown,
} from "lucide-react";
import heroImg from "@/assets/hero-construction.jpg";
import teamImg from "@/assets/services-team.jpg";
import p1 from "@/assets/article-1.jpg";
import p2 from "@/assets/article-2.jpg";
import p3 from "@/assets/article-3.jpg";
import p4 from "@/assets/article-5.jpg";
import p5 from "@/assets/article-6.jpg";
import p6 from "@/assets/article-10.jpg";
import p7 from "@/assets/article-11.jpg";
import p8 from "@/assets/article-8.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services BTP — Construction, Rénovation & Travaux Publics | Bâtipro" },
      { name: "description", content: "Découvrez nos services BTP : construction de bâtiments, résidentiel, rénovation, travaux publics, ouvrages d'art et génie civil. Demandez votre devis gratuit." },
      { property: "og:title", content: "Services BTP — Bâtipro" },
      { property: "og:description", content: "Construction, rénovation et infrastructures publiques. 15+ ans d'expertise, 500+ projets livrés." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroImg },
      { property: "og:url", content: "/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Bâtiment et Travaux Publics",
        provider: { "@type": "Organization", name: "Bâtipro" },
        areaServed: "FR",
        description: "Construction, rénovation et travaux publics pour particuliers, entreprises et collectivités.",
      }),
    }],
  }),
  component: ServicesPage,
});

// ----- helpers -----
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] as const } }),
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

function SectionHeading({ kicker, title, subtitle, align = "center" }: { kicker: string; title: string; subtitle?: string; align?: "center" | "left" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
      className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}
    >
      <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
        <span className="h-1.5 w-1.5 rounded-full bg-brand" /><span>{kicker}</span>
      </span>
      <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground md:text-lg">{subtitle}</p>}
    </motion.div>
  );
}

// ----- data -----
const services = [
  {
    icon: Building2, title: "Construction de bâtiments",
    desc: "Conception et réalisation de structures professionnelles à forte exigence technique.",
    items: ["Immeubles de grande hauteur", "Bureaux & sièges sociaux", "Centres commerciaux", "Bâtiments industriels"],
  },
  {
    icon: Home, title: "Construction résidentielle",
    desc: "Des logements pensés pour le confort, la durabilité et la performance énergétique.",
    items: ["Villas haut de gamme", "Résidences collectives", "Appartements neufs", "Lotissements complets"],
  },
  {
    icon: Hammer, title: "Rénovation & réhabilitation",
    desc: "Valorisez votre patrimoine bâti grâce à nos expertises de rénovation lourde et légère.",
    items: ["Modernisation complète", "Réhabilitation énergétique", "Extensions & surélévations", "Mise aux normes"],
  },
  {
    icon: TrafficCone, title: "Travaux publics",
    desc: "Infrastructures durables au service des territoires et des collectivités.",
    items: ["Routes & autoroutes", "Voiries urbaines", "Réseaux d'assainissement", "Aménagements paysagers"],
  },
  {
    icon: Bridge, title: "Ouvrages d'art",
    desc: "Structures d'exception qui repoussent les limites de l'ingénierie.",
    items: ["Ponts & passerelles", "Viaducs", "Structures métalliques", "Tunnels & galeries"],
  },
  {
    icon: Layers, title: "Génie civil",
    desc: "Fondations, structures et béton armé pour les projets les plus exigeants.",
    items: ["Fondations spéciales", "Béton armé & précontraint", "Terrassements lourds", "Structures complexes"],
  },
];

const process = [
  { icon: FileSearch, title: "Analyse du projet", desc: "Compréhension de vos besoins, contraintes et ambitions." },
  { icon: ClipboardList, title: "Étude technique", desc: "Faisabilité, ingénierie et préconisations détaillées." },
  { icon: FileCheck, title: "Devis détaillé", desc: "Chiffrage transparent, planning et engagements contractuels." },
  { icon: Calendar, title: "Planification", desc: "Coordination des corps d'état et sécurisation du chantier." },
  { icon: HardHat, title: "Exécution", desc: "Pilotage qualité, suivi quotidien et respect des délais." },
  { icon: KeyRound, title: "Livraison finale", desc: "Réception, garanties et accompagnement post-livraison." },
];

const reasons = [
  { icon: Award, title: "Expertise reconnue", desc: "15+ années à livrer des projets emblématiques en France." },
  { icon: Users, title: "Équipe qualifiée", desc: "Ingénieurs, conducteurs de travaux et compagnons certifiés." },
  { icon: Clock, title: "Respect des délais", desc: "Méthode Lean Construction et reporting transparent." },
  { icon: ShieldCheck, title: "Respect du budget", desc: "Chiffrage maîtrisé, zéro mauvaise surprise." },
  { icon: Sparkles, title: "Technologies modernes", desc: "BIM 360, drones, IA et matériaux bas carbone." },
  { icon: Wrench, title: "Accompagnement complet", desc: "De l'esquisse à la maintenance, un interlocuteur unique." },
];

type ProjectCat = "Tous" | "Bâtiments" | "Routes" | "Ponts" | "Villas" | "Génie Civil";
const projects: { title: string; cat: Exclude<ProjectCat, "Tous">; location: string; budget: string; duration: string; desc: string; image: string }[] = [
  { title: "Tour Horizon", cat: "Bâtiments", location: "La Défense, Paris", budget: "240 M€", duration: "36 mois", desc: "Immeuble de bureaux HQE 42 étages, certification BREEAM Excellent.", image: p1 },
  { title: "Pont du Levant", cat: "Ponts", location: "Marseille", budget: "85 M€", duration: "28 mois", desc: "Pont haubané franchissant le port autonome.", image: p2 },
  { title: "Villa Belvédère", cat: "Villas", location: "Saint-Tropez", budget: "6,4 M€", duration: "14 mois", desc: "Villa contemporaine RT2020 avec piscine à débordement.", image: p3 },
  { title: "Autoroute A89 Sud", cat: "Routes", location: "Lyon — Clermont", budget: "180 M€", duration: "32 mois", desc: "42 km de chaussée neuve avec enrobés écologiques.", image: p4 },
  { title: "Résidence Lumière", cat: "Bâtiments", location: "Bordeaux", budget: "32 M€", duration: "22 mois", desc: "120 logements collectifs labellisés E+C-.", image: p5 },
  { title: "Centre hospitalier", cat: "Bâtiments", location: "Lyon", budget: "98 M€", duration: "30 mois", desc: "Pôle médical de très haute exigence sanitaire.", image: p6 },
  { title: "Plateforme XXL", cat: "Génie Civil", location: "Lille", budget: "55 M€", duration: "18 mois", desc: "Dalle industrielle 60 000 m² pour e-commerce.", image: p7 },
  { title: "Viaduc des Cèdres", cat: "Ponts", location: "Annecy", budget: "42 M€", duration: "20 mois", desc: "Viaduc en béton précontraint à 6 piles.", image: p8 },
];

const equipment = [
  { name: "Pelles mécaniques", icon: Cog },
  { name: "Bulldozers", icon: Truck },
  { name: "Grues à tour", icon: Building2 },
  { name: "Compacteurs", icon: Cog },
  { name: "Camions-bennes", icon: Truck },
  { name: "Bétonnières", icon: Wrench },
];

const testimonials = [
  { name: "Isabelle Caron", role: "Directrice immobilière", company: "Groupe Altarea", quote: "Bâtipro a livré notre programme de 80 logements dans les délais et avec une qualité d'exécution remarquable." },
  { name: "Marc Vidal", role: "Maire", company: "Ville de Saint-Étienne", quote: "Un partenaire fiable pour nos projets de voirie. Sécurité, transparence et écoute, c'est rare." },
  { name: "Sophie Lambert", role: "Directrice des opérations", company: "Carrefour Property", quote: "Trois centres commerciaux livrés en cinq ans. Une équipe à la hauteur des plus grandes ambitions." },
  { name: "Antoine Mercier", role: "Particulier", company: "Villa Belvédère", quote: "Notre villa est une œuvre d'art. Chaque détail a été pensé, exécuté et soigné." },
  { name: "Élise Dubois", role: "Responsable infrastructures", company: "Vinci Concessions", quote: "Une parfaite maîtrise du génie civil et des ouvrages d'art complexes." },
  { name: "Pierre Aubert", role: "Directeur technique", company: "SNCF Réseau", quote: "Sérieux, méthode et innovation : nous renouvelons notre confiance chaque année." },
];

const faqs = [
  { q: "Quels types de projets réalisez-vous ?", a: "Nous intervenons sur tous types de projets BTP : bâtiments résidentiels et tertiaires, infrastructures publiques, ouvrages d'art, génie civil et rénovation lourde, pour les particuliers, entreprises et collectivités." },
  { q: "Comment obtenir un devis ?", a: "Vous pouvez nous contacter via le formulaire en ligne, par téléphone ou par email. Un chargé d'affaires vous rappellera sous 48h pour qualifier votre besoin et planifier une visite technique gratuite." },
  { q: "Quels sont les délais moyens ?", a: "Les délais varient selon la nature du projet : 4 à 8 mois pour une villa, 18 à 36 mois pour un immeuble, 12 à 30 mois pour un ouvrage d'art. Un planning détaillé est remis avec chaque devis." },
  { q: "Travaillez-vous sur tout le territoire ?", a: "Oui, nous intervenons sur l'ensemble du territoire français métropolitain et accompagnons également des projets à l'international via notre filiale dédiée." },
  { q: "Comment garantissez-vous la qualité ?", a: "Nous appliquons un système qualité ISO 9001, un suivi BIM intégral, des contrôles tiers indépendants et bénéficions des garanties décennale et de parfait achèvement." },
];

const certifications = [
  { name: "ISO 9001", subtitle: "Management qualité" },
  { name: "ISO 14001", subtitle: "Management environnemental" },
  { name: "MASE", subtitle: "Sécurité chantier" },
  { name: "Qualibat RGE", subtitle: "Performance énergétique" },
  { name: "ISO 45001", subtitle: "Santé & sécurité au travail" },
  { name: "NF Habitat HQE", subtitle: "Qualité bâtiment" },
];

// ----- page -----
function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Breadcrumb />
        <Presentation />
        <ServicesGrid />
        <ProcessSection />
        <WhyUs />
        <PortfolioSection />
        <StatsSection />
        <EquipmentSection />
        <TestimonialsSection />
        <FAQSection />
        <CertificationsSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

// ----- Header -----
function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-md gradient-primary text-primary-foreground">
            <HardHat className="h-5 w-5" />
          </div>
          <span className="font-display text-lg font-bold tracking-tight">Bâtipro</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          <Link to="/" className="text-muted-foreground hover:text-foreground">Accueil</Link>
          <Link to="/services" className="text-foreground" activeProps={{ className: "text-foreground" }}>Services</Link>
          <a href="#realisations" className="text-muted-foreground hover:text-foreground">Réalisations</a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground">Contact</a>
        </nav>
        <a href="#cta" className="inline-flex items-center gap-2 rounded-md gradient-brand px-4 py-2 text-sm font-semibold text-brand-foreground shadow-brand hover:opacity-95">
          Devis gratuit <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

// ----- Hero -----
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section ref={ref} className="relative isolate overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <img src={heroImg} alt="Chantier de construction moderne avec grues et ouvriers" className="h-[120%] w-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/75 to-primary/95" />
      </motion.div>

      <div className="container-page relative py-24 md:py-36 lg:py-44">
        <motion.div initial="hidden" animate="show" variants={fadeUp} className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" /><span>Expert en Construction & Travaux Publics</span>
          </span>
          <h1 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-6xl lg:text-7xl">
            Des solutions de construction <span className="text-gradient-brand">fiables</span> pour tous vos projets.
          </h1>
          <p className="mt-6 max-w-2xl text-base text-primary-foreground/80 md:text-lg">
            Nous accompagnons les particuliers, entreprises et collectivités dans la réalisation de projets de construction, rénovation et infrastructures publiques.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#cta" className="inline-flex items-center gap-2 rounded-md gradient-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-brand hover:opacity-95">
              Demander un devis <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#realisations" className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 bg-primary-foreground/5 px-6 py-3 text-sm font-semibold text-primary-foreground backdrop-blur hover:bg-primary-foreground/10">
              Découvrir nos réalisations
            </a>
          </div>
        </motion.div>

        <motion.div
          initial="hidden" animate="show"
          className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 md:mt-20 md:grid-cols-4"
        >
          {[
            { value: 500, suffix: "+", label: "Projets réalisés" },
            { value: 15, suffix: "+", label: "Années d'expérience" },
            { value: 100, suffix: "+", label: "Collaborateurs" },
            { value: 98, suffix: "%", label: "Satisfaction client" },
          ].map((s, i) => (
            <motion.div key={s.label} custom={i} variants={fadeUp}
              className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-5 backdrop-blur-md">
              <div className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-primary-foreground/70">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ----- Breadcrumb -----
function Breadcrumb() {
  return (
    <nav aria-label="Fil d'Ariane" className="border-b border-border/60 bg-secondary/50">
      <div className="container-page py-3 text-xs text-muted-foreground">
        <Link to="/" className="hover:text-foreground">Accueil</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Services</span>
      </div>
    </nav>
  );
}

// ----- Presentation -----
function Presentation() {
  return (
    <section className="section-y">
      <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" /><span>Notre savoir-faire</span>
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Notre expertise au service de vos ambitions
          </h2>
          <p className="mt-5 text-muted-foreground md:text-lg">
            Depuis plus de 15 ans, Bâtipro conjugue excellence technique, exigence qualité et innovation pour livrer des projets durables qui transforment durablement les territoires.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Expertise technique multi-métiers reconnue par la profession",
              "Qualité d'exécution contrôlée à chaque étape",
              "Respect strict des délais et des budgets engagés",
              "Sécurité chantier — politique zéro accident",
              "Innovation continue : BIM, drones, IA et matériaux bas carbone",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="relative">
          <div className="overflow-hidden rounded-3xl shadow-elevated">
            <img src={teamImg} alt="Équipe d'ingénieurs BTP étudiant des plans sur un chantier" className="h-full w-full object-cover" loading="lazy" width={1536} height={1024} />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-card p-5 shadow-card md:block">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-xl gradient-brand text-brand-foreground">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <div className="font-display text-lg font-bold">Certifié ISO 9001</div>
                <div className="text-xs text-muted-foreground">Management qualité garanti</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ----- Services grid -----
function ServicesGrid() {
  return (
    <section id="services" className="section-y bg-secondary/40">
      <div className="container-page">
        <SectionHeading kicker="Nos services" title="Une expertise complète, du gros œuvre à la livraison" subtitle="Six pôles d'expertise pour répondre à tous les enjeux du bâtiment et des travaux publics." />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.article key={s.title}
              initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }}
              custom={i} variants={fadeUp}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-elevated"
            >
              <div className="absolute right-0 top-0 h-32 w-32 -translate-y-12 translate-x-12 rounded-full bg-brand/5 transition-transform group-hover:scale-150" />
              <div className="relative grid h-14 w-14 place-items-center rounded-2xl gradient-primary text-primary-foreground shadow-card">
                <s.icon className="h-7 w-7" />
              </div>
              <h3 className="relative mt-5 font-display text-xl font-bold">{s.title}</h3>
              <p className="relative mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <ul className="relative mt-5 space-y-2 text-sm">
                {s.items.map((it) => (
                  <li key={it} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
              <a href="#cta" className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-all group-hover:gap-2.5">
                En savoir plus <ArrowRight className="h-4 w-4" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ----- Process -----
function ProcessSection() {
  return (
    <section className="section-y">
      <div className="container-page">
        <SectionHeading kicker="Méthodologie" title="Comment nous travaillons" subtitle="Un processus éprouvé en six étapes pour la réussite de votre projet." />
        <div className="relative mt-14">
          <div className="absolute left-1/2 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-border to-transparent md:block" />
          <div className="space-y-10 md:space-y-16">
            {process.map((step, i) => (
              <motion.div key={step.title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }}
                className={`relative grid items-center gap-6 md:grid-cols-2 md:gap-12 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
              >
                <div className={`${i % 2 === 1 ? "md:text-left" : "md:text-right"}`}>
                  <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand">
                    Étape {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-bold md:text-3xl">{step.title}</h3>
                  <p className="mt-2 text-muted-foreground">{step.desc}</p>
                </div>
                <div className="relative flex md:justify-center">
                  <div className="absolute left-1/2 top-1/2 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-background bg-brand shadow-brand md:block" />
                  <div className={`grid h-24 w-24 place-items-center rounded-3xl gradient-primary text-primary-foreground shadow-elevated md:h-32 md:w-32 ${i % 2 === 1 ? "md:ml-auto" : "md:mr-auto"}`}>
                    <step.icon className="h-10 w-10 md:h-12 md:w-12" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ----- Why Us -----
function WhyUs() {
  return (
    <section className="section-y bg-primary text-primary-foreground">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" /><span>Pourquoi nous choisir</span>
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl lg:text-5xl">Six raisons de nous faire confiance</h2>
          <p className="mt-4 text-primary-foreground/70 md:text-lg">L'engagement d'un grand groupe BTP, la proximité d'un partenaire dédié.</p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <motion.div key={r.title}
              initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }}
              custom={i} variants={fadeUp}
              className="group rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-7 backdrop-blur transition-all hover:-translate-y-1 hover:border-brand/40 hover:bg-primary-foreground/10"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl gradient-brand text-brand-foreground shadow-brand">
                <r.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold">{r.title}</h3>
              <p className="mt-2 text-sm text-primary-foreground/70">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ----- Portfolio -----
function PortfolioSection() {
  const cats: ProjectCat[] = ["Tous", "Bâtiments", "Routes", "Ponts", "Villas", "Génie Civil"];
  const [active, setActive] = useState<ProjectCat>("Tous");
  const list = active === "Tous" ? projects : projects.filter((p) => p.cat === active);

  return (
    <section id="realisations" className="section-y">
      <div className="container-page">
        <SectionHeading kicker="Réalisations" title="Des projets qui parlent pour nous" subtitle="Un échantillon des chantiers livrés ces dernières années." />
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {cats.map((c) => (
            <button key={c} onClick={() => setActive(c)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all ${
                active === c
                  ? "border-brand bg-brand text-brand-foreground shadow-brand"
                  : "border-border bg-card text-muted-foreground hover:border-brand/40 hover:text-foreground"
              }`}
            >{c}</button>
          ))}
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <motion.article key={p.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-elevated"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.title} loading="lazy" width={800} height={600}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="absolute left-4 top-4 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-brand-foreground">{p.cat}</span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold">{p.title}</h3>
                <div className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" /><span>{p.location}</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-4 grid grid-cols-2 gap-3 border-t border-border pt-4 text-xs">
                  <div>
                    <div className="text-muted-foreground">Budget</div>
                    <div className="font-display font-bold text-foreground">{p.budget}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Durée</div>
                    <div className="font-display font-bold text-foreground">{p.duration}</div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ----- Stats -----
function StatsSection() {
  const stats = [
    { value: 500, suffix: "+", label: "Projets terminés" },
    { value: 15, suffix: "+", label: "Ans d'expérience" },
    { value: 200, suffix: "+", label: "Clients satisfaits" },
    { value: 50, suffix: "+", label: "Chantiers en cours" },
  ];
  return (
    <section className="section-y bg-secondary/40">
      <div className="container-page">
        <div className="grid gap-6 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div key={s.label}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="rounded-3xl border border-border bg-card p-8 text-center shadow-soft"
            >
              <div className="font-display text-5xl font-bold text-gradient-brand md:text-6xl">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-3 text-sm uppercase tracking-wider text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ----- Equipment -----
function EquipmentSection() {
  return (
    <section className="section-y">
      <div className="container-page">
        <SectionHeading kicker="Notre flotte" title="Des équipements performants" subtitle="Un parc matériel moderne et entretenu pour exécuter dans les meilleures conditions." />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {equipment.map((e, i) => (
            <motion.div key={e.name}
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group flex items-center gap-5 rounded-2xl border border-border bg-card p-6 transition-all hover:border-brand/40 hover:shadow-card"
            >
              <div className="grid h-16 w-16 flex-shrink-0 place-items-center rounded-2xl bg-secondary text-primary transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                <e.icon className="h-8 w-8" />
              </div>
              <div>
                <div className="font-display text-lg font-bold">{e.name}</div>
                <div className="text-xs text-muted-foreground">Maintenance certifiée — disponible 7j/7</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ----- Testimonials -----
function TestimonialsSection() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const prev = () => setI((v) => (v - 1 + testimonials.length) % testimonials.length);
  const next = () => setI((v) => (v + 1) % testimonials.length);

  return (
    <section className="section-y bg-primary text-primary-foreground">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" /><span>Témoignages</span>
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl lg:text-5xl">Ce que disent nos clients</h2>
        </div>
        <div className="relative mx-auto mt-12 max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl border border-primary-foreground/10 bg-primary-foreground/5 p-8 backdrop-blur md:p-12"
            >
              <Quote className="h-10 w-10 text-brand" />
              <blockquote className="mt-6 font-display text-xl leading-relaxed md:text-2xl">
                « {t.quote} »
              </blockquote>
              <div className="mt-8 flex items-center gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-full gradient-brand font-display text-lg font-bold text-brand-foreground">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="font-display font-bold">{t.name}</div>
                  <div className="text-sm text-primary-foreground/70">{t.role} — {t.company}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="mt-8 flex items-center justify-center gap-3">
            <button onClick={prev} aria-label="Précédent" className="grid h-11 w-11 place-items-center rounded-full border border-primary-foreground/20 hover:bg-primary-foreground/10">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-1.5">
              {testimonials.map((_, idx) => (
                <button key={idx} onClick={() => setI(idx)} aria-label={`Témoignage ${idx + 1}`}
                  className={`h-2 rounded-full transition-all ${idx === i ? "w-8 bg-brand" : "w-2 bg-primary-foreground/30"}`} />
              ))}
            </div>
            <button onClick={next} aria-label="Suivant" className="grid h-11 w-11 place-items-center rounded-full border border-primary-foreground/20 hover:bg-primary-foreground/10">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ----- FAQ -----
function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section-y">
      <div className="container-page">
        <SectionHeading kicker="Questions fréquentes" title="Vous avez une question ?" subtitle="Toutes les réponses essentielles pour démarrer sereinement votre projet." />
        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div key={f.q}
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="overflow-hidden rounded-2xl border border-border bg-card"
              >
                <button onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left font-display font-semibold transition-colors hover:bg-secondary/40">
                  <span>{f.q}</span>
                  <ChevronDown className={`h-5 w-5 flex-shrink-0 text-brand transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }} className="overflow-hidden">
                      <div className="border-t border-border px-5 py-4 text-sm text-muted-foreground">{f.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ----- Certifications -----
function CertificationsSection() {
  return (
    <section className="section-y bg-secondary/40">
      <div className="container-page">
        <SectionHeading kicker="Confiance" title="Certifications & labels" subtitle="Notre engagement qualité, environnement et sécurité reconnu par les plus grandes instances." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => (
            <motion.div key={c.name}
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft"
            >
              <div className="grid h-14 w-14 flex-shrink-0 place-items-center rounded-xl gradient-primary text-primary-foreground">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <div>
                <div className="font-display text-lg font-bold">{c.name}</div>
                <div className="text-xs text-muted-foreground">{c.subtitle}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ----- Final CTA -----
function FinalCTA() {
  return (
    <section id="cta" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 gradient-primary" />
      <div className="absolute inset-0 -z-10 opacity-30">
        <img src={heroImg} alt="" aria-hidden="true" className="h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/40" />
      </div>
      <div className="container-page py-20 md:py-28">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="max-w-3xl text-primary-foreground">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" /><span>Parlons de votre projet</span>
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Construisons ensemble votre prochaine réalisation.
          </h2>
          <p className="mt-5 max-w-2xl text-primary-foreground/80 md:text-lg">
            Nos experts sont prêts à vous accompagner dans la réussite de votre projet de construction, de l'étude technique à la livraison.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="mailto:contact@batipro.fr" className="inline-flex items-center gap-2 rounded-md gradient-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-brand hover:opacity-95">
              Demander un devis <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 bg-primary-foreground/5 px-6 py-3 text-sm font-semibold text-primary-foreground backdrop-blur hover:bg-primary-foreground/10">
              Nous contacter
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ----- Footer -----
function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-md gradient-brand text-brand-foreground">
                <HardHat className="h-5 w-5" />
              </div>
              <span className="font-display text-lg font-bold">Bâtipro</span>
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/70">
              Leader français du BTP. Construction, rénovation et travaux publics depuis 2010.
            </p>
            <div className="mt-5 flex gap-3">
              {[Facebook, Linkedin, Twitter, Instagram].map((Ic, idx) => (
                <a key={idx} href="#" aria-label="Réseau social" className="grid h-9 w-9 place-items-center rounded-full border border-primary-foreground/20 hover:border-brand hover:bg-brand hover:text-brand-foreground">
                  <Ic className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display font-bold">Services</h4>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/70">
              <li><a href="#services" className="hover:text-brand">Bâtiments</a></li>
              <li><a href="#services" className="hover:text-brand">Résidentiel</a></li>
              <li><a href="#services" className="hover:text-brand">Rénovation</a></li>
              <li><a href="#services" className="hover:text-brand">Travaux publics</a></li>
              <li><a href="#services" className="hover:text-brand">Génie civil</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold">Entreprise</h4>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/70">
              <li><a href="#realisations" className="hover:text-brand">Réalisations</a></li>
              <li><Link to="/" className="hover:text-brand">Blog</Link></li>
              <li><a href="#" className="hover:text-brand">Carrières</a></li>
              <li><a href="#" className="hover:text-brand">Presse</a></li>
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
