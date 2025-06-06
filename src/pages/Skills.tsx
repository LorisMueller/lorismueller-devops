
import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: 'DevOps & Infrastructure',
      color: 'primary',
      skills: [
        { name: 'Docker', level: 95 },
        { name: 'Kubernetes', level: 90 },
        { name: 'AWS', level: 88 },
        { name: 'Terraform', level: 85 },
        { name: 'Jenkins', level: 82 },
        { name: 'GitLab CI/CD', level: 90 }
      ]
    },
    {
      title: 'Frontend Development',
      color: 'secondary',
      skills: [
        { name: 'React', level: 92 },
        { name: 'TypeScript', level: 88 },
        { name: 'Next.js', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Vue.js', level: 75 },
        { name: 'GraphQL', level: 80 }
      ]
    },
    {
      title: 'Backend Development',
      color: 'primary',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'Go', level: 78 },
        { name: 'PostgreSQL', level: 88 },
        { name: 'MongoDB', level: 82 },
        { name: 'Redis', level: 85 }
      ]
    },
    {
      title: 'Tools & Technologies',
      color: 'secondary',
      skills: [
        { name: 'Git', level: 95 },
        { name: 'Linux', level: 90 },
        { name: 'Nginx', level: 85 },
        { name: 'Prometheus', level: 80 },
        { name: 'Grafana', level: 82 },
        { name: 'Ansible', level: 78 }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-5xl font-bold mb-6">
              My <span className="text-gradient">Skills</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise across DevOps, 
              infrastructure automation, and fullstack development. Built through 
              years of hands-on experience and continuous learning.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card
                key={category.title}
                className="p-6 bg-card border-border/20 animate-slide-up"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <h2 className={`text-2xl font-semibold mb-6 ${
                  category.color === 'primary' ? 'text-primary' : 'text-secondary'
                }`}>
                  {category.title}
                </h2>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-foreground font-medium">{skill.name}</span>
                        <span className="text-muted-foreground text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-1000 ease-out ${
                            category.color === 'primary' ? 'bg-primary' : 'bg-secondary'
                          }`}
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Certifications Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Certifications & <span className="text-gradient">Education</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6 bg-card border-border/20 card-hover animate-slide-up">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">AWS</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">AWS Solutions Architect</h3>
                <p className="text-muted-foreground text-sm">Professional certification for designing distributed applications on AWS</p>
              </Card>

              <Card className="p-6 bg-card border-border/20 card-hover animate-slide-up">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-secondary font-bold">K8s</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Kubernetes Administrator</h3>
                <p className="text-muted-foreground text-sm">Certified Kubernetes Administrator (CKA) for cluster management</p>
              </Card>

              <Card className="p-6 bg-card border-border/20 card-hover animate-slide-up">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">TF</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Terraform Associate</h3>
                <p className="text-muted-foreground text-sm">HashiCorp certified for infrastructure as code practices</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
