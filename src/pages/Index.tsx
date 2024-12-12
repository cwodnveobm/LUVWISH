import { motion } from "framer-motion";
import { ArrowRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      <section className="hero-section bg-luvwish-offwhite">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1 mb-6 text-sm bg-luvwish-beige rounded-full">
              Empowering Women
            </span>
            <h1 className="text-5xl md:text-7xl font-playfair mb-6">
              Comfort with
              <br />
              Confidence
            </h1>
            <p className="text-lg md:text-xl text-luvwish-gray max-w-2xl mx-auto mb-8">
              Premium feminine care products designed with your comfort and well-being in mind.
            </p>
            <Link to="/products" className="button-primary inline-flex items-center gap-2">
              Explore Products <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            <div className="text-center">
              <Heart className="w-8 h-8 mx-auto mb-4 text-luvwish-black" />
              <h3 className="text-xl font-playfair mb-2">Premium Quality</h3>
              <p className="text-luvwish-gray">Crafted with the finest materials for your comfort</p>
            </div>
            <div className="text-center">
              <Heart className="w-8 h-8 mx-auto mb-4 text-luvwish-black" />
              <h3 className="text-xl font-playfair mb-2">Eco-Friendly</h3>
              <p className="text-luvwish-gray">Sustainable products that care for you and the planet</p>
            </div>
            <div className="text-center">
              <Heart className="w-8 h-8 mx-auto mb-4 text-luvwish-black" />
              <h3 className="text-xl font-playfair mb-2">Women First</h3>
              <p className="text-luvwish-gray">Designed by women, for women</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;