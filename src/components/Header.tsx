import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { useState, useEffect } from "react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const whatsappUrl = "https://api.whatsapp.com/send?phone=554899623819&text=Ol%C3%A1,%20estou%20interessada%20em%20agendar%20uma%20consulta%20com%20a%20Dra.%20Geisa.%20Me%20chamo%20&source=&data=";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 border-b shadow-soft transition-colors duration-300 ${
      isScrolled 
        ? "bg-primary border-primary-foreground/20" 
        : "bg-[#EEE6EA] border-border"
    }`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src={logo} 
            alt="Logo Dra. Geisa Nery" 
            className={`w-12 h-12 object-contain transition-all duration-300 ${
              isScrolled ? "brightness-0 invert" : ""
            }`}
          />
          <span className={`text-5xl font-brand block leading-tight transition-colors duration-300 ${
            isScrolled ? "text-primary-foreground" : "text-primary"
          }`}>
            Dra. Geisa Nery
          </span>
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
