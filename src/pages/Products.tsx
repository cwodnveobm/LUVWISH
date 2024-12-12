import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const products = [
  {
    id: 1,
    name: "Daily Comfort Pads",
    description: "Ultra-thin, breathable pads for everyday use",
    price: "$12.99",
    quantity: "Pack of 24"
  },
  {
    id: 2,
    name: "Night Protection",
    description: "Extra coverage for overnight comfort",
    price: "$14.99",
    quantity: "Pack of 20"
  },
  {
    id: 3,
    name: "Active Fit",
    description: "Designed for sports and active lifestyles",
    price: "$13.99",
    quantity: "Pack of 24"
  }
];

const Products = () => {
  return (
    <div className="min-h-screen pt-32">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Our Products</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Premium quality feminine care products designed for comfort and confidence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="font-playfair">{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">{product.price}</span>
                    <span className="text-sm text-gray-500">{product.quantity}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;