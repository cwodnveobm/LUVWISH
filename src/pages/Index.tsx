import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Shield, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section bg-luvwish-offwhite">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto pt-32"
          >
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
              Empowering Women Through Comfort
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Premium feminine care products designed with your comfort and confidence in mind.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/products">
                <Button className="bg-luvwish-black text-white hover:bg-luvwish-gray">
                  Explore Products <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="border-luvwish-black text-luvwish-black">
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-luvwish-rose rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-luvwish-black" />
              </div>
              <h3 className="text-2xl font-playfair font-semibold mb-4">Premium Quality</h3>
              <p className="text-gray-600">Made with the finest materials for ultimate comfort and care.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-luvwish-rose rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-luvwish-black" />
              </div>
              <h3 className="text-2xl font-playfair font-semibold mb-4">Safe & Secure</h3>
              <p className="text-gray-600">Dermatologically tested products for your peace of mind.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-luvwish-rose rounded-full flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-luvwish-black" />
              </div>
              <h3 className="text-2xl font-playfair font-semibold mb-4">Eco-Friendly</h3>
              <p className="text-gray-600">Sustainable products that care for you and the environment.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-luvwish-beige">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-playfair font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-8">
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

      {/* Products Preview */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl font-playfair font-bold mb-12">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <motion.div 
                  key={item}
                  whileHover={{ y: -10 }}
                  className="bg-luvwish-offwhite p-6 rounded-lg shadow-sm"
                >
                  <div className="w-full h-48 bg-luvwish-rose rounded-lg mb-4"></div>
                  <h3 className="text-xl font-playfair font-semibold mb-2">Product {item}</h3>
                  <p className="text-gray-600 mb-4">Premium comfort and protection</p>
                  <Link to="/products">
                    <Button variant="link" className="text-luvwish-black">
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-luvwish-rose">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl font-playfair font-bold mb-6">Ready to Experience the Difference?</h2>
            <p className="text-lg text-gray-700 mb-8">
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
  );
};

export default Index;