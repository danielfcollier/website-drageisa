import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const LocationSection = () => {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=554899623819&text=Ol%C3%A1,%20estou%20interessada%20em%20agendar%20uma%20consulta%20com%20a%20Dra.%20Geisa.%20Me%20chamo%20&source=&data=";
  
  const address = "Rua Lauro Linhares, 2010. Ed. São Francisco, Torre A Sala 707. Trindade. Florianópolis-SC. CEP: 88036-002";
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.8658831863844!2d-48.52015!3d-27.59611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95273873e1b6d5c7%3A0x7e8c5a5d8a5d8a5d!2sRua%20Lauro%20Linhares%2C%202010%20-%20Trindade%2C%20Florian%C3%B3polis%20-%20SC%2C%2088036-002!5e0!3m2!1spt-BR!2sbr!4v1620000000000";

  return (
    <section className="py-20 bg-warm-cream">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-main text-foreground mb-4">
            Localização
          </h2>
          <p className="text-lg font-secondary text-muted-foreground">
            Venha conhecer o consultório
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-card rounded-2xl p-8 shadow-soft border border-border flex flex-col justify-center">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-semibold font-main text-foreground mb-2">Endereço</h3>
                <p className="text-muted-foreground font-secondary leading-relaxed">{address}</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <Button 
                asChild
                size="lg"
                className="bg-cta-button hover:opacity-90 transition-opacity w-full text-foreground font-secondary font-medium"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Agendar Consulta
                </a>
              </Button>
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="w-full border-2 border-primary text-primary hover:bg-primary/10 font-secondary"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Dúvidas? Entre em contato.
                </a>
              </Button>
            </div>
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
