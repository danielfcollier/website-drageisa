import { LucideIcon } from "lucide-react";
import doctorPhoto from "@/assets/doctor-photo.jpg";

interface Credential {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface BioSectionProps {
  name: string;
  credentials: Credential[];
}

export const BioSection = ({ name, credentials }: BioSectionProps) => {
  return (
    <section className="py-20 bg-warm-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="text-center md:text-left">
            <img 
              src={doctorPhoto}
              alt={name}
              className="w-64 h-80 object-cover rounded-2xl shadow-medium mx-auto mb-6"
            />
            <h2 className="text-4xl font-brand text-primary">{name}</h2>
            <p className="text-sm font-secondary text-muted-foreground mt-2">CRM-SC 17.355 / RQE 14.561</p>
          </div>
          
          <div className="space-y-8">
            {credentials.map((credential, index) => {
              const Icon = credential.icon;
              return (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold font-main text-foreground mb-2">{credential.title}</h3>
                    <p className="text-muted-foreground font-secondary leading-relaxed">{credential.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
