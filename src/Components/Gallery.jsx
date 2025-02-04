import React from "react";
import corte1 from "../Assets/Images/Corte-1.png";
import corte2 from "../Assets/Images/Corte-2.png";
import corte3 from "../Assets/Images/Corte-3.png";

const images = [corte1, corte2, corte3]; // Lista de imágenes

export default function Gallery() {
    return (
        <section id="gallery" className="py-20">
            <h2 className="text-3xl font-bold text-center mb-10">Galería</h2>
            <div className="container mx-auto flex flex-wrap justify-center">
                {images.map((img, index) => (
                    <img key={index} src={img} alt={`Galería ${index}`} className="m-4 w-64 h-64 object-cover rounded-lg shadow-md" />
                ))}
            </div>
        </section>
    );
}
