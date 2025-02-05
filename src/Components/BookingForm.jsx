import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Calendar as CalendarIcon, User, Mail, Check, AlertTriangle, Clock, ChevronLeft, ChevronRight, Scissors } from "lucide-react";

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

const timeSlots = [
    "09:00", "10:00", "11:00", "12:00",
    "14:00", "15:00", "16:00", "17:00"
];

export default function BookingForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        service: "",
        date: "",
        time: ""
    });
    const [status, setStatus] = useState({
        type: null,
        message: ""
    });
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [showMobileCalendar, setShowMobileCalendar] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
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
        setStatus({ type: null, message: "" });
        if (!validateForm()) return;
        e.target.querySelector('button[type="submit"]').disabled = true;

        emailjs.send(
            "service_syw6x7p",
            "template_8zd75os",
            {
                ...formData,
                dateTime: `${formData.date} ${formData.time}`
            },
            "5QZfZD7UCJ3YxoQhg"
        )
            .then(() => {
                setStatus({
                    type: "success",
                    message: "¡Reserva enviada con éxito! Te contactaremos pronto."
                });
                setFormData({ name: "", email: "", service: "", date: "", time: "" });
                e.target.querySelector('button[type="submit"]').disabled = false;
            })
            .catch((error) => {
                setStatus({
                    type: "error",
                    message: "Hubo un problema al enviar la reserva. Por favor, intenta de nuevo."
                });
                console.error("Error:", error);
                e.target.querySelector('button[type="submit"]').disabled = false;
            });
    };

    const getDaysInMonth = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDayOfMonth = new Date(year, month, 1).getDay();

        const days = [];
        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push(null);
        }

        for (let i = 1; i <= daysInMonth; i++) {
            days.push(new Date(year, month, i));
        }

        return days;
    };

    const handleDateSelect = (date) => {
        if (date) {
            const formattedDate = date.toISOString().split('T')[0];
            setFormData(prev => ({ ...prev, date: formattedDate }));
            setShowMobileCalendar(false);
        }
    };

    const isDateDisabled = (date) => {
        if (!date) return true;
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return date < today;
    };

    const Calendar = () => (
        <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-purple-800 capitalize">
                    {currentMonth.toLocaleString('es', { month: 'long', year: 'numeric' })}
                </h3>
                <div className="flex gap-2">
                    <button
                        onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                        className="p-2 rounded-lg hover:bg-purple-100 transition-colors"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                        className="p-2 rounded-lg hover:bg-purple-100 transition-colors"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-7 gap-2 mb-2">
                {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map(day => (
                    <div key={day} className="text-center text-sm font-medium text-purple-600">
                        {day}
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-7 gap-2">
                {getDaysInMonth(currentMonth).map((date, index) => (
                    <button
                        key={index}
                        onClick={() => handleDateSelect(date)}
                        disabled={isDateDisabled(date)}
                        className={`
                            p-2 rounded-lg text-center transition-all duration-300
                            ${!date ? 'invisible' : ''}
                            ${isDateDisabled(date) ? 'text-gray-400 cursor-not-allowed' : 'hover:bg-purple-200'}
                            ${formData.date === date?.toISOString().split('T')[0] ? 'bg-purple-600 text-white' : ''}
                        `}
                    >
                        {date?.getDate()}
                    </button>
                ))}
            </div>
        </div>
    );

    return (
        <section id="booking" className="min-h-screen py-12 md:py-20 bg-gradient-to-br from-gray-50 to-pink-300/60">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Scissors className="inline-block text-purple-500 mb-4" size={32} />
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">
                            Reserva tu Cita
                        </h2>
                        <p className="text-gray-600">Selecciona el servicio y horario que mejor se adapte a ti</p>
                    </div>

                    <div className="bg-white shadow-2xl rounded-3xl overflow-hidden">
                        <div className="lg:grid lg:grid-cols-5 gap-0">
                            {/* Formulario - 3 columnas en desktop */}
                            <div className="lg:col-span-3 p-8">
                                {status.type && (
                                    <div className={`
                                        mb-6 p-4 rounded-xl flex items-center animate-fade-in
                                        ${status.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}
                                    `}>
                                        {status.type === 'success' ? <Check className="mr-2" /> : <AlertTriangle className="mr-2" />}
                                        {status.message}
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        {/* Nombre */}
                                        <div className="relative group">
                                            <label className="block text-gray-700 font-medium mb-2">
                                                <User className="inline-block mr-2 text-purple-500" size={18} />
                                                Nombre
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                placeholder="Tu nombre completo"
                                                className="w-full border-2 border-purple-100 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                                            />
                                        </div>

                                        {/* Email */}
                                        <div className="relative group">
                                            <label className="block text-gray-700 font-medium mb-2">
                                                <Mail className="inline-block mr-2 text-purple-500" size={18} />
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                placeholder="ejemplo@correo.com"
                                                className="w-full border-2 border-purple-100 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                                            />
                                        </div>
                                    </div>

                                    {/* Servicio */}
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">
                                            <Check className="inline-block mr-2 text-purple-500" size={18} />
                                            Servicio
                                        </label>
                                        <select
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            required
                                            className="w-full border-2 border-purple-100 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                                        >
                                            <option value="">Selecciona un servicio</option>
                                            {services.map((service, index) => (
                                                <option key={index} value={service}>{service}</option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Fecha para móvil */}
                                    <div className="lg:hidden">
                                        <label className="block text-gray-700 font-medium mb-2">
                                            <CalendarIcon className="inline-block mr-2 text-purple-500" size={18} />
                                            Fecha
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                value={formData.date ? new Date(formData.date).toLocaleDateString() : ''}
                                                onClick={() => setShowMobileCalendar(!showMobileCalendar)}
                                                readOnly
                                                placeholder="Selecciona una fecha"
                                                className="w-full border-2 border-purple-100 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 cursor-pointer"
                                            />
                                            {showMobileCalendar && (
                                                <div className="absolute z-50 mt-2 w-full">
                                                    <Calendar />
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Horarios */}
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">
                                            <Clock className="inline-block mr-2 text-purple-500" size={18} />
                                            Horario
                                        </label>
                                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                            {timeSlots.map((time, index) => (
                                                <button
                                                    key={index}
                                                    type="button"
                                                    onClick={() => setFormData(prev => ({ ...prev, time }))}
                                                    className={`p-3 rounded-xl border-2 transition-all duration-300 ${formData.time === time
                                                        ? 'bg-purple-600 text-white border-purple-600'
                                                        : 'border-purple-100 hover:border-purple-300'
                                                        }`}
                                                >
                                                    {time}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-6 rounded-xl transition duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                                    >
                                        Confirmar Reserva
                                    </button>
                                </form>
                            </div>

                            {/* Calendario - 2 columnas en desktop */}
                            <div className="hidden lg:block lg:col-span-2 bg-purple-50 p-8">
                                <h3 className="text-lg font-semibold text-purple-800 mb-4 flex items-center gap-2">
                                    <CalendarIcon className="text-purple-500" size={20} />
                                    Selecciona una fecha
                                </h3>
                                <Calendar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}