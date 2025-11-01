import { useState, useEffect } from 'react';

export const useScrollPosition = () => {
    const [scrollY, setScrollY] = useState(0);
    const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);

    useEffect(() => {
        let ticking = false;
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const currentScrollY = window.scrollY;
                    
                    // Simple direction detection
                    if (currentScrollY > lastScrollY) {
                        setScrollDirection('down');
                    } else if (currentScrollY < lastScrollY) {
                        setScrollDirection('up');
                    }
                    
                    setScrollY(currentScrollY);
                    lastScrollY = currentScrollY;
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return { scrollY, scrollDirection };
};