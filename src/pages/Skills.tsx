
import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: 'DevOps & Infrastructure',
      color: 'primary',
      skills: [
        { name: 'Docker', level: 55 },
        { name: 'Git', level: 95 },
        { name: 'AWS', level: 50 },
        { name: 'Jenkins', level: 65 },
        { name: 'GitLab CI/CD', level: 65 }
      ]
    },
    {
      title: 'Frontend Development',
      color: 'secondary',
      skills: [
        { name: 'React', level: 80 },
        { name: 'TypeScript', level: 60 },
        { name: 'Angular', level: 75 },
        { name: 'Tailwind CSS', level: 50 },
        { name: 'Vue.js', level: 60 },
        { name: 'Responsive Design', level: 60 }
      ]
    },
    {
      title: 'Backend Development',
      color: 'primary',
      skills: [
        { name: 'SQL', level: 70 },
        { name: 'Java Springboot', level: 85 },
        { name: 'MariaDB', level: 70 },
        { name: 'MongoDB', level: 70 },
        { name: 'REST APIs', level: 85 },
        { name: 'JUnit Testing', level: 80 }
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
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-secondary font-bold">Sec</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Jr Penetration Tester - tryhackme</h3>
                <p className="text-muted-foreground text-sm">a professional, hands-on certification that demonstrates real-world penetration testing skills and is recognized by top cybersecurity employers</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
