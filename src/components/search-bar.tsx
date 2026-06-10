import { useState } from 'react';
import { Search } from 'lucide-react';
import { ArticleService } from '@/services';

export function SearchBar() {
  const [active, setActive] = useState("Tous");
  
  return (
    <section className="relative -mt-12 z-10">
      <div className="container-page">
        <div
          className="rounded-2xl border border-border bg-card p-5 shadow-elevated md:p-6"
        >
          <div className="flex items-center gap-3 rounded-xl bg-surface px-4 py-3">
            <Search className="h-5 w-5 text-muted-foreground" />
            <input
              type="search"
              placeholder="Rechercher un article..."
              className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground md:text-base"
            />
            <button className="hidden rounded-lg gradient-brand px-4 py-2 text-sm font-semibold text-brand-foreground md:inline-flex">
              Rechercher
            </button>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {ArticleService.getAllCategories().map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                  active === c
                    ? "gradient-brand text-brand-foreground shadow-soft"
                    : "bg-surface text-muted-foreground hover:bg-accent hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}