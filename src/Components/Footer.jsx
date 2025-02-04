import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="flex space-x-4 mb-4 md:mb-0">
                    <a href="https://www.facebook.com" className="text-white hover:text-gray-400 transition-colors duration-300">
                        <FaFacebookF size={24} />
                    </a>
                    <a href="https://www.instagram.com" className="text-white hover:text-gray-400 transition-colors duration-300">
                        <FaInstagram size={24} />
                    </a>
                    <a href="https://www.twitter.com" className="text-white hover:text-gray-400 transition-colors duration-300">
                        <FaTwitter size={24} />
                    </a>
                </div>
                <p className="text-gray-400 text-sm">
                    &copy; 2023 Tijeras Mágicas. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
};

export default Footer;