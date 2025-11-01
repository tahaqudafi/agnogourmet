import { useState, useEffect } from 'react';

export const useScrollPosition = () => {
    const [scrollY, setScrollY] = useState(0);
    const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
    const [prevScrollY, setPrevScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            // Determine scroll direction
            if (currentScrollY > prevScrollY && currentScrollY > 100) {
                setScrollDirection('down');
            } else if (currentScrollY < prevScrollY) {
                setScrollDirection('up');
            }
            
            setScrollY(currentScrollY);
            setPrevScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollY]);

    return { scrollY, scrollDirection };
};