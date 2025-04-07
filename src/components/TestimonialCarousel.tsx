import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { normalizePath } from "../utils/imageUtils";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  avatar?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ content, author, role, avatar }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md">
      {avatar && (
        <div className="w-20 h-20 mb-4 rounded-full overflow-hidden border-2 border-primary/20">
          <img 
            src={normalizePath(avatar)} 
            alt={author} 
            className="w-full h-full object-cover shake-on-hover"
          />
        </div>
      )}
      <div className="relative">
        <svg
          className="absolute -top-6 -left-8 w-16 h-16 text-gray-100 transform -rotate-12"
          fill="currentColor"
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
        <p className="text-lg text-gray-600 mb-4">{content}</p>
      </div>
      <div className="mt-2">
        <p className="font-medium text-gray-800">{author}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  );
};

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const testimonials = [
    {
      content: "My tote bag has been with me for years. The quality is outstanding, and it still looks as good as new despite daily use. Highly recommend!",
      author: "Angie Juma",
      role: "Designer",
      // avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    {
      content: "I absolutely love the minimalist design. Perfect for work, shopping, and everything in between. The sustainable materials make me feel good about my purchase.",
      author: "Spice Nyambura",
      role: "Content Creator",
      // avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    },
    {
      content: "After trying countless totes, I've finally found my perfect bag. The craftsmanship is exceptional, and the classic design goes with everything.",
      author: "Dida Doshi",
      role: "Photographer",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    },
    {
      content: "The premium leather handles on my tote bag make all the difference. It's both functional and stylish - I get compliments everywhere I go.",
      author: "Nas Karuku",
      role: "Student",
      // avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
  ];

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative pt-12 pb-16 px-4 overflow-hidden">
      <div className="relative max-w-5xl mx-auto">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="min-w-full px-4">
                <Testimonial
                  content={testimonial.content}
                  author={testimonial.author}
                  role={testimonial.role}
                  avatar={testimonial.avatar}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsTransitioning(true);
                setCurrentIndex(index);
                setTimeout(() => setIsTransitioning(false), 500);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === currentIndex 
                  ? "bg-gray-800 scale-110" 
                  : "bg-gray-300 scale-90 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-md transition-all"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-md transition-all"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
