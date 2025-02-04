import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Scissors, Clock, Star, Brush } from 'lucide-react';

const services = [
    {
        title: 'Lavado y peinado',
        price: '$16.000',
        description: 'Experiencia de lavado y peinado personalizada.',
        icon: 'sparkles',
        duration: '45 min'
    },
    {
        title: 'Corte y peinado',
        price: '$18.000',
        description: 'Cortes modernos y a la medida.',
        icon: 'scissors',
        duration: '60 min'
    },
    {
        title: 'Brushing',
        price: '$12.000',
        description: 'Alisa y da brillo a tu cabello.',
        icon: 'sparkles',
        duration: '30 min'
    },
    {
        title: 'Alisado Brasil Cacau',
        price: 'desde $59.900',
        description: 'Tratamiento de alisado de alta calidad.',
        icon: 'star',
        duration: '120 min'
    },
    {
        title: 'Mechitas',
        price: '$55.000',
        description: 'Reflejos y matices únicos.',
        icon: 'sparkles',
        duration: '90 min'
    },
    {
        title: 'Coloración Total',
        price: '$44.990',
        description: 'Cambio de color total con los mejores productos.',
        icon: 'star',
        duration: '120 min'
    },
    {
        title: 'Masajes Capilares',
        price: '$19.990',
        description: 'Relaja y nutre tu cuero cabelludo.',
        icon: 'sparkles',
        duration: '30 min'
    },
    {
        title: 'Ondulado Permanente',
        price: '$45.000',
        description: 'Consigue el look ondulado que siempre quisiste.',
        icon: 'star',
        duration: '90 min'
    }
];

const getIcon = (iconName) => {
    switch (iconName) {
        case 'scissors':
            return <Scissors className="w-6 h-6" />;
        case 'star':
            return <Star className="w-6 h-6" />;
        default:
            return <Sparkles className="w-6 h-6" />;
    }
};

export default function Services() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
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
        <section id="services" className="py-20 bg-gradient-to-b from-pink-50 to-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <Brush className="inline-block text-pink-500 mb-4" size={32} />
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        Nuestros Servicios
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Descubre nuestra gama completa de servicios diseñados para realzar tu belleza natural
                    </p>
                </div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group"
                        >
                            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 h-full flex flex-col">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-2 bg-pink-50 rounded-lg text-pink-500">
                                        {getIcon(service.icon)}
                                    </div>
                                    <div className="flex items-center text-gray-500 text-sm">
                                        <Clock className="w-4 h-4 mr-1" />
                                        {service.duration}
                                    </div>
                                </div>

                                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-pink-500 transition-colors">
                                    {service.title}
                                </h3>

                                <p className="text-gray-600 text-sm flex-grow">
                                    {service.description}
                                </p>

                                <div className="mt-4 pt-4 border-t border-gray-100">
                                    <p className="text-2xl font-bold text-purple-700 group-hover:text-purple-500">
                                        {service.price}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}