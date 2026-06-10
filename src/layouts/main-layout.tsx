import { Helmet } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { heroImg } from '@/lib/blog-data';
import '@/styles.css';

export function MainLayout() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Blog BTP — Actualités, Conseils et Innovations du Bâtiment | Bâtipro</title>
        <meta name="description" content="Découvrez nos conseils d'experts, réalisations, tendances et meilleures pratiques pour réussir vos projets de construction, génie civil et travaux publics." />
        <meta property="og:title" content="Blog BTP — Bâtipro" />
        <meta property="og:description" content="Expertise BTP & Construction : articles, études de cas et innovations du bâtiment." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={heroImg} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Blog Bâtipro",
            description: "Actualités, conseils et innovations du BTP",
            publisher: { "@type": "Organization", name: "Bâtipro" },
          })}
        </script>
      </Helmet>
      
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}