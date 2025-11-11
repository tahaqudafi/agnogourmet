import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        question: "Where does your olive oil come from?",
        answer: "Our olive oil is born on the island of Thassos, Greece, where olive trees have thrived for centuries under the Aegean sun. Each drop reflects the island’s purity and time-honored tradition — cold-extracted and bottled close to harvest for the freshest, most authentic taste."
    },
    {
        question: "What makes your extra virgin olive oil with rosemary and spices special?",
        answer: "We use only the rare Throumba olive, native to Thassos and celebrated for its naturally high polyphenol content and low acidity. Each olive is hand-picked at peak ripeness, pressed within hours, and never blended — ensuring a full-bodied flavor and remarkable freshness in every bottle."
    },
    {
        question: "What makes your honey unique?",
        answer: "Our honey is harvested from the pine trees of Thassos, Greece. It’s naturally rich in nutrients, has a robust flavor, and is free from any additives, making it an authentic Greek treasure."
    },
    {
        question: "Where do you source your oregano?",
        answer: "Every batch is third-party lab-tested to guarantee purity, freshness, and key quality markers such as polyphenol levels and acidity. This transparency ensures you always enjoy genuine, high-grade extra virgin olive oil — just as nature intended."
    }
];

export const FAQ = () => {
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
                        You've got questions? We've got the answers.
                    </h2>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4 mb-8">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
                        >
                            <button
                                onClick={() => toggleItem(index)}
                                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center"
                            >
                                <span className="font-medium text-gray-900 pr-4">
                                    {item.question}
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
                                        {item.answer}
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
                            View All
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
};