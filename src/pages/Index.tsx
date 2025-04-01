
import React, { useState } from "react";
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
  
  const carouselSlides = [
    {
      image: "https://images.unsplash.com/photo-1525562723836-dca67a71d5f1",
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
      image: "https://images.unsplash.com/photo-1557899563-1940fc95709c",
      alt: "Sustainable tote bag",
      heading: "Sustainable Style",
      subheading: "Eco-Friendly Materials",
    },
  ];

  const featuredProducts = [
    {
      image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7",
      name: "Classic Canvas Tote",
      price: "$85",
      category: "Bestseller",
    },
    {
      image: "https://images.unsplash.com/photo-1589365252845-092198ba5979",
      name: "Minimal Black Tote",
      price: "$95",
      category: "New",
    },
    {
      image: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7",
      name: "Eco-Friendly Jute Tote",
      price: "$75",
      category: "Sustainable",
    },
    {
      image: "https://images.unsplash.com/photo-1544816155-12df9643f363",
      name: "Premium Leather Handle Tote",
      price: "$120",
      category: "Premium",
    },
    // Add 4 more tote bags
    {
      image: "https://images.unsplash.com/photo-1532697057284-bbe526e18cdb",
      name: "Navy Canvas Tote",
      price: "$89",
      category: "New Arrival",
    },
    {
      image: "https://images.unsplash.com/photo-1597633125184-9fd7e54f79a1",
      name: "Striped Beach Tote",
      price: "$65",
      category: "Summer",
    },
    {
      image: "https://images.unsplash.com/photo-1559563458-527698bf5295",
      name: "Organic Cotton Tote",
      price: "$79",
      category: "Eco-Friendly",
    },
    {
      image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d",
      name: "Denim Everyday Tote",
      price: "$110",
      category: "Bestseller",
    },
  ];

  const additionalProducts = [
    {
      image: "https://images.unsplash.com/photo-1555089560-5704569d6d27",
      name: "Minimalist White Tote",
      price: "$82",
      category: "Casual",
    },
    {
      image: "https://images.unsplash.com/photo-1574365569389-a10d488ca3fb",
      name: "Woven Pattern Tote",
      price: "$94",
      category: "Artisan",
    },
    {
      image: "https://images.unsplash.com/photo-1589782431321-8dee19a708b2",
      name: "Colorblock Canvas Tote",
      price: "$88",
      category: "Trendy",
    },
    {
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
      name: "Weekend Travel Tote",
      price: "$125",
      category: "Premium",
    },
    {
      image: "https://images.unsplash.com/photo-1485125639709-a60c3a500bf1",
      name: "Bamboo Handle Tote",
      price: "$105",
      category: "Sustainable",
    },
    {
      image: "https://images.unsplash.com/photo-1561876123-5c1673b16f62",
      name: "Market Day Tote",
      price: "$72",
      category: "Practical",
    },
    {
      image: "https://images.unsplash.com/photo-1604176424472-475d99365cbe",
      name: "Office Essential Tote",
      price: "$99",
      category: "Work",
    },
    {
      image: "https://images.unsplash.com/photo-1575844264771-892081089897",
      name: "Student Canvas Tote",
      price: "$68",
      category: "Everyday",
    },
    {
      image: "https://images.unsplash.com/photo-1612902376491-7a8a99b424e8",
      name: "Structured Canvas Tote",
      price: "$92",
      category: "Classic",
    },
    {
      image: "https://images.unsplash.com/photo-1554342872-034a06541bad",
      name: "Botanical Print Tote",
      price: "$86",
      category: "Limited Edition",
    },
    {
      image: "https://images.unsplash.com/photo-1536303158031-c868b371399f",
      name: "Monochrome Tote",
      price: "$78",
      category: "Minimal",
    },
    {
      image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e",
      name: "Heavy Duty Canvas Tote",
      price: "$95",
      category: "Durable",
    },
  ];

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
            At TOTE, we believe in the beauty of simplicity. Our handcrafted bags combine
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
              Explore our collection of carefully crafted tote bags, designed with attention to detail and quality materials.
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
              <p className="text-gray-600 max-w-2xl mx-auto">
                Browse our complete collection of handcrafted tote bags for every occasion.
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
