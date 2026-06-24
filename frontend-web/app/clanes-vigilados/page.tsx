import Link from "next/link";
import { clanes } from "../../data/clanes";

export default function ClanesVigiladosPage() {
  const vigilados = clanes.filter(
    (clan) => clan.vigilado
  );

  return (
    <div className="p-8 text-white">
      <h1 className="text-4xl font-bold mb-8">
        🎯 Clanes Vigilados
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {vigilados.map((clan) => (
          <Link
            key={clan.nombre}
            href={`/clanes/${clan.nombre.toLowerCase()}`}
          >
            <div className="bg-zinc-900 rounded-xl p-6 hover:bg-zinc-800">
              <h2 className="text-2xl font-bold">
                {clan.nombre}
              </h2>

              <p className="mt-2">
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

              <p>
                Ventana raid: {clan.raidWindow}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}