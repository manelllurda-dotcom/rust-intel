"use client";

import { useState } from "react";
import Link from "next/link";
import { clanes } from "../../data/clanes";

export default function ClanesPage() {
  const [busqueda, setBusqueda] = useState("");
  const [filtro, setFiltro] = useState("todos");
  const [orden, setOrden] = useState("az");

  const clanesFiltrados = clanes
    .filter((clan) => {
      const coincideBusqueda = clan.nombre
        .toLowerCase()
        .includes(busqueda.toLowerCase());

      if (!coincideBusqueda) return false;

      switch (filtro) {
        case "activos":
          return clan.online > 0;

        case "inactivos":
          return clan.online === 0;

        default:
          return true;
      }
    })
    .sort((a, b) => {
      switch (orden) {
        case "az":
          return a.nombre.localeCompare(b.nombre);

        case "za":
          return b.nombre.localeCompare(a.nombre);

        case "miembros":
          return b.miembros - a.miembros;

        case "online":
          return b.online - a.online;

        default:
          return 0;
      }
    });

  return (
    <div className="p-8 text-white">
      <h1 className="text-4xl font-bold mb-8">
        🏷️ Clanes
      </h1>

      <input
        type="text"
        placeholder="🔍 Buscar clan..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 mb-4"
      />

      <div className="flex gap-4 mb-6 flex-wrap">
        <select
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          className="bg-zinc-900 border border-zinc-800 rounded-xl p-3"
        >
          <option value="todos">Todos</option>
          <option value="activos">🟢 Activos</option>
          <option value="inactivos">🔴 Sin jugadores online</option>
        </select>

        <select
          value={orden}
          onChange={(e) => setOrden(e.target.value)}
          className="bg-zinc-900 border border-zinc-800 rounded-xl p-3"
        >
          <option value="az">Nombre A-Z</option>
          <option value="za">Nombre Z-A</option>
          <option value="miembros">Más miembros</option>
          <option value="online">Más jugadores online</option>
        </select>
      </div>

      <p className="text-zinc-400 mb-6">
        Mostrando {clanesFiltrados.length} de {clanes.length} clanes
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {clanesFiltrados.map((clan) => (
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
                👥 Miembros: {clan.miembros}
              </p>

              <p
                className={
                  clan.online > 0
                    ? "text-green-400"
                    : "text-red-400"
                }
              >
                🟢 Online: {clan.online}
              </p>

              <div className="mt-4">
                <p>📈 Actividad: {clan.actividad}</p>
                <p>⏰ Ventana raid: {clan.raidWindow}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}