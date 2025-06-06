
import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Calendar, MapPin, Building } from 'lucide-react';

const Career = () => {
  const experiences = [
    {
      title: 'Senior DevOps Engineer',
      company: 'Tech Innovations Inc.',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      type: 'Full-time',
      description: 'Leading DevOps initiatives for a team of 20+ developers, implementing cloud-native solutions and reducing deployment time by 75%. Architecting scalable infrastructure on AWS serving 1M+ users.',
      achievements: [
        'Reduced deployment time from 2 hours to 30 minutes',
        'Implemented monitoring solutions reducing downtime by 90%',
        'Led migration to microservices architecture',
        'Mentored 5 junior developers in DevOps practices'
      ],
      technologies: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'GitLab CI/CD']
    },
    {
      title: 'DevOps Engineer',
      company: 'Digital Solutions Ltd.',
      location: 'New York, NY',
      period: '2020 - 2022',
      type: 'Full-time',
      description: 'Developed and maintained CI/CD pipelines for multiple projects, automated infrastructure provisioning, and implemented monitoring and logging solutions for improved system reliability.',
      achievements: [
        'Automated infrastructure provisioning saving 40 hours/week',
        'Implemented comprehensive monitoring stack',
        'Reduced production incidents by 60%',
        'Created standardized deployment procedures'
      ],
      technologies: ['Jenkins', 'Docker', 'AWS', 'Ansible', 'Prometheus']
    },
    {
      title: 'Fullstack Developer',
      company: 'StartupX',
      location: 'Austin, TX',
      period: '2019 - 2020',
      type: 'Full-time',
      description: 'Built and maintained web applications using React and Node.js, collaborated with cross-functional teams to deliver high-quality software products, and introduced DevOps practices to the development workflow.',
      achievements: [
        'Developed 3 major web applications from scratch',
        'Introduced automated testing increasing code coverage to 85%',
        'Optimized application performance by 40%',
        'Implemented first CI/CD pipeline for the company'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Docker', 'AWS']
    },
    {
      title: 'Junior Developer',
      company: 'WebDev Agency',
      location: 'Remote',
      period: '2018 - 2019',
      type: 'Full-time',
      description: 'Started my career developing websites and small applications, learning modern web technologies and best practices. Gained foundational experience in both frontend and backend development.',
      achievements: [
        'Completed 15+ client projects successfully',
        'Learned and applied modern JavaScript frameworks',
        'Contributed to open source projects',
        'Achieved 98% client satisfaction rating'
      ],
      technologies: ['JavaScript', 'React', 'PHP', 'MySQL', 'WordPress']
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of Technology',
      location: 'California, USA',
      period: '2014 - 2018',
      description: 'Focused on software engineering, algorithms, and system design. Graduated with honors and completed a senior project on distributed systems.',
      achievements: [
        'Graduated Summa Cum Laude (GPA: 3.9/4.0)',
        'Senior project on microservices architecture',
        'President of Computer Science Student Association',
        'Published research paper on cloud computing'
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
