import { TextMarquee } from "@/components/ui/text-marquee";

export const ProductsShippingMarquee = () => {
    return (
        <div className="text-white py-2" style={{ backgroundColor: '#22372b' }}>
            <TextMarquee
                text="• Free shipping from 70 Euros •"
                className="text-sm font-medium"
                speed="normal"
            />
        </div>
    );
};