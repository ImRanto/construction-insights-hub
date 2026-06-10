import { motion } from 'framer-motion';
import { 
  Calendar, Clock, Eye, User, ArrowRight 
} from 'lucide-react';
import { ArticleService } from '@/services';
import { fadeUp } from '@/lib/animations';

export function FeaturedArticles() {
  const featured = ArticleService.getFeaturedArticles();
  
  return (
    <section className="section-y">
      <div className="container-page">
        <SectionHeading 
          kicker="À la Une" 
          title="Articles à la Une" 
          subtitle="Nos sélections éditoriales du mois sur les sujets qui façonnent le secteur." 
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {featured.map((a, i) => (
            <motion.article
              key={a.id} 
              custom={i} 
              variants={fadeUp} 
              initial="hidden" 
              whileInView="show" 
              viewport={{ once: true, margin: "-50px" }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-elevated"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={a.image} 
                  alt={a.title} 
                  loading="lazy" 
                  width={1024} 
                  height={768} 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <span className="absolute left-4 top-4 rounded-full gradient-brand px-3 py-1 text-xs font-semibold text-brand-foreground shadow-brand">
                  {a.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {a.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {a.readTime}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-xl font-bold leading-tight transition-colors group-hover:text-brand">
                  {a.title}
                </h3>
                <p className="mt-3 flex-1 text-sm text-muted-foreground">
                  {a.excerpt}
                </p>
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