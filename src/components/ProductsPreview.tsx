import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ProductsPreview = () => {
  console.log("Rendering ProductsPreview component");
  
  return (
    <section className="py-16 md:py-20 bg-white px-4 md:px-6">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div 
                key={item}
                whileHover={{ y: -10 }}
                className="bg-luvwish-offwhite p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300"
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
  );
};

export default ProductsPreview;