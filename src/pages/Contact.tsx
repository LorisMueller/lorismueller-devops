
import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, User } from 'lucide-react';
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

    let animationId: number;
    let time = 0;

    const resizeCanvas = () => {
      const container = canvas.parentElement;
      if (!container) return;
      
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      
      ctx.scale(dpr, dpr);
    };

    const drawLayer = (layer: number, canvasWidth: number, canvasHeight: number) => {
      const layerTime = time + layer * 0.5;
      const baseRadius = Math.min(canvasWidth, canvasHeight) * 0.15;
      const radius = baseRadius - layer * (baseRadius * 0.2);
      const morphFactor = isHovered ? 2 : 1;

      ctx.save();
      ctx.translate(canvasWidth / 2, canvasHeight / 2);
      ctx.rotate(layerTime * (layer % 2 === 0 ? 0.3 : -0.3));

      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, radius);
      const mainColor = layer === 0 ? '255, 63, 0' : '52, 120, 131';
      const alpha = isHovered ? 0.8 - layer * 0.15 : 0.6 - layer * 0.15;

      gradient.addColorStop(0, `rgba(${mainColor}, ${alpha})`);
      gradient.addColorStop(1, `rgba(${mainColor}, 0.1)`);

      ctx.fillStyle = gradient;
      ctx.strokeStyle = `rgba(${mainColor}, ${alpha * 0.7})`;
      ctx.lineWidth = isHovered ? 3 : 2;

      const points = 6;
      const waveIntensity = isHovered ? 15 * morphFactor : 8;

      ctx.beginPath();
      for (let i = 0; i <= points; i++) {
        const angle = (i / points) * Math.PI * 2;
        const wave = Math.sin(layerTime * 2 + angle * 3) * waveIntensity;
        const r = radius + wave;
        const x = Math.cos(angle) * r;
        const y = Math.sin(angle) * r;
        
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Inner glow
      if (isHovered) {
        const glowRadius = radius * 0.4;
        const innerGlow = ctx.createRadialGradient(0, 0, 0, 0, 0, glowRadius);
        innerGlow.addColorStop(0, `rgba(${mainColor}, ${0.6 - layer * 0.1})`);
        innerGlow.addColorStop(1, `rgba(${mainColor}, 0)`);

        ctx.beginPath();
        ctx.arc(0, 0, glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = innerGlow;
        ctx.fill();
      }

      ctx.restore();
    };

    const drawParticles = (canvasWidth: number, canvasHeight: number) => {
      const cx = canvasWidth / 2;
      const cy = canvasHeight / 2;
      const particleCount = isHovered ? 12 : 8;
      const baseDistance = Math.min(canvasWidth, canvasHeight) * 0.25;
      
      for (let i = 0; i < particleCount; i++) {
        const t = time + i * 0.8;
        const angle = t * 0.4 + i * (Math.PI * 2 / particleCount);
        const distance = baseDistance + Math.sin(t * 1.5) * (baseDistance * 0.3);
        const x = cx + Math.cos(angle) * distance;
        const y = cy + Math.sin(angle) * distance;
        const alpha = 0.4 + Math.sin(t * 2) * 0.3;
        const size = isHovered ? 4 + Math.sin(t * 3) * 2 : 2 + Math.sin(t * 2) * 1;

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(52, 120, 131, ${alpha})`;
        ctx.fill();
      }
    };

    const animate = () => {
      const container = canvas.parentElement;
      if (!container) {
        animationId = requestAnimationFrame(animate);
        return;
      }

      const rect = container.getBoundingClientRect();
      const canvasWidth = rect.width;
      const canvasHeight = rect.height;
      
      if (canvasWidth === 0 || canvasHeight === 0) {
        animationId = requestAnimationFrame(animate);
        return;
      }

      const deltaTime = isHovered ? 0.08 : 0.015;
      time += deltaTime;

      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      // Draw layers
      for (let layer = 2; layer >= 0; layer--) {
        drawLayer(layer, canvasWidth, canvasHeight);
      }
      
      drawParticles(canvasWidth, canvasHeight);

      animationId = requestAnimationFrame(animate);
    };

    // Initial setup
    resizeCanvas();
    animate();

    // Handle resize
    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationId) {
        cancelAnimationFrame(animationId);
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
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/20 animate-slide-in-left overflow-hidden">
                <div
                  className="relative bg-gradient-to-br from-primary/5 via-card to-secondary/5 rounded-xl border border-border/10 overflow-hidden w-full"
                  style={{ height: '400px' }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              </Card>

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
