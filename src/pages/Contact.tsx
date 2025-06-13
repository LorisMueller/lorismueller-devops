
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
    let pulseIntensity = 0;
    const targetMorph = isHovered ? 1 : 0;

    const animate = () => {
      time += 0.02;
      
      // Smooth morphing transition
      morphFactor += (targetMorph - morphFactor) * 0.08;
      
      // Pulse effect on hover
      pulseIntensity += (isHovered ? 1 : 0 - pulseIntensity) * 0.1;

      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      const centerX = canvas.offsetWidth / 2;
      const centerY = canvas.offsetHeight / 2;
      const baseSize = 60;

      // Create multiple morphing layers with enhanced hover effects
      for (let layer = 0; layer < 4; layer++) {
        const layerTime = time + layer * 0.3;
        const radius = baseSize + layer * 15 + morphFactor * 20;
        const hoverScale = 1 + morphFactor * 0.5;
        
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(layerTime * (layer % 2 === 0 ? 1 : -1) * (1 + morphFactor * 2));
        ctx.scale(hoverScale, hoverScale);

        // Enhanced gradients with hover effects
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, radius);
        
        if (layer === 0) {
          gradient.addColorStop(0, `rgba(52, 120, 131, ${0.9 + morphFactor * 0.3})`);
          gradient.addColorStop(0.5, `rgba(52, 120, 131, ${0.6 + morphFactor * 0.4})`);
          gradient.addColorStop(1, `rgba(52, 120, 131, ${0.1 + morphFactor * 0.2})`);
        } else if (layer === 1) {
          gradient.addColorStop(0, `rgba(255, 63, 0, ${0.7 + morphFactor * 0.5})`);
          gradient.addColorStop(0.5, `rgba(255, 63, 0, ${0.4 + morphFactor * 0.3})`);
          gradient.addColorStop(1, `rgba(255, 63, 0, ${0.1 + morphFactor * 0.2})`);
        } else if (layer === 2) {
          gradient.addColorStop(0, `rgba(52, 120, 131, ${0.5 + morphFactor * 0.4})`);
          gradient.addColorStop(0.5, `rgba(255, 63, 0, ${0.3 + morphFactor * 0.3})`);
          gradient.addColorStop(1, `rgba(52, 120, 131, ${0.05 + morphFactor * 0.15})`);
        } else {
          gradient.addColorStop(0, `rgba(255, 63, 0, ${0.3 + morphFactor * 0.6})`);
          gradient.addColorStop(0.5, `rgba(52, 120, 131, ${0.2 + morphFactor * 0.4})`);
          gradient.addColorStop(1, `rgba(255, 63, 0, ${0.05 + morphFactor * 0.2})`);
        }

        ctx.fillStyle = gradient;
        ctx.strokeStyle = layer % 2 === 0 
          ? `rgba(52, 120, 131, ${0.7 + morphFactor * 0.3})` 
          : `rgba(255, 63, 0, ${0.5 + morphFactor * 0.5})`;
        ctx.lineWidth = 1 + morphFactor * 3;

        // Advanced morphing shapes
        const points = 6 + Math.floor(morphFactor * 6);
        const complexity = 1 + morphFactor * 3;
        
        ctx.beginPath();
        for (let i = 0; i <= points; i++) {
          const angle = (i / points) * Math.PI * 2;
          
          // Multi-layered wave distortion
          const wave1 = Math.sin(layerTime * 2 + angle * complexity) * (8 + morphFactor * 15);
          const wave2 = Math.cos(layerTime * 3 + angle * complexity * 1.5) * (5 + morphFactor * 12);
          const wave3 = Math.sin(layerTime * 4 + angle * complexity * 0.7) * morphFactor * 8;
          
          const finalRadius = radius + wave1 + wave2 + wave3;
          const x = Math.cos(angle) * finalRadius;
          const y = Math.sin(angle) * finalRadius;
          
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Enhanced inner glow with pulsing
        if (layer < 2) {
          ctx.beginPath();
          ctx.arc(0, 0, radius * (0.2 + morphFactor * 0.3), 0, Math.PI * 2);
          const innerGlow = ctx.createRadialGradient(0, 0, 0, 0, 0, radius * (0.2 + morphFactor * 0.3));
          const glowColor = layer === 0 ? '52, 120, 131' : '255, 63, 0';
          innerGlow.addColorStop(0, `rgba(${glowColor}, ${0.9 + pulseIntensity * 0.3})`);
          innerGlow.addColorStop(0.7, `rgba(${glowColor}, ${0.4 + pulseIntensity * 0.2})`);
          innerGlow.addColorStop(1, `rgba(${glowColor}, 0)`);
          ctx.fillStyle = innerGlow;
          ctx.fill();
        }

        ctx.restore();
      }

      // Enhanced floating particles with hover interaction
      const particleCount = 12 + Math.floor(morphFactor * 8);
      for (let i = 0; i < particleCount; i++) {
        const particleTime = time + i * 0.5;
        const angle = particleTime * 0.3 + i * 0.5;
        const distance = 140 + Math.sin(particleTime * 1.2) * (30 + morphFactor * 40);
        const hoverOffset = morphFactor * Math.sin(particleTime * 4) * 20;
        
        const x = centerX + Math.cos(angle) * distance + hoverOffset;
        const y = centerY + Math.sin(angle) * distance + hoverOffset;
        
        const particleSize = 2 + Math.sin(particleTime * 2) * 1 + morphFactor * 3;
        const opacity = 0.4 + Math.sin(particleTime * 3) * 0.3 + morphFactor * 0.4;
        
        ctx.beginPath();
        ctx.arc(x, y, particleSize, 0, Math.PI * 2);
        
        // Alternating particle colors
        const colorIndex = i % 3;
        if (colorIndex === 0) {
          ctx.fillStyle = `rgba(52, 120, 131, ${opacity})`;
        } else if (colorIndex === 1) {
          ctx.fillStyle = `rgba(255, 63, 0, ${opacity})`;
        } else {
          ctx.fillStyle = `rgba(100, 200, 255, ${opacity * 0.8})`;
        }
        
        ctx.fill();
        
        // Add particle glow on hover
        if (morphFactor > 0.1) {
          ctx.beginPath();
          ctx.arc(x, y, particleSize * (1 + morphFactor), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${morphFactor * 0.2})`;
          ctx.fill();
        }
      }

      // Connection lines between particles on hover
      if (morphFactor > 0.3) {
        ctx.strokeStyle = `rgba(52, 120, 131, ${morphFactor * 0.3})`;
        ctx.lineWidth = 1;
        ctx.setLineDash([5, 10]);
        
        for (let i = 0; i < 6; i++) {
          const angle1 = time * 0.3 + i * 1.0;
          const angle2 = time * 0.3 + (i + 2) * 1.0;
          const distance = 140;
          
          const x1 = centerX + Math.cos(angle1) * distance;
          const y1 = centerY + Math.sin(angle1) * distance;
          const x2 = centerX + Math.cos(angle2) * distance;
          const y2 = centerY + Math.sin(angle2) * distance;
          
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        }
        
        ctx.setLineDash([]);
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
                    className="relative bg-gradient-to-br from-primary/5 via-card to-secondary/5 rounded-xl border border-border/10 overflow-hidden cursor-pointer transition-all duration-500"
                    style={{ height: '400px' }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <canvas
                      ref={canvasRef}
                      className="w-full h-full transition-all duration-500"
                      style={{ width: '100%', height: '100%' }}
                    />

                    {/* Floating Action */}
                    <div className="absolute bottom-6 right-6">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className={`text-muted-foreground hover:text-primary transition-all duration-300 group ${
                          isHovered ? 'scale-110 text-primary' : ''
                        }`}
                      >
                        {isHovered ? 'Amazing!' : 'Hover to Transform'}
                        <ArrowRight className={`w-4 h-4 ml-2 transition-all duration-300 ${
                          isHovered ? 'translate-x-2 scale-110' : 'group-hover:translate-x-1'
                        }`} />
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
