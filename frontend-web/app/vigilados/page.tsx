import Link from "next/link";
import { jugadores } from "../../data/jugadores";

export default function VigiladosPage() {
  const vigilados = jugadores.filter(
    (jugador) => jugador.vigilado
  );

  return (
    <div className="p-8 text-white">
      <h1 className="text-4xl font-bold mb-8">
        🎯 Vigilados
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {vigilados.map((jugador) => (
          <div
            key={jugador.nombre}
            className="bg-zinc-900 rounded-xl p-6"
          >
            <h2 className="text-2xl font-bold">
              <Link
                href={`/jugadores/${jugador.nombre.toLowerCase()}`}
                className="hover:text-orange-400"
              >
                {jugador.nombre}
              </Link>
            </h2>

            <p>Clan: {jugador.clan}</p>

            <p
              className={
                jugador.online
                  ? "text-green-400"
                  : "text-red-400"
              }
            >
              {jugador.online ? "Online" : "Offline"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}