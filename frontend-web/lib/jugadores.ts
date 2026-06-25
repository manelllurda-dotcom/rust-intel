import { jugadores } from "../data/jugadores";

export function getJugadores() {
  return jugadores;
}

export function getJugador(nombre: string) {
  return jugadores.find(
    (jugador) =>
      jugador.nombre.toLowerCase() === nombre.toLowerCase()
  );
}