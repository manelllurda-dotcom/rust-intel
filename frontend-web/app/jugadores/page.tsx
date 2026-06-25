"use client";

import { useState } from "react";
import Link from "next/link";
import { jugadores } from "../../data/jugadores";

export default function JugadoresPage() {
  const [busqueda, setBusqueda] = useState("");
  const [filtro, setFiltro] = useState("todos");
  const [orden, setOrden] = useState("az");

  const jugadoresFiltrados = jugadores
    .filter((jugador) => {
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
    })
    .sort((a, b) => {
      switch (orden) {
        case "az":
          return a.nombre.localeCompare(b.nombre);

        case "za":
          return b.nombre.localeCompare(a.nombre);

        case "horas":
          return b.horas - a.horas;

        case "conexiones":
          return b.conexiones - a.conexiones;

        default:
          return 0;
      }
    });

  return (
    <div className="p-8 text-white">
      <h1 className="text-4xl font-bold mb-8">
        👥 Jugadores
      </h1>

      <input
        type="text"
        placeholder="🔍 Buscar jugador..."
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
          <option value="online">🟢 Online</option>
          <option value="offline">🔴 Offline</option>
          <option value="favoritos">⭐ Favoritos</option>
          <option value="vigilados">🎯 Vigilados</option>
        </select>

        <select
          value={orden}
          onChange={(e) => setOrden(e.target.value)}
          className="bg-zinc-900 border border-zinc-800 rounded-xl p-3"
        >
          <option value="az">Nombre A-Z</option>
          <option value="za">Nombre Z-A</option>
          <option value="horas">Más horas</option>
          <option value="conexiones">Más conexiones</option>
        </select>
      </div>

      <p className="text-zinc-400 mb-4">
        Mostrando {jugadoresFiltrados.length} de {jugadores.length} jugadores
      </p>

      <div className="bg-zinc-900 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-zinc-800">
            <tr>
              <th className="text-left p-4">Nombre</th>
              <th className="text-left p-4">Estado</th>
              <th className="text-left p-4">Clan</th>
              <th className="text-left p-4">Favorito</th>
            </tr>
          </thead>

          <tbody>
            {jugadoresFiltrados.map((jugador) => (
              <tr
                key={jugador.nombre}
                className="border-t border-zinc-800"
              >
                <td className="p-4">
                  <Link
                    href={`/jugadores/${jugador.nombre.toLowerCase()}`}
                    className="hover:text-orange-400"
                  >
                    {jugador.nombre}
                  </Link>
                </td>

                <td
                  className={`p-4 ${
                    jugador.online
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {jugador.online ? "Online" : "Offline"}
                </td>

                <td className="p-4">
                  <Link
                    href={`/clanes/${jugador.clan.toLowerCase()}`}
                    className="hover:text-orange-400"
                  >
                    {jugador.clan}
                  </Link>
                </td>

                <td className="p-4">
                  {jugador.favorito ? "⭐" : "☆"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}