import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

export const NewsletterFooter = () => {
  const { t } = useLanguage();
  
  return (
    <footer id="contact" className="pt-8 pb-2 px-4 md:px-8 lg:px-16" style={{ backgroundColor: '#22372b' }}>
      <div className="max-w-4xl mx-auto">
        {/* Newsletter */}
        <div className="text-center mb-8">

          <p className="mb-8 text-lg text-white/80">
            {t('newsletter.subtitle')} <strong>{t('newsletter.subtitleBold')}</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder={t('newsletter.placeholder')}
              className="bg-white/10 border-white/30 text-white placeholder:text-white/50 focus:border-white/50"
            />
            <Button
              variant="hero"
              size="lg"
              className="sm:w-auto whitespace-nowrap"
            >
              {t('newsletter.button')}
            </Button>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center items-center gap-8 mb-6">
          <a
            href="https://www.facebook.com/profile.php?id=61569771574754"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white/80 transition-colors duration-300 hover:scale-110 transform"
            aria-label="Facebook"
          >
            <Facebook className="w-7 h-7" />
          </a>
          <a
            href="https://www.instagram.com/agnogourmet"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white/80 transition-colors duration-300 hover:scale-110 transform"
            aria-label="Instagram"
          >
            <Instagram className="w-7 h-7" />
          </a>
          <a
            href="https://www.tiktok.com/@agnogourmet"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white/80 transition-colors duration-300 hover:scale-110 transform"
            aria-label="TikTok"
          >
            <TikTokIcon className="w-7 h-7" />
          </a>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-6 text-xs">
          <a
            href="https://www.agnogourmet.com/policies/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors duration-300"
          >
            {t('newsletter.privacyPolicy')}
          </a>
          <span className="text-white/30">•</span>
          <a
            href="https://www.agnogourmet.com/policies/terms-of-service"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors duration-300"
          >
            {t('newsletter.termsOfService')}
          </a>
          <span className="text-white/30">•</span>
          <a
            href="https://www.agnogourmet.com/policies/legal-notice"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors duration-300"
          >
            {t('newsletter.legalNotice')}
          </a>
          <span className="text-white/30">•</span>
          <a
            href="https://www.agnogourmet.com/policies/contact-information"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors duration-300"
          >
            {t('newsletter.contactInfo')}
          </a>
          <span className="text-white/30">•</span>
          <a
            href="https://www.agnogourmet.com/policies/shipping-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors duration-300"
          >
            {t('newsletter.shippingPolicy')}
          </a>
          <span className="text-white/30">•</span>
          <a
            href="https://www.agnogourmet.com/policies/refund-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors duration-300"
          >
            {t('newsletter.refundPolicy')}
          </a>
          <span className="text-white/30">•</span>
          <a
            href="https://www.agnogourmet.com/pages/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors duration-300"
          >
            {t('newsletter.contact')}
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-white/70 text-sm">
          <p>{t('newsletter.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};