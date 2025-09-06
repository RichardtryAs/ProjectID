export default function Projects() {
  return (
    <main className="py-16 px-8">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((p) => (
          <div key={p} className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <div className="h-40 bg-gray-300 rounded mb-4"></div>
            <h3 className="text-lg font-semibold">Project {p}</h3>
            <p className="text-gray-600">Deskripsi singkat project {p}.</p>
          </div>
        ))}
      </div>
    </main>
  );
}
