"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Head from "next/head"
import Image from "next/image"

export default function Home() {
  // ==== Counter Animation ====
  const counters = [
    { label: "Projects", value: 20 },
    { label: "Clients", value: 15 },
    { label: "Students", value: 10 },
    { label: "Product", value: 15 },
  ]
  const [counts, setCounts] = useState(counters.map(() => 0))

// eslint-disable-next-line react-hooks/exhaustive-deps
useEffect(() => {
  counters.forEach((counter, i) => {
    let start = 0
    const step = Math.ceil(counter.value / 50)
    const interval = setInterval(() => {
      start += step
      if (start >= counter.value) {
        start = counter.value
        clearInterval(interval)
      }
      setCounts((prev) => {
        const updated = [...prev]
        updated[i] = start
        return updated
      })
    }, 50)
  })
}, [])



  // ==== Projects Auto-Slider ====
  const projects = [
    { id: 1, title: "Project 1-Website", desc: "Website Digital, untuk kebutuhan informasi tentang dunia pendidikan.", image: "/project1.png" },
    { id: 2, title: "Project 2-Infrastruktur", desc: "Pembangunan infrastruktur server untuk perlombaan keamanan jaringan", image: "/project2.png" },
    { id: 3, title: "Project 3-Pembelajaran", desc: "Pembuatan Soal untuk LKS tingkat SMK, Provinsi Jawa Barat.", image: "/project3.png" },
  ]

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % projects.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [projects.length])

  return (
    <>
      {/* Favicon */}
      <Head>
        <link rel="icon" href="/logo.jpg" />
        <title>Project.ID</title>
      </Head>

      <main className="min-h-screen bg-black text-gray-100">
        {/* Navbar */}
        <nav className="flex justify-between items-center px-8 py-4 shadow bg-gray-900 fixed top-0 left-0 right-0 z-50">
          <div className="flex items-center gap-2">
            <Image src="/logo.jpg" alt="logo" width={40} height={40} className="rounded" />
            <h1 className="text-2xl font-bold text-white">Project.ID</h1>
          </div>
              <ul className="flex gap-6">
            <li><a href="#about" className="hover:text-green-400">About</a></li>
            <li><a href="#services" className="hover:text-green-400">Services</a></li>
            <li><a href="#projects" className="hover:text-green-400">Projects</a></li>
            <li><a href="#testimonials" className="hover:text-green-400">Testimonials</a></li>
            <li><a href="#comingsoon" className="hover:text-green-400">Coming Soon</a></li>
            <li><a href="#contact" className="hover:text-green-400">Contact</a></li>
          </ul>
          </nav>

{/* Hero */}
<section className="text-center py-28 bg-gradient-to-r from-green-500 to-emerald-600 text-white">
  <h2 className="text-4xl font-bold mb-4">Solusi Digital untuk Bisnismu</h2>
  <p className="text-lg mb-6">Jasa Website • Game Development • Pendidikan • IT Infrastructure</p>
</section>


        {/* About */}
        <section id="about" className="py-16 px-8 text-center bg-gray-900">
          <h2 className="text-3xl font-bold mb-6 text-green-400">Tentang Kami</h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            Project.ID adalah sebuah gagasan dalam menyelesaikan perkembangan dunia digital, 
            untuk memenuhi kebutuhan bisnis, pemahaman, dan pengetahuan.
          </p>
        </section>

        {/* Stats */}
        <section className="py-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {counters.map((c, i) => (
            <div key={c.label}>
              <h3 className="text-3xl font-bold text-green-400">{counts[i]}+</h3>
              <p>{c.label}</p>
            </div>
          ))}
        </section>

        {/* Services */}
        <section id="services" className="py-16 px-8 bg-gray-900">
          <h2 className="text-3xl font-bold text-center mb-10 text-green-400">Layanan Kami</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Website", desc: "Pembuatan website company profile, e-commerce, hingga custom." },
              { title: "Game Development", desc: "Pengembangan game 2D/3D untuk edukasi maupun hiburan." },
              { title: "Pembelajaran", desc: "Kelas privat & pelatihan IT sesuai kebutuhan." },
              { title: "Infrastruktur IT", desc: "Konsultasi & implementasi sistem IT untuk bisnis." },
            ].map((service) => (
              <div key={service.title} className="p-6 bg-black rounded-lg shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2 text-green-400">{service.title}</h3>
                <p className="text-gray-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-16 px-8">
          <h2 className="text-3xl font-bold text-center mb-10 text-green-400">Projects</h2>
          <div className="relative w-full max-w-lg mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={projects[index].id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
                className="p-6 bg-black rounded-lg shadow text-center"
              >
                <Image 
                  src={projects[index].image} 
                  alt={projects[index].title} 
                  width={400} 
                  height={200} 
                  className="w-full h-40 object-cover rounded mb-4"
                />
                <h3 className="text-lg font-semibold text-green-400">{projects[index].title}</h3>
                <p className="text-gray-400">{projects[index].desc}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-16 px-8 bg-gray-900">
          <h2 className="text-3xl font-bold text-center mb-10 text-green-400">Testimoni</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { id: 1, text: "Tim Project.ID sangat profesional, websitenya cepat selesai dan hasilnya memuaskan.", name: "Budi Amarta" },
              { id: 2, text: "Pelayanan ramah dan support 24 jam. Sangat membantu bisnis online saya berkembang.", name: "Dewi Sriyani" },
              { id: 3, text: "Materi pembelajaran yang diberikan mudah dipahami dan instruktornya sabar sekali.", name: "Anisa Syakbaiah" },
            ].map((t) => (
              <div key={t.id} className="p-6 bg-black rounded-lg shadow">
                <p className="italic">&quot;{t.text}&quot;</p>
                <h4 className="mt-4 font-semibold text-green-400">{t.name}</h4>
              </div>
            ))}
          </div>
        </section>

        {/* Coming Soon */}
        <section id="comingsoon" className="py-16 px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-green-400">Coming Soon Product</h2>
          <p className="max-w-xl mx-auto text-gray-400 mb-6">
            Kami sedang menyiapkan produk baru yang akan membantu bisnismu semakin berkembang. 
            Nantikan peluncurannya segera!
          </p>
          <div className="p-10 bg-gray-900 rounded-lg inline-block">
            <h3 className="text-xl font-semibold text-green-400">✨ Produk Inovatif</h3>
            <p className="text-gray-400">Launching dalam waktu dekat...</p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16 px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-green-400">Hubungi Kami</h2>
          <p className="mb-6 text-gray-300">Butuh bantuan untuk projectmu? Silakan kontak admin kami.</p>
          <a href="https://wa.me/6282276970006" target="_blank" className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-600">
            Chat via WhatsApp
          </a>
        </section>

        {/* Footer */}
        <footer className="py-6 bg-gray-900 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Project.ID. All rights reserved.</p>
        </footer>
      </main>
    </>
  )
}
