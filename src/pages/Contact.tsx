
import { motion } from "framer-motion";
import { Instagram, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen pt-24">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="font-display text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-gray-600 text-lg">
            We'd love to hear about your project
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-display text-2xl font-semibold mb-6">
                Contact Information
              </h2>
              <div className="space-y-4">
                <a
                  href="tel:+4154845930"
                  className="flex items-center space-x-4 text-gray-600 hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>(123) 456-7890</span>
                </a>
                <a
                  href="mailto:team@comppile.studio"
                  className="flex items-center space-x-4 text-gray-600 hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>hello@comppile.com</span>
                </a>
                <a
                  href="https://instagram.com/comppile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-gray-600 hover:text-primary transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  <span>@comppile</span>
                </a>
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold mb-6">
                Office Hours
              </h2>
              <p className="text-gray-600">
                Monday - Friday: 9:00 AM - 6:00 PM
                <br />
                Saturday - Sunday: By appointment only
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
