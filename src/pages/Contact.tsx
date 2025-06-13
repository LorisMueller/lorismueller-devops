import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, User, MousePointer2 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const Contact = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system with design-matching colors
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      life: number;
      maxLife: number;
      angle: number;
      speed: number;
    }> = [];

    // Using your design colors - primary and secondary
    const colors = [
      'rgba(74, 144, 226, 0.8)',  // primary
      'rgba(255, 99, 71, 0.8)',   // secondary/accent
      'rgba(74, 144, 226, 0.4)',  // primary faded
      'rgba(255, 99, 71, 0.4)',   // secondary faded
      'rgba(255, 255, 255, 0.6)'  // white accent
    ];

    let mouse = { x: 0, y: 0 };

    // Create particle with more elegant movement
    const createParticle = (x: number, y: number) => {
      particles.push({
        x: x + (Math.random() - 0.5) * 30,
        y: y + (Math.random() - 0.5) * 30,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 4 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 120,
        maxLife: 120,
        angle: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.02 + 0.01
      });
    };

    // Mouse events
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      
      if (Math.random() < 0.2) {
        createParticle(mouse.x, mouse.y);
      }
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      // Clear canvas with subtle background
      ctx.fillStyle = 'rgba(8, 8, 8, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];
        
        // Update position with floating motion
        particle.angle += particle.speed;
        particle.x += particle.vx + Math.sin(particle.angle) * 0.5;
        particle.y += particle.vy + Math.cos(particle.angle) * 0.5;
        particle.life--;
        
        // Gentle attraction to mouse
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150 && distance > 0) {
          const force = (150 - distance) / 150 * 0.001;
          particle.vx += dx * force;
          particle.vy += dy * force;
        }
        
        // Apply gentle friction
        particle.vx *= 0.995;
        particle.vy *= 0.995;

        // Draw particle with glow effect
        const alpha = particle.life / particle.maxLife;
        const size = particle.size * alpha;
        
        ctx.save();
        ctx.globalAlpha = alpha;
        
        // Create gradient for glow effect
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, size * 3
        );
        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, size * 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw core
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();

        // Remove dead particles
        if (particle.life <= 0 || 
            particle.x < -50 || particle.x > canvas.width + 50 ||
            particle.y < -50 || particle.y > canvas.height + 50) {
          particles.splice(i, 1);
        }
      }

      // Draw elegant connections
      ctx.strokeStyle = 'rgba(74, 144, 226, 0.1)';
      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            const alpha = (100 - distance) / 100 * 0.3;
            ctx.save();
            ctx.globalAlpha = alpha;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    // Auto-generate ambient particles
    const autoGenerate = () => {
      if (particles.length < 15) {
        createParticle(
          Math.random() * canvas.width,
          Math.random() * canvas.height
        );
      }
    };

    const autoInterval = setInterval(autoGenerate, 1000);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      clearInterval(autoInterval);
    };
  }, []);

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
              {/* Interactive Design Canvas */}
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/20 animate-slide-in-left overflow-hidden">
                <div className="flex items-center space-x-3 mb-6">
                  <MousePointer2 className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-semibold text-primary">Interactive Experience</h2>
                </div>
                
                <div 
                  className="relative bg-gradient-to-br from-card to-muted/20 rounded-lg overflow-hidden border border-border/10"
                  style={{ height: '400px' }}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <canvas
                    ref={canvasRef}
                    className="w-full h-full cursor-crosshair transition-opacity duration-300"
                  />
                  
                  {/* Elegant overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card/20 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-4 left-4 text-muted-foreground text-sm font-medium">
                    Hover to create interactive particles ✨
                  </div>
                  
                  {/* Floating elements */}
                  <div className={`absolute top-6 right-6 w-3 h-3 bg-primary/60 rounded-full transition-all duration-1000 ${isHovering ? 'animate-pulse' : ''}`} />
                  <div className={`absolute top-12 right-12 w-2 h-2 bg-secondary/60 rounded-full transition-all duration-1000 delay-300 ${isHovering ? 'animate-pulse' : ''}`} />
                </div>
                
                <p className="text-sm text-muted-foreground mt-4">
                  This interactive experience showcases the kind of engaging, 
                  elegant interfaces I create. Each element responds naturally 
                  to your interaction with smooth, physics-based animations.
                </p>
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
