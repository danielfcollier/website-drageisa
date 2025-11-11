import { Heart, Instagram, Facebook, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-deep-teal text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-foreground">
                <Heart className="w-6 h-6 text-primary" fill="currentColor" />
              </div>
              <span className="text-lg font-semibold">Dra. Maria Silva</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Ginecologia humanizada e acolhedora para todas as mulheres.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-2 text-primary-foreground/80">
              <p>(11) 99999-9999</p>
              <p>contato@dramariasilva.com.br</p>
              <p>Av. Paulista, 1000 - São Paulo, SP</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="mailto:contato@dramariasilva.com.br"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Dra. Maria Silva. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
