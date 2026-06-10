import { useState } from 'react';
import { motion } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { ArticleService } from '@/services';

export function TestimonialsSection() {
  const items = ArticleService.getTestimonials();
  
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((i) => (i + 1) % items.length);
  const prev = () => setIdx((i) => (i - 1 + items.length) % items.length);
  
  return (
    <section className="section-y bg-surface">
      <div className="container-page">
        <SectionHeading 
          kicker="Témoignages" 
          title="Ils nous font confiance" 
          subtitle="Directeurs de projet, architectes et promoteurs partagent leur expérience." 
        />
        <div className="mt-12 grid items-stretch gap-6 md:grid-cols-3">
          {[0, 1, 2].map((off) => {
            const t = items[(idx + off) % items.length];
            return (
              <motion.figure
                key={`${idx}-${off}`}
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5, delay: off * 0.1 }}
                className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-soft"
              >
                <Quote className="h-8 w-8 text-brand" />
                <blockquote className="mt-4 flex-1 text-foreground">
                  "{t.text}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <div className="grid h-11 w-11 place-items-center rounded-full gradient-brand font-display font-bold text-brand-foreground">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{t.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {t.role} · {t.company}
                    </div>
                  </div>
                </figcaption>
              </motion.figure>
            );
          })}
        </div>
        <div className="mt-8 flex items-center justify-center gap-3">
          <button 
            onClick={prev} 
            aria-label="Précédent" 
            className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card transition-colors hover:bg-accent"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button 
            onClick={next} 
            aria-label="Suivant" 
            className="grid h-11 w-11 place-items-center rounded-full gradient-brand text-brand-foreground shadow-brand"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
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