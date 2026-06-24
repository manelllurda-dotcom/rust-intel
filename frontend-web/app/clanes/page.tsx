import Link from "next/link";

export default function ClanesPage() {
  return (
    <div className="p-8 text-white">
      <h1 className="text-4xl font-bold mb-8">
        🏷️ Clanes
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <Link href="/clanes/gg">
          <div className="bg-zinc-900 p-6 rounded-xl hover:bg-zinc-800 transition cursor-pointer">
            <div className="flex justify-between">
              <h2 className="text-2xl font-bold">GG</h2>
              <span>⭐</span>
            </div>

            <p className="mt-4 text-zinc-400">Miembros: 8</p>
            <p className="text-green-400">Online: 4</p>

            <div className="mt-4">
              <p>📈 Actividad alta</p>
              <p>⏰ Ventana raid: 03:00 - 07:00</p>
            </div>
          </div>
        </Link>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold">XYZ</h2>
            <span>🎯</span>
          </div>

          <p className="mt-4 text-zinc-400">Miembros: 6</p>
          <p className="text-red-400">Online: 0</p>

          <div className="mt-4">
            <p>📈 Actividad media</p>
            <p>⏰ Ventana raid: 02:00 - 06:00</p>
          </div>
        </div>

      </div>
    </div>
  );
}