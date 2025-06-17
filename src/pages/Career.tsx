
import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Calendar, MapPin, Building } from 'lucide-react';

const Career = () => {
  const experiences = [
    {
      title: 'DevOps Engineer I (Young Professional Program)',
      company: 'Swisscom',
      location: 'Zürich, Switzerland',
      period: '2024 – 2025',
      type: 'Full-time',
      description: 'Continued in the same senior team after completing the apprenticeship, with a focus on DevOps engineering and backend development. Took ownership of automation solutions and contributed across multiple complex systems.',
      achievements: [
        'Designed and developed an automation application for onboarding enterprise customers — from planning to deployment',
        'Deepened expertise in backend development with Spring Boot',
        'Successfully onboarded into a variety of internal products and systems within a short time',
        'Continued collaboration with a senior engineering team in a fast-paced DevOps environment'
      ],
      technologies: ['Spring Boot', 'Java', 'Jenkins', 'GitLab CI/CD', 'Angular']
    },    
    {
      title: 'Apprentice Application Developer',
      company: 'Swisscom',
      location: 'Zürich, Switzerland',
      period: '2020 - 2024',
      type: 'Apprenticeship',
      description: 'Started my software engineering journey during a four-year apprenticeship at Swisscom. Initially focused on web development using modern frameworks, later expanded into backend development and DevOps engineering.',
      achievements: [
        'Gained foundational programming skills and experience in real-world projects',
        'Worked on process automation solutions to improve internal workflows',
        'Led a team of apprentices, overseeing development tasks and acting as the main contact for customer interactions',
        'Collaborated with a senior engineering team as a DevOps engineer, with a focus on CI/CD, Jenkins, and Spring Boot backend development'
      ],
      technologies: ['JavaScript', 'React', 'HTML/CSS', 'Spring Boot', 'Jenkins', 'GitLab CI/CD', 'Docker']
    }
  ];

  const education = [
    {
      degree: 'Swiss-certified Application Developer (EFZ)',
      school: 'Swisscom (Berufsbildungsschule Winterthur)',
      location: 'Zürich, Switzerland',
      period: '2020 - 2024',
      description: 'Focused on software engineering, web development, and devops engineering. Graduated with honors and completed a senior project on distributed systems.',
      achievements: [
        'Final thesis awarded a grade of 5.9 (on a 6-point Swiss grading scale)',
        'Leader of an apprentice team',
        'Developed strong DevOps skills as part of a high-level senior team'
      ]
    },
    {
      degree: 'Federal Vocational Baccalaureate (Berufsmaturität)',
      school: 'Berufsbildungsschule Winterthur',
      location: 'Zürich, Switzerland',
      period: '2020 - 2024',
      description: 'Completed the Swiss Federal Vocational Baccalaureate alongside the apprenticeship, with a focus on technical and scientific subjects.',
      achievements: [
        'Graduated with an overall grade of 5.3 (on a 6-point Swiss grading scale)',
        'Final thesis on the effect of caffeine in sports awarded a grade of 5.7',
        'Thesis recognized as one of the best in the graduating year'
      ]
    }    
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-slide-up">
              <h1 className="text-5xl font-bold mb-6">
                My <span className="text-gradient">Career</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A journey through my professional experience in DevOps, infrastructure automation, 
                and fullstack development. Each role has contributed to my growth as a technical leader 
                and problem solver.
              </p>
            </div>

            {/* Professional Experience */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Professional <span className="text-primary">Experience</span>
              </h2>
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <Card
                    key={index}
                    className="p-6 bg-card border-border/20 card-hover animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div className="lg:col-span-2">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-primary mb-1">
                              {exp.title}
                            </h3>
                            <div className="flex items-center space-x-4 text-muted-foreground text-sm">
                              <span className="flex items-center space-x-1">
                                <Building className="w-4 h-4" />
                                <span>{exp.company}</span>
                              </span>
                              <span className="flex items-center space-x-1">
                                <MapPin className="w-4 h-4" />
                                <span>{exp.location}</span>
                              </span>
                            </div>
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {exp.description}
                        </p>

                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-secondary mb-2">Key Achievements:</h4>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md border border-primary/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="lg:col-span-1">
                        <div className="bg-muted/20 rounded-lg p-4">
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {exp.type}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-center">
                <span className="text-secondary">Education</span>
              </h2>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card
                    key={index}
                    className="p-6 bg-card border-border/20 card-hover animate-slide-up"
                    style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div className="lg:col-span-2">
                        <h3 className="text-xl font-semibold text-secondary mb-2">
                          {edu.degree}
                        </h3>
                        <div className="flex items-center space-x-4 text-muted-foreground text-sm mb-4">
                          <span className="flex items-center space-x-1">
                            <Building className="w-4 h-4" />
                            <span>{edu.school}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{edu.location}</span>
                          </span>
                        </div>

                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {edu.description}
                        </p>

                        <div>
                          <h4 className="text-sm font-semibold text-primary mb-2">Highlights:</h4>
                          <ul className="space-y-1">
                            {edu.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2"></div>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="lg:col-span-1">
                        <div className="bg-muted/20 rounded-lg p-4">
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span>{edu.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
