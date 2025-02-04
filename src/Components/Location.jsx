import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const Location = () => {
    const [centerPosition, setCenterPosition] = useState([-33.2205074, -70.6829132]);

    // Personalizar el marcador
    const customMarkerIcon = L.icon({
        iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
        iconSize: [35, 45],
        iconAnchor: [17, 45],
    });

    const ResetMapView = () => {
        const map = useMap();
        map.setView(centerPosition, 15);
    };

    return (
        <section id="location" className="py-20 relative">
            {/* Asegurar que el navbar siempre esté visible */}
            <div className="fixed top-0 left-0 w-full z-50"></div>

            <div className="container mx-auto relative">
                <h2 className="text-3xl font-bold text-center mb-10 animate-fade-in">Ubicación y Horarios</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="animate-fade-in-up relative overflow-hidden rounded-lg shadow-md">
                        {/* Ajustamos el `z-index` para que el mapa no tape el navbar */}
                        <MapContainer center={centerPosition} zoom={15} className="h-96 rounded-lg relative z-10">
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            />
                            <Marker position={centerPosition} icon={customMarkerIcon}>
                                <Popup>
                                    📍 <b>Tijeras Mágicas</b> <br />
                                    185 El Potrerillo, Colina <br />
                                    Región Metropolitana, Chile
                                </Popup>
                            </Marker>
                            <ResetMapView />
                        </MapContainer>
                    </div>
                    <div className="bg-white shadow-md p-6 rounded-lg animate-fade-in-up delay-200">
                        <h3 className="text-xl font-semibold mb-4">Horarios de Atención</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li> 📍 185 El Potrerillo, Colina, Región Metropolitana</li>
                            <li>Lunes a Viernes: 9:00 am - 7:00 pm</li>
                            <li>Sábados: 9:00 am - 5:00 pm</li>
                            <li>Domingos: Cerrado</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-6 text-center animate-fade-in-up delay-200">
                    <button
                        onClick={() => setCenterPosition([-33.2205074, -70.6829132])}
                        className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-lg transition-colors duration-300"
                    >
                        Volver a la ubicación de Tijeras Mágicas
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Location;
