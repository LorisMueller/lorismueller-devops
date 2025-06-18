
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background/95 to-muted/20">
      {/* Floating background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float" />
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-secondary/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-3/4 w-40 h-40 bg-primary/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : ''}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient">DevOps Engineer</span>
            <br />
            <span className="block mt-4 text-foreground">Loris Müller</span>
          </h1>
        </div>

        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'animate-slide-up' : ''}`}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Fullstack Developer & DevOps Specialist crafting scalable solutions
            and building robust infrastructure for the modern web.
          </p>
        </div>

        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'animate-slide-up' : ''}`}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/projects">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 glow-primary"
              >
                View My Work
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-primary/30 hover:border-primary hover:bg-primary/10 px-8 py-3"
              >
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>

        <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'animate-slide-up' : ''}`}>
          <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
            <span className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>React & TypeScript</span>
            </span>
            <span className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span>Springboot and Jenkins</span>
            </span>
            <span className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>AWS & IBM Cloud</span>
            </span>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
};

export default Hero;
