import { motion } from "framer-motion";

const teamMembers = [
  {
    role: "Founder",
    name: "Yash Thapliyal", 
    description: "CU Boulder Senior - Computer Science",
    image: "/Yash-Headshot.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/yash1hi/",
      instagram: "https://www.instagram.com/yash1photos/",
    }
  },
  {
    role: "Senior Designer",
    name: "Gabo Page",
    description: "CU Boulder Junior - Media Production",
    image: "",
    social: {
      linkedin: "https://www.linkedin.com/in/gabriel-page-segura-86895824b/",
      instagram: "https://www.instagram.com/kruma.ps/",
      website: "https://kruma.myportfolio.com/"
    }
  },
  {
    role: "Another Role",
    name: "-----", 
    description: "-------------",
    image: ""
  },
  {
    role: "Another Role",
    name: "-----", 
    description: "-------------",
    image: ""
  },
  {
    role: "Another Role",
    name: "-----", 
    description: "-------------",
    image: ""
  },
  {
    role: "Another Role",
    name: "-----", 
    description: "-------------",
    image: ""
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
              <img 
                src={member.image || "/placeholder-headshot.png"}
                alt={`${member.name} - ${member.role}`}
                className="w-20 h-20 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="font-display text-lg font-semibold text-center mb-2">
                {member.role}
              </h3>
              <h4 className="text-gray-600 text-center mb-2">{member.name}</h4>
              <p className="text-gray-500 text-sm text-center mb-4">
                {member.description}
              </p>
              {member.social && (
                <div className="flex justify-center space-x-4">
                  {member.social.linkedin && (
                    <a 
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600"
                    >
                      <img src="/LinkedIn-Icon.png" alt="LinkedIn" className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.instagram && (
                    <a 
                      href={member.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-pink-600"
                    >
                      <img src="/Instagram-Icon.png" alt="Instagram" className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.website && (
                    <a 
                      href={member.social.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      <img src="/Website-Icon.png" alt="Website" className="w-5 h-5" />
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
