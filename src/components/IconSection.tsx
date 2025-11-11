import { LucideIcon } from "lucide-react";

interface IconItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface IconSectionProps {
  items: IconItem[];
  backgroundColor?: "light" | "dark";
}

export const IconSection = ({ items, backgroundColor = "light" }: IconSectionProps) => {
  const bgClass = backgroundColor === "light" ? "bg-warm-cream" : "bg-background";
  
  return (
    <section className={`py-20 ${bgClass}`}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
