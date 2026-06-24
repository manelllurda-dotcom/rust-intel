import { alertas } from "../../data/alertas";

export default function AlertasPage() {
  return (
    <div className="p-8 text-white">
      <h1 className="text-4xl font-bold mb-8">
        🔔 Alertas
      </h1>

      <div className="space-y-4">
        {alertas.map((alerta, index) => (
          <div
            key={index}
            className={`rounded-xl p-4 ${
              alerta.tipo === "online"
                ? "bg-green-900"
                : alerta.tipo === "offline"
                ? "bg-red-900"
                : "bg-yellow-900"
            }`}
          >
            <p>{alerta.mensaje}</p>
          </div>
        ))}
      </div>
    </div>
  );
}