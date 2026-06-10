import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <section ref={ref} className="relative isolate overflow-hidden">
      <motion.div style={{ y, opacity }} className="absolute inset-0 -z-10">
        <img 
          src={heroImg} 
          alt="Chantier de construction moderne avec grues et architectes" 
          className="h-full w-full object-cover" 
          width={1920} 
          height={1200} 
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/80 to-primary/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
      </motion.div>

      <div className="container-page relative flex min-h-[88vh] flex-col justify-center py-24 text-primary-foreground">
        <motion.span
          initial={{ opacity: 0, y: 12 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          Expertise BTP & Construction
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
        >
          Actualités, Conseils et <span className="text-gradient-brand">Innovations</span> du Bâtiment
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-6 max-w-2xl text-lg text-primary-foreground/80 md:text-xl"
        >
          Découvrez nos conseils d'experts, nos réalisations, les tendances du secteur et les meilleures pratiques pour réussir vos projets de construction.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.4 }}
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
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-16 grid max-w-2xl grid-cols-3 gap-8 border-t border-primary-foreground/15 pt-8 text-sm"
        >
          {[
            ["250+", "Articles publiés"], 
            ["150+", "Projets livrés"], 
            ["50+", "Experts BTP"]
          ].map(([n, l]) => (
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