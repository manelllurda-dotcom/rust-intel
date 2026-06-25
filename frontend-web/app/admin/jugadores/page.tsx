"use client";

import { useState } from "react";
import Link from "next/link";
import { jugadores } from "../../../data/jugadores";


export default function AdminJugadoresPage() {
  const [busqueda, setBusqueda] = useState("");
  const [filtro, setFiltro] = useState("todos");

  const jugadoresFiltrados = jugadores.filter((jugador) => {
    const coincideBusqueda = jugador.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase());

    if (!coincideBusqueda) return false;

    switch (filtro) {
      case "online":
        return jugador.online;

      case "offline":
        return !jugador.online;

      case "favoritos":
        return jugador.favorito;

      case "vigilados":
        return jugador.vigilado;

      default:
        return true;
    }
  });

  return (
    <div className="p-8 text-white">
      <h1 className="text-4xl font-bold mb-8">
        👥 Gestión de Jugadores
      </h1>

      <input
        type="text"
        placeholder="🔍 Buscar jugador..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="w-full max-w-md p-3 mb-4 rounded bg-zinc-800"
      />

      <select
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
        className="bg-zinc-800 rounded p-3 mb-6"
      >
        <option value="todos">Todos</option>
        <option value="online">🟢 Online</option>
        <option value="offline">🔴 Offline</option>
        <option value="favoritos">⭐ Favoritos</option>
        <option value="vigilados">🎯 Vigilados</option>
      </select>

      <div className="space-y-4">
        {jugadoresFiltrados.map((jugador) => (
          <div
            key={jugador.nombre}
            className="bg-zinc-900 rounded-xl p-4 flex justify-between items-center"
          >
            <div>
              <h2 className="font-bold text-xl">
                {jugador.online ? "🟢 " : "🔴 "}
                {jugador.nombre}
              </h2>

              <p>Clan: {jugador.clan}</p>
            </div>

            <div className="flex gap-2">
              <Link
                href={`/admin/jugadores/${jugador.nombre.toLowerCase()}`}
                className="bg-orange-500 px-4 py-2 rounded hover:bg-orange-600"
              >
                ✏️ Editar
              </Link>

              <button
              onClick={() => {
              if (confirm(`¿Seguro que quieres eliminar a ${jugador.nombre}?`)) {
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