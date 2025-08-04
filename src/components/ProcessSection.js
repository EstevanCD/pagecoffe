import React from "react";
import { motion } from "framer-motion";
import { FaSeedling, FaCoffee, FaGrinStars, FaTruck } from "react-icons/fa";

const processes = [
  {
    icon: FaSeedling,
    title: "Selección de Granos",
    description:
      "Cultivado en la finca La Estrella a 1930 msnm, en el corazón de La Sierra. Suelos fértiles y prácticas agrícolas sostenibles garantizan su calidad. Microclimas diversos y altitud perfecta para un café de especialidad único. Compromiso con la tradición y el respeto por la naturaleza. Cada taza refleja la riqueza y esencia de estas tierras excepcionales.",
  },
  {
    icon: FaCoffee,
    title: "Castillo Cosecha Tardía",
    description:
      "Tu Mañanero Castillo Cosecha Tardía es un café de especialidad que honra la tierra, la tradición y se cuida cada detalle del proceso, desde la recolección manual en su punto exacto de maduración, hasta un beneficio sostenible. En cada taza descubrirás notas de vino, frutos rojos, dulce de panela, chocolate amargo y delicados cítricos que se entrelazan en un equilibrio perfecto. Un perfil sensorial que no solo deleita, sino que cuenta una historia de territorio, paciencia y respeto por la naturaleza. Más que un café, es una experiencia. Un ritual diario que conecta tu alma con la tierra. Descubre el sabor auténtico de la cosecha tardía. Vive Tu Mañanero.",
  },
  {
    icon: FaGrinStars,
    title: "Bourbon Rosado Honey",
    description:
      "La elegancia del café en su máxima expresión. Una variedad delicada y exquisita, que conserva la dulzura natural del fruto en cada grano. El resultado es una taza vibrante, elegante y profundamente aromática. Panela y miel de caña, que aportan un dulzor redondo y envolvente. Frutos rojos maduros, como frambuesa y cereza, que despiertan los sentidos. Manzana verde y un toque floral sutil. Una acidez brillante y cítrica, equilibrada con una textura sedosa en boca. Este café no solo cuenta una historia de origen y cuidado, sino que entrega una experiencia refinada para los paladares más curiosos y sensibles. Tu Mañanero Bourbon Rosado Honey es el arte de lo artesanal, el lujo de lo natural, y la dulzura que solo la tierra sabe entregar. Vívelo. Siéntelo. Repítelo.",
  },
  {
    icon: FaTruck,
    title: "Entrega Fresca",
    description:
      "Nos aseguramos de que tu café llegue a tus manos con la máxima frescura, listo para ser disfrutado en la comodidad de tu hogar o donde prefieras.",
  },
];

const ProcessSection = () => {
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
          Nuestros Procesos
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processes.map((process, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-lg p-8 text-center shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.1 + 0.4, duration: 0.6 }}
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              }}
            >
              <motion.div
                className="text-5xl text-blue-600 mb-6 mx-auto"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1 + 0.6,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 200,
                }}
              >
                <process.icon className="mx-auto" />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {process.title}
              </h3>
              <p className="text-gray-600">{process.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ProcessSection;
