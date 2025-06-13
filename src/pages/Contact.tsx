
import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, User, ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const Contact = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let time = 0;
    let morphFactor = 0;
    const targetMorph = isHovered ? 1 : 0;

    const animate = () => {
      time += 0.02;
      morphFactor += (targetMorph - morphFactor) * 0.05;

      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      const centerX = canvas.offsetWidth / 2;
      const centerY = canvas.offsetHeight / 2;
      const size = 80;

      // Create multiple rotating shapes
      for (let layer = 0; layer < 3; layer++) {
        const layerTime = time + layer * 0.5;
        const radius = size - layer * 15;
        
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(layerTime * (layer % 2 === 0 ? 1 : -1));

        // Create gradient
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, radius);
        if (layer === 0) {
          gradient.addColorStop(0, 'rgba(52, 120, 131, 0.8)');
          gradient.addColorStop(1, 'rgba(52, 120, 131, 0.1)');
        } else if (layer === 1) {
          gradient.addColorStop(0, 'rgba(255, 63, 0, 0.6)');
          gradient.addColorStop(1, 'rgba(255, 63, 0, 0.1)');
        } else {
          gradient.addColorStop(0, 'rgba(52, 120, 131, 0.4)');
          gradient.addColorStop(1, 'rgba(255, 63, 0, 0.1)');
        }

        ctx.fillStyle = gradient;
        ctx.strokeStyle = layer === 0 ? 'rgba(52, 120, 131, 0.6)' : 'rgba(255, 63, 0, 0.4)';
        ctx.lineWidth = 2;

        // Morph between shapes
        const points = 6 + Math.floor(morphFactor * 2);
        
        ctx.beginPath();
        for (let i = 0; i <= points; i++) {
          const angle = (i / points) * Math.PI * 2;
          const waveRadius = radius + Math.sin(layerTime * 3 + angle * 4) * 10 * morphFactor;
          const x = Math.cos(angle) * waveRadius;
          const y = Math.sin(angle) * waveRadius;
          
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Add inner glow
        ctx.beginPath();
        ctx.arc(0, 0, radius * 0.3, 0, Math.PI * 2);
        const innerGlow = ctx.createRadialGradient(0, 0, 0, 0, 0, radius * 0.3);
        innerGlow.addColorStop(0, layer === 0 ? 'rgba(52, 120, 131, 0.9)' : 'rgba(255, 63, 0, 0.7)');
        innerGlow.addColorStop(1, 'rgba(52, 120, 131, 0)');
        ctx.fillStyle = innerGlow;
        ctx.fill();

        ctx.restore();
      }

      // Add floating particles
      for (let i = 0; i < 8; i++) {
        const particleTime = time + i * 0.8;
        const angle = particleTime * 0.5;
        const distance = 120 + Math.sin(particleTime) * 20;
        const x = centerX + Math.cos(angle) * distance;
        const y = centerY + Math.sin(angle) * distance;
        
        ctx.beginPath();
        ctx.arc(x, y, 3 + Math.sin(particleTime * 2) * 1, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(52, 120, 131, ${0.6 + Math.sin(particleTime * 3) * 0.3})`;
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovered]);

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
              {/* 3D Morphing Visualization */}
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/20 animate-slide-in-left overflow-hidden">
                <div className="relative">
                  <div 
                    className="relative bg-gradient-to-br from-primary/5 via-card to-secondary/5 rounded-xl border border-border/10 overflow-hidden"
                    style={{ height: '400px' }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <canvas
                      ref={canvasRef}
                      className="w-full h-full"
                      style={{ width: '100%', height: '100%' }}
                    />

                    {/* Floating Action */}
                    <div className="absolute bottom-6 right-6">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-muted-foreground hover:text-primary transition-colors group"
                      >
                        Hover to Transform
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mt-4">
                    Hover over the canvas to see the morphing animation.
                    This represents the dynamic and adaptive approach I bring to development.
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
