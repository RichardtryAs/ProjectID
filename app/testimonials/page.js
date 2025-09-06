export default function Testimonials() {
  return (
    <main className="py-16 px-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">Testimoni</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map((t) => (
          <div key={t} className="p-6 bg-white rounded-lg shadow">
            <p className="italic">
              &quot;Bikin Project di Project.ID sangat puas, pelayanannya cepat,
              bebas revisi sampai pelanggan puas&quot;
            </p>
            <h4 className="mt-4 font-semibold">Client {t}</h4>
          </div>
        ))}
      </div>
    </main>
  );
}
