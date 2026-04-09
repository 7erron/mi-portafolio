import Link from "next/link";

const fotos = [
  {
    id: "1",
    titulo: "Retrato urbano",
    categoria: "Retrato",
    descripcion: "Reunión amigos",
    imagen: "/imagenes/1.jpeg",
  },
  {
    id: "2",
    titulo: "Montaña",
    categoria: "Paisaje",
    descripcion: "Captura paisaje, cielo despejando",
    imagen: "/imagenes/2.jpeg",
  },
  {
    id: "3",
    titulo: "Paisaje natural",
    categoria: "Paisaje",
    descripcion: "Paseo por la tarde",
    imagen: "/imagenes/3.jpeg",
  },
];

export default function Proyectos() {
  return (
    <main className="min-h-screen bg-black text-white p-4">
      <h1 className="text-3xl font-bold mb-6">Galería</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
        {fotos.map((foto) => (
          <Link key={foto.id} href={`/proyectos/${foto.id}`}>
            <div className="relative cursor-pointer group">
              <img
                src={foto.imagen}
                alt={foto.titulo}
                className="w-full h-60 object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <p className="text-white text-sm">{foto.titulo}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}