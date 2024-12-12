import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Helmet } from "react-helmet";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll get back to you soon!",
    });
  };

  return (
    <>
      <Helmet>
        <title>Contact Luvwish - Women's Empowerment Hub</title>
        <meta name="description" content="Get in touch with Luvwish for premium feminine care products. We're here to answer your questions and provide support." />
        <meta name="keywords" content="contact luvwish, feminine care contact, women's products support" />
        <link rel="canonical" href="https://luvwish.com/contact" />
      </Helmet>

      <div className="min-h-screen pt-32">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Contact Us</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We'd love to hear from you. Get in touch with us for any questions or concerns.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                      <Input id="name" placeholder="Your name" required aria-label="Your name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                      <Input id="email" type="email" placeholder="Your email" required aria-label="Your email" />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                      <Textarea 
                        id="message" 
                        placeholder="Your message" 
                        className="min-h-[150px]" 
                        required 
                        aria-label="Your message"
                      />
                    </div>
                    <Button type="submit" className="w-full">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-playfair font-semibold mb-4">Contact Information</h2>
                <div className="space-y-4 text-gray-600">
                  <p><strong>Email:</strong> <a href="mailto:contact@luvwish.com" className="hover:text-black transition-colors">contact@luvwish.com</a></p>
                  <p><strong>Phone:</strong> <a href="tel:+15551234567" className="hover:text-black transition-colors">(555) 123-4567</a></p>
                  <p><strong>Address:</strong> 123 Comfort Street, Wellness City, WC 12345</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-playfair font-semibold mb-4">Business Hours</h2>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;