import { Quote } from "lucide-react";

interface Testimonial {
  name: string;
  text: string;
  role?: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export const Testimonials = ({ testimonials }: TestimonialsProps) => {
  return (
    <section className="py-20 bg-warm-cream">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-main text-foreground mb-4">
            Depoimentos
          </h2>
          <p className="text-lg font-secondary text-muted-foreground">
            Palavras de quem confia no meu trabalho
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-shadow border border-border"
            >
              <Quote className="w-10 h-10 text-primary mb-4" />
              <p className="text-lg text-foreground font-secondary mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-semibold font-main text-foreground">{testimonial.name}</p>
                {testimonial.role && (
                  <p className="text-sm font-secondary text-muted-foreground">{testimonial.role}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
