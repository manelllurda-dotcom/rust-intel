export default function JugadorManelPage() {
  return (
    <div className="p-8 text-white">
      <h1 className="text-4xl font-bold mb-8">
        👤 MANEL
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="bg-zinc-900 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            Información
          </h2>

          <p>Clan: GG</p>
          <p>Estado: Online</p>
          <p>Favorito: ⭐</p>
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