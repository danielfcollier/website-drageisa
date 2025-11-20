import { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeatureMatrixProps {
  title: string;
  subtitle: string;
  features: Feature[];
  paragraph?: string;
  id?: string;
  bgColor?: string;
}

export const FeatureMatrix = ({ title, subtitle, features, paragraph, id, bgColor = "bg-background" }: FeatureMatrixProps) => {
  return (
    <section id={id} className={`py-20 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl md:text-4xl font-bold font-main text-foreground mb-4">{title}</h2>
          {subtitle && (
            <p className="text-base md:text-lg font-secondary text-muted-foreground">{subtitle}</p>
          )}
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-card rounded-xl p-8 shadow-soft hover:shadow-medium transition-shadow border border-border"
              >
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold font-main text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground font-secondary leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
        
        {paragraph && (
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-foreground font-secondary leading-relaxed">{paragraph}</p>
          </div>
        )}
      </div>
    </section>
  );
};
