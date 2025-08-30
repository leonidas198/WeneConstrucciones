import { Link } from "react-router-dom"


export const Navbar = () => {

  
  return (
    <nav className="bg-cyan-700 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold"><img src="/logo.jpg" className="rounded-2xl w-22 h-auto"></img></h1>
      <ul className="flex gap-6">
        <li><Link to="/" className="hover:text-yellow-400">Inicio</Link></li>
        <li><Link to="/nosotros" className="hover:text-yellow-400">Nosotros</Link></li>
        <li><Link to="/contacto" className="hover:text-yellow-400">Contacto</Link></li>
      </ul>
    </nav>
  )
}
