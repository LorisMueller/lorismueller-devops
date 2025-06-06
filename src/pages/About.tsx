
import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-slide-up">
              <h1 className="text-5xl font-bold mb-6">
                About <span className="text-gradient">Me</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Passionate DevOps Engineer with a strong foundation in fullstack development, 
                dedicated to building scalable, reliable, and efficient systems.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div className="animate-slide-in-left">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                  <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary">DE</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6 animate-slide-in-right">
                <Card className="p-6 bg-card border-border/20">
                  <h3 className="text-xl font-semibold mb-3 text-primary">My Journey</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Starting as a fullstack developer, I discovered my passion for infrastructure 
                    and automation. Over the past 5 years, I've specialized in DevOps practices, 
                    helping teams deliver software faster and more reliably.
                  </p>
                </Card>

                <Card className="p-6 bg-card border-border/20">
                  <h3 className="text-xl font-semibold mb-3 text-secondary">What Drives Me</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I believe in the power of automation and well-designed systems. My goal is to 
                    eliminate manual processes, reduce deployment friction, and create environments 
                    where developers can focus on building great products.
                  </p>
                </Card>

                <Card className="p-6 bg-card border-border/20">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Beyond Code</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    When I'm not coding or configuring infrastructure, you'll find me contributing 
                    to open source projects, mentoring junior developers, or exploring the latest 
                    cloud technologies and development practices.
                  </p>
                </Card>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-up">
              <Card className="p-6 text-center bg-card border-border/20 card-hover">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Projects</div>
              </Card>
              <Card className="p-6 text-center bg-card border-border/20 card-hover">
                <div className="text-3xl font-bold text-secondary mb-2">5+</div>
                <div className="text-muted-foreground">Years</div>
              </Card>
              <Card className="p-6 text-center bg-card border-border/20 card-hover">
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <div className="text-muted-foreground">Clients</div>
              </Card>
              <Card className="p-6 text-center bg-card border-border/20 card-hover">
                <div className="text-3xl font-bold text-secondary mb-2">15+</div>
                <div className="text-muted-foreground">Technologies</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
