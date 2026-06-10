import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  HardHat, Facebook, Linkedin, Twitter, Instagram, ChevronRight 
} from 'lucide-react';

export function Navigation() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold tracking-tight">
          <span className="grid h-9 w-9 place-items-center rounded-lg gradient-brand text-brand-foreground shadow-brand">
            <HardHat className="h-5 w-5" />
          </span>
          Bâti<span className="text-brand">pro</span>
        </Link>
        
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          <Link 
            to="#articles" 
            className={`transition-colors hover:text-foreground ${
              isActive('#articles') ? 'text-foreground' : 'text-muted-foreground'
            }`}
          >
            Articles
          </Link>
          <Link 
            to="#categories" 
            className={`transition-colors hover:text-foreground ${
              isActive('#categories') ? 'text-foreground' : 'text-muted-foreground'
            }`}
          >
            Catégories
          </Link>
          <Link 
            to="#projets" 
            className={`transition-colors hover:text-foreground ${
              isActive('#projets') ? 'text-foreground' : 'text-muted-foreground'
            }`}
          >
            Réalisations
          </Link>
          <Link 
            to="#contact" 
            className={`transition-colors hover:text-foreground ${
              isActive('#contact') ? 'text-foreground' : 'text-muted-foreground'
            }`}
          >
            Contact
          </Link>
        </nav>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link 
            to="#cta" 
            className="inline-flex items-center gap-2 rounded-full gradient-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground shadow-brand transition-transform hover:scale-105"
          >
            Devis gratuit <ChevronRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </header>
  );
}