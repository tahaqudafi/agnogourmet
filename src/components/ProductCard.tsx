import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  volume: string;
}

export const ProductCard = ({ image, name, description, volume }: ProductCardProps) => {
  return (
    <Card className="group bg-white border-0 shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl flex flex-col h-full w-full max-w-xs mx-auto overflow-hidden">
      <div className="aspect-[4/5] bg-gray-50 flex items-center justify-center rounded-t-2xl">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-500"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow text-center">
        <div className="space-y-3 flex-grow">
          <h3 className="font-serif text-xl font-medium leading-snug" style={{ color: '#22372b' }}>{name}</h3>
          <p className="text-sm leading-relaxed" style={{ color: '#22372b' }}>{description}</p>
          <p className="text-sm font-medium" style={{ color: '#22372b' }}>{volume}</p>
        </div>
        <Button 
          variant="product" 
          size="lg" 
          className="w-full font-medium mt-6 rounded-xl text-white hover:opacity-90 transition-opacity duration-300"
          style={{ backgroundColor: '#22372B' }}
        >
          Shop Now
        </Button>
      </div>
    </Card>
  );
};
