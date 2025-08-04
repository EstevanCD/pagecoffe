import React from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import GallerySection from "./components/GallerySection";
import ProductSection from "./components/ProductSection";
import ProcessSection from "./components/ProcessSection";

export default function App() {
  return (
    <div className="font-sans antialiased">
      <HeroSection />
      <AboutSection />
      <ProductSection />
      <ProcessSection />
      <GallerySection />
      {/* Aquí podrías añadir más secciones como menú, contacto, etc. */}
    </div>
  );
}
