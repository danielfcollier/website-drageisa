import { Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto mb-8 text-center">
          <div className="flex flex-col items-center gap-3 mb-6">
            <img 
              src={logo} 
              alt="Logo Dra. Geisa Nery" 
              className="w-14 h-14 object-contain brightness-0 invert"
            />
            <div>
              <span className="text-3xl font-brand block leading-tight">Dra. Geisa Nery</span>
              <span className="text-sm font-secondary">CRM-SC 17.355 / RQE 14.561</span>
            </div>
          </div>
          
          <div className="flex justify-center gap-4 mb-6">
            <a 
              href="https://instagram.com/drageisa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-6 text-center text-primary-foreground/70">
          <p className="font-secondary text-sm">&copy; {new Date().getFullYear()} Dra. Geisa Nery. Todos os direitos reservados.</p>
          <p className="font-secondary text-xs mt-2">Desenvolvido por [Nome da Empresa]</p>
        </div>
      </div>
    </footer>
  );
};
