import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeatureMatrix } from "@/components/FeatureMatrix";
import { IconSection } from "@/components/IconSection";
import { AlternatingContent } from "@/components/AlternatingContent";
import { BioSection } from "@/components/BioSection";
import { Testimonials } from "@/components/Testimonials";
import { ClinicGallery } from "@/components/ClinicGallery";
import { LocationSection } from "@/components/LocationSection";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Users, Clock, Stethoscope, Venus, Award, HeartPlus, GraduationCap } from "lucide-react";
import services1 from "@/assets/services-1.jpeg";
import services2 from "@/assets/services-2.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      <FeatureMatrix 
        id="sobre"
        title="Visão Sistêmica em Saúde"
        subtitle="Cuidado Terapêutico e Transpessoal da Mulher"
        bgColor="bg-warm-cream"
        features={[
          {
            icon: Venus,
            title: "Feminilidade Integrativa",
            description: "Honrando e integrando todos os aspectos da feminilidade em uma abordagem holística e respeitosa."
          },
          {
            icon: Heart,
            title: "Fecundação e Contracepção",
            description: "Orientação consciente e individualizada sobre planejamento familiar, respeitando suas escolhas e momento de vida."
          },
          {
            icon: Users,
            title: "Sexualidade Consciente",
            description: "Apoio para viver sua sexualidade de forma plena, saudável e alinhada com seus valores e desejos."
          },
          {
            icon: Clock,
            title: "Saúde Funcional e Plena",
            description: "Cuidado integral que vai além dos sintomas, buscando o equilíbrio e a vitalidade em todas as dimensões."
          }
        ]}
        paragraph='"Meu compromisso é oferecer um cuidado ampliado em saúde, priorizando a boa relação médica-paciente, a adoção de terapêuticas individualizadas e naturais, sempre que possível, respeitando preferências e autonomia."'
      />
      
      <IconSection 
        backgroundColor="dark"
        items={[
          {
            icon: Venus,
            title: "Conexão da Feminilidade",
            description: "Reconectando você com sua essência feminina, seus ciclos naturais e seu poder interior."
          },
          {
            icon: HeartPlus,
            title: "Restauração do Equilíbrio",
            description: "Recuperando o equilíbrio hormonal, emocional e energético através de abordagens integrativas."
          },
          {
            icon: Stethoscope,
            title: "Saúde Celular e Bioquímica",
            description: "Cuidado aprofundado da saúde em nível celular, otimizando seu funcionamento bioquímico."
          }
        ]}
      />
      
      <AlternatingContent 
        items={[
          {
            image: services1,
            title: "A Busca por uma Medicina Humana",
            description: "Quando eu estava na faculdade, foi muito comum ouvir de amigas e familiares, em tom de desabafo, o pedido por uma medicina mais humana..."
          },
          {
            image: services2,
            title: "Vínculo e Integralidade",
            description: "...com ênfase no vínculo médica-paciente, com senso crítico, que enxergasse a pessoa em sua integralidade e não focasse apenas no conjunto de sintomas que viesse apresentando naquele momento."
          }
        ]}
      />
      
      <BioSection 
        name="Dra. Geisa Nery"
        credentials={[
          {
            icon: Stethoscope,
            title: "Médica, Ginecologista e Terapeuta",
            description: "Dedicada ao cuidado integral da saúde feminina com abordagem humanizada e terapêutica."
          },
          {
            icon: Award,
            title: "Especialista em Psicologia Transpessoal",
            description: "Formação especializada que integra aspectos emocionais e espirituais ao cuidado médico."
          },
          {
            icon: GraduationCap,
            title: "Pós-Grad. em Fisiologia e Equilíbrio Hormonal",
            description: "Expertise avançada em saúde hormonal e equilíbrio fisiológico da mulher."
          }
        ]}
      />
      
      <Testimonials 
        testimonials={[
          {
            name: "Adriana Casaroto",
            role: "Psicóloga Sênior",
            text: "Profissional com visão integral do ser humano. Postura sensível e tecnicamente sempre atualizada ao que há de melhor, respeitando o perfil de cada cliente. Encaminho clientes, colegas e amigas - estão em boas mãos e gigante coração!"
          },
          {
            name: "Fábia Lombardi",
            role: "Terapeuta Integrativa",
            text: "Sinto muita confiança e segurança no trabalho e na assertividade da Geisa, o que me faz ficar muito consciente e ao mesmo tempo entregue aos seus cuidados."
          }
        ]}
      />
      
      <FeatureMatrix 
        id="como-funciona"
        title="Como Funciona"
        subtitle=""
        bgColor="bg-background"
        features={[
          {
            icon: Clock,
            title: "Consultas: 45 ou 90 min.",
            description: "Escolha o tempo necessário para um atendimento completo e sem pressa."
          },
          {
            icon: Stethoscope,
            title: "Diagnóstico Sistêmico",
            description: "Avaliação completa que considera todos os aspectos da sua saúde e bem-estar."
          },
          {
            icon: Heart,
            title: "Consultas Particulares",
            description: "*Não aceita Planos de Saúde. Investimento consciente na sua saúde integral."
          },
          {
            icon: Users,
            title: "Opção de Telemedicina",
            description: "Atendimento online seguro e conveniente, mantendo a mesma qualidade do presencial."
          }
        ]}
      />
      
      <section className="py-12 bg-warm-cream">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Button 
              asChild
              size="lg"
              className="bg-cta-button hover:opacity-90 transition-opacity text-lg text-foreground font-secondary font-medium"
            >
              <a href="https://api.whatsapp.com/send?phone=554899623819&text=Ol%C3%A1,%20estou%20interessada%20em%20agendar%20uma%20consulta%20com%20a%20Dra.%20Geisa.%20Me%20chamo%20&source=&data=" target="_blank" rel="noopener noreferrer">
                Agendar Consulta
              </a>
            </Button>
          </div>
        </div>
      </section>
      
      <ClinicGallery />
      <LocationSection />
      <Footer />
    </div>
  );
};

export default Index;
