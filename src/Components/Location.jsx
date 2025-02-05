import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { MapPin, Clock } from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const Location = () => {
    const [centerPosition] = useState([-33.2205074, -70.6829132]);

    // Personalizar el marcador
    const customMarkerIcon = L.icon({
        iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
        iconSize: [35, 45],
        iconAnchor: [17, 45],
    });

    // Botón para centrar el mapa (posición arriba)
    const RecenterButton = () => {
        const map = useMap();

        return (
            <button
                onClick={() => map.setView(centerPosition, 15)}
                className="absolute top-4 right-4 bg-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 z-[400] flex items-center space-x-2"
            >
                <MapPin className="w-4 h-4 text-pink-500" />
                <span>Centrar mapa</span>
            </button>
        );
    };

    // Mantener el mapa centrado
    const ResetMapView = () => {
        const map = useMap();
        map.setView(centerPosition, 15);
        return null;
    };

    return (
        <section id="location" className="py-20 bg-gradient-to-b from-gray-50 to-white relative z-10">
            <div className="container mx-auto px-4">
                {/* Navbar asegurado con un z-index alto */}
                <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50"></div>

                <div className="text-center mb-16">
                    <MapPin className="inline-block text-purple-500 mb-4" size={32} />
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        Ubicación y Horarios
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Encuentra nuestro salón en una ubicación conveniente y conoce nuestros horarios de atención.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    {/* Mapa ocupa 3 columnas en desktop */}
                    <div className="lg:col-span-3 relative">
                        <div className="bg-white rounded-xl shadow-md p-4 h-full">
                            <div className="relative h-[400px] rounded-lg overflow-hidden z-0">
                                <MapContainer
                                    center={centerPosition}
                                    zoom={15}
                                    className="h-full w-full rounded-lg"
                                    zoomControl={false}
                                >
                                    <TileLayer
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                                    />
                                    <Marker position={centerPosition} icon={customMarkerIcon}>
                                        <Popup className="custom-popup">
                                            <div className="font-semibold">Tijeras Mágicas</div>
                                            <div className="text-sm">185 El Potrerillo, Colina</div>
                                            <div className="text-sm">Región Metropolitana, Chile</div>
                                        </Popup>
                                    </Marker>
                                    <ResetMapView />
                                    <RecenterButton />
                                </MapContainer>
                            </div>
                        </div>
                    </div>

                    {/* Información ocupa 2 columnas en desktop */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-xl shadow-md p-8 h-full">
                            <div className="space-y-8">
                                {/* Dirección */}
                                <div className="flex items-start space-x-4">
                                    <div className="p-2 bg-pink-50 rounded-lg text-pink-500">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800 mb-2">Dirección</h3>
                                        <p className="text-gray-600">
                                            185 El Potrerillo, Colina<br />
                                            Región Metropolitana, Chile
                                        </p>
                                    </div>
                                </div>

                                {/* Horarios */}
                                <div className="flex items-start space-x-4">
                                    <div className="p-2 bg-pink-50 rounded-lg text-pink-500">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800 mb-2">Horarios de Atención</h3>
                                        <ul className="text-gray-600 space-y-1">
                                            <li>Lunes a Viernes: 9:00 am - 7:00 pm</li>
                                            <li>Sábados: 9:00 am - 5:00 pm</li>
                                            <li>Domingos: Cerrado</li>
                                        </ul>
                                    </div>
                                </div>
                                <button
                                    className="w-full bg-purple-700 hover:bg-purple-600 text-white py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
                                    onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${centerPosition[0]},${centerPosition[1]}`, '_blank')}
                                >
                                    <MapPin size={20} />
                                    <span>Cómo llegar</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;
