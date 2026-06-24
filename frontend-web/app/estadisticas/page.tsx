import { jugadores } from "../../data/jugadores";

export default function EstadisticasPage() {
  const ranking = [...jugadores].sort(
    (a, b) => b.horas - a.horas
  );

  return (
    <div className="p-8 text-white">
      <h1 className="text-4xl font-bold mb-8">
        📈 Estadísticas
      </h1>

      <div className="bg-zinc-900 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4">
          🏆 Ranking de actividad
        </h2>

        <div className="space-y-3">
          {ranking.map((jugador, index) => (
            <div
              key={jugador.nombre}
              className="flex justify-between border-b border-zinc-800 pb-2"
            >
              <span>
                #{index + 1} {jugador.nombre}
              </span>

              <span className="text-orange-400">
                {jugador.horas}h
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}