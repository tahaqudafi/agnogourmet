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
          <div className="flex justify-center items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 fill-current" style={{ color: '#22372b' }} viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
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
