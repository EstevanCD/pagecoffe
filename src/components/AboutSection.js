import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <motion.section
      className="py-20 bg-gray-100"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h2
          className="text-4xl font-bold text-gray-800 text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Nuestra Historia
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <img
              // src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              src='/assets/IMG_08.jpg'
              alt="Café"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </motion.div>
          <motion.div
            className="md:w-1/2 text-gray-700 text-lg leading-relaxed"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <p className="mb-6">
              En el majestuoso Macizo Colombiano, donde el clima y la tierra
              trabajan en perfecta armonía, nacen los granos de café que dan
              vida a Tu Mañanero. Estas tierras únicas, cargadas de atributos y
              tradición, producen un café de especialidad que captura la esencia
              de nuestra región. Cada sorbo cuenta una historia, conectándote
              con la riqueza de nuestro territorio y la dedicación detrás de
              cada grano.
            </p>
            <p>
              Nuestro compromiso es ofrecerte no solo una bebida, sino un
              momento de placer y conexión. Ven y descubre por qué somos el
              lugar preferido para los amantes del buen café.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
