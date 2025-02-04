import React from 'react';
import { motion } from 'framer-motion';
import { Scissors } from 'lucide-react';
import corte1 from "../Assets/Images/Corte-1.png";
import corte2 from "../Assets/Images/Corte-2.png";
import corte3 from "../Assets/Images/Corte-3.png";
import corte4 from "../Assets/Images/Corte-4.png";

const Gallery = () => {
    const images = [
        { src: corte1, title: "Corte Moderno", description: "Estilo contemporáneo que realza tu belleza natural" },
        { src: corte2, title: "Peinado Elegante", description: "Perfecto para ocasiones especiales" },
        { src: corte3, title: "Color Vibrante", description: "Coloración profesional que resalta tu personalidad" },
        { src: corte4, title: "Tratamiento Spa", description: "Cuida y revitaliza tu cabello" }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <section id="gallery" className="py-20 bg-gradient-to-b from-pink-50 to-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <Scissors className="inline-block text-pink-500 mb-4" size={32} />
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        Nuestra Galería de Estilos
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Descubre nuestra colección de transformaciones y estilos únicos creados con pasión y expertise profesional
                    </p>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            className="group relative"
                            variants={itemVariants}
                            whileHover={{
                                rotate: [-1, 1],
                                transition: {
                                    duration: 0.2,
                                    repeatType: "reverse"
                                }
                            }}
                        >
                            <div className="relative bg-white p-4 rounded-sm shadow-lg transform transition-transform duration-300 hover:-translate-y-2">
                                {/* Marco blanco estilo Polaroid */}
                                <div className="relative">
                                    <div className="aspect-[4/5] overflow-hidden">
                                        <img
                                            src={img.src}
                                            alt={img.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    {/* Overlay con información */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                        <div className="p-4 text-white">
                                            <h3 className="text-xl font-semibold mb-2">{img.title}</h3>
                                            <p className="text-sm opacity-90">{img.description}</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Sombra inferior para efecto 3D */}
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/5 to-transparent rounded-b-sm"></div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Gallery;