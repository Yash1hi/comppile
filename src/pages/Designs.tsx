
import { motion } from "framer-motion";

const projects = [
  {
    name: "Ethereal Magazine",
    description: "A minimalist fashion editorial design",
    leadDesigner: "Alex Morgan",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
  },
  {
    name: "Neon Dreams",
    description: "Brand identity for a nightlife venue",
    leadDesigner: "Sam Chen",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    name: "Pure",
    description: "Packaging design for skincare brand",
    leadDesigner: "Jordan Lee",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
  },
  {
    name: "Tech Quarterly",
    description: "Digital magazine layout",
    leadDesigner: "Taylor Swift",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
  },
  {
    name: "Artisanal",
    description: "Restaurant menu and identity",
    leadDesigner: "Chris Park",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  },
  {
    name: "Futura",
    description: "Exhibition catalog design",
    leadDesigner: "Morgan Smith",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
  },
];

const Designs = () => {
  return (
    <div className="min-h-screen pt-24">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="font-display text-5xl font-bold mb-6">Our Work</h1>
          <p className="text-gray-600 text-lg">
            Explore our collection of thoughtfully crafted design projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">
                {project.name}
              </h3>
              <p className="text-gray-600 mb-2">{project.description}</p>
              <p className="text-sm text-gray-500">
                Lead Designer: {project.leadDesigner}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Designs;
