import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const HeroSection = () => {
  const whatsappNumber = '573173743002'; //número de WhatsApp
  const whatsappMessage = encodeURIComponent('¡Hola! Me gustaría hacer un pedido de café.');

  return (
    <motion.section
      className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 p-8 max-w-3xl mx-auto">
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Tu Mañanero
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-200 mb-10"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Tu rincón favorito para disfrutar del mejor café y momentos inolvidables.
        </motion.p>
        <motion.a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-4 bg-green-500 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, duration: 0.5, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaWhatsapp className="mr-3 text-2xl" />
          Haz tu pedido por WhatsApp
        </motion.a>
      </div>
    </motion.section>
  );
};

export default HeroSection;