import heroImg from "@/assets/hero-construction.jpg";
import a1 from "@/assets/article-1.jpg";
import a2 from "@/assets/article-2.jpg";
import a3 from "@/assets/article-3.jpg";
import a4 from "@/assets/article-4.jpg";
import a5 from "@/assets/article-5.jpg";
import a6 from "@/assets/article-6.jpg";
import a7 from "@/assets/article-7.jpg";
import a8 from "@/assets/article-8.jpg";
import a9 from "@/assets/article-9.jpg";
import a10 from "@/assets/article-10.jpg";
import a11 from "@/assets/article-11.jpg";
import a12 from "@/assets/article-12.jpg";

export type Article = {
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
};

export const articles: Article[] = [
  { id: 1, title: "L'avenir des gratte-ciel : vers une architecture verticale durable", excerpt: "Comment les nouvelles méthodes de construction transforment les tours modernes en bâtiments à énergie positive.", category: "Architecture", author: "Claire Dubois", date: "12 Juin 2026", readTime: "8 min", views: 2480, image: a1, featured: true },
  { id: 2, title: "Ponts haubanés : prouesses techniques et défis structurels", excerpt: "Plongée au cœur des chantiers de ponts haubanés et des innovations en génie civil qui repoussent les limites.", category: "Ponts", author: "Marc Lefèvre", date: "08 Juin 2026", readTime: "10 min", views: 1893, image: a2, featured: true },
  { id: 3, title: "Construction durable : végétaliser la ville de demain", excerpt: "Façades végétales, matériaux biosourcés et certifications HQE : le guide complet pour bâtir responsable.", category: "Construction Durable", author: "Sophie Martin", date: "05 Juin 2026", readTime: "12 min", views: 3210, image: a3, featured: true },
  { id: 4, title: "Sécurité chantier : les 10 règles incontournables en 2026", excerpt: "Mise à jour réglementaire et bonnes pratiques pour garantir la sécurité de vos équipes sur tous vos chantiers.", category: "Conseils", author: "Julien Renard", date: "01 Juin 2026", readTime: "6 min", views: 1450, image: a4 },
  { id: 5, title: "Travaux publics : moderniser le réseau routier français", excerpt: "Enrobés écologiques, signalisation connectée et gestion intelligente des flux : la route de demain est là.", category: "Routes", author: "Antoine Garcia", date: "28 Mai 2026", readTime: "7 min", views: 1102, image: a5 },
  { id: 6, title: "Logements collectifs : les nouvelles tendances 2026", excerpt: "Espaces modulables, biophilie et performance énergétique transforment le marché de l'immobilier neuf.", category: "Immobilier", author: "Élodie Bernard", date: "24 Mai 2026", readTime: "9 min", views: 2105, image: a6 },
  { id: 7, title: "BIM 360 : la révolution numérique du bâtiment", excerpt: "Comment la modélisation des données du bâtiment réduit les coûts et accélère les délais de livraison.", category: "Innovation", author: "Thomas Moreau", date: "20 Mai 2026", readTime: "11 min", views: 2870, image: a7 },
  { id: 8, title: "Grues à tour : choisir le bon équipement pour votre chantier", excerpt: "Critères techniques, sécurité et rentabilité : le guide pratique pour bien dimensionner votre levage.", category: "Équipements", author: "Pierre Lambert", date: "17 Mai 2026", readTime: "8 min", views: 1623, image: a8 },
  { id: 9, title: "Béton bas carbone : les solutions qui changent la donne", excerpt: "Tour d'horizon des bétons décarbonés homologués et de leur impact réel sur l'empreinte environnementale.", category: "Construction Durable", author: "Sophie Martin", date: "13 Mai 2026", readTime: "10 min", views: 1980, image: a9 },
  { id: 10, title: "Construction hospitalière : exigences techniques et qualité d'air", excerpt: "Retour sur la livraison du nouveau centre médical de Lyon et ses standards de très haute exigence.", category: "Bâtiment", author: "Claire Dubois", date: "09 Mai 2026", readTime: "9 min", views: 1340, image: a10 },
  { id: 11, title: "Plateformes logistiques XXL : ingénierie de l'entrepôt moderne", excerpt: "Structures métalliques, dalles industrielles et automatisation pour répondre aux besoins du e-commerce.", category: "Génie Civil", author: "Marc Lefèvre", date: "05 Mai 2026", readTime: "7 min", views: 1175, image: a11 },
  { id: 12, title: "Photovoltaïque intégré : transformer le toit en actif énergétique", excerpt: "Solutions, retour sur investissement et conformité réglementaire pour l'intégration solaire en BTP.", category: "Innovation", author: "Thomas Moreau", date: "01 Mai 2026", readTime: "8 min", views: 2030, image: a12 },
];

export const categories = [
  "Tous", "Construction", "Architecture", "Génie Civil", "Routes",
  "Ponts", "Immobilier", "Conseils", "Innovation", "Équipements",
];

export const popularCategories = [
  { icon: "🏗", name: "Construction", count: 42 },
  { icon: "🏢", name: "Bâtiment", count: 35 },
  { icon: "🛣", name: "Travaux Publics", count: 28 },
  { icon: "🌉", name: "Ponts", count: 17 },
  { icon: "🏘", name: "Immobilier", count: 24 },
  { icon: "🏛", name: "Architecture", count: 31 },
  { icon: "⚙", name: "Équipements", count: 19 },
  { icon: "🌱", name: "Construction Durable", count: 26 },
];

export const projects = [
  { image: a1, location: "Paris La Défense", type: "Tour de bureaux", budget: "180 M€", duration: "36 mois", description: "Tour de 42 étages certifiée HQE Exceptionnel, intégrant 14 000 m² de bureaux flexibles." },
  { image: a2, location: "Bordeaux", type: "Pont haubané", budget: "95 M€", duration: "28 mois", description: "Ouvrage d'art de 540 m franchissant la Garonne, conçu pour le trafic mixte rail-route." },
  { image: a3, location: "Lyon Confluence", type: "Résidence durable", budget: "42 M€", duration: "22 mois", description: "120 logements à énergie positive avec façades végétalisées et toiture photovoltaïque." },
];

export { heroImg };
