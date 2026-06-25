"use client";

import { useState } from "react";
import Link from "next/link";
import { clanes } from "../../../data/clanes";

export default function AdminClanesPage() {
  const [busqueda, setBusqueda] = useState("");

  const clanesFiltrados = clanes.filter((clan) =>
    clan.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="p-8 text-white">
      <h1 className="text-4xl font-bold mb-8">
        🏷️ Gestión de Clanes
      </h1>

      <input
        type="text"
        placeholder="🔍 Buscar clan..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="w-full max-w-md p-3 mb-6 rounded bg-zinc-800"
      />

      <div className="space-y-4">
        {clanesFiltrados.map((clan) => (
          <div
            key={clan.nombre}
            className="bg-zinc-900 rounded-xl p-4 flex justify-between items-center"
          >
            <div>
              <h2 className="font-bold text-xl">
                {clan.nombre}
              </h2>

              <p>Miembros: {clan.miembros}</p>
              <p>Online: {clan.online}</p>
            </div>

            <div className="flex gap-2">
              <Link
                href={`/admin/clanes/${clan.nombre.toLowerCase()}`}
                className="bg-orange-500 px-4 py-2 rounded hover:bg-orange-600"
              >
                ✏️ Editar
              </Link>

              <button
              onClick={() => {
              if (confirm(`¿Seguro que quieres eliminar el clan ${clan.nombre}?`)) {
             alert("De momento solo es una prueba.");
                }
              }}
              className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
              >
               🗑️ Eliminar
</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}