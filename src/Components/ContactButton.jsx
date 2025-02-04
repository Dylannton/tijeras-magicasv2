import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const ContactButton = () => {
    return (
        <a
            href="https://wa.me/935066528"
            className="fixed bottom-5 right-5 md:bottom-8 md:right-8 bg-green-500 text-white py-3 px-4 rounded-full 
            shadow-lg hover:bg-green-600 transition-colors duration-300 flex items-center space-x-2 z-50"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FaWhatsapp size={28} />
            <span className="hidden md:inline">WhatsApp</span>
        </a>
    );
};

export default ContactButton;
