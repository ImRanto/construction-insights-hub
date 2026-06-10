import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ArticleService } from '@/services';
import { fadeUp } from '@/lib/animations';

export function CategoriesSection() {
  const popularCategories = ArticleService.getPopularCategories();
  
  return (
    <section id="categories" className="section-y">
      <div className="container-page">
        <SectionHeading 
          kicker="Catégories" 
          title="Explorer par catégorie" 
          subtitle="Toute notre expertise organisée par domaine d'intervention." 
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {popularCategories.map((c, i) => (
            <motion.a
              key={c.name} 
              href="#" 
              custom={i} 
              variants={fadeUp} 
              initial="hidden" 
              whileInView="show" 
              viewport={{ once: true, margin: "-50px" }}
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