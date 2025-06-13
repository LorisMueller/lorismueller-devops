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

    const dpr = window.devicePixelRatio || 1;

    const resizeCanvas = () => {
      const { offsetWidth: width, offsetHeight: height } = canvas;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let time = 0;

    const drawLayer = (layer: number) => {
      const layerTime = time + layer * 0.5;
      const radius = 80 - layer * 15;
      const morphFactor = 1;

      ctx.save();
      ctx.translate(canvas.offsetWidth / 2 / dpr, canvas.offsetHeight / 2 / dpr);
      ctx.rotate(layerTime * (layer % 2 === 0 ? 1 : -1));

      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, radius);
      const mainColor = layer === 1 ? 'rgba(255, 63, 0' : 'rgba(52, 120, 131';

      gradient.addColorStop(0, `${mainColor}, ${0.6 - layer * 0.2})`);
      gradient.addColorStop(1, `${mainColor}, 0.1)`);

      ctx.fillStyle = gradient;
      ctx.strokeStyle = `${mainColor}, ${layer === 0 ? 0.6 : 0.4})`;
      ctx.lineWidth = 2;

      const points = 6 + Math.floor(morphFactor * 2);

      ctx.beginPath();
      for (let i = 0; i <= points; i++) {
        const angle = (i / points) * Math.PI * 2;
        const wave = Math.sin(layerTime * 3 + angle * 4) * 10 * morphFactor;
        const r = radius + wave;
        const x = Math.cos(angle) * r;
        const y = Math.sin(angle) * r;
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Inner glow
      const glowRadius = radius * 0.3;
      const innerGlow = ctx.createRadialGradient(0, 0, 0, 0, 0, glowRadius);
      innerGlow.addColorStop(0, `${mainColor}, ${layer === 0 ? 0.9 : 0.7})`);
      innerGlow.addColorStop(1, `${mainColor}, 0)`);

      ctx.beginPath();
      ctx.arc(0, 0, glowRadius, 0, Math.PI * 2);
      ctx.fillStyle = innerGlow;
      ctx.fill();

      ctx.restore();
    };

    const drawParticles = () => {
      const cx = canvas.offsetWidth / 2 / dpr;
      const cy = canvas.offsetHeight / 2 / dpr;
      for (let i = 0; i < 8; i++) {
        const t = time + i * 0.8;
        const angle = t * 0.5;
        const distance = 120 + Math.sin(t) * 20;
        const x = cx + Math.cos(angle) * distance;
        const y = cy + Math.sin(angle) * distance;
        const alpha = 0.6 + Math.sin(t * 3) * 0.3;

        ctx.beginPath();
        ctx.arc(x, y, 3 + Math.sin(t * 2), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(52, 120, 131, ${alpha})`;
        ctx.fill();
      }
    };

    const animate = () => {
      const deltaTime = isHovered ? 0.15 : 0.02; // Speed up when hovered
      time += deltaTime;
    
      ctx.clearRect(0, 0, canvas.offsetWidth / dpr, canvas.offsetHeight / dpr);
    
      for (let layer = 0; layer < 3; layer++) drawLayer(layer);
      drawParticles();
    
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationRef.current!);
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
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/20 animate-slide-in-left overflow-hidden">
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