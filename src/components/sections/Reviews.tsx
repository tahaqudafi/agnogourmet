import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

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
    date: "5 May 2024",
    rating: 5
  },
  {
    id: 2,
    title: "Perfect product for health & longevity enthusiasts!",
    content: "We used the olive oil for a health and longevity convention, and it is by far the best olive oil I have ever used or tasted. It's the perfect product for health and longevity enthusiasts. We genuinely couldn't find any competing products or brands that balance health benefits, transparency, affordability...",
    author: "Arne D.",
    location: "DE",
    date: "11 Nov 2024",
    rating: 5
  },
  {
    id: 3,
    title: "Authentic Greek flavor",
    content: "The honey is absolutely divine! You can taste the Mediterranean sunshine in every spoonful. The quality is exceptional and the packaging is beautiful.",
    author: "Sofia M.",
    location: "GR",
    date: "28 Oct 2024",
    rating: 5
  },
  {
    id: 4,
    title: "Outstanding quality spices",
    content: "The oregano and herbs are so fresh and aromatic. They've completely transformed my cooking. The difference in quality compared to supermarket brands is remarkable.",
    author: "James L.",
    location: "UK",
    date: "15 Oct 2024",
    rating: 5
  },
  {
    id: 5,
    title: "Family tradition in every bottle",
    content: "You can really taste the care and tradition that goes into these products. The olive oil reminds me of my grandmother's cooking in Crete. Absolutely wonderful!",
    author: "Maria P.",
    location: "US",
    date: "3 Oct 2024",
    rating: 5
  },
  {
    id: 6,
    title: "Excellent customer service",
    content: "Not only are the products amazing, but the customer service is top-notch. They answered all my questions about the harvesting process and shipping was incredibly fast.",
    author: "Thomas R.",
    location: "FR",
    date: "22 Sep 2024",
    rating: 5
  },
  {
    id: 7,
    title: "Premium quality honey",
    content: "The thyme honey is absolutely incredible. Rich, complex flavor that you simply can't find in regular stores. Worth every penny for this level of quality.",
    author: "Elena V.",
    location: "IT",
    date: "18 Sep 2024",
    rating: 5
  },
  {
    id: 8,
    title: "Sustainable and delicious",
    content: "Love that these products are sustainably sourced and support local Greek farmers. The taste is unmatched and I feel good about my purchase.",
    author: "David C.",
    location: "CA",
    date: "10 Sep 2024",
    rating: 5
  },
  {
    id: 9,
    title: "Gift that impressed everyone",
    content: "Bought a selection as gifts for my foodie friends and they were all blown away by the quality. The presentation is beautiful and the taste is exceptional.",
    author: "Anna K.",
    location: "AU",
    date: "5 Sep 2024",
    rating: 5
  },
  {
    id: 10,
    title: "Healthy and delicious",
    content: "As someone who follows a Mediterranean diet, these products are perfect. High quality, authentic flavors, and you can really taste the difference in freshness.",
    author: "Michael B.",
    location: "NL",
    date: "1 Sep 2024",
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
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex-shrink-0 w-80 mx-3">
      <div className="flex items-start justify-between mb-4">
        <h3 className="font-semibold text-lg leading-tight" style={{ color: '#22372b' }}>
          {review.title}
        </h3>
        <StarRating rating={review.rating} />
      </div>
      
      <p className="text-gray-700 mb-6 leading-relaxed line-clamp-4">
        {review.content}
      </p>
      
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span className="font-medium">
          {review.author} ({review.location})
        </span>
        <span>{review.date}</span>
      </div>
    </div>
  );
};

export const Reviews = () => {
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
            Customer Reviews
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl max-w-3xl mx-auto" 
            style={{ color: '#22372b' }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Hear from our customers who have experienced the authentic taste of Greece.
          </motion.p>
        </div>
      </div>
      
      {/* Full-width marquee */}
      <div className="relative overflow-hidden w-full">
        <motion.div
          className="flex"
          animate={{
            x: [0, -100 * reviews.length * 0.8]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 60,
              ease: "linear",
            },
          }}
          style={{ width: `${reviews.length * 320 * 2}px` }}
        >
          {/* First set of reviews */}
          {reviews.map((review) => (
            <ReviewCard key={`first-${review.id}`} review={review} />
          ))}
          {/* Duplicate set for seamless loop */}
          {reviews.map((review) => (
            <ReviewCard key={`second-${review.id}`} review={review} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};