import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    text: "The most comfortable pads I've ever used. I love that they're eco-friendly too!",
    rating: 5
  },
  {
    id: 2,
    name: "Emily Chen",
    text: "Finally found a brand that truly understands women's needs. Great quality and comfort.",
    rating: 5
  },
  {
    id: 3,
    name: "Maria Garcia",
    text: "Love the sustainable approach and premium quality. Will definitely keep using Luvwish!",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <div className="min-h-screen pt-32">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Customer Stories</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear what our customers have to say about their experience with Luvwish
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="flex flex-col h-full">
                    <p className="text-gray-600 mb-4 flex-grow">{testimonial.text}</p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <div className="flex text-yellow-400">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                    </div>
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

export default Testimonials;