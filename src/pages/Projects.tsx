
import Navigation from '@/components/Navigation';
import ProjectCard from '@/components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      id: 'microservices-platform',
      title: 'Microservices Platform',
      description: 'A scalable microservices platform built with Docker, Kubernetes, and React. Features auto-scaling, service discovery, and real-time monitoring with comprehensive logging and alerting systems.',
      image: '/placeholder-project.jpg',
      technologies: ['React', 'Node.js', 'Docker', 'Kubernetes', 'MongoDB', 'Redis', 'Grafana'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://demo.com'
    },
    {
      id: 'ci-cd-pipeline',
      title: 'CI/CD Pipeline Automation',
      description: 'Automated deployment pipeline using GitLab CI/CD, reducing deployment time by 80% and ensuring zero-downtime deployments across multiple environments.',
      image: '/placeholder-project.jpg',
      technologies: ['GitLab CI', 'Docker', 'AWS', 'Terraform', 'Ansible'],
      githubUrl: 'https://github.com'
    },
    {
      id: 'monitoring-dashboard',
      title: 'Infrastructure Monitoring',
      description: 'Real-time monitoring dashboard built with React and Grafana, providing insights into system performance, health metrics, and automated alerting.',
      image: '/placeholder-project.jpg',
      technologies: ['React', 'Grafana', 'Prometheus', 'Node.js', 'InfluxDB'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://demo.com'
    },
    {
      id: 'cloud-migration',
      title: 'Cloud Migration Tool',
      description: 'Automated tool for migrating legacy applications to cloud infrastructure with minimal downtime and comprehensive rollback capabilities.',
      image: '/placeholder-project.jpg',
      technologies: ['Python', 'AWS', 'Terraform', 'Docker', 'PostgreSQL'],
      githubUrl: 'https://github.com'
    },
    {
      id: 'api-gateway',
      title: 'API Gateway Service',
      description: 'Custom API gateway with rate limiting, authentication, caching, and real-time analytics for microservices architecture.',
      image: '/placeholder-project.jpg',
      technologies: ['Node.js', 'Express', 'Redis', 'JWT', 'Docker'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://demo.com'
    },
    {
      id: 'deployment-automation',
      title: 'Deployment Automation',
      description: 'Comprehensive deployment automation system with blue-green deployments, automated testing, and rollback mechanisms.',
      image: '/placeholder-project.jpg',
      technologies: ['Jenkins', 'Docker', 'Kubernetes', 'Helm', 'Python'],
      githubUrl: 'https://github.com'
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
