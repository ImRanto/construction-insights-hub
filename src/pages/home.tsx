import { useState, useMemo, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView, animate } from 'framer-motion';
import {
  Search, ArrowRight, Calendar, Clock, Eye, User, Mail, MapPin, Phone,
  Facebook, Linkedin, Twitter, Instagram, ChevronLeft, ChevronRight,
  Building2, HardHat, Lightbulb, FileCheck, Quote, CheckCircle2,
} from 'lucide-react';
import { articles, categories, popularCategories, projects, heroImg } from '@/lib/blog-data';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { SearchBar } from '@/components/search-bar';
import { FeaturedArticles } from '@/components/sections/featured-articles';
import { ArticleGrid } from '@/components/sections/article-grid';
import { CategoriesSection } from '@/components/sections/categories-section';
import { ExpertiseSection } from '@/components/sections/expertise-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { StatsSection } from '@/components/sections/stats-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { NewsletterSection } from '@/components/sections/newsletter-section';
import { FinalCTA } from '@/components/sections/final-cta';

export function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <SearchBar />
      <FeaturedArticles />
      <ArticleGrid />
      <CategoriesSection />
      <ExpertiseSection />
      <ProjectsSection />
      <StatsSection />
      <TestimonialsSection />
      <NewsletterSection />
      <FinalCTA />
    </div>
  );
}