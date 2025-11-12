interface ContentItem {
  image: string;
  title: string;
  description: string;
}

interface AlternatingContentProps {
  items: ContentItem[];
}

export const AlternatingContent = ({ items }: AlternatingContentProps) => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-20">
          {items.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={index}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  isEven ? "" : "md:grid-flow-dense"
                }`}
              >
                <div className={isEven ? "" : "md:col-start-2"}>
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-[400px] object-cover rounded-2xl shadow-medium"
                  />
                </div>
                <div className={isEven ? "" : "md:col-start-1 md:row-start-1"}>
                  <h3 className="text-3xl font-bold font-main text-foreground mb-6">{item.title}</h3>
                  <p className="text-lg text-muted-foreground font-secondary leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
