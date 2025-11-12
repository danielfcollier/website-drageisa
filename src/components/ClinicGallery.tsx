import clinic1 from "@/assets/clinic-1.jpeg";
import clinic2 from "@/assets/clinic-2.jpeg";
import clinic3 from "@/assets/clinic-3.jpeg";

export const ClinicGallery = () => {
  const images = [
    { src: clinic1, alt: "Recepção da clínica" },
    { src: clinic2, alt: "Consultório" },
    { src: clinic3, alt: "Instalações" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-main text-foreground mb-4">
            O Consultório
          </h2>
          <p className="text-lg font-secondary text-muted-foreground">
            Um ambiente acolhedor e moderno para o seu conforto
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div 
              key={index}
              className="aspect-[4/3] overflow-hidden rounded-2xl shadow-medium hover:shadow-lg transition-shadow"
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
