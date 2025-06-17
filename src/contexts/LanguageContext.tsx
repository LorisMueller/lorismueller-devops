
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.career': 'Career',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    
    // Hero section
    'hero.greeting': 'Hi, I\'m',
    'hero.title': 'DevOps Engineer & Fullstack Developer',
    'hero.description': 'Passionate about building scalable infrastructure, automating workflows, and creating innovative solutions. Currently working as a DevOps Engineer at Swisscom with expertise in cloud technologies, CI/CD, and fullstack development.',
    'hero.cta': 'Get In Touch',
    'hero.portfolio': 'View Portfolio',
    
    // Stats
    'stats.projects': 'Projects Developed',
    'stats.experience': 'Years Experience',
    'stats.certified': 'Certified Application Developer',
    
    // Featured Projects
    'featured.title': 'Featured Projects',
    'featured.description': 'A showcase of my latest work in DevOps, infrastructure automation, and fullstack development.',
    'featured.viewAll': 'View All Projects',
    
    // CTA section
    'cta.title': 'Ready to Build Something Amazing?',
    'cta.description': 'Let\'s discuss your next project and how I can help you achieve your goals with modern DevOps practices and fullstack development.',
    'cta.button': 'Get In Touch',
    
    // About page
    'about.title': 'About Me',
    'about.subtitle': 'Passionate DevOps Engineer with a strong foundation in fullstack development, dedicated to building scalable, reliable, and efficient systems.',
    'about.journey.title': 'My Journey',
    'about.journey.text': 'I began at Swisscom with a broad developer apprenticeship, moving between teams and technologies. Today, I work as a DevOps Engineer—focused on automation, backend systems, and scalable infrastructure.',
    'about.drives.title': 'What Drives Me',
    'about.drives.text': 'I\'m driven by simplifying complexity through automation and reliable systems. I\'m passionate about creating solutions that boost team efficiency and confidence while continuously learning and improving.',
    'about.beyond.title': 'Beyond Code',
    'about.beyond.text': 'I push my limits through triathlon, where perseverance shapes me. My Christian faith gives me purpose and strength, guiding me to act with integrity and hope.',
    'about.stats.projects': 'Projects',
    'about.stats.years': 'Years',
    'about.stats.technologies': 'Technologies',
    'about.stats.motivated': 'Motivated',
    
    // Projects page
    'projects.title': 'My Projects',
    'projects.subtitle': 'A comprehensive showcase of my work in DevOps, infrastructure automation, fullstack development, and cloud solutions. Each project represents a unique challenge and innovative solution.',
    
    // Skills page
    'skills.title': 'My Skills',
    'skills.subtitle': 'A comprehensive overview of my technical expertise across DevOps, infrastructure automation, and fullstack development. Built through years of hands-on experience and continuous learning.',
    'skills.devops': 'DevOps & Infrastructure',
    'skills.frontend': 'Frontend Development',
    'skills.backend': 'Backend Development',
    'skills.certifications': 'Certifications & Education',
    'skills.cert.security': 'Jr Penetration Tester - tryhackme',
    'skills.cert.description': 'a professional, hands-on certification that demonstrates real-world penetration testing skills and is recognized by top cybersecurity employers',
    
    // Career page
    'career.title': 'My Career',
    'career.subtitle': 'A journey through my professional experience in DevOps, infrastructure automation, and fullstack development. Each role has contributed to my growth as a technical leader and problem solver.',
    'career.experience': 'Professional Experience',
    'career.education': 'Education',
    'career.achievements': 'Key Achievements:',
    'career.highlights': 'Highlights:',
    
    // Contact page
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Ready to discuss your next project? I\'d love to hear about your challenges and explore how we can work together to build something amazing.',
    'contact.email': 'Email',
    'contact.email.description': 'I typically respond to emails within 24 hours. Feel free to reach out for project inquiries, collaboration opportunities, or just to say hello.',
    'contact.social': 'Social Media',
    'contact.social.description': 'Connect with me online',
    'contact.cta.title': 'Let\'s Build Something Great',
    'contact.cta.description': 'Whether you need DevOps consulting, infrastructure automation, or fullstack development, I\'m here to help bring your ideas to life.',
    'contact.cta.available': '💼 Available for freelance',
    'contact.cta.remote': '🚀 Remote-friendly',
  },
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.about': 'Über mich',
    'nav.career': 'Laufbahn',
    'nav.projects': 'Projekte',
    'nav.skills': 'Fähigkeiten',
    'nav.contact': 'Kontakt',
    
    // Hero section
    'hero.greeting': 'Hallo, ich bin',
    'hero.title': 'DevOps Engineer & Fullstack Entwickler',
    'hero.description': 'Leidenschaftlich für den Aufbau skalierbarer Infrastrukturen, die Automatisierung von Arbeitsabläufen und die Entwicklung innovativer Lösungen. Derzeit als DevOps Engineer bei Swisscom tätig mit Expertise in Cloud-Technologien, CI/CD und Fullstack-Entwicklung.',
    'hero.cta': 'Kontakt aufnehmen',
    'hero.portfolio': 'Portfolio ansehen',
    
    // Stats
    'stats.projects': 'Entwickelte Projekte',
    'stats.experience': 'Jahre Erfahrung',
    'stats.certified': 'Zertifizierter Applikationsentwickler',
    
    // Featured Projects
    'featured.title': 'Ausgewählte Projekte',
    'featured.description': 'Ein Showcase meiner neuesten Arbeiten in DevOps, Infrastruktur-Automatisierung und Fullstack-Entwicklung.',
    'featured.viewAll': 'Alle Projekte ansehen',
    
    // CTA section
    'cta.title': 'Bereit, etwas Großartiges zu entwickeln?',
    'cta.description': 'Lassen Sie uns über Ihr nächstes Projekt sprechen und wie ich Ihnen dabei helfen kann, Ihre Ziele mit modernen DevOps-Praktiken und Fullstack-Entwicklung zu erreichen.',
    'cta.button': 'Kontakt aufnehmen',
    
    // About page
    'about.title': 'Über mich',
    'about.subtitle': 'Leidenschaftlicher DevOps Engineer mit einer starken Grundlage in der Fullstack-Entwicklung, der sich dem Aufbau skalierbarer, zuverlässiger und effizienter Systeme widmet.',
    'about.journey.title': 'Mein Werdegang',
    'about.journey.text': 'Ich begann bei Swisscom mit einer breit angelegten Entwicklerlehre und wechselte zwischen verschiedenen Teams und Technologien. Heute arbeite ich als DevOps Engineer – mit Fokus auf Automatisierung, Backend-Systeme und skalierbare Infrastruktur.',
    'about.drives.title': 'Was mich antreibt',
    'about.drives.text': 'Ich werde davon angetrieben, Komplexität durch Automatisierung und zuverlässige Systeme zu vereinfachen. Ich bin leidenschaftlich daran interessiert, Lösungen zu schaffen, die die Teameffizienz und das Vertrauen stärken, während ich kontinuierlich lerne und mich verbessere.',
    'about.beyond.title': 'Jenseits des Codes',
    'about.beyond.text': 'Ich überwinde meine Grenzen durch Triathlon, wo Ausdauer mich prägt. Mein christlicher Glaube gibt mir Zweck und Kraft und leitet mich dazu an, mit Integrität und Hoffnung zu handeln.',
    'about.stats.projects': 'Projekte',
    'about.stats.years': 'Jahre',
    'about.stats.technologies': 'Technologien',
    'about.stats.motivated': 'Motiviert',
    
    // Projects page
    'projects.title': 'Meine Projekte',
    'projects.subtitle': 'Ein umfassender Showcase meiner Arbeiten in DevOps, Infrastruktur-Automatisierung, Fullstack-Entwicklung und Cloud-Lösungen. Jedes Projekt stellt eine einzigartige Herausforderung und innovative Lösung dar.',
    
    // Skills page
    'skills.title': 'Meine Fähigkeiten',
    'skills.subtitle': 'Ein umfassender Überblick über meine technische Expertise in DevOps, Infrastruktur-Automatisierung und Fullstack-Entwicklung. Aufgebaut durch jahrelange praktische Erfahrung und kontinuierliches Lernen.',
    'skills.devops': 'DevOps & Infrastruktur',
    'skills.frontend': 'Frontend-Entwicklung',
    'skills.backend': 'Backend-Entwicklung',
    'skills.certifications': 'Zertifizierungen & Bildung',
    'skills.cert.security': 'Jr Penetration Tester - tryhackme',
    'skills.cert.description': 'eine professionelle, praxisorientierte Zertifizierung, die reale Penetration-Testing-Fähigkeiten demonstriert und von führenden Cybersecurity-Arbeitgebern anerkannt wird',
    
    // Career page
    'career.title': 'Meine Laufbahn',
    'career.subtitle': 'Eine Reise durch meine berufliche Erfahrung in DevOps, Infrastruktur-Automatisierung und Fullstack-Entwicklung. Jede Rolle hat zu meinem Wachstum als technischer Leiter und Problemlöser beigetragen.',
    'career.experience': 'Berufserfahrung',
    'career.education': 'Bildung',
    'career.achievements': 'Wichtige Erfolge:',
    'career.highlights': 'Highlights:',
    
    // Contact page
    'contact.title': 'Kontakt aufnehmen',
    'contact.subtitle': 'Bereit, über Ihr nächstes Projekt zu sprechen? Ich würde gerne von Ihren Herausforderungen hören und erkunden, wie wir zusammenarbeiten können, um etwas Großartiges zu entwickeln.',
    'contact.email': 'E-Mail',
    'contact.email.description': 'Ich antworte in der Regel innerhalb von 24 Stunden auf E-Mails. Zögern Sie nicht, sich bei Projektanfragen, Kooperationsmöglichkeiten oder einfach zum Hallo sagen zu melden.',
    'contact.social': 'Social Media',
    'contact.social.description': 'Vernetzen Sie sich mit mir online',
    'contact.cta.title': 'Lassen Sie uns etwas Großartiges entwickeln',
    'contact.cta.description': 'Ob Sie DevOps-Beratung, Infrastruktur-Automatisierung oder Fullstack-Entwicklung benötigen, ich bin hier, um Ihnen dabei zu helfen, Ihre Ideen zum Leben zu erwecken.',
    'contact.cta.available': '💼 Verfügbar für Freelance',
    'contact.cta.remote': '🚀 Remote-freundlich',
  }
};
