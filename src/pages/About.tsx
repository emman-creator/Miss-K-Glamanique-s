
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium mb-6 leading-tight">
              Our Story
            </h1>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8 text-balance">
              Crafting sustainable, minimalist tote bags since 2018.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 animate-slide-from-left">
              <h2 className="text-3xl font-display font-medium mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-4 text-balance">
                At TOTE, our mission is to create beautiful, functional bags that stand the test of time. 
                We believe in thoughtful design, sustainable practices, and products that become more 
                beautiful with age.
              </p>
              <p className="text-gray-600 mb-6 text-balance">
                Every tote we craft is a reflection of our core values: simplicity, sustainability, and quality craftsmanship. 
                We're committed to reducing waste in the fashion industry by creating products that last for years, not seasons.
              </p>
              <Button
                onClick={() => navigate("/contact")}
                className="rounded-full bg-black hover:bg-gray-800 text-white transition-all duration-300"
              >
                Get in Touch
              </Button>
            </div>
            <div className="order-1 md:order-2 animate-slide-from-right">
              <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1583394838336-acd977736f90"
                  alt="Craftsman working on a tote bag"
                  className="w-full h-full object-cover hover-scale"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-display font-medium mb-6">Our Values</h2>
            <p className="text-gray-600 text-balance">
              The principles that guide everything we do, from design to production.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                title: "Sustainability",
                description:
                  "We use organic cotton, recycled materials, and natural dyes to minimize our environmental footprint.",
                image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09",
              },
              {
                title: "Craftsmanship",
                description:
                  "Every bag is meticulously crafted by skilled artisans who take pride in their attention to detail.",
                image: "https://images.unsplash.com/photo-1556760544-74068565f05c",
              },
              {
                title: "Timeless Design",
                description:
                  "We create minimalist designs that transcend trends, ensuring your tote remains stylish for years to come.",
                image: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7",
              },
            ].map((value, index) => (
              <div key={index} className="flex flex-col hover-lift">
                <div className="aspect-square mb-6 overflow-hidden rounded-lg">
                  <img
                    src={value.image}
                    alt={value.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-display font-medium mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-balance">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-display font-medium mb-6">Our Team</h2>
            <p className="text-gray-600 text-balance">
              Meet the passionate people behind TOTE.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                name: "Emma Chen",
                role: "Founder & Designer",
                image: "https://images.unsplash.com/photo-1590649613897-1a9d4df9387b",
                bio: "Emma founded TOTE in 2018 with a vision to create minimalist bags that blend form and function.",
              },
              {
                name: "Marcus Reid",
                role: "Production Lead",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
                bio: "With over 15 years in textile manufacturing, Marcus oversees our sustainable production processes.",
              },
              {
                name: "Sofia Rivera",
                role: "Sustainability Officer",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
                bio: "Sofia ensures our materials and practices meet the highest standards of environmental responsibility.",
              },
            ].map((member, index) => (
              <div key={index} className="hover-lift">
                <div className="aspect-square mb-6 overflow-hidden rounded-full">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-display font-medium mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-500 mb-3">{member.role}</p>
                  <p className="text-gray-600 text-balance">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
