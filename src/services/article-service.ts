import { articles } from '@/lib/blog-data';

export interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  views: number;
  image: string;
  featured?: boolean;
}

export class ArticleService {
  static getFeaturedArticles(): Article[] {
    return articles.filter(article => article.featured);
  }

  static getArticlesByCategory(category: string): Article[] {
    if (category === 'Tous') {
      return articles;
    }
    return articles.filter(article => article.category === category);
  }

  static getAllCategories(): string[] {
    return ['Tous', 'Architecture', 'Innovation', 'Construction Durable'];
  }

  static getPopularCategories() {
    return [
      { icon: "🏗", name: "Construction", count: 42 },
      { icon: "🏢", name: "Bâtiment", count: 35 },
      { icon: "🛣", name: "Travaux Publics", count: 28 },
      { icon: "🌉", name: "Ponts", count: 17 },
      { icon: "🏘", name: "Immobilier", count: 24 },
      { icon: "🏛", name: "Architecture", count: 31 },
      { icon: "⚙", name: "Équipements", count: 19 },
      { icon: "🌱", name: "Construction Durable", count: 26 },
    ];
  }

  static getProjects() {
    return [
      { 
        image: articles[0].image, 
        location: "Paris La Défense", 
        type: "Tour de bureaux", 
        budget: "180 M€", 
        duration: "36 mois", 
        description: "Tour de 42 étages certifiée HQE Exceptionnel, intégrant 14 000 m² de bureaux flexibles." 
      },
      { 
        image: articles[1].image, 
        location: "Bordeaux", 
        type: "Pont haubané", 
        budget: "95 M€", 
        duration: "28 mois", 
        description: "Ouvrage d'art de 540 m franchissant la Garonne, conçu pour le trafic mixte rail-route." 
      },
      { 
        image: articles[2].image, 
        location: "Lyon Confluence", 
        type: "Résidence durable", 
        budget: "42 M€", 
        duration: "22 mois", 
        description: "120 logements à énergie positive avec façades végétalisées et toiture photovoltaïque." 
      },
    ];
  }

  static getStats() {
    return [
      { v: 250, s: "+", l: "Articles publiés" },
      { v: 150, s: "+", l: "Projets réalisés" },
      { v: 50, s: "+", l: "Experts" },
      { v: 10000, s: "+", l: "Lecteurs mensuels" },
    ];
  }

  static getTestimonials() {
    return [
      { 
        name: "Hélène Roux", 
        role: "Directrice de projet", 
        company: "Vinci Construction", 
        text: "Les analyses de Bâtipro sont devenues incontournables dans notre veille hebdomadaire. Toujours pointues, toujours actuelles." 
      },
      { 
        name: "Karim Benali", 
        role: "Architecte DPLG", 
        company: "Atelier KB Architectes", 
        text: "Un blog rigoureux qui sait vulgariser sans perdre en profondeur technique. Je le recommande à toute mon équipe." 
      },
      { 
        name: "Sandra Lopez", 
        role: "Promoteur immobilier", 
        company: "Nexity", 
        text: "Les études de cas m'ont permis d'éviter plusieurs écueils sur mes derniers programmes. Un vrai gain de temps." 
      },
      { 
        name: "Pascal Girard", 
        role: "Maître d'ouvrage", 
        company: "Ville de Nantes", 
        text: "Une équipe d'experts BTP qui partage généreusement son savoir. Indispensable pour les acteurs publics." 
      },
    ];
  }
}