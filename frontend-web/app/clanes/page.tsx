import Link from "next/link";
import { clanes } from "../../data/clanes";

export default function ClanesPage() {
  return (
    <div className="p-8 text-white">
      <h1 className="text-4xl font-bold mb-8">
        🏷️ Clanes
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {clanes.map((clan) => (
          <Link
            key={clan.nombre}
            href={`/clanes/${clan.nombre.toLowerCase()}`}
          >
            <div className="bg-zinc-900 p-6 rounded-xl hover:bg-zinc-800 transition cursor-pointer">
              <div className="flex justify-between">
                <h2 className="text-2xl font-bold">
                  {clan.nombre}
                </h2>

                <span>
                  {clan.online > 0 ? "⭐" : "🎯"}
                </span>
              </div>

              <p className="mt-4 text-zinc-400">
                Miembros: {clan.miembros}
              </p>

              <p
                className={
                  clan.online > 0
                    ? "text-green-400"
                    : "text-red-400"
                }
              >
                Online: {clan.online}
              </p>

              <div className="mt-4">
                <p>📈 Actividad {clan.actividad}</p>
                <p>⏰ Ventana raid: {clan.raidWindow}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}