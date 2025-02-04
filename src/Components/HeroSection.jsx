import React from 'react';
import { Link } from 'react-scroll';
import heroBg from "../Assets/navbar-bg.jpg";

export default function HeroSection() {
    return (
        <section
            className="relative min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-center px-6"
            style={{ backgroundImage: `url(${heroBg})`, paddingTop: "5rem" }} // Ajusta el espacio para el navbar
        >
            {/* Capa de superposición oscura para mejorar la legibilidad */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Contenido del Hero */}
            <div className="relative z-10 text-white max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight animate-fade-in-up">
                    Eleva tu estilo, resalta tu esencia
                </h1>
                <p className="text-lg md:text-xl mt-4 animate-fade-in-up delay-100">
                    En <span className="font-semibold">Tijeras Mágicas</span>, transformamos tu look con la mejor asesoría,
                    productos de alta calidad y un servicio personalizado que realza tu belleza.
                </p>

                {/* Botón de acción con scroll suave */}
                <Link
                    to="booking"
                    smooth={true}
                    duration={200}
                    offset={-80} // Ajusta la posición después de hacer scroll
                    className="mt-6 inline-block bg-purple-700 hover:bg-purple-600 text-white py-3 px-6 rounded-lg 
                    text-lg font-semibold transition duration-300 shadow-md hover:shadow-lg animate-fade-in-up cursor-pointer"
                >
                    Agendar Cita
                </Link>
            </div>
        </section>
    );
}
