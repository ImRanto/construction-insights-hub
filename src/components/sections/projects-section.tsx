import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { ArticleService } from '@/services';
import { fadeUp } from '@/lib/animations';

export function ProjectsSection() {
  const projects = ArticleService.getProjects();
  
  return (
    <section id="projets" className="section-y">
      <div className="container-page">
        <SectionHeading 
          kicker="Réalisations" 
          title="Nos chantiers emblématiques" 
          subtitle="Des projets qui illustrent notre savoir-faire et notre exigence." 
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.location} 
              custom={i} 
              variants={fadeUp} 
              initial="hidden" 
              whileInView="show" 
              viewport={{ once: true, margin: "-50px" }}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-elevated"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={p.image} 
                  alt={p.type} 
                  loading="lazy" 
                  width={1024} 
                  height={768} 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-primary-foreground">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-brand px-3 py-1 text-xs font-semibold">
                    <MapPin className="h-3 w-3" />
                    {p.location}
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