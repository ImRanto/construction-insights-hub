import { motion } from 'framer-motion';
import { 
  HardHat, FileCheck, Lightbulb, Building2 
} from 'lucide-react';
import { fadeUp } from '@/lib/animations';

export function ExpertiseSection() {
  const items = [
    { 
      icon: HardHat, 
      title: "Expertise Technique", 
      desc: "Conseils d'ingénieurs et spécialistes du BTP, basés sur 20 ans d'expérience terrain." 
    },
    { 
      icon: FileCheck, 
      title: "Veille Réglementaire", 
      desc: "Normes RT2020, RE2020, DTU : restez à jour sur toute la réglementation du secteur." 
    },
    { 
      icon: Lightbulb, 
      title: "Innovations", 
      desc: "BIM, impression 3D béton, matériaux biosourcés : la construction de demain dès aujourd'hui." 
    },
    { 
      icon: Building2, 
      title: "Études de Cas", 
      desc: "Retours d'expérience détaillés sur nos chantiers et ceux de nos partenaires." 
    },
  ];
  
  return (
    <section className="section-y bg-surface">
      <div className="container-page">
        <SectionHeading 
          kicker="Notre valeur" 
          title="Pourquoi suivre notre blog ?" 
          subtitle="Quatre piliers qui font de Bâtipro la référence éditoriale du BTP." 
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title} 
              custom={i} 
              variants={fadeUp} 
              initial="hidden" 
              whileInView="show" 
              viewport={{ once: true, margin: "-50px" }}
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

function SectionHeading({ 
  kicker, 
  title, 
  subtitle 
}: { 
  kicker: string; 
  title: string; 
  subtitle?: string; 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-2xl text-center"
    >
      <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
        <span className="h-1.5 w-1.5 rounded-full bg-brand" />
        {kicker}
      </span>
      <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-muted-foreground md:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}