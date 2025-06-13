
import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, User, Zap, ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const Contact = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [pulseActive, setPulseActive] = useState(false);

  // Trigger pulse animation periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setPulseActive(true);
      setTimeout(() => setPulseActive(false), 2000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const skillBubbles = [
    { label: 'React', x: 20, y: 30, delay: 0 },
    { label: 'TypeScript', x: 70, y: 20, delay: 200 },
    { label: 'Node.js', x: 15, y: 70, delay: 400 },
    { label: 'Docker', x: 80, y: 60, delay: 600 },
    { label: 'AWS', x: 45, y: 50, delay: 800 },
    { label: 'DevOps', x: 60, y: 80, delay: 1000 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-slide-up">
              <h1 className="text-5xl font-bold mb-6">
                Get In <span className="text-gradient">Touch</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Ready to discuss your next project? I'd love to hear about your challenges
                and explore how we can work together to build something amazing.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Interactive Tech Stack Visualization */}
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/20 animate-slide-in-left overflow-hidden">
                <div className="relative">
                  <div 
                    className="relative bg-gradient-to-br from-primary/5 via-card to-secondary/5 rounded-xl border border-border/10 overflow-hidden"
                    style={{ height: '400px' }}
                  >
                    {/* Animated Background Grid */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
                        {Array.from({ length: 64 }).map((_, i) => (
                          <div
                            key={i}
                            className={`border border-primary/10 transition-all duration-1000 ${
                              pulseActive ? 'bg-primary/5' : ''
                            }`}
                            style={{ 
                              animationDelay: `${i * 50}ms`,
                              animation: pulseActive ? 'pulse 2s ease-in-out' : 'none'
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Floating Tech Bubbles */}
                    <div className="absolute inset-0 p-6">
                      {skillBubbles.map((skill, index) => (
                        <div
                          key={skill.label}
                          className={`absolute transform transition-all duration-500 cursor-pointer ${
                            hoveredIndex === index ? 'scale-110 z-10' : 'scale-100'
                          }`}
                          style={{
                            left: `${skill.x}%`,
                            top: `${skill.y}%`,
                            animationDelay: `${skill.delay}ms`
                          }}
                          onMouseEnter={() => setHoveredIndex(index)}
                          onMouseLeave={() => setHoveredIndex(null)}
                        >
                          <div className={`
                            relative px-4 py-2 rounded-full backdrop-blur-sm border transition-all duration-300
                            ${hoveredIndex === index 
                              ? 'bg-primary/20 border-primary/40 shadow-lg shadow-primary/20' 
                              : 'bg-card/60 border-border/30'
                            }
                          `}>
                            <span className={`text-sm font-medium transition-colors duration-300 ${
                              hoveredIndex === index ? 'text-primary' : 'text-foreground'
                            }`}>
                              {skill.label}
                            </span>
                            
                            {/* Glow effect on hover */}
                            {hoveredIndex === index && (
                              <div className="absolute inset-0 rounded-full bg-primary/10 animate-ping" />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Central Connection Hub */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className={`
                        w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary 
                        flex items-center justify-center transition-all duration-500
                        ${pulseActive ? 'scale-110 shadow-lg shadow-primary/30' : 'scale-100'}
                      `}>
                        <Zap className="w-8 h-8 text-white" />
                      </div>
                      
                      {/* Connecting Lines */}
                      {skillBubbles.map((skill, index) => (
                        <div
                          key={`line-${index}`}
                          className={`absolute w-px bg-gradient-to-r from-primary/20 to-transparent transition-opacity duration-300 ${
                            hoveredIndex === index ? 'opacity-60' : 'opacity-20'
                          }`}
                          style={{
                            height: `${Math.sqrt(Math.pow(skill.x - 50, 2) + Math.pow(skill.y - 50, 2)) * 2}px`,
                            transformOrigin: 'top',
                            transform: `rotate(${Math.atan2(skill.y - 50, skill.x - 50) * 180 / Math.PI + 90}deg)`,
                          }}
                        />
                      ))}
                    </div>

                    {/* Floating Action */}
                    <div className="absolute bottom-6 right-6">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-muted-foreground hover:text-primary transition-colors group"
                      >
                        Explore Tech Stack
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mt-4">
                    Hover over the technologies to see the interactive connections.
                    This represents the integrated approach I take with modern development.
                  </p>
                </div>
              </Card>

              {/* Contact Information */}
              <div className="space-y-6 animate-slide-in-right">
                <Card className="p-6 bg-card border-border/20 card-hover">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Email</h3>
                      <p className="text-muted-foreground">lorismueller_business@protonmail.com</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    I typically respond to emails within 24 hours. Feel free to reach out
                    for project inquiries, collaboration opportunities, or just to say hello.
                  </p>
                </Card>

                <Card className="p-6 bg-card border-border/20 card-hover">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <User className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Social Media</h3>
                      <p className="text-muted-foreground">Connect with me online</p>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <div className="flex space-x-4">
                      <a
                        href="https://www.linkedin.com/in/loris-mueller/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                          LinkedIn
                        </Button>
                      </a>
                      <a
                        href="https://github.com/LorisMueller"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                          GitHub
                        </Button>
                      </a>
                    </div>

                  </div>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 border-border/20">
                  <h3 className="text-lg font-semibold mb-2">Let's Build Something Great</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Whether you need DevOps consulting, infrastructure automation,
                    or fullstack development, I'm here to help bring your ideas to life.
                  </p>
                  <div className="flex space-x-2 text-xs text-muted-foreground">
                    <span>💼 Available for freelance</span>
                    <span>•</span>
                    <span>🚀 Remote-friendly</span>
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

export default Contact;
