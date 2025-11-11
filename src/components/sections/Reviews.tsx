import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface Review {
  id: number;
  title: string;
  content: string;
  author: string;
  location: string;
  date: string;
  rating: number;
}

const reviews: Review[] = [
  {
    id: 1,
    title: "Best olive oil I tried!",
    content: "Super fast delivery, exceptional taste and great polyphenol content - and all at a decent price in a stylish bottle. Could not want more!",
    author: "Marius K.",
    location: "DE",
    date: "5 May 2025",
    rating: 5
  },
  {
    id: 2,
    title: "Perfect product for health & longevity enthusiasts!",
    content: "We used the olive oil for a health and longevity convention, and it is by far the best olive oil I have ever used or tasted. It's the perfect product for health and longevity enthusiasts. We genuinely couldn't find any competing products or brands that balance health benefits, transparency, affordability...",
    author: "Arne D.",
    location: "DE",
    date: "1 Nov 2025",
    rating: 5
  },
  {
    id: 3,
    title: "Third time",
    content: "Bought it the 3rd time. Always delicious.",
    author: "Derya Özlü",
    location: "DE",
    date: "20 Sep 2025",
    rating: 5
  },
  {
    id: 4,
    title: "Köstlich",
    content: "Sehr leckeres, mildes Olivenöl. Schmeckt in Salaten oder pur zum Brot.",
    author: "Miriam Peters",
    location: "DE",
    date: "27 Jul 2025",
    rating: 5
  },
  {
    id: 5,
    title: "Ich liebe alle Produkte ❤️",
    content: "Diesmal habe ich das Olivenöl als Geschenk für meine Cousine gekauft und sie liebt es! Der Inhalt ist top, aber die Flaschen sind einfach wunderschön und nicht mehr wegzudenken von meiner Küche 🤩",
    author: "Ayşegül Özkan",
    location: "DE",
    date: "18 Jul 2025",
    rating: 5
  },
  {
    id: 6,
    title: "Perfekt 👌",
    content: "Die Flasche kam gut verpackt an und ist auf jeden Fall ein Hingucker mit den schönen sichtbaren Gewürzen drin 🤩 Der Geschmack ist sehr gut- nicht zu viele und nicht zu wenige Kräuter! Einfach perfekt, auch unsere kleinen Gourmets sind begeistert...",
    author: "RD",
    location: "DE",
    date: "3 Apr 2025",
    rating: 5
  },
  {
    id: 7,
    title: "10/10 Olive oil",
    content: "The olive oil is of very high quality. It tastes unbelievably delicious, and the seasoning is perfectly balanced. You can never get enough of it. Visually, the bottle is a real eye-catcher.",
    author: "Leyla Yalcin",
    location: "DE",
    date: "1 Apr 2025",
    rating: 5
  },
  {
    id: 8,
    title: "Intensiver Geschmack mit würziger Note",
    content: "Das Olivenöl kam gestern an und was soll ich sagen, ich liebe es! Es ist fein gewürzt, was aber den intensiven...",
    author: "Nilüfer Yilmaz",
    location: "DE",
    date: "29 Mar 2025",
    rating: 5
  },
  {
    id: 9,
    title: "Gift that impressed everyone",
    content: "Bought a selection as gifts for my foodie friends and they were all blown away by the quality. The presentation is beautiful and the taste is exceptional.",
    author: "Anna K.",
    location: "DE",
    date: "5 Sep 2025",
    rating: 5
  },
  {
    id: 10,
    title: "Delicious!",
    content: "Best honey.",
    author: "Derya Özlü",
    location: "DE",
    date: "1 Sep 2025",
    rating: 5
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? 'fill-green-500 text-green-500' : 'text-gray-300'}`}
        />
      ))}
    </div>
  );
};

const ReviewCard = ({ review }: { review: Review }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex-shrink-0 w-80 mx-3 h-64 flex flex-col">
      {/* Header section - always at top */}
      <div className="flex items-start justify-between mb-4">
        <h3 className="font-semibold text-lg leading-tight" style={{ color: '#22372b' }}>
          {review.title}
        </h3>
        <StarRating rating={review.rating} />
      </div>

      {/* Content section - takes up available space */}
      <div className="flex-grow flex flex-col justify-between">
        <p className="text-gray-700 leading-relaxed line-clamp-4">
          {review.content}
        </p>

        {/* Author and date - always at bottom */}
        <div className="flex items-center justify-between text-sm text-gray-500 mt-4">
          <span className="font-medium">
            {review.author} ({review.location})
          </span>
          <span>{review.date}</span>
        </div>
      </div>
    </div>
  );
};

export const Reviews = () => {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-24">
      {/* Header with constrained width */}
      <div className="px-4 md:px-8 lg:px-16 mb-16">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            style={{ color: '#22372b' }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {t('reviews.title')}
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl max-w-3xl mx-auto"
            style={{ color: '#22372b' }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            {t('reviews.subtitle')}
          </motion.p>
        </div>
      </div>

      {/* Full-width marquee */}
      <div className="relative overflow-hidden w-full group">
        <div
          className="flex marquee-container"
          style={{
            width: `${reviews.length * 344 * 2}px`,
            willChange: 'transform'
          }}
        >
          {/* First set of reviews */}
          {reviews.map((review) => (
            <ReviewCard key={`first-${review.id}`} review={review} />
          ))}
          {/* Duplicate set for seamless loop */}
          {reviews.map((review) => (
            <ReviewCard key={`second-${review.id}`} review={review} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${reviews.length * 344}px);
          }
        }
        
        .marquee-container {
          animation: marquee 50s linear infinite;
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000px;
        }
        
        .group:hover .marquee-container {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};