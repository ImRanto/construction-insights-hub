import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react';

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  
  return (
    <section className="section-y">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl gradient-primary p-10 text-primary-foreground shadow-elevated md:p-16">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-brand/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-brand/20 blur-3xl" />
          <div className="relative grid items-center gap-10 md:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
                Newsletter
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
                Recevez nos derniers articles
              </h2>
              <p className="mt-3 text-primary-foreground/80">
                Restez informé des actualités du secteur BTP, des nouvelles réglementations et de nos meilleurs conseils pratiques.
              </p>
            </div>
            <form
              onSubmit={(e) => { 
                e.preventDefault(); 
                if (email.includes("@")) setDone(true); 
              }}
              className="rounded-2xl bg-primary-foreground/10 p-2 backdrop-blur"
            >
              <div className="flex items-center gap-2 rounded-xl bg-primary-foreground/5 px-4 py-3">
                <Mail className="h-5 w-5 text-primary-foreground/70" />
                <input
                  type="email" 
                  required 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre@email.com"
                  className="w-full bg-transparent text-primary-foreground outline-none placeholder:text-primary-foreground/50"
                />
              </div>
              <button 
                type="submit" 
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl gradient-brand py-3.5 font-semibold text-brand-foreground shadow-brand transition-transform hover:scale-[1.02]"
              >
                {done ? (
                  <>
                    <CheckCircle2 className="h-5 w-5" /> 
                    Inscription confirmée
                  </>
                ) : (
                  <>
                    S'abonner <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
              <p className="mt-3 text-center text-xs text-primary-foreground/60">
                Pas de spam. Désabonnement en un clic.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}