import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { normalizePath } from "../utils/imageUtils";

interface CarouselProps {
  slides: {
    image: string;
    alt: string;
    heading: string;
    subheading: string;
  }[];
  autoPlayInterval?: number;
}

const Carousel: React.FC<CarouselProps> = ({
  slides,
  autoPlayInterval = 5000,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 500);
    },
    [isTransitioning]
  );

  const goToPrevSlide = useCallback(() => {
    const newIndex = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    goToSlide(newIndex);
  }, [currentSlide, slides.length, goToSlide]);

  const goToNextSlide = useCallback(() => {
    const newIndex = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
    goToSlide(newIndex);
  }, [currentSlide, slides.length, goToSlide]);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(goToNextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [goToNextSlide, autoPlayInterval, isPaused]);

  return (
    <div
      className="relative w-full h-[500px] md:h-[650px] lg:h-[800px] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {slides.map((slide, index) => {
        const normalizedImagePath = normalizePath(slide.image);
        
        return (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out bg-cover bg-center ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{ backgroundImage: `url(${normalizedImagePath})` }}
          >
            <div className="absolute inset-0 bg-black/25"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
              <div className={`max-w-3xl transition-all duration-700 ${
                index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}>
                <p className="text-white/80 uppercase tracking-widest text-sm md:text-base mb-4 font-medium">
                  {slide.subheading}
                </p>
                <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-display font-medium mb-6 leading-tight">
                  {slide.heading}
                </h2>
              </div>
            </div>
          </div>
        );
      })}

      <button
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-200"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-200"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-100"
                : "bg-white/50 scale-75 hover:scale-90 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
