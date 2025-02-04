import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Calendar, User, Mail, Check, AlertTriangle } from "lucide-react";

const services = [
    "Lavado y peinado",
    "Corte y peinado",
    "Brushing",
    "Alisado Brasil Cacau",
    "Mechitas",
    "Coloración Total",
    "Masajes Capilares",
    "Ondulado Permanente",
];

export default function BookingForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        service: "",
        date: "",
    });
    const [status, setStatus] = useState({
        type: null,
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear any previous status when user starts typing
        if (status.type) setStatus({ type: null, message: "" });
    };

    const validateForm = () => {
        const today = new Date().toISOString().split('T')[0];
        if (formData.date < today) {
            setStatus({
                type: "error",
                message: "Por favor, selecciona una fecha futura"
            });
            return false;
        }
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Reset status
        setStatus({ type: null, message: "" });

        // Validate form
        if (!validateForm()) return;

        // Disable submit button during submission
        e.target.querySelector('button').disabled = true;

        emailjs.send(
            "service_syw6x7p",
            "template_8zd75os",
            {
                name: formData.name,
                email: formData.email,
                service: formData.service,
                date: formData.date,
            },
            "5QZfZD7UCJ3YxoQhg"
        )
            .then((response) => {
                setStatus({
                    type: "success",
                    message: "¡Reserva enviada con éxito! Te contactaremos pronto."
                });
                setFormData({ name: "", email: "", service: "", date: "" });
                e.target.querySelector('button').disabled = false;
            })
            .catch((error) => {
                setStatus({
                    type: "error",
                    message: "Hubo un problema al enviar la reserva. Por favor, intenta de nuevo."
                });
                console.error("Error:", error);
                e.target.querySelector('button').disabled = false;
            });
    };

    return (
        <section id="booking" className="py-20 bg-gradient-to-br from-purple-50 to-purple-100">
            <div className="container mx-auto max-w-lg bg-white shadow-xl p-8 rounded-2xl border border-purple-100">
                <h2 className="text-4xl font-extrabold text-center mb-8 text-purple-800">Reserva tu Cita</h2>

                {/* Status Message */}
                {status.type && (
                    <div className={`
                        mb-4 p-3 rounded-lg flex items-center 
                        ${status.type === 'success'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'}
                    `}>
                        {status.type === 'success'
                            ? <Check className="mr-2" />
                            : <AlertTriangle className="mr-2" />}
                        {status.message}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Nombre */}
                    <div className="relative">
                        <label className="block text-gray-700 font-semibold mb-2">
                            <User className="inline-block mr-2 text-purple-500" /> Nombre
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Tu nombre completo"
                            className="w-full border-2 border-purple-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 pl-10"
                        />
                        <User className="absolute left-3 top-12 text-gray-400" />
                    </div>

                    {/* Email */}
                    <div className="relative">
                        <label className="block text-gray-700 font-semibold mb-2">
                            <Mail className="inline-block mr-2 text-purple-500" /> Correo Electrónico
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="ejemplo@correo.com"
                            className="w-full border-2 border-purple-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 pl-10"
                        />
                        <Mail className="absolute left-3 top-12 text-gray-400" />
                    </div>

                    {/* Servicio */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                            <Check className="inline-block mr-2 text-purple-500" /> Servicio
                        </label>
                        <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            required
                            className="w-full border-2 border-purple-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                        >
                            <option value="">Selecciona un servicio</option>
                            {services.map((service, index) => (
                                <option key={index} value={service}>
                                    {service}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Fecha */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                            <Calendar className="inline-block mr-2 text-purple-500" /> Fecha
                        </label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                            min={new Date().toISOString().split('T')[0]}
                            className="w-full border-2 border-purple-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                        />
                    </div>

                    {/* Botón de Envío */}
                    <button
                        type="submit"
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Confirmar Reserva
                    </button>
                </form>
            </div>
        </section>
    );
}