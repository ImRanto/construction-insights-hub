import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  User, Calendar, Clock, Eye, ArrowRight 
} from 'lucide-react';
import { ArticleService } from '@/services';
import { fadeUp } from '@/lib/animations';

export function ArticleGrid() {
  const [filter, setFilter] = useState("Tous");
  const list = useMemo(() => 
    ArticleService.getArticlesByCategory(filter), 
    [filter]
  );
  
  return (
    <section id="articles" className="section-y bg-surface">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading 
            kicker="Tous les articles" 
            title="Derniers articles" 
            subtitle="Analyses, retours d'expérience et conseils pratiques." 
            align="left" 
          />
          <div className="flex flex-wrap gap-2">
            {["Tous", "Architecture", "Innovation", "Construction Durable"].map((c) => (
              <button 
                key={c} 
                onClick={() => setFilter(c)} 
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                  filter === c 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-card text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((a, i) => (
            <motion.article
              key={a.id} 
              custom={i % 6} 
              variants={fadeUp} 
              initial="hidden" 
              whileInView="show" 
              viewport={{ once: true, margin: "-50px" }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
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
                <span className="absolute left-3 top-3 rounded-md bg-card/95 px-2.5 py-1 text-xs font-semibold text-foreground backdrop-blur">
                  {a.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <User className="h-3 w-3" />
                    {a.author}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {a.date}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-lg font-bold leading-snug transition-colors group-hover:text-brand">
                  {a.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">
                  {a.excerpt}
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {a.readTime}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      {a.views.toLocaleString("fr-FR")}
                    </span>
                  </div>
                  <a href="#" className="inline-flex items-center gap-1 font-semibold text-brand">
                    Lire <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
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
  subtitle, 
  align = "center" 
}: { 
  kicker: string; 
  title: string; 
  subtitle?: string; 
  align?: "center" | "left"; 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      transition={{ duration: 0.6 }}
      className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}
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