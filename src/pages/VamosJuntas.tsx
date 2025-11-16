import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const VamosJuntas = () => {
  const navigate = useNavigate();
  const whatsappUrl = "https://api.whatsapp.com/send?phone=554899623819&text=Ol%C3%A1,%20estou%20interessada%20em%20agendar%20uma%20consulta%20com%20a%20Dra.%20Geisa.%20Me%20chamo%20&source=&data=";

  return (
    <div className="min-h-screen bg-gradient-to-b from-warm-cream to-background flex items-center justify-center p-4">
      <div className="max-w-md w-full flex flex-col items-center gap-8 text-center">
        <img 
          src={logo} 
          alt="Logo Dra. Geisa Nery" 
          className="w-32 h-32 object-contain"
        />
        
        <div>
          <h1 className="text-4xl font-brand text-primary mb-2">Dra. Geisa Nery</h1>
          <p className="text-sm font-secondary text-muted-foreground">CRM-SC 17.355 / RQE 14.561</p>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <Button 
            asChild
            size="lg"
            className="bg-cta-button hover:opacity-90 transition-opacity text-foreground font-secondary font-medium w-full"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Agendar Consulta via WhatsApp
            </a>
          </Button>

          <Button 
            onClick={() => navigate("/")}
            variant="outline"
            size="lg"
            className="w-full font-secondary font-medium border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Ir para o Site
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <p className="text-sm text-muted-foreground font-secondary mt-4">
          Visão Sistêmica em Saúde<br />
          Cuidado Terapêutico e Transpessoal da Mulher
        </p>
      </div>
    </div>
  );
};

export default VamosJuntas;
