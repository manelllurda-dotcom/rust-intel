import { miembrosGG } from "../../../data/miembrosGG";
import { alertas } from "../../../data/alertas";

export default function ClanGGPage() {
  return (
    <div className="p-8 text-white">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">
          🏷️ Clan GG
        </h1>

        <div className="flex gap-3 text-2xl">
          <button>⭐</button>
          <button>🎯</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <div className="bg-zinc-900 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            👥 Miembros
          </h2>

          <table className="w-full">
            <thead>
              <tr className="border-b border-zinc-800">
                <th className="text-left py-2">Nombre</th>
                <th className="text-left py-2">Estado</th>
                <th className="text-left py-2">Horas semana</th>
              </tr>
            </thead>

            <tbody>
              {miembrosGG.map((miembro) => (
                <tr key={miembro.nombre}>
                  <td className="py-2">{miembro.nombre}</td>
                  <td className={miembro.online ? "text-green-400" : "text-red-400"}>
                    {miembro.online ? "Online" : "Offline"}
                  </td>
                  <td>{miembro.horas}h</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-zinc-900 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            📈 Estadísticas
          </h2>

          <p>Actividad: Alta</p>
          <p>Ventana raid: 03:00 - 07:00</p>
          <p>Probabilidad: 91%</p>
        </div>

        <div className="bg-zinc-900 rounded-xl p-6 lg:col-span-2">
          <h2 className="text-2xl font-bold mb-4">
            🔔 Últimas alertas
          </h2>

          <div className="space-y-2">
            {alertas.map((alerta, index) => (
              <p key={index}>{alerta}</p>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}