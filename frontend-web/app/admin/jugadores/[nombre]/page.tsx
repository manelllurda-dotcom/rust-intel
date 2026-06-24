import { jugadores } from "../../../../data/jugadores";

export default async function EditarJugadorPage({
  params,
}: {
  params: Promise<{ nombre: string }>;
}) {
  const { nombre } = await params;

  const jugador = jugadores.find(
    (j) => j.nombre.toLowerCase() === nombre.toLowerCase()
  );

  if (!jugador) {
    return <div className="p-8 text-white">Jugador no encontrado</div>;
  }

  return (
    <div className="p-8 text-white">
      <h1 className="text-4xl font-bold mb-8">
        ✏️ Editar {jugador.nombre}
      </h1>

      <form className="bg-zinc-900 rounded-xl p-6 max-w-xl space-y-4">

  <div>
    <label className="block mb-2">Nombre</label>
    <input
      defaultValue={jugador.nombre}
      className="w-full p-3 rounded bg-zinc-800"
    />
  </div>

  <div>
    <label className="block mb-2">Clan</label>
    <input
      defaultValue={jugador.clan}
      className="w-full p-3 rounded bg-zinc-800"
    />
  </div>

  <div>
    <label className="block mb-2">Horas</label>
    <input
      type="number"
      defaultValue={jugador.horas}
      className="w-full p-3 rounded bg-zinc-800"
    />
  </div>

  <div>
    <label className="block mb-2">Conexiones</label>
    <input
      type="number"
      defaultValue={jugador.conexiones}
      className="w-full p-3 rounded bg-zinc-800"
    />
  </div>

  <label className="block">
    <input
      type="checkbox"
      defaultChecked={jugador.favorito}
    />
    {" "}⭐ Favorito
  </label>

  <label className="block">
    <input
      type="checkbox"
      defaultChecked={jugador.vigilado}
    />
    {" "}🎯 Vigilado
  </label>

  <button
    type="submit"
    className="bg-orange-500 px-4 py-2 rounded"
  >
    Guardar
  </button>

</form>
    </div>
  );
}