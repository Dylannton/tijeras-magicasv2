import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            "service_syw6x7p", // Reemplaza con tu Service ID
            "template_u3hk5u5", // Reemplaza con tu Template ID
            {
                user_name: formData.name,
                user_email: formData.email,
                user_phone: formData.phone,
                user_message: formData.message,
            },
            "5QZfZD7UCJ3YxoQhg" // Reemplaza con tu Public Key
        )
            .then(() => {
                alert("Mensaje enviado con éxito 🎉");
                setFormData({ name: "", email: "", phone: "", message: "" });
            })
            .catch((error) => {
                alert("Hubo un error al enviar el mensaje 😞");
                console.error("Error:", error);
            });
    };

    return (
        <section id="contact" className="py-20 bg-black text-white">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6 italic">Contáctanos</h2>

                {/* Información de Contacto */}
                <div className="mb-8">
                    <p className="text-lg"><FaEnvelope className="inline mr-2" /> salontijerasmagicas@gmail.com</p>
                    <p className="text-lg"><FaWhatsapp className="inline mr-2" /> +56 9 3506 6528</p>
                </div>

                {/* Formulario de Contacto */}
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Nombre *"
                        required
                        className="w-full p-2 bg-black border border-white text-white rounded-lg focus:ring-2 focus:ring-purple-500"
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email *"
                        required
                        className="w-full p-2 bg-black border border-white text-white rounded-lg focus:ring-2 focus:ring-purple-500"
                    />
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Teléfono *"
                        required
                        className="w-full p-2 bg-black border border-white text-white rounded-lg focus:ring-2 focus:ring-purple-500"
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Mensaje *"
                        required
                        className="w-full p-2 bg-black border border-white text-white rounded-lg focus:ring-2 focus:ring-purple-500 col-span-2"
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full md:w-auto px-6 py-2 bg-white text-black font-semibold rounded-lg transition hover:bg-gray-300"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </section>
    );
}
