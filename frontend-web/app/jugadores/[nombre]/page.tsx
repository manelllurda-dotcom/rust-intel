export default async function JugadorPage({
  params,
}: {
  params: Promise<{ nombre: string }>;
}) {
  const { nombre } = await params;

  return (
    <div className="p-8 text-white">
      <h1 className="text-4xl font-bold mb-8">
        👤 {nombre.toUpperCase()}
      </h1>

      <div className="bg-zinc-900 rounded-xl p-6">
        <p>Perfil dinámico del jugador</p>
        <p>Nombre: {nombre}</p>
      </div>
    </div>
  );
}