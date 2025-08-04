import React from 'react';
import { motion } from 'framer-motion';

const images = [
  // { src: '/assets/IMG_01.jpg', alt: 'Granos de Café' }, //si 
  { src: '/assets/IMG_02.jpg', alt: 'Cafetería' }, //maso
  // { src: '/assets/IMG_03.jpg', alt: 'Taza de Café' },
  // { src: '/assets/IMG_04.jpg', alt: 'Barista' }, //si
  { src: '/assets/IMG_05.jpg', alt: 'Café con arte' },
  { src: '/assets/IMG_06.jpg', alt: 'Café rosado' },
  { src: '/assets/IMG_07.jpg', alt: 'Café en grano' }, //si
  { src: '/assets/IMG_08.jpg', alt: 'Café en taza' },
  // { src: '/assets/IMG_09.jpg', alt: 'Café en la naturaleza' },
  { src: '/assets/IMG_10.jpg', alt: 'Café y postre' }, //si
  // { src: '/assets/IMG_11.jpg', alt: 'Café y libro' }, //si
];

const GallerySection = () => {
  return (
    <motion.section
      className="py-20 bg-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          className="text-4xl font-bold text-gray-800 text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Nuestra Galería
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.1 + 0.4, duration: 0.6 }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-xl font-semibold">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default GallerySection;