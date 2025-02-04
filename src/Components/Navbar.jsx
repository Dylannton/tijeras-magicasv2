import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../Assets/logo.png";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-purple-800/90 to-purple-600/90 shadow-lg z-50 transition-all duration-300 ease-in-out">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo + Nombre */}
                    <div className="flex items-center space-x-4">
                        <img
                            src={logo}
                            alt="Logo Tijeras Mágicas"
                            className="h-16 w-auto rounded-full transform transition-transform duration-300 hover:scale-110"
                        />
                        <h1 className="text-2xl font-bold text-white tracking-wide">
                            Tijeras Mágicas
                        </h1>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <ul className="flex space-x-6 text-lg">
                            <NavItem to="services" label="Servicios" />
                            <NavItem to="gallery" label="Galería" />
                            <NavItem to="contact" label="Contacto" />
                        </ul>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-white focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-purple-700/95 rounded-b-lg shadow-xl">
                            <MobileNavItem to="services" label="Servicios" toggleMenu={toggleMenu} />
                            <MobileNavItem to="gallery" label="Galería" toggleMenu={toggleMenu} />
                            <MobileNavItem to="contact" label="Contacto" toggleMenu={toggleMenu} />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

// Reusable Navigation Item Component for Desktop
const NavItem = ({ to, label }) => (
    <li>
        <Link
            to={to}
            smooth={true}
            duration={800} // Duración de la animación en milisegundos
            spy={true}
            offset={-80} // Ajuste para que el desplazamiento considere el navbar fijo
            className="text-white hover:text-purple-200 transition-colors duration-300 
                       relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 
                       after:h-0.5 after:bg-white after:transition-all after:duration-300 
                       hover:after:w-full cursor-pointer"
        >
            {label}
        </Link>
    </li>
);

// Reusable Navigation Item Component for Mobile
const MobileNavItem = ({ to, label, toggleMenu }) => (
    <Link
        to={to}
        smooth={true}
        duration={800}
        spy={true}
        offset={-80}
        onClick={toggleMenu} // Cierra el menú al hacer clic en un enlace
        className="text-white block px-3 py-2 rounded-md text-base font-medium 
                   hover:bg-purple-600 transition-colors duration-300 cursor-pointer"
    >
        {label}
    </Link>
);

