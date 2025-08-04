import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const SocialMediaSection = () => {
  return (
    <motion.section
      className="py-20 bg-gray-100"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Síguenos en Redes Sociales
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          No te pierdas nuestras últimas novedades, promociones y el día a día
          de Tu Mañanero. ¡Únete a nuestra comunidad!
        </motion.p>
        <div className="flex justify-center space-x-8">
          <motion.a
            href="https://www.facebook.com/share/1C4JsSZt38/" // Reemplaza con tu URL de Facebook
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-20 h-20 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-110"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.6,
              duration: 0.5,
              type: "spring",
              stiffness: 200,
            }}
            whileHover={{ rotate: 5 }}
          >
            <FaFacebookF className="text-4xl" />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/tumananero_cafe?igsh=c2N0YWc5dG9sMGF3" // Reemplaza con tu URL de Instagram
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-20 h-20 bg-pink-600 text-white rounded-full shadow-lg hover:bg-pink-700 transition-all duration-300 transform hover:scale-110"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.8,
              duration: 0.5,
              type: "spring",
              stiffness: 200,
            }}
            whileHover={{ rotate: -5 }}
          >
            <FaInstagram className="text-4xl" />
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
};

export default SocialMediaSection;
