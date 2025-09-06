import "./globals.css";

export const metadata = {
  title: "Project.ID",
  description: "Jasa Website, Game Development, Bimbingan, dan Solusi IT",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="bg-gray-50 text-gray-800">
        <nav className="flex justify-between items-center px-8 py-4 shadow bg-white">
          <h1 className="text-2xl font-bold">Project.ID</h1>
          <ul className="flex gap-6">
            <li><a href="/" className="hover:text-blue-600">Home</a></li>
            <li><a href="/about" className="hover:text-blue-600">About</a></li>
            <li><a href="/services" className="hover:text-blue-600">Services</a></li>
            <li><a href="/projects" className="hover:text-blue-600">Projects</a></li>
            <li><a href="/testimonials" className="hover:text-blue-600">Testimonials</a></li>
            <li><a href="/contact" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </nav>

        {children}

  
      </body>
    </html>
  );
}
