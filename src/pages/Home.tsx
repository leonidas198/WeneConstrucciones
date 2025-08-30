// src/pages/Home.tsx
import { useEffect, useState } from "react";
import Card from "../components/Card";
import GalleryModal from "../components/GalleryModal";

export const Home = () => {
  useEffect(() => {
    document.title = "Inicio | Wene Construcciones SRL";
  }, []);

  const [openGallery, setOpenGallery] = useState<
    null | "modulos" | "galpones" | "casas"
  >(null);

  const modulosImages = [
    "/img1.png",
    "/img2.png",
    "/img3.png",
    "/img11.png",
    "/img16.jpeg",
    "/img18.jpeg",
    "/foto.jpg",
  ];
  const galponesImages = [
    "/img23.jpeg",
    "/img24.jpeg",
    "/img25.jpeg",
    "/img20.jpeg",
    "/img21.jpeg",
    "/img22.jpeg",
    "/img13.jpeg",
  ];
  const casasImages = ["/img7.jpeg", "/img8.jpeg", "/img9.jpeg"];

  return (
    <div className="space-y-32 py-16">
      
      {/* Hero */}
      <section className="relative w-full h-[90vh]">
        {/* Video de fondo */}
        <video
          src="/video3.mp4"
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        />

        
        {/* Overlay con texto */}
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white z-10">
          <h1 className="text-5xl font-bold">Construcciones Modernas</h1>
          <p className="mt-4 text-xl">Innovación y diseño en cada proyecto</p>
        </div>
      </section>

      {/* Sección Módulos */}
      <section id="modulos" className="px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Módulos Habitacionales</h2>
        <div
          onClick={() => setOpenGallery("modulos")}
          className="cursor-pointer"
        >
          <Card
            title="Módulos Habitacionales"
            description="Espacios prácticos, modernos y adaptables para cualquier necesidad."
            image="/img1.png"
          />
        </div>
      </section>

      {/* Video entre secciones */}
      <section className="relative w-full h-[70vh]">
        <video
          src="/videomodulo.mp4"
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h2 className="text-4xl font-bold text-white">
            Mira nuestros módulos en acción
          </h2>
        </div>
      </section>

      {/* Sección Galpones */}
      <section id="galpones" className="px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Galpones</h2>
        <div
          onClick={() => setOpenGallery("galpones")}
          className="cursor-pointer"
        >
          <Card
            title="Galpones Industriales"
            description="Amplios espacios para almacenamiento y producción."
            image="/img23.jpeg"
          />
        </div>
      </section>

      {/* Video entre secciones */}
      <section className="relative w-full h-[70vh]">
        <video
          src="/video5.mp4"
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h2 className="text-4xl font-bold text-white">
            Conoce nuestros galpones
          </h2>
        </div>
      </section>

      {/* Sección Casas */}
      <section id="casas" className="px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Casas</h2>
        <div onClick={() => setOpenGallery("casas")} className="cursor-pointer">
          <Card
            title="Casas Modernas"
            description="Diseños confortables y eficientes para tu familia."
            image="/img7.jpeg"
          />
        </div>
      </section>

      {/* Modales de galería */}
      <GalleryModal
        images={modulosImages}
        isOpen={openGallery === "modulos"}
        onClose={() => setOpenGallery(null)}
      />
      <GalleryModal
        images={galponesImages}
        isOpen={openGallery === "galpones"}
        onClose={() => setOpenGallery(null)}
      />
      <GalleryModal
        images={casasImages}
        isOpen={openGallery === "casas"}
        onClose={() => setOpenGallery(null)}
      />
    </div>
  );
};
