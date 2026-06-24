export default function NuevoClanPage() {
  return (
    <div className="p-8 text-white">
      <h1 className="text-4xl font-bold mb-8">
        ➕ Nuevo Clan
      </h1>

      <form className="bg-zinc-900 rounded-xl p-6 max-w-xl space-y-4">

        <div>
          <label className="block mb-2">
            Nombre
          </label>

          <input
            type="text"
            className="w-full p-3 rounded bg-zinc-800"
            placeholder="GG"
          />
        </div>

        <button
          type="submit"
          className="bg-orange-500 px-4 py-2 rounded"
        >
          Guardar
        </button>

      </form>
    </div>
  );
}