export default function Proyectos() {
  const proyectos = [
    { id: 1, nombre: "Proyecto 1" },
    { id: 2, nombre: "Proyecto 2" },
    { id: 3, nombre: "Proyecto 3" },
  ];

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Mis Proyectos</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {proyectos.map((p) => (
          <div
            key={p.id}
            className="bg-gray-900 p-4 rounded-xl hover:scale-105 transition cursor-pointer"
          >
            <h2 className="text-xl">{p.nombre}</h2>
          </div>
        ))}
      </div>
    </main>
  );
}