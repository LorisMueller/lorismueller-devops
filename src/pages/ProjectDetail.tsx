
import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Code, Link as LinkIcon, Calendar, Users } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();

  // Mock project data - in a real app, this would come from an API or database
  const projectData = {
    'api-onboarding-automation': {
      title: 'API Onboarding Automation',
      description: 'Automated onboarding service for large-scale business clients, integrating multiple API and ticketing systems into a unified, secure process.',
      longDescription: `This microservice automated the previously manual onboarding process for high-profile business clients (e.g., banks) into various API-based ticketing systems. Before this project, client data had to be manually entered multiple times for each system — a time-consuming and error-prone process.
  
      I was responsible for designing and implementing the complete automation logic: REST APIs, job scheduling, data handling, and integration with multiple internal systems. The service was part of a broader microservices architecture and backed by a MariaDB database. The planning phase included in-depth requirements gathering and architectural design.
  
      The project also involved a robust CI/CD pipeline using GitLab and Jenkins, as well as extensive automated and end-to-end testing. It went into production after 5–8 months of development and significantly reduced onboarding effort for internal teams.`,
      technologies: ['Java', 'Spring Boot', 'MariaDB', 'Jenkins', 'GitLab CI', 'REST'],
      githubUrl: '',
      liveUrl: '',
      image: '/pictures/support-automation-2.png',
      timeline: '6-7 months',
      team: '1 developer (project lead within a larger team)',
      challenges: [
        'Handling varying data structures from multiple external ticketing systems',
        'Ensuring secure storage and handling of sensitive onboarding data',
        'Maintaining extensibility for future clients and API integrations'
      ],
      features: [
        'End-to-end onboarding automation across multiple ticketing systems',
        'Unified data flow and transformation logic',
        'Custom scheduling of onboarding tasks',
        'Extensive automated and manual testing',
        'Robust CI/CD pipeline with Jenkins and GitLab',
        'Secure handling of sensitive client information'
      ]
    },
    'hebamme-website': {
      title: 'Midwife Portfolio Website',
      description: 'Responsive multi-page website for a self-employed midwife, built with semantic HTML and custom CSS before the rise of modern AI tooling.',
      longDescription: `This project involved designing and developing a professional website for a self-employed midwife to present her services, expertise, and contact information. The site features multiple sections including a detailed services overview, helpful resources (books, links, networks), and an easy way for clients to get in touch.

    I handled everything from concept and layout to frontend implementation and deployment. The visual identity — including the logo and printed materials like ID cards — was designed by me to ensure consistent branding. The site is fully responsive and optimized for both mobile and desktop devices.`,
      technologies: ['HTML', 'CSS'],
      githubUrl: 'https://github.com/LorisMueller/Umsorgt-nach-der-Geburt.git',
      liveUrl: 'https://www.undg.ch',
      image: '/pictures/midwife-portfolio.png',
      timeline: '3–4 weeks',
      team: 'Solo project',
      challenges: [
        'Creating a custom, clean layout without using any frontend frameworks or libraries',
        'Ensuring accessibility and responsive behavior across all devices',
        'Designing both the digital and print brand identity from scratch'
      ],
      features: [
        'Multi-page static website',
        'Responsive design',
        'Custom logo and branding',
        'Clean semantic HTML and CSS',
        'Public deployment under custom domain',
        'Resources section with curated external content'
      ]
    },
    'tenant-landlord-app': {
      title: 'Tenant–Landlord Communication App',
      description: 'Progressive web app to streamline communication between tenants and landlords, with multilingual support and a custom backend.',
      longDescription: `This PWA was built for a start-up aiming to improve and simplify the interaction between tenants and landlords. The app enables structured communication, status updates, and centralized documentation for both parties.

    I led the development project, acting as the main point of contact with the client and distributing tasks across the team. The frontend was built in React and connected to a custom Strapi backend, which we also set up and extended. The application supports multiple languages and was designed with scalability and user-friendliness in mind.`,
      technologies: ['React', 'Strapi', 'TypeScript', 'PWA', 'HTML', 'CSS'],
      githubUrl: '',
      liveUrl: '',
      image: '/pictures/tenant-landlord.png',
      timeline: '3-4 months',
      team: '3 developers (project lead)',
      challenges: [
        'Managing communication between frontend and dynamic backend content',
        'Implementing multi-language support for different user roles',
        'Balancing feature requests with tight startup timelines'
      ],
      features: [
        'Multilingual interface',
        'Role-based access for tenants and landlords',
        'Structured messaging and issue tracking',
        'Mobile-optimized as a Progressive Web App',
        'Custom backend using Strapi',
        'Admin interface for managing users and content'
      ]
    },
    'drone-business-site': {
      title: 'Drone Business Website',
      description: 'Modern and responsive website for a professional drone services company, featuring a custom backend and dynamic content management.',
      longDescription: `This project involved building a clean, professional online presence for a commercial drone services provider. The goal was to showcase their offering with a strong visual identity, optimized for both mobile and desktop users.

    I developed the site using React for the frontend and Strapi as the backend CMS. The site allows the business to manage service descriptions, image galleries, and contact details through a simple admin panel. The design was custom-built to reflect a trustworthy and modern brand, with smooth UI and responsive behavior throughout.`,
      technologies: ['React', 'HTML', 'CSS', 'Strapi'],
      githubUrl: 'https://github.com/LorisMueller/CropScout.git',
      liveUrl: 'https://cropscout.netlify.app/',
      image: '/pictures/drone-business.png',
      timeline: '3–4 weeks',
      team: 'Solo project',
      challenges: [
        'Creating a business-grade layout with a smooth, responsive user experience',
        'Integrating Strapi for dynamic content updates without developer involvement',
        'Translating brand identity into visual design and UX'
      ],
      features: [
        'Responsive, mobile-friendly layout',
        'CMS-powered content via Strapi backend',
        'Dynamic service listings and image galleries',
        'Custom UI reflecting commercial branding',
        'Optimized for performance and SEO basics',
        'Publicly deployed under custom domain'
      ]
    },
    'lodgement': {
      title: 'Lodgement Booking Platform',
      description: 'Modern lodge-booking platform featuring an elegant and user-friendly calendar, customizable extras, and secure Stripe-based payments for a seamless booking experience.',
      longDescription: `Lodgement is a full-featured booking application that allows users to explore and reserve lodges across various countries and continents. It offers a modern and user-friendly interface where users can browse accommodations, select extras and packages, and complete their booking with secure credit card payment via Stripe.

    The app features a responsive calendar that prevents selecting already reserved or booked dates — a functionality that required careful state and availability management. Lodgement also includes user profiles where bookings can be viewed, and an admin interface for managing lodge data and offerings.

    I developed the entire application from scratch, including the frontend and backend logic. Sensitive operations such as payment processing and user data handling were treated with high priority for security and integrity. No credit card data is stored or logged within the application.`,
      technologies: ['React', 'TypeScript', 'Strapi', 'Stripe', 'Tailwind CSS', 'Node.js'],
      githubUrl: '',
      liveUrl: '',
      image: '/pictures/lodgement.png',
      timeline: '2–3 months',
      team: '1 developer (solo project)',
      challenges: [
        'Handling dynamic reservation states and blocked calendar dates in real time',
        'Integrating and testing Stripe payments securely and reliably',
        'Ensuring smooth UX from lodge discovery to booking confirmation'
      ],
      features: [
        'Interactive calendar with real-time availability validation',
        'Secure payment processing via Stripe',
        'User profiles with booking history overview',
        'Search and filter functionality by country and continent',
        'Support for extras and package-based pricing',
        'Admin dashboard for lodge and data management'
      ]
    }
  }


  const project = projectData[id as keyof typeof projectData];

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/projects">
            <Button>Back to Projects</Button>
          </Link>
        </div>
      </div>
    );
  }

  const hasImage = project.image.trim() !== '';

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 animate-slide-up">
              <Link to="/projects">
                <Button variant="ghost" className="mb-6">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Projects
                </Button>
              </Link>

              <h1 className="text-5xl font-bold mb-6">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                {project.githubUrl && (
                  <Link to={project.githubUrl} target="_blank">
                    <Button className="bg-primary hover:bg-primary/90">
                      <Code className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                  </Link>
                )}
                {project.liveUrl && (
                  <Link to={project.liveUrl} target="_blank">
                    <Button variant="outline" className="border-primary/30 hover:border-primary">
                      <LinkIcon className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </Link>
                )}
              </div>
            </div>

            {/* Project Image */}
            {hasImage ? (
              <img
                src={project.image}
                className="aspect-video object-cover w-full h-auto"
              />
            ) : (
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <Code className="w-12 h-12 text-primary/60" />
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                {/* Project Description */}
                <Card className="p-6 bg-card border-border/20 animate-slide-in-left">
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Project Overview</h2>
                  <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {project.longDescription}
                  </div>
                </Card>

                {/* Features */}
                <Card className="p-6 bg-card border-border/20 animate-slide-in-left">
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Key Features</h2>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>

                {/* Challenges */}
                <Card className="p-6 bg-card border-border/20 animate-slide-in-left">
                  <h2 className="text-2xl font-semibold mb-4 text-secondary">Technical Challenges</h2>
                  <ul className="space-y-2">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                        <span className="text-muted-foreground">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>

              <div className="space-y-6">
                {/* Project Info */}
                <Card className="p-6 bg-card border-border/20 animate-slide-in-right">
                  <h3 className="text-lg font-semibold mb-4">Project Details</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">Timeline: {project.timeline}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">Team: {project.team}</span>
                    </div>
                  </div>
                </Card>

                {/* Technologies */}
                <Card className="p-6 bg-card border-border/20 animate-slide-in-right">
                  <h3 className="text-lg font-semibold mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-md border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
