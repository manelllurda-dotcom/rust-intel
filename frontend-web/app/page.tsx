import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-zinc-950 text-white">

      {/* Sidebar */}
      <aside className="w-64 bg-zinc-900 border-r border-zinc-800 p-6">
        <h1 className="text-2xl font-bold mb-8">
          🦀 Rust Intel
        </h1>

        <nav className="space-y-3 flex flex-col">
          <Link href="/" className="hover:text-orange-400">
            📊 Dashboard
          </Link>

          <Link href="/jugadores" className="hover:text-orange-400">
            👥 Jugadores
          </Link>

          <Link href="/clanes" className="hover:text-orange-400">
            🏷️ Clanes
          </Link>

          <Link href="/favoritos" className="hover:text-orange-400">
            ⭐ Favoritos
          </Link>

          <Link href="/vigilados" className="hover:text-orange-400">
            🎯 Vigilados
          </Link>

          <Link href="/eventos" className="hover:text-orange-400">
            🚢 Eventos
          </Link>

          <Link href="/vending" className="hover:text-orange-400">
            🛒 Vending
          </Link>

          <Link href="/estadisticas" className="hover:text-orange-400">
            📈 Estadísticas
          </Link>

          <Link href="/alertas" className="hover:text-orange-400">
            🔔 Alertas
          </Link>

          <Link href="/configuracion" className="hover:text-orange-400">
            ⚙️ Configuración
          </Link>
        </nav>
      </aside>

      {/* Contenido */}
      <main className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-8">
          Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-zinc-900 p-6 rounded-xl">
            <h2 className="text-zinc-400">Jugadores Online</h2>
            <p className="text-3xl font-bold mt-2">0</p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl">
            <h2 className="text-zinc-400">Clanes Vigilados</h2>
            <p className="text-3xl font-bold mt-2">0</p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl">
            <h2 className="text-zinc-400">Eventos Activos</h2>
            <p className="text-3xl font-bold mt-2">0</p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl">
            <h2 className="text-zinc-400">Alertas</h2>
            <p className="text-3xl font-bold mt-2">0</p>
          </div>
        </div>

        <div className="mt-8 bg-zinc-900 rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Bienvenido a Rust Intel
          </h2>

          <p className="text-zinc-400">
            Centro de inteligencia para Rust.
          </p>
        </div>
      </main>

    </div>
  );
}