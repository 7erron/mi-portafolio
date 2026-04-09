"use client";

import { useParams } from "next/navigation";
import Image from "next/image";

const fotos = [
  {
    id: "1",
    titulo: "Retrato urbano",
    descripcion: "Retrato con luz natural y enfoque en expresión.",
    imagen: "/imagenes/1.jpeg",
  },
  {
    id: "2",
    titulo: "Paisaje montaña",
    descripcion: "Captura de paisaje en luz dorada.",
    imagen: "/imagenes/2.jpeg",
  },
  {
    id: "3",
    titulo: "Paisaje montaña",
    descripcion: "Captura de paisaje en luz dorada.",
    imagen: "/imagenes/3.jpeg",
  },
];

export default function ProyectoDetalle() {
  const params = useParams();
  const foto = fotos.find((f) => f.id === params.id);

  if (!foto) {
    return <div className="text-white p-4">Imagen no encontrada</div>;
  }

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-5xl">
        <Image
          src={foto.imagen}
          alt={foto.titulo}
          width={1200}
          height={800}
          className="w-full h-auto object-contain"
        />

        <div className="mt-4">
          <h1 className="text-2xl font-semibold">{foto.titulo}</h1>
          <p className="text-gray-400 mt-2">{foto.descripcion}</p>
        </div>
      </div>
    </main>
  );
}