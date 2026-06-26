import { jugadores } from "../data/jugadores";
import { clanes } from "../data/clanes";

export default function Home() {
  const jugadoresOnline = jugadores.filter(
    (jugador) => jugador.online
  ).length;

  const favoritos = jugadores.filter(
    (jugador) => jugador.favorito
  ).length;

  const vigilados = jugadores.filter(
    (jugador) => jugador.vigilado
  ).length;

  const clanesActivos = clanes.filter(
    (clan) => clan.online > 0
  ).length;

  const topJugadores = [...jugadores]
    .sort((a, b) => b.horas - a.horas)
    .slice(0, 3);

  const topClanes = [...clanes]
    .sort((a, b) => b.online - a.online)
    .slice(0, 3);

  return (
    <main className="p-8 text-white">
      <h1 className="text-4xl font-bold mb-8">
        📊 Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h2 className="text-zinc-400">👥 Jugadores</h2>
          <p className="text-3xl font-bold mt-2">{jugadores.length}</p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h2 className="text-zinc-400">🟢 Online</h2>
          <p className="text-3xl font-bold mt-2 text-green-400">
            {jugadoresOnline}
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h2 className="text-zinc-400">🏷️ Clanes</h2>
          <p className="text-3xl font-bold mt-2">{clanes.length}</p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h2 className="text-zinc-400">🔥 Activos</h2>
          <p className="text-3xl font-bold mt-2 text-orange-400">
            {clanesActivos}
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h2 className="text-zinc-400">⭐ Favoritos</h2>
          <p className="text-3xl font-bold mt-2 text-yellow-400">
            {favoritos}
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h2 className="text-zinc-400">🎯 Vigilados</h2>
          <p className="text-3xl font-bold mt-2 text-red-400">
            {vigilados}
          </p>
        </div>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

        <div className="bg-zinc-900 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            🏆 Top jugadores por horas
          </h2>

          {topJugadores.map((jugador, index) => (
            <div
              key={jugador.nombre}
              className="flex justify-between border-b border-zinc-800 py-3"
            >
              <span>
                {index + 1}. {jugador.nombre}
              </span>

              <span className="text-orange-400">
                {jugador.horas} h
              </span>
            </div>
          ))}
        </div>

        <div className="bg-zinc-900 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            🏷️ Clanes más activos
          </h2>

          {topClanes.map((clan, index) => (
            <div
              key={clan.nombre}
              className="flex justify-between border-b border-zinc-800 py-3"
            >
              <span>
                {index + 1}. {clan.nombre}
              </span>

              <span className="text-green-400">
                {clan.online} online
              </span>
            </div>
          ))}
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