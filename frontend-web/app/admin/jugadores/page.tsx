import Link from "next/link";
import { jugadores } from "../../../data/jugadores";

export default function AdminJugadoresPage() {
  return (
    <div className="p-8 text-white">
      <h1 className="text-4xl font-bold mb-8">
        👥 Gestión de Jugadores
      </h1>

      <div className="space-y-4">
        {jugadores.map((jugador) => (
          <div
            key={jugador.nombre}
            className="bg-zinc-900 rounded-xl p-4 flex justify-between items-center"
          >
            <div>
              <h2 className="font-bold">
                {jugador.nombre}
              </h2>

              <p>
                Clan: {jugador.clan}
              </p>
            </div>

            <Link
              href={`/admin/jugadores/${jugador.nombre.toLowerCase()}`}
              className="text-orange-400"
            >
              ✏️ Editar →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}