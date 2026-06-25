import { clanes } from "../../../../data/clanes";

export default async function EditarClanPage({
  params,
}: {
  params: Promise<{ nombre: string }>;
}) {
  const { nombre } = await params;

  const clan = clanes.find(
    (c) => c.nombre.toLowerCase() === nombre.toLowerCase()
  );

  if (!clan) {
    return (
      <div className="p-8 text-white">
        Clan no encontrado
      </div>
    );
  }

  return (
    <div className="p-8 text-white">
      <h1 className="text-4xl font-bold mb-8">
        ✏️ Editar {clan.nombre}
      </h1>

      <form className="bg-zinc-900 rounded-xl p-6 max-w-xl space-y-4">

        <div>
          <label className="block mb-2">
            Nombre
          </label>

          <input
            defaultValue={clan.nombre}
            className="w-full p-3 rounded bg-zinc-800"
          />
        </div>

        <label className="block">
          <input
            type="checkbox"
            defaultChecked={clan.vigilado}
          />
          {" "}🎯 Clan vigilado
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