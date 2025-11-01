interface FactCardProps {
  number?: string;
  image?: string;
  title: string;
  description: string;
}

export const FactCard = ({ number, image, title, description }: FactCardProps) => {
  return (
    <div className="group relative bg-background/80 backdrop-blur-sm rounded-2xl p-8 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elevated)] transition-all duration-500 hover:-translate-y-2 border border-border/50">
      <div className="absolute -top-4 -left-10 transition-all duration-300">
        {image ? (
          <img
            src={image}
            alt="Agno bottle doodle"
            className="w-24 h-24 object-contain rotate-12 group-hover:scale-110 group-hover:rotate-[18deg] transition-transform duration-300"
          />
        ) : (
          <span className="text-8xl font-serif font-bold text-accent/20 group-hover:text-accent/30 rotate-12 group-hover:rotate-[18deg] group-hover:scale-110 transition-all duration-300 inline-block">
            {number}
          </span>
        )}
      </div>
      <div className="relative space-y-3">
        <h3 className="font-serif text-2xl font-semibold" style={{ color: '#22372b' }}>{title}</h3>
        <p className="leading-relaxed italic" style={{ color: '#22372b' }}>{description}</p>
      </div>
    </div>
  );
};
