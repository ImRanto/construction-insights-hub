import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { heroImg } from '@/lib/blog-data';

export function FinalCTA() {
  return (
    <section id="cta" className="section-y bg-surface">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="grid items-center gap-10 rounded-3xl border border-border bg-card p-10 shadow-card md:grid-cols-2 md:p-14"
        >
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
              Votre projet
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-5xl">
              Vous avez un projet de <span className="text-gradient-brand">construction</span> ?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Notre équipe vous accompagne de l'étude à la réalisation. Bénéficiez d'un audit gratuit par nos experts BTP en moins de 48h.
            </p>
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
            <img 
              src={heroImg} 
              alt="Équipe BTP sur chantier" 
              loading="lazy" 
              width={1024} 
              height={768} 
              className="aspect-[5/4] w-full rounded-2xl object-cover shadow-elevated" 
            />
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