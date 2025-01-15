'use client';

import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useEffect, useState, ReactElement } from 'react';

 interface CarouselProps {
  children: ReactElement[];  
}

export default function Carousel({ children }: CarouselProps) {
  const [isMobile, setIsMobile] = useState<boolean>(true);

  const setDeviceType = (): void => {
    window.innerWidth < 900 ? setIsMobile(true) : setIsMobile(false);
  };

  useEffect(() => {
    setDeviceType();
    const handleResize = () => setDeviceType();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize); // Clean up listener
  }, []);

  return (
    <ReactCarousel
      autoPlay
      infiniteLoop
      emulateTouch
      autoFocus
      useKeyboardArrows
      centerMode={!isMobile}
      centerSlidePercentage={80}
      swipeable
      showStatus={false}
      showIndicators={false}
      showArrows={false}
      showThumbs={false}
      interval={2000}
    >
      {children}
    </ReactCarousel>
  );
}
