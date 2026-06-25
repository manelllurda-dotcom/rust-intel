"use client";

type DeleteButtonProps = {
  nombre: string;
  tipo: "jugador" | "clan";
};

export default function DeleteButton({
  nombre,
  tipo,
}: DeleteButtonProps) {
  const handleDelete = () => {
    if (
      confirm(`¿Seguro que quieres eliminar ${tipo} "${nombre}"?`)
    ) {
      alert(
        `Más adelante eliminaremos el ${tipo} "${nombre}".`
      );
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
    >
      🗑️ Eliminar
    </button>
  );
}