import { clanes } from "../../../data/clanes";

export default async function ClanPage({
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
        <h1 className="text-4xl font-bold">
          Clan no encontrado
        </h1>
      </div>
    );
  }

  return (
    <div className="p-8 text-white">
      <h1 className="text-4xl font-bold mb-8">
        🏷️ {clan.nombre}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="bg-zinc-900 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            Información
          </h2>

          <p>Miembros: {clan.miembros}</p>
          <p>Online: {clan.online}</p>
          <p>Actividad: {clan.actividad}</p>
        </div>

        <div className="bg-zinc-900 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            Raid
          </h2>

          <p>Ventana: {clan.raidWindow}</p>
          <p>Probabilidad: {clan.probabilidad}</p>
        </div>

      </div>
    </div>
  );
}