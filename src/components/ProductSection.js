import React from "react";
import { motion } from "framer-motion";

const products = [
  {
    name: "Variedad Castillo",
    description:
      "Una mezcla vibrante que destaca por sus notas profundas y complejas. Este café presenta sabores intensos de frutos rojos y un perfil vinoso, acompañados de toques dulces de panela y miel de panela. En boca, se perciben matices de caramelo, chocolate amargo, y una sutil frescura de manzana verde con un final cítrico refinado.",
    price: "$2",
    image: "/assets/IMG_01.jpg",
  },
  {
    name: "Variedad Borbón Rosado Honey",
    description:
      "Una experiencia delicada y elegante. Esta variedad ofrece un aroma floral marcado por jazmín, acompañado de notas cítricas brillantes y una acidez balanceada. Su perfil combina la dulzura de la miel con frutos rojos y un cuerpo sedoso, ideal para paladares que buscan una taza aromática, dulce y sofisticada.",
    price: "$4",
    image: "/assets/IMG_04.jpg",
  },
  ,
  {
    name: "Variedad Tabi",
    description:
      "Un café de perfil suave y balanceado, ideal para quienes buscan una taza armoniosa. Destaca por su delicado aroma floral, acompañado de una acidez media que realza las notas de frutos rojos. Su cuerpo ligero permite apreciar sutiles matices de caramelo y panela, brindando una experiencia dulce y refinada.",
    price: "$4",
    image: "/assets/IMG_11.jpg",
  },

];

const ProductSection = () => {
  const whatsappNumber = "573173743002"; //número de WhatsApp

  const handleOrderClick = (productName) => {
    const message = encodeURIComponent(
      `¡Hola! Me gustaría pedir un ${productName}.`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <motion.section
      className="py-20 bg-gray-100"
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
          Nuestros Productos
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.1 + 0.4, duration: 0.6 }}
              whileHover={{
                scale: 1.03,
                boxShadow:
                  "0 15px 20px -5px rgba(0, 0, 0, 0.1), 0 8px 8px -4px rgba(0, 0, 0, 0.04)",
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => handleOrderClick(product.name)}
                    className="px-5 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300"
                  >
                    Pedir
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ProductSection;
