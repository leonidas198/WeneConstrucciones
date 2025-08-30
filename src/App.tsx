import { Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { Home } from "./pages/Home"
import { Nosotros } from "./pages/Nosotros"
import { Contacto } from "./pages/Contacto"
import WhatsappChat from "./components/WhatsappChat"


export const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-cyan-900 hover:bg-cyan-800 py-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
      <WhatsappChat />
      <Footer />
    </div>
  )
}
