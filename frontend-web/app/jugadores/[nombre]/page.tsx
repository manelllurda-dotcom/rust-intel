import { jugadores } from "../../../data/jugadores";

export default async function JugadorPage({
  params,
}: {
  params: Promise<{ nombre: string }>;
}) {
  const { nombre } = await params;

  const jugador = jugadores.find(
    (j) => j.nombre.toLowerCase() === nombre.toLowerCase()
  );

  if (!jugador) {
    return (
      <div className="p-8 text-white">
        <h1 className="text-4xl font-bold">
          Jugador no encontrado
        </h1>
      </div>
    );
  }

  return (
    <div className="p-8 text-white">
      <h1 className="text-4xl font-bold mb-8">
        👤 {jugador.nombre}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="bg-zinc-900 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            Información
          </h2>

          <p>Clan: {jugador.clan}</p>

          <p
            className={
              jugador.online
                ? "text-green-400"
                : "text-red-400"
            }
          >
            Estado: {jugador.online ? "Online" : "Offline"}
          </p>

          <p>
            Favorito: {jugador.favorito ? "⭐" : "☆"}
          </p>
        </div>

        <div className="bg-zinc-900 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            Estadísticas
          </h2>

          <p>Horas esta semana: 32h</p>
          <p>Conexiones: 18</p>
          <p>Actividad: Alta</p>
        </div>

      </div>
    </div>
  );
}