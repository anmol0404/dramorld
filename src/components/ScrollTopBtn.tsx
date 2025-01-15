 
'use client';

import React, { useEffect, useState } from 'react';

import { BsFillArrowUpCircleFill } from 'react-icons/bs';

export default function ScrollTopBtn() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const mainElement = document.querySelector('main');

    const handleScrollBtnVisibility = () => {
      if (mainElement?.scrollTop !> 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Check if the mainElement exists before adding event listener
    if (mainElement) {
      mainElement.addEventListener('scroll', handleScrollBtnVisibility);
    }

    // Cleanup event listener on component unmount
    return () => {
      if (mainElement) {
        mainElement.removeEventListener('scroll', handleScrollBtnVisibility);
      }
    };
  }, []);

  const scrollToTop = () => {
    const mainElement = document.querySelector('main');
    if (mainElement) {
      mainElement.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div>
      {isVisible && (
        <div
          className="scroll-to-top fixed z-[999] shadow-[3px_3px_6px_rgba(0,0,0,0.7)] grid place-items-center rounded-[50%] right-12 bottom-12 md:right-8 md:bottom-16"
          onClick={scrollToTop}
          role="button"
          tabIndex={0}
          aria-label="Scroll to top"
        >
          <BsFillArrowUpCircleFill className="fill-current text-[#21daa2] w-10 h-10 rounded-full bg-black" />
        </div>
      )}
    </div>
  );
}
