import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import heroBg from "../Assets/navbar-bg.jpg";
import logo from "../Assets/logo.png";

export default function HeroSection() {
    return (
        <section
            className="relative min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-center px-6"
            style={{ backgroundImage: `url(${heroBg})`, paddingTop: "5rem" }} // Ajusta el espacio para el navbar
        >
            {/* Capa de superposición oscura para mejorar la legibilidad */}
            <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

            {/* Contenido del Hero */}
            <motion.img
                src={logo}
                alt="Logo Tijeras Mágicas"
                className="mt-3 mb-3 h-60 relative z-20" // Asegura que el logo esté por encima de la capa oscura
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            />

            <div className="relative z-10 text-white max-w-3xl">
                <motion.h1
                    className="text-4xl md:text-6xl font-extrabold leading-tight"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    Eleva tu estilo, resalta tu esencia
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl mt-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    En <span className="font-semibold">Tijeras Mágicas</span>, transformamos tu look con la mejor asesoría,
                    productos de alta calidad y un servicio personalizado que realza tu belleza.
                </motion.p>

                {/* Botón de acción con animación y scroll suave */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.9 }}
                >
                    <Link
                        to="booking"
                        smooth={true}
                        duration={800} // Ajusta el tiempo del scroll
                        offset={-80} // Ajusta la posición después de hacer scroll
                        className="mt-6 mb-6 inline-block bg-purple-700 hover:bg-purple-600 text-white py-3 px-6 rounded-lg 
                        text-lg font-semibold transition duration-300 shadow-md hover:shadow-lg cursor-pointer"
                    >
                        Agendar Cita
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
