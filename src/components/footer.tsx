import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  HardHat, Facebook, Linkedin, Twitter, Instagram, MapPin, Phone, Mail 
} from 'lucide-react';

export function Footer() {
  const footerItems = [
    {
      title: "Liens rapides",
      links: ["Accueil", "Articles", "Réalisations", "À propos", "Contact"]
    },
    {
      title: "Services",
      links: ["Construction neuve", "Rénovation", "Génie civil", "Travaux publics", "Maîtrise d'œuvre"]
    },
    {
      title: "Contact",
      links: [
        { icon: MapPin, text: "24 avenue des Bâtisseurs, 75015 Paris" },
        { icon: Phone, text: "+33 1 23 45 67 89" },
        { icon: Mail, text: "contact@batipro.fr" }
      ]
    }
  ];

  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container-page py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-12 md:grid-cols-2 lg:grid-cols-4"
        >
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-2 font-display text-xl font-bold"
            >
              <span className="grid h-9 w-9 place-items-center rounded-lg gradient-brand text-brand-foreground">
                <HardHat className="h-5 w-5" />
              </span>
              Bâti<span className="text-brand">pro</span>
            </motion.div>
            <p className="text-sm text-primary-foreground/70">
              Entreprise française de BTP spécialisée dans la construction, le génie civil et les travaux publics depuis 1985.
            </p>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex gap-3"
            >
              {[Facebook, Linkedin, Twitter, Instagram].map((I, i) => (
                <Link
                  key={i}
                  href="#"
                  aria-label="Réseau social"
                  className="grid h-10 w-10 place-items-center rounded-full border border-primary-foreground/15 transition-colors hover:bg-brand hover:border-brand"
                >
                  <I className="h-4 w-4" />
                </Link>
              ))}
            </motion.div>
          </div>
          
          {footerItems.map((section, sectionIndex) => (
            <div key={section.title} className="space-y-4">
              <h4 className="font-display font-bold">{section.title}</h4>
              <ul className="space-y-2.5 text-sm text-primary-foreground/70">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={typeof link === 'string' ? link : link.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + linkIndex * 0.1 }}
                  >
                    {typeof link === 'string' ? (
                      <Link href="#" className="transition-colors hover:text-brand">
                        {link}
                      </Link>
                    ) : (
                      <div className="flex items-start gap-2.5">
                        <link.icon className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" />
                        <span>{link.text}</span>
                      </div>
                    )}
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 text-xs text-primary-foreground/50 md:flex-row"
        >
          <div>© 2026 Bâtipro. Tous droits réservés.</div>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-brand">Mentions légales</Link>
            <Link href="#" className="hover:text-brand">Politique de confidentialité</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}