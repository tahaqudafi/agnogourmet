import { TextMarquee } from "@/components/ui/text-marquee";
import { useLanguage } from "@/contexts/LanguageContext";

export const ProductsShippingMarquee = () => {
    const { t } = useLanguage();
    
    return (
        <div className="text-white py-2" style={{ backgroundColor: '#22372b' }}>
            <TextMarquee
                text={t('products.shipping')}
                className="text-sm font-medium"
                speed="normal"
            />
        </div>
    );
};