import Link from "next/link";

const fotos = [
  {
    id: "1",
    titulo: "Retrato urbano",
    imagen: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  },
  {
    id: "2",
    titulo: "Montaña",
    imagen: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  },
  {
    id: "3",
    titulo: "Paisaje natural",
    imagen: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
];

export default function Proyectos() {
  return (
    <main className="min-h-screen bg-black text-white p-4">
      <h1 className="text-3xl font-bold mb-6">Galería</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {fotos.map((foto) => (
          <Link key={foto.id} href={`/proyectos/${foto.id}`}>
            <div className="relative cursor-pointer group">
              <img
                src={foto.imagen}
                alt={foto.titulo}
                className="w-full h-60 object-cover"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <p className="text-white text-sm">{foto.titulo}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}