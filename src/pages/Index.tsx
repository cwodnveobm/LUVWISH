import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Shield, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { lazy, Suspense } from "react";

// Lazy load sections that are below the fold
const ProductsPreview = lazy(() => import("../components/ProductsPreview"));

const Index = () => {
  console.log("Rendering Index page");
  
  return (
    <>
      <Helmet>
        <title>Luvwish - Women's Empowerment Hub</title>
        <meta name="description" content="Premium feminine care products designed with your comfort and confidence in mind." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section - Optimized for mobile */}
        <section className="hero-section bg-luvwish-offwhite px-4 md:px-6">
          <div className="container-custom">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto pt-24 md:pt-32"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 leading-tight">
                Empowering Women Through Comfort
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-8 px-4">
                Premium feminine care products designed with your comfort and confidence in mind.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
                <Link to="/products">
                  <Button className="w-full sm:w-auto bg-luvwish-black text-white hover:bg-luvwish-gray">
                    Explore Products <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" className="w-full sm:w-auto border-luvwish-black text-luvwish-black">
                    Learn More
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section - Grid layout optimized for all screens */}
        <section className="py-16 md:py-20 bg-white px-4 md:px-6">
          <div className="container-custom">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
            >
              {[
                {
                  icon: <Heart className="w-6 h-6 md:w-8 md:h-8" />,
                  title: "Premium Quality",
                  description: "Made with the finest materials for ultimate comfort and care."
                },
                {
                  icon: <Shield className="w-6 h-6 md:w-8 md:h-8" />,
                  title: "Safe & Secure",
                  description: "Dermatologically tested products for your peace of mind."
                },
                {
                  icon: <Sparkles className="w-6 h-6 md:w-8 md:h-8" />,
                  title: "Eco-Friendly",
                  description: "Sustainable products that care for you and the environment."
                }
              ].map((feature, index) => (
                <div key={index} className="text-center p-6 bg-luvwish-offwhite rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 bg-luvwish-rose rounded-full flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-playfair font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* About Preview Section - Responsive text and spacing */}
        <section className="py-16 md:py-20 bg-luvwish-beige px-4 md:px-6">
          <div className="container-custom">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">Our Mission</h2>
              <p className="text-base md:text-lg text-gray-700 mb-8 px-4">
                At Luvwish, we believe every woman deserves access to premium feminine care products. 
                Our mission is to empower women through comfort, confidence, and care.
              </p>
              <Link to="/about">
                <Button variant="outline" className="border-luvwish-black text-luvwish-black">
                  About Us
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Products Preview - Lazy loaded */}
        <Suspense fallback={
          <div className="py-20 text-center">
            <div className="animate-pulse">Loading products...</div>
          </div>
        }>
          <ProductsPreview />
        </Suspense>

        {/* CTA Section - Responsive padding and text */}
        <section className="py-16 md:py-20 bg-luvwish-rose px-4 md:px-6">
          <div className="container-custom">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">Ready to Experience the Difference?</h2>
              <p className="text-base md:text-lg text-gray-700 mb-8 max-w-2xl mx-auto px-4">
                Join thousands of satisfied customers who have chosen Luvwish for their feminine care needs.
              </p>
              <Link to="/contact">
                <Button className="bg-luvwish-black text-white hover:bg-luvwish-gray">
                  Contact Us Today
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Index;