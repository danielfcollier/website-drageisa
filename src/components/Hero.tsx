import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/OptimizedImage";
import heroBg from "@/assets/hero-bg.jpeg";

export const Hero = () => {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=554899623819&text=Ol%C3%A1,%20estou%20interessada%20em%20agendar%20uma%20consulta%20com%20a%20Dra.%20Geisa.%20Me%20chamo%20&source=&data=";

  const scrollToNextSection = () => {
    document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <OptimizedImage 
          src={heroBg}
          alt="Hero background"
          className="w-full h-full object-cover"
          priority={true}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-hero" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-main text-primary-foreground mb-6 leading-tight">
            Uma Medicina <span className="text-accent">MAIS Humana</span> para Mulheres
          </h1>
          <p className="text-xl md:text-2xl font-secondary text-primary-foreground/90 mb-8 leading-relaxed">
            Em Concordância com o Universo Feminino<br />
            - Ciclos, Potências, Dores, Lutas -
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              asChild
              size="lg"
              className="bg-cta-button hover:opacity-90 transition-opacity text-lg text-foreground font-secondary font-medium"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Agendar Consulta
              </a>
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              onClick={scrollToNextSection}
              className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/20 text-lg font-secondary"
            >
              Saiba Mais
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
