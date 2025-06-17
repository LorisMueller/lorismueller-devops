
import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-slide-up">
              <h1 className="text-5xl font-bold mb-6">
                {t('about.title').split(' ')[0]} <span className="text-gradient">{t('about.title').split(' ')[1]}</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t('about.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div className="animate-slide-in-left">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                  <div className="w-50 h-50 bg-primary/10 rounded-full flex items-center justify-center p-1">
                    <img
                      src="/pictures/portrait-1.jpg"
                      alt="Profile"
                      className="rounded-full w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-6 animate-slide-in-right">
                <Card className="p-6 bg-card border-border/20">
                  <h3 className="text-xl font-semibold mb-3 text-primary">{t('about.journey.title')}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('about.journey.text')}
                  </p>
                </Card>

                <Card className="p-6 bg-card border-border/20">
                  <h3 className="text-xl font-semibold mb-3 text-secondary">{t('about.drives.title')}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('about.drives.text')}
                  </p>
                </Card>

                <Card className="p-6 bg-card border-border/20">
                  <h3 className="text-xl font-semibold mb-3 text-primary">{t('about.beyond.title')}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('about.beyond.text')}
                  </p>
                </Card>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-up">
              <Card className="p-6 text-center bg-card border-border/20 card-hover">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground">{t('about.stats.projects')}</div>
              </Card>
              <Card className="p-6 text-center bg-card border-border/20 card-hover">
                <div className="text-3xl font-bold text-secondary mb-2">2+</div>
                <div className="text-muted-foreground">{t('about.stats.years')}</div>
              </Card>
              <Card className="p-6 text-center bg-card border-border/20 card-hover">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground">{t('about.stats.technologies')}</div>
              </Card>
              <Card className="p-6 text-center bg-card border-border/20 card-hover">
                <div className="text-3xl font-bold text-secondary mb-2">100%</div>
                <div className="text-muted-foreground">{t('about.stats.motivated')}</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
