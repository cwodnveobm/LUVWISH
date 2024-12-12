import { motion } from "framer-motion";

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
            <a 
              href="/products" 
              className="button-primary inline-block"
            >
              Explore Our Products
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center p-6"
            >
              <h3 className="text-2xl font-playfair font-semibold mb-4">Premium Quality</h3>
              <p className="text-gray-600">Made with the finest materials for ultimate comfort</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center p-6"
            >
              <h3 className="text-2xl font-playfair font-semibold mb-4">Eco-Friendly</h3>
              <p className="text-gray-600">Sustainable products that care for you and the environment</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center p-6"
            >
              <h3 className="text-2xl font-playfair font-semibold mb-4">Empowerment</h3>
              <p className="text-gray-600">Supporting women's confidence and well-being</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;