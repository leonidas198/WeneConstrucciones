import { useEffect } from "react";

export const Nosotros = () => {
  useEffect(() => {
    document.title = "Sobre Nosotros | Wene Construcciones SRL";
  }, []);

  return (
    <section className="p-10 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-200">Quiénes Somos</h2>

      <p className="mt-4 text-gray-300 leading-relaxed">
        Somos Wene Construcciones SRL, una compañía con más de 30 años de
        experiencia en el sector de la construcción, reconocida por nuestra
        solidez, compromiso y la confianza que cientos de clientes han
        depositado en nosotros a lo largo de tres décadas. Desde nuestros
        inicios, hemos trabajado con un propósito claro: crear soluciones
        constructivas duraderas, innovadoras y adaptadas a las necesidades de
        cada cliente.
      </p>

      <p className="mt-4 text-gray-300 leading-relaxed">
        La empresa nació gracias a la visión de Efrain Burdiles, un emprendedor
        apasionado por la construcción, que con esfuerzo, trabajo constante y
        una profunda vocación por el servicio, logró consolidar un nombre de
        prestigio en el sector. Hoy, junto a su hijo Maximiliano Burdiles, quien
        se desempeña como socio gerente, continuamos fortaleciendo este legado
        familiar que combina experiencia, innovación y compromiso con el futuro.
      </p>

      {/* Imagen del SEO */}
      <div className="mt-6 flex justify-center">
        <img
          src="/seo.jpg"
          alt="Fundador y SEO de Wene SRL"
          className="rounded-lg shadow-lg max-h-80 object-cover"
        />
      </div>

      <p className="mt-4 text-gray-300 leading-relaxed">
        Hace más de tres décadas, en un contexto donde la construcción era un
        desafío lleno de obstáculos, Efrain decidió apostar por sus sueños y
        fundar lo que hoy es Wene Construcciones SRL. Con un pequeño equipo,
        herramientas básicas y mucha determinación, comenzó a levantar los
        primeros proyectos que rápidamente se destacaron por su calidad y
        cumplimiento en los plazos.
      </p>

      <p className="mt-4 text-gray-300 leading-relaxed">
        El crecimiento fue paulatino pero sostenido. Año tras año, nuevos
        clientes confiaban en la empresa, no solo por la excelencia de sus obras,
        sino también por la seriedad y cercanía que siempre caracterizó a su
        fundador. Cada proyecto completado fue un escalón más en la construcción
        de una reputación sólida dentro del rubro.
      </p>

      <p className="mt-4 text-gray-300 leading-relaxed">
        Con la incorporación de su hijo Maxi, la empresa dio un paso adelante
        hacia la modernización. Él aportó una visión renovada, introduciendo
        nuevas tecnologías, estrategias de gestión más ágiles y un enfoque
        orientado a las demandas actuales del mercado. Hoy, padre e hijo trabajan
        codo a codo, manteniendo los valores tradicionales de compromiso y
        responsabilidad, pero también impulsando la innovación, sostenibilidad y
        eficiencia en cada obra.
      </p>

      {/* Imagen del Socio Gerente */}
      <div className="mt-6 flex justify-center">
        <img
          src="/socio-gerente.jpg"
          alt="Socio Gerente de Wene SRL"
          className="rounded-lg shadow-lg max-h-80 object-cover"
        />
      </div>

      <p className="mt-4 text-gray-300 leading-relaxed">
        En Wene Construcciones SRL creemos que la construcción no se trata solo
        de levantar paredes o estructuras, sino de construir confianza y
        relaciones duraderas. Nuestra filosofía se basa en tres pilares
        fundamentales:
      </p>

      {/* Lista fuera del <p> */}
      <ul className="list-disc pl-6 mt-2 text-gray-300 leading-relaxed">
        <li>
          <strong>Calidad garantizada:</strong> cada proyecto es supervisado de
          principio a fin para asegurar resultados impecables.
        </li>
        <li>
          <strong>Compromiso humano:</strong> acompañamos a nuestros clientes en
          cada etapa, ofreciendo un trato cercano y personalizado.
        </li>
        <li>
          <strong>Visión de futuro:</strong> implementamos procesos modernos,
          materiales de última generación y prácticas sustentables que aportan
          valor a largo plazo.
        </li>
      </ul>

      <p className="mt-4 text-gray-300 leading-relaxed">
        Después de más de 30 años en el mercado, podemos mirar atrás con orgullo,
        sabiendo que hemos dejado huellas en cientos de obras, proyectos y
        sueños cumplidos. Pero también miramos hacia adelante con la convicción
        de que lo mejor está por venir.
      </p>

      <p className="mt-4 text-gray-300 leading-relaxed">
        Con un equipo en constante crecimiento, una estructura profesionalizada y
        la fuerza de dos generaciones unidas por la misma pasión, seguimos
        expandiéndonos para llevar nuestras soluciones de construcción a más
        clientes y más regiones del país.
      </p>

      <p className="mt-4 text-gray-300 leading-relaxed">
        En Wene Construcciones SRL, no solo construimos casas, galpones o
        módulos: construimos futuro, seguridad y confianza.
      </p>
    </section>
  );
};
