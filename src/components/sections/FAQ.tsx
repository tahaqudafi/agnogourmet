import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

const faqKeys = ['q1', 'q2', 'q3', 'q4'];

export const FAQ = () => {
    const { t } = useLanguage();
    const [openItems, setOpenItems] = useState<number[]>([]);

    const toggleItem = (index: number) => {
        setOpenItems(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    return (
        <section className="py-16 px-4 md:px-8 lg:px-16">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#22372b' }}>
                        {t('faq.title')}
                    </h2>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4 mb-8">
                    {faqKeys.map((key, index) => (
                        <div
                            key={key}
                            className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
                        >
                            <button
                                onClick={() => toggleItem(index)}
                                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center"
                            >
                                <span className="font-medium text-gray-900 pr-4">
                                    {t(`faq.${key}`)}
                                </span>
                                {openItems.includes(index) ? (
                                    <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                                )}
                            </button>
                            <div
                                className={cn(
                                    "overflow-hidden transition-all duration-300 ease-in-out",
                                    openItems.includes(index) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                )}
                            >
                                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                                    <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                                        {t(`faq.a${index + 1}`)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center">
                    <Button
                        asChild
                        variant="product"
                        size="lg"
                        className="px-8 py-3 rounded-xl text-white hover:opacity-90 transition-opacity duration-300"
                        style={{ backgroundColor: '#22372B' }}
                    >
                        <a
                            href="https://www.agnogourmet.com/pages/faq"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {t('faq.viewAll')}
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
};
