import { jugadores } from "../../data/jugadores";

export default function EstadisticasPage() {
  const ranking = [...jugadores].sort(
    (a, b) => b.horas - a.horas
  );

  const totalHoras = jugadores.reduce(
    (total, jugador) => total + jugador.horas,
    0
  );

  const totalConexiones = jugadores.reduce(
    (total, jugador) => total + jugador.conexiones,
    0
  );

  return (
    <div className="p-8 text-white">
      <h1 className="text-4xl font-bold mb-8">
        📈 Estadísticas
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-zinc-900 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-2">
            ⏱️ Horas Totales
          </h2>
          <p className="text-3xl">{totalHoras}h</p>
        </div>

        <div className="bg-zinc-900 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-2">
            🔌 Conexiones
          </h2>
          <p className="text-3xl">{totalConexiones}</p>
        </div>
      </div>

      <div className="bg-zinc-900 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4">
          🏆 Ranking de actividad
        </h2>

        <table className="w-full">
          <thead>
            <tr className="border-b border-zinc-800">
              <th className="text-left py-2">#</th>
              <th className="text-left py-2">Jugador</th>
              <th className="text-left py-2">Horas</th>
              <th className="text-left py-2">Conexiones</th>
            </tr>
          </thead>

          <tbody>
            {ranking.map((jugador, index) => (
              <tr key={jugador.nombre}>
                <td className="py-2">#{index + 1}</td>
                <td>{jugador.nombre}</td>
                <td>{jugador.horas}h</td>
                <td>{jugador.conexiones}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}