import { clanes } from "../data/clanes";

export function getClanes() {
  return clanes;
}

export function getClan(nombre: string) {
  return clanes.find(
    (clan) =>
      clan.nombre.toLowerCase() === nombre.toLowerCase()
  );
}