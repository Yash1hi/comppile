
import { motion } from "framer-motion";

const teamMembers = [
  {
    role: "Creative Director",
    name: "Alex Morgan",
    description: "Leading the creative vision and strategy",
  },
  {
    role: "Senior Designer",
    name: "Sam Chen",
    description: "Crafting visual experiences",
  },
  {
    role: "Art Director",
    name: "Jordan Lee",
    description: "Guiding artistic direction",
  },
  {
    role: "UI/UX Designer",
    name: "Taylor Swift",
    description: "Creating seamless user experiences",
  },
  {
    role: "Motion Designer",
    name: "Chris Park",
    description: "Bringing designs to life",
  },
  {
    role: "Brand Strategist",
    name: "Morgan Smith",
    description: "Developing brand identities",
  },
];

const About = () => {
  return (
    <div className="min-h-screen pt-24">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-24"
        >
          <h1 className="font-display text-5xl font-bold mb-6">About Us</h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            At comppile, we believe in the power of design to transform ideas into
            meaningful experiences. Our team of passionate designers and creative
            thinkers work together to create impactful visual solutions that
            resonate with audiences and drive results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-4" />
              <h3 className="font-display text-lg font-semibold text-center mb-2">
                {member.role}
              </h3>
              <h4 className="text-gray-600 text-center mb-2">{member.name}</h4>
              <p className="text-gray-500 text-sm text-center">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
