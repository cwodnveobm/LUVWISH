import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen pt-32">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Our Story</h1>
          <p className="text-lg text-gray-600">
            Founded with a vision to revolutionize feminine care, Luvwish is committed to providing premium quality products while promoting women's empowerment and well-being.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-playfair font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              To provide women with the highest quality feminine care products while promoting confidence, comfort, and sustainability.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-playfair font-semibold mb-4">Our Values</h2>
            <ul className="space-y-3 text-gray-600">
              <li>• Quality and Comfort First</li>
              <li>• Environmental Responsibility</li>
              <li>• Women's Empowerment</li>
              <li>• Innovation in Feminine Care</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;