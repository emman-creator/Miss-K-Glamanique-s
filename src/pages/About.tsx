
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Shield, FileText } from "lucide-react";

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

      {/* Legal Information Section with Cards */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-display font-medium mb-12 text-center">Legal Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Privacy Policy Card */}
              <div className="group">
                <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl border-t-4 border-t-blue-500 hover:-translate-y-2">
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 pb-8">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-2xl font-display">Privacy Policy</CardTitle>
                        <CardDescription>How we handle your information</CardDescription>
                      </div>
                      <div className="p-3 bg-blue-500 rounded-full text-white transform transition-transform group-hover:rotate-12 duration-500">
                        <Shield size={24} />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="flex gap-6 items-start mb-4">
                      <div className="w-1/3 overflow-hidden rounded-lg shake-on-hover">
                        <img 
                          src="https://images.unsplash.com/photo-1458668383970-8ddd3927deed"
                          alt="Privacy Shield" 
                          className="w-full h-32 object-cover"
                        />
                      </div>
                      <div className="w-2/3 prose prose-sm">
                        <p>At TOTE, we take your privacy seriously. We collect only essential information needed to process your orders and provide customer service.</p>
                        <HoverCard>
                          <HoverCardTrigger asChild>
                            <span className="text-blue-600 cursor-pointer hover:underline">Learn more about data protection</span>
                          </HoverCardTrigger>
                          <HoverCardContent className="w-80">
                            <div className="space-y-2">
                              <h4 className="text-sm font-semibold">Your data is secure</h4>
                              <p className="text-sm">We implement appropriate security measures to protect your personal information from unauthorized access or disclosure.</p>
                            </div>
                          </HoverCardContent>
                        </HoverCard>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-4 flex justify-between items-center">
                    <span className="text-xs text-gray-500">Last updated: June 2023</span>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => document.getElementById('privacy')?.scrollIntoView({behavior: 'smooth'})}
                    >
                      Read Full Policy
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              {/* Terms of Service Card */}
              <div className="group">
                <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl border-t-4 border-t-amber-500 hover:-translate-y-2">
                  <CardHeader className="bg-gradient-to-r from-amber-50 to-yellow-50 pb-8">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-2xl font-display">Terms of Service</CardTitle>
                        <CardDescription>Rules that govern our relationship</CardDescription>
                      </div>
                      <div className="p-3 bg-amber-500 rounded-full text-white transform transition-transform group-hover:rotate-12 duration-500">
                        <FileText size={24} />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="flex gap-6 items-start mb-4">
                      <div className="w-1/3 overflow-hidden rounded-lg shake-on-hover">
                        <img 
                          src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
                          alt="Terms Document" 
                          className="w-full h-32 object-cover"
                        />
                      </div>
                      <div className="w-2/3 prose prose-sm">
                        <p>By using our website, you agree to these Terms of Service. We strive to ensure our products meet high standards of quality and durability.</p>
                        <HoverCard>
                          <HoverCardTrigger asChild>
                            <span className="text-amber-600 cursor-pointer hover:underline">Learn about returns & shipping</span>
                          </HoverCardTrigger>
                          <HoverCardContent className="w-80">
                            <div className="space-y-2">
                              <h4 className="text-sm font-semibold">Hassle-free returns</h4>
                              <p className="text-sm">If you're not satisfied with your purchase, you may return it within 30 days for a full refund or exchange.</p>
                            </div>
                          </HoverCardContent>
                        </HoverCard>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-4 flex justify-between items-center">
                    <span className="text-xs text-gray-500">Last updated: June 2023</span>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => document.getElementById('terms')?.scrollIntoView({behavior: 'smooth'})}
                    >
                      Read Full Terms
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Section */}
      <section id="privacy" className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-medium mb-6">Privacy Policy</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-4">
                At TOTE, we take your privacy seriously. This Privacy Policy outlines how we collect, 
                use, and protect your personal information when you visit our website or make a purchase.
              </p>
              <h3 className="text-xl font-medium mt-8 mb-4">Information We Collect</h3>
              <p className="text-gray-600 mb-4">
                We collect information that you provide directly to us, such as your name, email address, 
                shipping address, and payment information when you make a purchase or contact us.
              </p>
              <h3 className="text-xl font-medium mt-8 mb-4">How We Use Your Information</h3>
              <p className="text-gray-600 mb-4">
                We use your information to process and fulfill your orders, communicate with you about 
                your purchases, and provide customer service. We may also use your information to send 
                you marketing communications if you have opted in to receive them.
              </p>
              <h3 className="text-xl font-medium mt-8 mb-4">Data Security</h3>
              <p className="text-gray-600 mb-4">
                We implement appropriate security measures to protect your personal information from 
                unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms of Service Section */}
      <section id="terms" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-medium mb-6">Terms of Service</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-4">
                By accessing and using the TOTE website, you agree to these Terms of Service.
              </p>
              <h3 className="text-xl font-medium mt-8 mb-4">Product Information</h3>
              <p className="text-gray-600 mb-4">
                We make every effort to display our products as accurately as possible. However, colors 
                may appear differently on different screens, and slight variations in the products themselves 
                may occur due to the handcrafted nature of our items.
              </p>
              <h3 className="text-xl font-medium mt-8 mb-4">Shipping and Returns</h3>
              <p className="text-gray-600 mb-4">
                We offer shipping within the United States and internationally to select countries. 
                Delivery times may vary based on your location. If you are not satisfied with your purchase, 
                you may return it within 30 days for a full refund or exchange.
              </p>
              <h3 className="text-xl font-medium mt-8 mb-4">Intellectual Property</h3>
              <p className="text-gray-600 mb-4">
                All content on this website, including text, images, logos, and designs, is the property 
                of TOTE and is protected by copyright and other intellectual property laws.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
