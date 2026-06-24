export default function Home() {
  return (
    <main className="p-8 text-white">
      <h1 className="text-4xl font-bold mb-8">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-zinc-900 p-6 rounded-xl">
          <h2 className="text-zinc-400">Jugadores Online</h2>
          <p className="text-3xl font-bold mt-2">0</p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h2 className="text-zinc-400">Clanes Vigilados</h2>
          <p className="text-3xl font-bold mt-2">0</p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h2 className="text-zinc-400">Eventos Activos</h2>
          <p className="text-3xl font-bold mt-2">0</p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h2 className="text-zinc-400">Alertas</h2>
          <p className="text-3xl font-bold mt-2">0</p>
        </div>
      </div>

      <div className="mt-8 bg-zinc-900 rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-4">
          Bienvenido a Rust Intel
        </h2>

        <p className="text-zinc-400">
          Centro de inteligencia para Rust.
        </p>
      </div>
    </main>
  );
}