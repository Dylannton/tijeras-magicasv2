import React from 'react';

const services = [
    {
        title: 'Lavado y peinado',
        price: '$16.000',
        description: 'Experiencia de lavado y peinado personalizada.'
    },
    {
        title: 'Corte y peinado',
        price: '$18.000',
        description: 'Cortes modernos y a la medida.'
    },
    {
        title: 'Brushing',
        price: '$12.000',
        description: 'Alisa y da brillo a tu cabello.'
    },
    {
        title: 'Alisado Brasil Cacau',
        price: 'desde $59.900',
        description: 'Tratamiento de alisado de alta calidad.'
    },
    {
        title: 'Mechitas',
        price: '$55.000',
        description: 'Reflejos y matices únicos.'
    },
    {
        title: 'Coloración Total',
        price: '$44.990',
        description: 'Cambio de color total con los mejores productos.'
    },
    {
        title: 'Masajes Capilares',
        price: '$19.990',
        description: 'Relaja y nutre tu cuero cabelludo.'
    },
    {
        title: 'Ondulado Permanente',
        price: '$45.000',
        description: 'Consigue el look ondulado que siempre quisiste.'
    }
];

export default function Services() {
    return (
        <section id="services" className="py-20 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10 animate-fade-in">Nuestros Servicios</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fade-in-up">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md p-6 rounded-lg transform transition-transform duration-300 hover:scale-105"
                        >
                            <h3 className="text-xl font-semibold">{service.title}</h3>
                            <p className="text-gray-600 mt-2">{service.description}</p>
                            <p className="text-purple-500 font-bold mt-4">{service.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}