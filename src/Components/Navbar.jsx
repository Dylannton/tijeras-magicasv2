import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Scissors, MapPin, Image, Phone, Calendar, Menu, X } from "lucide-react";
import logo from "../Assets/logo.png";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navItems = [
        { to: "services", label: "Servicios", icon: Scissors },
        { to: "gallery", label: "Galería", icon: Image },
        { to: "booking", label: "Reserva", icon: Calendar },
        { to: "location", label: "Ubicación", icon: MapPin },
        { to: "contact", label: "Contacto", icon: Phone },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
                ? 'bg-gradient-to-r from-purple-800/95 to-purple-600/95 shadow-lg backdrop-blur-sm'
                : 'bg-transparent'
            }`}>
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo + Nombre */}
                    <Link
                        to="home"
                        smooth={true}
                        duration={800}
                        className="flex items-center space-x-4 cursor-pointer group"
                    >
                        <img
                            src={logo}
                            alt="Logo Tijeras Mágicas"
                            className="h-16 w-auto rounded-full transform transition-transform duration-300 group-hover:scale-110"
                        />
                        <h1 className="text-2xl font-bold text-white tracking-wide">
                            Tijeras Mágicas
                        </h1>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <ul className="flex items-center space-x-1">
                            {navItems.map((item) => (
                                <NavItem
                                    key={item.to}
                                    to={item.to}
                                    label={item.label}
                                    icon={item.icon}
                                />
                            ))}
                        </ul>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors cursor-pointer"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                    }`}>
                    <div className="px-2 py-3 space-y-1 bg-gradient-to-r from-purple-800/95 to-purple-600/95 backdrop-blur-sm rounded-xl shadow-xl mb-2">
                        {navItems.map((item) => (
                            <MobileNavItem
                                key={item.to}
                                to={item.to}
                                label={item.label}
                                icon={item.icon}
                                toggleMenu={toggleMenu}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}

const NavItem = ({ to, label, icon: Icon }) => (
    <li>
        <Link
            to={to}
            smooth={true}
            duration={800}
            spy={true}
            offset={-80}
            className="flex items-center px-3 py-2 rounded-lg text-sm font-medium text-white hover:bg-white/10 transition-all duration-300 group cursor-pointer"
        >
            <Icon
                size={18}
                className="mr-1.5 transition-transform duration-300 group-hover:scale-110 text-purple-200"
            />
            <span className="relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
                {label}
            </span>
        </Link>
    </li>
);

const MobileNavItem = ({ to, label, icon: Icon, toggleMenu }) => (
    <Link
        to={to}
        smooth={true}
        duration={800}
        spy={true}
        offset={-80}
        onClick={toggleMenu}
        className="flex items-center px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-all duration-300 cursor-pointer"
    >
        <Icon size={18} className="mr-2 text-purple-200" />
        <span className="font-medium">{label}</span>
    </Link>
);