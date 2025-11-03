import { TextMarquee } from "@/components/ui/text-marquee";

export const ShippingMarquee = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2">
      <TextMarquee 
        text="• Free shipping from 70 Euros •"
        className="text-sm font-medium"
        speed="normal"
      />
    </div>
  );
};