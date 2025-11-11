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
import { Heart, Shield, Users, Clock, Stethoscope, Calendar, Award, BookOpen, GraduationCap } from "lucide-react";
import services1 from "@/assets/services-1.jpg";
import services2 from "@/assets/services-2.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      <FeatureMatrix 
        id="sobre"
        title="Cuidado Integral à Saúde da Mulher"
        subtitle="Uma abordagem completa que respeita e valoriza cada fase da vida feminina"
        features={[
          {
            icon: Heart,
            title: "Ginecologia Humanizada",
            description: "Atendimento centrado nas suas necessidades, com empatia, escuta ativa e respeito ao seu tempo e suas escolhas."
          },
          {
            icon: Shield,
            title: "Ambiente Seguro",
            description: "Um espaço acolhedor e confidencial onde você pode se sentir confortável para compartilhar suas preocupações."
          },
          {
            icon: Users,
            title: "Atendimento Personalizado",
            description: "Cada mulher é única. Por isso, criamos planos de cuidado individualizados que respeitam sua história e objetivos."
          },
          {
            icon: Clock,
            title: "Tempo de Qualidade",
            description: "Consultas sem pressa, com tempo adequado para conversarmos sobre todas as suas dúvidas e preocupações."
          }
        ]}
        paragraph="Acredito em uma medicina que vai além do diagnóstico, que compreende a mulher em sua totalidade - corpo, mente e emoções. Juntas, construímos um caminho de saúde e bem-estar."
      />
      
      <IconSection 
        items={[
          {
            icon: Stethoscope,
            title: "Consultas de Rotina",
            description: "Exames preventivos, check-ups anuais e acompanhamento contínuo da sua saúde ginecológica."
          },
          {
            icon: Heart,
            title: "Planejamento Familiar",
            description: "Orientação sobre métodos contraceptivos e planejamento reprodutivo respeitando suas escolhas."
          },
          {
            icon: Calendar,
            title: "Pré-natal Humanizado",
            description: "Acompanhamento completo durante a gestação, valorizando seus desejos e respeitando seu plano de parto."
          }
        ]}
      />
      
      <AlternatingContent 
        items={[
          {
            image: services1,
            title: "Escuta Ativa e Empatia",
            description: "Mais do que uma consulta médica, oferecemos um espaço de acolhimento onde você é ouvida com atenção e suas preocupações são validadas. Cada sintoma, cada dúvida é importante e merece ser compreendida dentro do contexto da sua vida."
          },
          {
            image: services2,
            title: "Cuidado Baseado em Evidências",
            description: "Aliamos o conhecimento científico mais atual com a sensibilidade necessária para entender que cada corpo é único. Nosso compromisso é oferecer o melhor da medicina moderna com um toque humano e personalizado."
          }
        ]}
      />
      
      <BioSection 
        name="Dra. Maria Silva"
        credentials={[
          {
            icon: GraduationCap,
            title: "Formação Acadêmica",
            description: "Graduada em Medicina pela Universidade de São Paulo (USP). Residência em Ginecologia e Obstetrícia pela mesma instituição."
          },
          {
            icon: Award,
            title: "Especializações",
            description: "Pós-graduação em Ginecologia Humanizada e Medicina Integrativa. Formação em Violência Obstétrica e Direitos da Mulher."
          },
          {
            icon: BookOpen,
            title: "Experiência",
            description: "Mais de 15 anos dedicados ao cuidado da saúde feminina, com atuação em hospitais de referência e consultório particular."
          }
        ]}
      />
      
      <Testimonials 
        testimonials={[
          {
            name: "Ana Paula S.",
            text: "A Dra. Maria mudou completamente minha percepção sobre consultas ginecológicas. Pela primeira vez me senti realmente ouvida e respeitada. Ela entende que somos muito mais do que sintomas.",
          },
          {
            name: "Juliana M.",
            text: "Acompanhei minha gestação com a Dra. Maria e foi uma experiência transformadora. Ela respeitou todas as minhas escolhas e me deu segurança em cada etapa. Gratidão eterna!",
          }
        ]}
      />
      
      <FeatureMatrix 
        title="Por Que Escolher uma Ginecologia Humanizada?"
        subtitle="Entenda a diferença de um atendimento que coloca você no centro do cuidado"
        features={[
          {
            icon: Heart,
            title: "Respeito à Autonomia",
            description: "Suas decisões sobre seu corpo são sempre respeitadas. Fornecemos informações claras para que você possa fazer escolhas conscientes."
          },
          {
            icon: Shield,
            title: "Ambiente Livre de Julgamentos",
            description: "Um espaço seguro onde você pode falar abertamente sobre sua sexualidade, ciclo menstrual e saúde sem receio de ser julgada."
          },
          {
            icon: Users,
            title: "Parceria no Cuidado",
            description: "Trabalhamos juntas na construção do seu bem-estar. Você não é apenas paciente, é protagonista da sua saúde."
          },
          {
            icon: Clock,
            title: "Tempo e Atenção",
            description: "Consultas com duração adequada para abordarmos todos os aspectos da sua saúde, sem pressa ou superficialidade."
          }
        ]}
      />
      
      <ClinicGallery />
      <LocationSection />
      <Footer />
    </div>
  );
};

export default Index;
