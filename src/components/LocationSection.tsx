import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const LocationSection = () => {
  const whatsappNumber = "5511999999999"; // Replace with actual number
  const whatsappMessage = "Olá! Gostaria de agendar uma consulta.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  
  const address = "Av. Paulista, 1000 - São Paulo, SP";
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0977!2d-46.6562!3d-23.5632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzQ3LjUiUyA0NsKwMzknMjIuMyJX!5e0!3m2!1sen!2sbr!4v1234567890";

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Onde Nos Encontrar
          </h2>
          <p className="text-lg text-muted-foreground">
            Venha conhecer nossa clínica
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-card rounded-2xl p-8 shadow-soft border border-border flex flex-col justify-center">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Endereço</h3>
                <p className="text-muted-foreground leading-relaxed">{address}</p>
              </div>
            </div>
            
            <Button 
              asChild
              size="lg"
              className="bg-gradient-primary hover:opacity-90 transition-opacity w-full"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Agendar Consulta
              </a>
            </Button>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-medium h-[400px]">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da clínica"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
