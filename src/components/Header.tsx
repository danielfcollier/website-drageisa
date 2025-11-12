import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

export const Header = () => {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=554899623819&text=Ol%C3%A1,%20estou%20interessada%20em%20agendar%20uma%20consulta%20com%20a%20Dra.%20Geisa.%20Me%20chamo%20&source=&data=";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src={logo} 
            alt="Logo Dra. Geisa Nery" 
            className="w-12 h-12 object-contain"
          />
          <div>
            <span className="text-2xl font-brand text-primary block leading-tight">Dra. Geisa Nery</span>
            <span className="text-xs font-secondary text-muted-foreground">CRM-SC 17.355 / RQE 14.561</span>
          </div>
        </div>
        
        <Button 
          asChild
          className="bg-cta-button hover:opacity-90 transition-opacity text-foreground font-secondary font-medium"
        >
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            Agendar Consulta
          </a>
        </Button>
      </div>
    </header>
  );
};
