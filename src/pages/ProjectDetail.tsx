
import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Code, Link as LinkIcon, Calendar, Users } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();

  // Mock project data - in a real app, this would come from an API or database
  const projectData = {
    'microservices-platform': {
      title: 'Microservices Platform',
      description: 'A comprehensive microservices platform designed for high-scale applications with advanced monitoring, auto-scaling, and service discovery capabilities.',
      longDescription: `This project represents a complete microservices ecosystem built from the ground up. The platform handles millions of requests daily and automatically scales based on demand. It includes comprehensive monitoring, logging, and alerting systems that provide real-time insights into system performance.

      The architecture is designed with resilience and scalability in mind, featuring circuit breakers, retry mechanisms, and graceful degradation. Each service is containerized and can be deployed independently, enabling rapid development cycles and zero-downtime deployments.`,
      technologies: ['React', 'Node.js', 'Docker', 'Kubernetes', 'MongoDB', 'Redis', 'Grafana', 'Prometheus'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://demo.com',
      timeline: '6 months',
      team: '5 developers',
      challenges: [
        'Implementing service mesh for secure inter-service communication',
        'Designing auto-scaling policies for optimal resource utilization',
        'Creating comprehensive monitoring and alerting systems',
        'Ensuring data consistency across distributed services'
      ],
      features: [
        'Auto-scaling based on custom metrics',
        'Service discovery and load balancing',
        'Real-time monitoring and alerting',
        'Distributed tracing and logging',
        'Blue-green deployment strategy',
        'API rate limiting and throttling'
      ]
    },
    'ci-cd-pipeline': {
      title: 'CI/CD Pipeline Automation',
      description: 'Advanced CI/CD pipeline that reduced deployment time by 80% and eliminated manual deployment errors.',
      longDescription: `This comprehensive CI/CD solution transforms the software delivery process through intelligent automation. The pipeline includes automated testing at multiple levels, security scanning, performance testing, and automated rollback capabilities.

      The system integrates with multiple cloud providers and supports various deployment strategies including canary releases and blue-green deployments. It includes comprehensive reporting and analytics to track deployment success rates and performance metrics.`,
      technologies: ['GitLab CI', 'Docker', 'AWS', 'Terraform', 'Ansible', 'SonarQube'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://pipeline-demo.com',
      timeline: '4 months',
      team: '3 developers',
      challenges: [
        'Integrating multiple testing frameworks',
        'Implementing automated security scanning',
        'Creating rollback mechanisms for failed deployments',
        'Optimizing pipeline performance and resource usage'
      ],
      features: [
        'Automated testing and quality gates',
        'Security vulnerability scanning',
        'Infrastructure as Code deployment',
        'Automated rollback on failures',
        'Performance and load testing',
        'Deployment analytics and reporting'
      ]
    }
  };

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
                  <Button className="bg-primary hover:bg-primary/90">
                    <Code className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                )}
                {project.liveUrl && (
                  <Button variant="outline" className="border-primary/30 hover:border-primary">
                    <LinkIcon className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                )}
              </div>
            </div>

            {/* Project Image */}
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-12 flex items-center justify-center animate-slide-up">
              <Code className="w-24 h-24 text-primary/60" />
            </div>

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
