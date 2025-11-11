import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export const Header = () => {
  const whatsappNumber = "5511999999999"; // Replace with actual number
  const whatsappMessage = "Olá! Gostaria de agendar uma consulta.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-primary">
            <Heart className="w-6 h-6 text-primary-foreground" fill="currentColor" />
          </div>
          <span className="text-lg font-semibold text-foreground">Dra. Maria Silva</span>
        </div>
        
        <Button 
          asChild
          className="bg-gradient-primary hover:opacity-90 transition-opacity"
        >
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            Agendar Consulta
          </a>
        </Button>
      </div>
    </header>
  );
};
