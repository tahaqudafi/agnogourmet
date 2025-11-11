import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-white" />
      <button
        onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
        className="text-white transition-colors duration-300 hover:opacity-80 text-sm font-medium"
      >
        {language === 'en' ? 'DE' : 'EN'}
      </button>
    </div>
  );
};
