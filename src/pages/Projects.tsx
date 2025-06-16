
import Navigation from '@/components/Navigation';
import ProjectCard from '@/components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      id: 'api-onboarding-automation',
      title: 'API Onboarding Automation',
      description: 'Enterprise automation tool to streamline onboarding of large-scale business clients (e.g., banks) into the company’s API-based ticketing system. End-to-end implementation using Java (Spring Boot), SQL, and GitLab CI/CD — from planning through deployment into production.',
      image: '/pictures/support-automation-2.png',
      technologies: ['Java', 'Spring Boot', 'SQL', 'GitLab CI', 'Docker']
    },
    {
      id: 'hebamme-website',
      title: 'Hebamme Portfolio Website',
      description: 'Simple and elegant personal website for a self-employed midwife (pre-AI era), built with semantic HTML and custom CSS. Focused on clean design, accessibility, and mobile responsiveness.',
      image: '/pictures/midwife-portfolio.png',
      technologies: ['HTML', 'CSS'],
      githubUrl: 'https://github.com/LorisMueller/Umsorgt-nach-der-Geburt.git',
      liveUrl: 'https://undg.ch'
    },
    {
      id: 'tenant-landlord-app',
      title: 'Tenant–Landlord Communication App',
      description: 'Progressive web app for a start-up enhancing communication between tenants and landlords. Led the project and client communication, handled task delegation, and implemented multi-language support. Built with React and integrated with a custom Strapi backend.',
      image: 'pictures/tenant-landlord.png',
      technologies: ['React', 'Strapi', 'PWA', 'JavaScript', 'CSS']
    },
    {
      id: 'drone-business-site',
      title: 'Drone Business Website',
      description: 'Professional website for a drone services company, built before the AI boom. Developed with React, HTML, CSS, and a Strapi backend. Fully responsive and designed to reflect a modern, business-oriented identity.',
      image: 'pictures/drone-business.png',
      technologies: ['React', 'HTML', 'CSS', 'Strapi'],
      githubUrl: 'https://github.com/LorisMueller/CropScout.git',
      liveUrl: 'https://cropscout.netlify.app/'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-5xl font-bold mb-6">
              My <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive showcase of my work in DevOps, infrastructure automation,
              fullstack development, and cloud solutions. Each project represents a unique
              challenge and innovative solution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
