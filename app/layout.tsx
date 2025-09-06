import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Project.ID",
  description: "Jasa Website, Game Development, Bimbingan, dan Solusi IT",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="bg-gray-50 text-gray-800">
        <nav className="flex justify-between items-center px-8 py-4 shadow bg-white">
          <h1 className="text-2xl font-bold">Project.ID</h1>
          <ul className="flex gap-6">
            <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
            <li><Link href="/about" className="hover:text-blue-600">About</Link></li>
            <li><Link href="/services" className="hover:text-blue-600">Services</Link></li>
            <li><Link href="/projects" className="hover:text-blue-600">Projects</Link></li>
            <li><Link href="/testimonials" className="hover:text-blue-600">Testimonials</Link></li>
            <li><Link href="/contact" className="hover:text-blue-600">Contact</Link></li>
          </ul>
        </nav>

        {children}
      </body>
    </html>
  );
}
