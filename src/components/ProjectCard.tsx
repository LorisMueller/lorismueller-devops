
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Link } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

const ProjectCard = ({ 
  id, 
  title, 
  description, 
  image, 
  technologies, 
  githubUrl, 
  liveUrl, 
  featured = false 
}: ProjectCardProps) => {
  return (
    <Card className={`group overflow-hidden card-hover bg-card border-border/20 ${featured ? 'col-span-2' : ''}`}>
      <div className="relative overflow-hidden">
        <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
          <Code className="w-12 h-12 text-primary/60" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex space-x-2">
            {githubUrl && (
              <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm">
                <Code className="w-4 h-4 mr-2" />
                Code
              </Button>
            )}
            {liveUrl && (
              <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm">
                <Link className="w-4 h-4 mr-2" />
                Live
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-secondary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-secondary/10 text-secondary rounded-md border border-primary/20"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 3 && (
            <span className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md">
              +{technologies.length - 3} more
            </span>
          )}
        </div>

        <RouterLink to={`/projects/${id}`}>
          <Button variant="ghost" className="w-full justify-between group/btn">
            Learn More
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </RouterLink>
      </div>
    </Card>
  );
};

export default ProjectCard;
