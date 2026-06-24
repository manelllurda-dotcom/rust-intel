export default function ClanesPage() {
  return (
    <div className="p-8 text-white">
      <h1 className="text-4xl font-bold mb-8">
        🏷️ Clanes
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-zinc-900 p-6 rounded-xl">
          <h2 className="text-2xl font-bold">GG</h2>
          <p className="text-zinc-400 mt-2">Miembros: 8</p>
          <p className="text-green-400">Online: 4</p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h2 className="text-2xl font-bold">XYZ</h2>
          <p className="text-zinc-400 mt-2">Miembros: 6</p>
          <p className="text-red-400">Online: 0</p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h2 className="text-2xl font-bold">ABC</h2>
          <p className="text-zinc-400 mt-2">Miembros: 12</p>
          <p className="text-green-400">Online: 7</p>
        </div>
      </div>
    </div>
  );
}