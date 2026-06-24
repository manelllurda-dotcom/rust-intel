export default function ClanGGPage() {
  return (
    <div className="p-8 text-white">
      <h1 className="text-4xl font-bold mb-8">
        🏷️ Clan GG
      </h1>

      <div className="bg-zinc-900 rounded-xl p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">
          👥 Miembros
        </h2>

        <ul className="space-y-2">
          <li>🟢 Pedro</li>
          <li>🔴 Alex</li>
          <li>🟢 Mike</li>
          <li>🔴 Juan</li>
        </ul>
      </div>

      <div className="bg-zinc-900 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4">
          📈 Estadísticas
        </h2>

        <p>Actividad: Alta</p>
        <p>Ventana de raid: 03:00 - 07:00</p>
        <p>Probabilidad: 91%</p>
      </div>
    </div>
  );
}