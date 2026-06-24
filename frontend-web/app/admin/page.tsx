import Link from "next/link";

export default function AdminPage() {
  return (
    <div className="p-8 text-white">
      <h1 className="text-4xl font-bold mb-8">
        ⚙️ Administración
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Jugadores */}
        <div className="bg-zinc-900 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            👥 Jugadores
          </h2>

          <Link
            href="/admin/jugadores/nuevo"
            className="bg-orange-500 px-4 py-2 rounded inline-block"
          >
            ➕ Añadir jugador
          </Link>

          <br />

          <Link
            href="/admin/jugadores"
            className="bg-zinc-800 px-4 py-2 rounded inline-block mt-2"
          >
            📋 Gestionar jugadores
          </Link>
        </div>

        {/* Clanes */}
        <div className="bg-zinc-900 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            🏷️ Clanes
          </h2>

          <Link
            href="/admin/clanes/nuevo"
            className="bg-orange-500 px-4 py-2 rounded inline-block"
          >
            ➕ Añadir clan
          </Link>

          <br />

          <Link
            href="/admin/clanes"
            className="bg-zinc-800 px-4 py-2 rounded inline-block mt-2"
          >
            📋 Gestionar clanes
          </Link>
        </div>

        {/* Alertas */}
        <div className="bg-zinc-900 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            🔔 Alertas
          </h2>

          <button className="bg-orange-500 px-4 py-2 rounded">
            ➕ Añadir alerta
          </button>
        </div>

      </div>
    </div>
  );
}