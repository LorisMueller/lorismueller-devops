
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import ProjectCard from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, User, Briefcase, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const featuredProjects = [
    {
      id: 'microservices-platform',
      title: 'Microservices Platform',
      description: 'A scalable microservices platform built with Docker, Kubernetes, and React. Features auto-scaling, service discovery, and real-time monitoring.',
      image: '/placeholder-project.jpg',
      technologies: ['React', 'Node.js', 'Docker', 'Kubernetes', 'MongoDB'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://demo.com',
      featured: true
    },
    {
      id: 'ci-cd-pipeline',
      title: 'CI/CD Pipeline Automation',
      description: 'Automated deployment pipeline using GitLab CI/CD, reducing deployment time by 80% and ensuring zero-downtime deployments.',
      image: '/placeholder-project.jpg',
      technologies: ['GitLab CI', 'Docker', 'AWS', 'Terraform'],
      githubUrl: 'https://github.com'
    },
    {
      id: 'monitoring-dashboard',
      title: 'Infrastructure Monitoring',
      description: 'Real-time monitoring dashboard built with React and Grafana, providing insights into system performance and health.',
      image: '/placeholder-project.jpg',
      technologies: ['React', 'Grafana', 'Prometheus', 'Node.js'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://demo.com'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />

      {/* Quick Stats Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center bg-card border-border/20 card-hover">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">50+</h3>
              <p className="text-muted-foreground">Projects Deployed</p>
            </Card>

            <Card className="p-6 text-center bg-card border-border/20 card-hover">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-2">5+</h3>
              <p className="text-muted-foreground">Years Experience</p>
            </Card>

            <Card className="p-6 text-center bg-card border-border/20 card-hover">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <User className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">25+</h3>
              <p className="text-muted-foreground">Happy Clients</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my latest work in DevOps, infrastructure automation, 
              and fullstack development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/projects">
              <Button size="lg" variant="outline" className="border-primary/30 hover:border-primary hover:bg-primary/10">
                View All Projects
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Build Something <span className="text-gradient">Amazing?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your next project and how I can help you achieve your goals 
            with modern DevOps practices and fullstack development.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 glow-primary">
              Get In Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
