export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-4xl font-bold mb-4">
        Hola, soy Rondy 👋
      </h1>

      <p className="text-lg text-gray-400 mb-6">
        Desarrollador Full Stack en formación
      </p>

      <button className="bg-white text-black px-6 py-2 rounded-xl hover:scale-105 transition">
        Ver proyectos
      </button>
    </main>
  );
}