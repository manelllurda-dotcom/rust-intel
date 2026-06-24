import { jugadores } from "../../data/jugadores";

export default function JugadoresPage() {
  return (
    <div className="p-8 text-white">
      <h1 className="text-4xl font-bold mb-8">
        👥 Jugadores
      </h1>

      <input
        type="text"
        placeholder="Buscar jugador..."
        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 mb-6"
      />

      <div className="bg-zinc-900 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-zinc-800">
            <tr>
              <th className="text-left p-4">Nombre</th>
              <th className="text-left p-4">Estado</th>
              <th className="text-left p-4">Clan</th>
              <th className="text-left p-4">Favorito</th>
            </tr>
          </thead>

          <tbody>
            {jugadores.map((jugador) => (
              <tr
                key={jugador.nombre}
                className="border-t border-zinc-800"
              >
                <td className="p-4">{jugador.nombre}</td>

                <td
                  className={`p-4 ${
                    jugador.online
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {jugador.online ? "Online" : "Offline"}
                </td>

                <td className="p-4">{jugador.clan}</td>

                <td className="p-4">
                  {jugador.favorito ? "⭐" : "☆"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}