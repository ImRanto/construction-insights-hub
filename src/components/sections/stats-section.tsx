import { motion } from 'framer-motion';
import { ArticleService } from '@/services';
import { Counter } from '@/components/ui/counter';
import { fadeUp } from '@/lib/animations';

export function StatsSection() {
  const stats = ArticleService.getStats();
  
  return (
    <section className="relative overflow-hidden gradient-primary py-20 text-primary-foreground">
      <div className="absolute inset-0 opacity-20 [background:radial-gradient(circle_at_20%_20%,oklch(0.7_0.19_41/0.5),transparent_50%),radial-gradient(circle_at_80%_80%,oklch(0.7_0.19_41/0.3),transparent_50%)]" />
      <div className="container-page relative">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {stats.map((st, i) => (
            <motion.div
              key={st.l} 
              custom={i} 
              variants={fadeUp} 
              initial="hidden" 
              whileInView="show" 
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="font-display text-5xl font-bold text-brand md:text-6xl">
                <Counter to={st.v} suffix={st.s} />
              </div>
              <div className="mt-2 text-sm uppercase tracking-wider text-primary-foreground/70">
                {st.l}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}