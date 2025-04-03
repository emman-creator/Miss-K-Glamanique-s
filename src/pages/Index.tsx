import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "../components/Carousel";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TestimonialCarousel from "../components/TestimonialCarousel";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselSlides = [
    {
      image: "/public/image/carouselbag2.jpg",
      alt: "Minimal tote bag",
      heading: "Elegance in Simplicity",
      subheading: "Featured Collection",
    },
    {
      image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d",
      alt: "Tote bag in use",
      heading: "Designed for Everyday Life",
      subheading: "New Arrivals",
    },
    {
      image: "/public/image/carouselbag1.jpg",
      alt: "Sustainable tote bag",
      heading: "Sustainable Style",
      subheading: "Eco-Friendly Materials",
    },
  ];

  const featuredProducts = [
    {
      image: "/public/image/bag1.jpg",
      name: "Classic Canvas Tote",
      price: "Ksh 350",
      category: "Bestseller",
    },
    {
      image: "/public/image/bag2.jpg",
      name: "Minimal Black Tote",
      price: "Ksh 350",
      category: "New",
    },
    {
      image: "/public/image/bag3.jpg",
      name: "Eco-Friendly Tote",
      price: "Ksh 350",
      category: "Sustainable",
    },
    {
      image: "/public/image/bag4.jpg",
      name: "Premium Leather Handle Tote",
      price: "Ksh 350",
      category: "Premium",
    },
    // Add 4 more tote bags
    {
      image: "/public/image/bag5.jpg",
      name: "Navy Canvas Tote",
      price: "Ksh 350",
      category: "New Arrival",
    },
    {
      image: "/public/image/bag6.jpg",
      name: "Striped Beach Tote",
      price: "Ksh 350",
      category: "Summer",
    },
    {
      image: "/public/image/bag7.jpg",
      name: "Organic Cotton Tote",
      price: "Ksh 350",
      category: "Eco-Friendly",
    },
    {
      image: "/public/image/bag8.jpg",
      name: "Everyday Tote",
      price: "Ksh 350",
      category: "Bestseller",
    },
  ];

  const additionalProducts = [
    {
      image: "/public/image/bag9.jpg",
      name: "Minimalist White Tote",
      price: "Ksh 350",
      category: "Casual",
    },
    {
      image: "/public/image/bag10.jpg",
      name: "Woven Pattern Tote",
      price: "Ksh 350",
      category: "Artisan",
    },
    {
      image: "/public/image/bag11.jpg",
      name: "Colorblock Canvas Tote",
      price: "Ksh 350",
      category: "Trendy",
    },
    {
      image: "/public/image/bag12.jpg",
      name: "Weekend Travel Tote",
      price: "Ksh 350",
      category: "Premium",
    },
    {
      image: "/public/image/bag13.jpg",
      name: "Bamboo Tote",
      price: "Ksh 350",
      category: "Sustainable",
    },
    {
      image: "/public/image/bag14.jpg",
      name: "Market Day Tote",
      price: "Ksh 350",
      category: "Practical",
    },
    {
      image: "/public/image/bag15.jpg",
      name: "Office Essential Tote",
      price: "Ksh 350",
      category: "Work",
    },
    {
      image: "/public/image/bag16.jpg",
      name: "Student Canvas Tote",
      price: "Ksh 350",
      category: "Everyday",
    },
    {
      image: "/public/image/bag17.jpg",
      name: "Heavy Structured Canvas Tote",
      price: "Ksh 450",
      category: "Classic",
    },
    {
      image: "/public/image/bag18.jpg",
      name: "Heavy Botanical Print Tote",
      price: "Ksh 450",
      category: "Limited Edition",
    },
    {
      image: "/public/image/bag19.jpg",
      name: "Heavy Monochrome Tote",
      price: "Ksh 450",
      category: "Minimal",
    },
    {
      image: "/public/image/bag20.jpg",
      name: "Heavy Duty Canvas Tote",
      price: "Ksh 450",
      category: "Durable",
    },
  ];

  // Automatically change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselSlides.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [carouselSlides.length]);

  const toggleShowAllProducts = () => {
    setShowAllProducts(!showAllProducts);
    if (!showAllProducts) {
      setTimeout(() => {
        const allProductsSection = document.getElementById("all-products");
        allProductsSection?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="w-full">
        <Carousel slides={carouselSlides} />
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-20">
          <Button
            onClick={() => {
              const productsSection = document.getElementById("products");
              productsSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group bg-white text-black hover:bg-black hover:text-white border border-transparent hover:border-white transition-all duration-300 rounded-full px-6 py-6"
          >
            <span className="mr-2">Explore Products</span>
            <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
          </Button>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-6 animate-slide-in">
            Crafted with Care, <br className="hidden sm:block" />Designed for Living
          </h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto text-balance animate-slide-in">
            At Miss K. Glamanique's, we believe in the beauty of simplicity. Our bags combine
            minimalist design with sustainable materials to create timeless accessories for everyday use.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              onClick={() => navigate("/about")}
              variant="outline"
              size="lg"
              className="rounded-full border-gray-300 hover:border-gray-900 transition-all duration-300"
            >
              Our Story
            </Button>
            <Button
              onClick={() => navigate("/contact")}
              size="lg"
              className="rounded-full bg-black hover:bg-gray-800 text-white transition-all duration-300"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-medium mb-4">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our collection of tote bags, available for purchase and designed with attention to detail and quality materials.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {featuredProducts.map((product, index) => (
              <ProductCard
                key={index}
                image={product.image}
                name={product.name}
                price={product.price}
                category={product.category}
              />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button
              onClick={toggleShowAllProducts}
              className="rounded-full px-8 py-6 bg-black hover:bg-gray-800 text-white transition-all duration-300"
            >
              {showAllProducts ? "Show Featured Products" : "View All Products"}
            </Button>
          </div>
        </div>
      </section>

      {/* Additional Products Section - Shows when "View All Products" is clicked */}
      {showAllProducts && (
        <section id="all-products" className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-display font-medium mb-4">All Products</h2>
                <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in">
                Browse our complete collection of tote bags for every occasion, crafted with love and care.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
              {additionalProducts.map((product, index) => (
                <ProductCard
                  key={index}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  category={product.category}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">Join Our Community</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter to receive updates on new products, special offers, and sustainable living tips.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30"
              required
            />
            <Button className="rounded-full bg-white text-gray-900 hover:bg-gray-200 transition-colors">
              Subscribe
            </Button>
          </form>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="py-16 bg-gradient-to-b from-gray-100 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Discover what makes our tote bags the favorite choice of customers around the world.
            </p>
          </div>
          
          <TestimonialCarousel />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
