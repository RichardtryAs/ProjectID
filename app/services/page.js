export default function Services() {
  const services = [
    { title: "Website", desc: "Pembuatan website company profile, e-commerce, hingga custom." },
    { title: "Game Development", desc: "Pengembangan game 2D/3D untuk edukasi maupun hiburan." },
    { title: "Bimbingan", desc: "Kelas privat & pelatihan IT sesuai kebutuhan." },
    { title: "Infrastruktur IT", desc: "Konsultasi & implementasi sistem IT untuk bisnis." },
  ];

  return (
    <main className="py-16 px-8">
      <h2 className="text-3xl font-bold text-center mb-10">Layanan Kami</h2>
      <div className="grid md:grid-cols-4 gap-6">
        {services.map((s) => (
          <div key={s.title} className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
