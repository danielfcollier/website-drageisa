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
}

export const FeatureMatrix = ({ title, subtitle, features, paragraph, id }: FeatureMatrixProps) => {
  return (
    <section id={id} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground">{subtitle}</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-card rounded-xl p-8 shadow-soft hover:shadow-medium transition-shadow border border-border"
              >
                <div className="w-14 h-14 rounded-full bg-soft-rose flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
        
        {paragraph && (
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">{paragraph}</p>
          </div>
        )}
      </div>
    </section>
  );
};
